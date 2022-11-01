import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardMarkup = createPictureCardMarkup();

galleryContainer.insertAdjacentHTML('afterbegin', cardMarkup);

function createPictureCardMarkup() {
   return galleryItems.map(({preview, original, description}) => {
       return `<a class="gallery__item" 
                href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
</a>`
   })
 .join("");
};

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});


console.log(galleryItems);
