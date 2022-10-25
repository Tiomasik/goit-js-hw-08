import { galleryItems } from './gallery-items.js';

const listGalaryEl = document.querySelector(`.gallery`);
const makeGalary = galleryItems.map(makeGalaryItem).join('')

function makeGalaryItem({ preview, original, description}) {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}

listGalaryEl.innerHTML = makeGalary;

listGalaryEl.addEventListener('click', onTagsClickList)

function onTagsClickList(event) {
  if (event.target.nodeName !== 'IMG') {
    return
  }
  event.preventDefault()

  window.addEventListener('keydown', onEscPress)

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)
  instance.show()

  function onEscPress(event) {
    if (event.code === 'Escape') {
      onCloseInstance()
    }
  }

  function onCloseInstance() {
    instance.close()
    window.removeEventListener('keydown', onEscPress)
  }
}