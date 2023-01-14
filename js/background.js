const image = ["1.jpg", "3.jpg"];
const body = document.querySelector("body");
body.style.backgroundImage = `url(img/${image[getRandomIndex(image.length)]})`;
