import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGalaryEl = document.querySelector(`.gallery`);
const makeGalary = galleryItems.map(makeGalaryItem).join('')

function makeGalaryItem({ preview, original, description}) {
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}

listGalaryEl.innerHTML = makeGalary;

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: `alt`});

listGalaryEl.addEventListener('click', onTagsClickList)

function onTagsClickList(event) {
  if (event.target.nodeName !== 'IMG') {
    return
  }
    event.preventDefault()  
}