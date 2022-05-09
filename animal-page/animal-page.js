import { findById } from '../utils.js'; 
import { animals } from '../data.js';
console.log('Hello from animal-page');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const animal = findById(params.get('id'), animals);
console.log(animal);

const animalName = document.getElementById('animal-name');
animalName.textContent = animal.name;

const animalImage = document.createElement('img');
animalImage.src = `../assets/${animal.type}.svg`;

const animalSaying = document.createElement('p');
animalSaying.textContent = animal.says;
animalName.append(animalImage, animalSaying);
