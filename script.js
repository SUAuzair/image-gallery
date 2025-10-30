const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');


images.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
  });
});


window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
