// *** LIGHTBOX ***
const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox > img');
const listThumbnail = document.querySelectorAll("[data-full-img]");

listThumbnail.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (evt) => {
        lightboxImg.src = thumbnail.dataset.fullImg;
        lightbox.classList.add('ouvert');
        lightbox.classList.remove('ferme');
        lightbox.showModal();
    });
});
lightbox.addEventListener('click', (evt) => {
    lightbox.close();
});