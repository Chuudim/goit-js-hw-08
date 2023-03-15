// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'

import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
}

function renderGallery() {
    const galleryMarkup = galleryItems.map(createGalleryItem).join('');
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}


renderGallery();

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });


console.log(galleryItems);


// // Приклад використання
// const images = [
//   {src: 'image-1.jpg', title: 'Image 1'},
//   {src: 'image-2.jpg', title: 'Image 2'},
//   {src: 'image-3.jpg', title: 'Image 3'},
// ];

// const lightbox = new SimpleLightbox('.gallery a', {images});