import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector ('.gallery');
const imagesMarkup = createImgCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imagesMarkup);

imgContainer.addEventListener("click", (event) => {
    event.preventDefault();
    
    if (!event.target.classList.contains('gallery__image')){
        return;
    }
    
    const instance = basicLightbox.create(
        event.target.closest('.gallery__link').innerHTML, {
        onShow: instance => {
            document.addEventListener('keydown', onEscKeyClick);
            },
        onClose: instance => {
            document.removeEventListener('keydown', onEscKeyClick);
            },
        }
    );
    
    instance.show();
    
    function onEscKeyClick(event) {
        if (event.code !== 'Escape') {
            return;
        } 
        instance.close();   
    }
});
  
function createImgCardsMarkup (galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      data-source ="${original}"
      alt = "${description}"
    />
    </a>
    </div>
    `;
    }).join('')
}
