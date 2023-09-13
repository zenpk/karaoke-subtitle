const lyricsElem = document.getElementById("lyrics");
let lyricsText = lyricsElem.value;
let lyrics = lyricsText.split("\n");

lyricsElem.addEventListener("change", () => {
    lyricsText = lyricsElem.value;
    lyrics = lyricsText.split("\n");
})

const left = document.getElementById("left");
const right = document.getElementById("right");

let leftPos = -1;
let rightPos = -1;
let isLeft = true;

window.addEventListener("keydown", (evt) => {
    if (evt.key === "ArrowRight") {
        if (isLeft) {
            [leftPos, isLeft] = forward(leftPos, rightPos, left);
        } else {
            [rightPos, isLeft] = forward(rightPos, leftPos, right);
        }
    }
    if (evt.key === "ArrowLeft") {
        if (!isLeft) {
            [leftPos, isLeft] = backward(leftPos, rightPos, left);
        } else {
            [rightPos, isLeft] = backward(rightPos, leftPos, right);
        }
    }
    if (evt.key === "ArrowUp") {
        if (left.classList.contains("hidden")) {
            left.classList.remove("hidden");
        } else {
            left.classList.add("hidden");
        }
    }
    if (evt.key === "ArrowDown") {
        if (right.classList.contains("hidden")) {
            right.classList.remove("hidden");
        } else {
            right.classList.add("hidden");
        }
    }
})

function forward(pos1, pos2, node, isLeft) {
    const temp = pos1;
    pos1 = pos2 + 1;
    if (pos1 < lyrics.length) {
        node.innerText = lyrics[pos1];
        return [pos1, !isLeft];
    }
    pos1 = temp;
    node.innerText = "";
    return [pos1, isLeft];
}

function backward(pos1, pos2, node) {
    const temp = pos1;
    pos1 = pos2 - 1;
    if (pos1 >= 0) {
        node.innerText = lyrics[pos1];
        return [pos1, !isLeft];
    }
    pos1 = temp;
    node.innerText = "";
    return [pos1, isLeft];
}
