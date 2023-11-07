/* This is the script.js */

const responses = [
    "The best way to predict your future is to create it.",
    "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.",
    "Life is a succession of lessons which must be lived to be understood",
    "In the grand symphony of life, may your days be filled with beautiful melodies.",
    "In three words I can sum up everything I've learned about life: It goes on.",
    "The healthiest response to life is joy.",
    "Dance to the rhythm of your heart and let your dreams be your guiding stars.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",

];

const backgroundImages = [
    'url(image1.jpg)',
    'url(image2.jpg)',
    'url(image3.jpg)',
    'url(image4.jpg)',
    'url(image5.jpg)',
];

let currentIndex = 0;

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generate(name) {
    const randomResponse = getRandomElement(responses).replace("{{name}}", name);
    const outputElement = document.getElementById('output');
    outputElement.textContent = randomResponse;
}

function changeBackground() {
    const body = document.body;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    body.style.backgroundImage = backgroundImages[currentIndex];
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomFontSize() {
    return Math.floor(Math.random() * 30) + 12 + 'px';
}

function getRandomTransform() {
    const rotation = Math.floor(Math.random() * 360);
    const scale = Math.random() * 2;
    return `rotate(${rotation}deg) scale(${scale})`;
}

function restyle() {
    const outputElement = document.getElementById('output');
    const boxElement = document.getElementById('box');

    const fontSize = getRandomFontSize();
    const textColor = getRandomColor();
    const backgroundColor = getRandomColor();

    outputElement.style.fontSize = fontSize;
    outputElement.style.color = textColor;
    outputElement.style.backgroundColor = backgroundColor;

    boxElement.style.fontSize = fontSize;
    boxElement.style.color = textColor;
    boxElement.style.backgroundColor = backgroundColor;

    outputElement.style.transform = getRandomTransform();
    boxElement.style.transform = getRandomTransform();
}

setInterval(restyle, 2000);

