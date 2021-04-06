const sky = document.querySelector(".night-sky");
const stars = document.querySelector(".stars");
const myName = document.querySelector(".my-name");

const starMove = (elem) => {
    window.addEventListener("scroll", () => {
        let posY = stars.getBoundingClientRect().top;
        if (posY < 0) {
            elem.classList.add("star-move");
        } else {
            elem.classList.remove("star-move");
        }
    });
};

const nameShow = () => {
    window.addEventListener("scroll", () => {
        let posY = stars.getBoundingClientRect().top;
        if (posY < -50) {
            myName.classList.add("my-name-o");
        } else {
            myName.classList.remove("my-name-o");
        }
    });
};

nameShow();

function Star(color, moveTime) {
    this.color = color;
    this.moveTime = moveTime;
    this.init();
}

Star.prototype = {
    constructor: Star,
    init: function () {
        const starElem = document.createElement("div");
        starElem.classList.add("star");
        starElem.style.backgroundColor = this.color;
        stars.appendChild(starElem);
        starMove(starElem);
        starElem.style.animationDuration = this.moveTime;
    },
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const colors = [
    "#5B89A6",
    "#426A8C",
    "#FFF",
    "#FFF",
    "#07598C",
    "#BF4974",
    "#F2B6C1",
    "#91D7F2",
    "#6064A6",
    "#A68380",
];

const starElements = [];
const STAR_COUNT = 400;

function starCreator() {
    // colors 중에 랜덤하게하나
    // 시간은 0~10까지
    const colorNum = getRandomInt(0, 10);
    const num = getRandomArbitrary(3, 15);

    const tempStar = new Star(colors[colorNum], `${num}s`);
    return tempStar;
}

for (let i = 0; i < STAR_COUNT; i++) {
    const newStar = starCreator();
    starElements.push(newStar);
}

// const star1 = new Star("#5B89A6", "10s");
