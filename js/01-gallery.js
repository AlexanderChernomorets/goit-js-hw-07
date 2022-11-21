import { galleryItems } from './gallery-items.js';
// Change code below this line


const paletteContainer = document.querySelector('.gallery');


function createInstance(imgSrc, description) {

    const instance = basicLightbox.create(
        `
    <img
    class="gallery__image"
    src="${imgSrc}"
    alt="${description}"
    width="800"
    height="600"
    />`
   ,
         {
          onShow: (instance) => {
            document.addEventListener("keydown", onEscapeButton);
          },
          onClose: (instance) => {
            document.removeEventListener("keydown", onEscapeButton);
          },
        }
      );
      instance.show();
      function onEscapeButton(evt) {
        if (evt.code === "Escape") {
            instance.close();
          }
          return paletteContainer.removeEventListener;
        };
      }
      
//     paletteContainer.addEventListener("keydown", (e) => {
//         if (e.code === "Escape") {
//           instance.close();
//         }
//         return paletteContainer.removeEventListener;
//       });
//     }
// ;

function createGalleryImage(images) {
    return images.map(({preview, original, description}) => {
        // console.log(preview, original, description);

        return `
        <div class="gallery__item>
        <a class="gallery__link" href="${original}" >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>`
    })
   .join('')


}


const imagesMarkup = createGalleryImage(galleryItems);

paletteContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("gallery")) {
        return
    }
    const imgSrc = e.target.dataset.source;
    const imgAlt = e.target.alt;
    createInstance(imgSrc, imgAlt);
});

paletteContainer.insertAdjacentHTML('beforeend', imagesMarkup)








