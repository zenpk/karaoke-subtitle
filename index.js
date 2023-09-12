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
            leftPos = forward(leftPos, rightPos, left);
        } else {
            rightPos = forward(rightPos, leftPos, right);
        }
        isLeft = !isLeft;
    }
    if (evt.key === "ArrowLeft") {
        if (!isLeft) {
            leftPos = backward(leftPos, rightPos, left);
        } else {
            rightPos = backward(rightPos, leftPos, right);
        }
        isLeft = !isLeft;
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

function forward(pos1, pos2, node) {
    const temp = pos1;
    pos1 = pos2 + 1;
    if (pos1 < lyrics.length) {
        node.innerText = lyrics[pos1];
    } else {
        pos1 = temp;
        node.innerText = "";
    }
    return pos1;
}

function backward(pos1, pos2, node) {
    const temp = pos1;
    pos1 = pos2 - 1;
    if (pos1 >= 0) {
        node.innerText = lyrics[pos1];
    } else {
        pos1 = temp;
        node.innerText = "";
    }
    return pos1;
}
