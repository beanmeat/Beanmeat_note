import helloWorld from './hello-world';
import imgSrc from './assets/temp.png';
import logoSrc from './assets/webpack.svg';
import exampleTxt from './assets/example.txt';
import hello from './style.css'
import world from './beanmeat.less';
import Data from './assets/data.xml'
import Notes from './assets/data.csv'
import toml from './assets/data.toml'
import json from './assets/data.json5'
import yaml from './assets/data.yaml'
// import _ from 'lodash'
import './async-module'

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
block.classList.add('block-bg');
document.body.appendChild(block);

document.body.classList.add('hello');
document.body.classList.add('world');

console.log(Data)
console.log(Notes)


console.log(toml.title)
console.log(yaml.title)
console.log(json.title)
console.log(json.owner.name)
// console.log(_.join(['Another', 'module', 'loaded!'], ' '))

const button = document.createElement('button')
button.textContent = '点击执行加法运算'
button.addEventListener('click', () => {
    import(/* webpackChunkName: 'math',webpackPrefetch: true */ './math').then(({ add }) => {
        console.log(add(4, 5))
    })
})
document.body.appendChild(button)