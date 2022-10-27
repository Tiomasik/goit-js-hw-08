function onTagsClickList(event) {
  if (event.target.nodeName !== 'IMG') {
    return
  }
    event.preventDefault()  
};

function makeGalaryItem({ preview, original, description}) {
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
};

export { onTagsClickList, makeGalaryItem }