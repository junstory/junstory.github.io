const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

const chosenimg = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimg}`;

document.body.appendChild(bgImage);