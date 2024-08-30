document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('./gallery');
    const images = ['./gallery/back.png', './gallery/front.png']; 
    const imagesHtml = images.map(src => `<img src="${src}" style="width: 200px; margin: 10px;">`).join('');
    gallery.innerHTML = imagesHtml;
  });
  
  