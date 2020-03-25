import demo from '../images/demo.png';

const image = new Image();
// image.src = require('../images/demo.png');
image.src = demo;
image.width = 150;
image.height = 100;
document.body.appendChild(image);