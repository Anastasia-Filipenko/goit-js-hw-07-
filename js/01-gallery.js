import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardMarkup = createPictureCardMarkup();

galleryContainer.insertAdjacentHTML('afterbegin', cardMarkup);

function createPictureCardMarkup() {
   return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
             data-source="${original}" 
             alt="${description}"/>
        </a>
    </div>`
   })
 .join("");
};


galleryContainer.addEventListener('click', clickOnGallery);

function clickOnGallery(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

    instance.show();

    window.addEventListener('keydown', closeOnEscape);

    function closeOnEscape(e) {
        if (e.code === "Escape") {
            instance.close();
        }
        return;
    };
}
console.log(createPictureCardMarkup());

console.log(galleryItems);
