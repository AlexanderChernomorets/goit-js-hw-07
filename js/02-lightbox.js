// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// function createGalleryImage(images) {
//     return images.map(({preview, original, description}) => {
//         // console.log(preview, original, description);

//         return `
//         <div class="gallery__item>
//         <a class="gallery__link" href="${original}" >
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//       </div>`
//     })
//    .join('')


// }

// const palleteContainer = document.querySelector('.gallery');
// const imagesMarkup = createGalleryImage(galleryItems);

// palleteContainer.insertAdjacentHTML('beforeend',imagesMarkup)

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

import { galleryItems } from "./gallery-items.js";
// Change code below this line


const paletteContainer = document.querySelector(".gallery");

const galleryList = createGalleryCard(galleryItems);
paletteContainer.insertAdjacentHTML("beforeend", galleryList);



function createGalleryCard(cardItems) {
  return cardItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
            src="${preview}" 
            alt=${description}" />
        </a>
        `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
