import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector ('.gallery');
const imagesMarkup = createImgCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imagesMarkup);

let gallery = new SimpleLightbox('.gallery a');

function createImgCardsMarkup (galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      data-source ="${original}"
      alt: title = "${description}"
    />
    </a>
    `;
    }).join('')
}
console.log (galleryItems)