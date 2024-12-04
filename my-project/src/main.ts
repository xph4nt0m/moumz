import './styles/style.css';

import {debounce} from "./utils/_utils";

// Initialisation
const cursor = document.getElementById('cursor')!;
const cards = document.querySelectorAll('.card');

// Ajout d'effets de survol sur les cartes
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cursor.classList.add('hovering');
    });
    card.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
    });
});

// Mise à jour de la position du curseur avec un effet "debounce"
document.addEventListener('mousemove', debounce((e: any) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
}, 1));




