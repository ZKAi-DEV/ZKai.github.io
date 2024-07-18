document.querySelector('.buttons__toggle').addEventListener('click', function() {
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        if (img.style.display === 'none') {
            img.style.display = 'block'; // Menampilkan gambar
        } else {
            img.style.display = 'none'; // Menyembunyikan gambar
        }
    });
});


const buttonsComponent = document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons__toggle');

buttonsToggle.addEventListener('click', toggleButtons);

function toggleButtons() {
	buttonsToggle.classList.toggle('buttons__toggle--active');
	buttonsComponent.classList.toggle('buttons--active');
	document.activeElement.blur();
}
