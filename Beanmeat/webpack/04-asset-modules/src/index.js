import helloWorld from './hello-world';
import imgSrc from './assets/temp.png';
import logoSrc from './assets/webpack.svg';
import exampleTxt from './assets/example.txt';

helloWorld()

const img = document.createElement('img');
img.src = imgSrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.style.cssText = 'width:200px;height:100px;';
img2.src = logoSrc;
document.body.appendChild(img2);

const block = document.createElement('div');
block.style.cssText = 'width:200px;height:200px; background:blue;';
block.textContent = exampleTxt;
document.body.appendChild(block);