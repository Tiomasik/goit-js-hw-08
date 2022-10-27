// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import fuctions
import { onTagsClickList, makeGalaryItem } from './gallery-function';

const listGalaryEl = document.querySelector(`.gallery`);
const makeGalary = galleryItems.map(makeGalaryItem).join('')

listGalaryEl.innerHTML = makeGalary;

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: `alt`});

listGalaryEl.addEventListener('click', onTagsClickList)

