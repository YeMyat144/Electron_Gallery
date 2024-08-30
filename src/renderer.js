import './index.css';
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.createElement('div');
  galleryContainer.className = 'container text-center';

  const galleryTitle = document.createElement('h1');
  galleryTitle.className = 'my-4 text-light text-shadow';
  galleryTitle.textContent = 'Gallery';
  galleryContainer.appendChild(galleryTitle);

  const galleryRow = document.createElement('div');
  galleryRow.className = 'gallery row';
  galleryContainer.appendChild(galleryRow);

  const images = [
    { src: './src/gallery/back.png', caption: 'Back View', download: 'back.png' },
    { src: './src/gallery/front.png', caption: 'Front View', download: 'front.png' },
    { src: './src/gallery/side1.png', caption: 'Side View 1', download: 'side1.png' },
    { src: './src/gallery/side2.png', caption: 'Side View 2', download: 'side2.png' },
    { src: './src/gallery/top.png', caption: 'Top View', download: 'top.png' }
  ];

  images.forEach(function(image, index) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4 mb-4';

    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item position-relative';

    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = `Image ${index + 1}`;
    imgElement.className = 'img-fluid rounded shadow-lg';
    imgElement.style.cursor = 'pointer';
    imgElement.addEventListener('click', function() {
      openLightbox(image.src);
    });

    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption position-absolute bottom-0 start-0 bg-dark text-white px-2 py-1 rounded';
    captionDiv.textContent = image.caption;

    const downloadLink = document.createElement('a');
    downloadLink.href = image.src;
    downloadLink.download = image.download;
    downloadLink.className = 'download-btn btn btn-success position-absolute top-0 end-0 m-2';
    downloadLink.textContent = 'Download';

    galleryItem.appendChild(imgElement);
    galleryItem.appendChild(captionDiv);
    galleryItem.appendChild(downloadLink);
    colDiv.appendChild(galleryItem);
    galleryRow.appendChild(colDiv);
  });

  document.body.appendChild(galleryContainer);

  // Lightbox Modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'lightboxModal';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog modal-dialog-centered';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content bg-dark';

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  const modalImg = document.createElement('img');
  modalImg.id = 'lightboxImage';
  modalImg.className = 'img-fluid rounded';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn-close btn-close-white position-absolute top-0 end-0 m-3';
  closeButton.addEventListener('click', closeLightbox);

  modalBody.appendChild(modalImg);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(closeButton);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  document.body.appendChild(modal);

  function openLightbox(imgSrc) {
    modalImg.src = imgSrc;
    modal.style.display = 'block';
  }

  function closeLightbox() {
    modal.style.display = 'none';
  }
});
