function showImage(button) {
    var img = button.nextElementSibling; // Asumsikan bahwa <img> adalah elemen setelah <button>
    if (img.style.display === 'none') {
        img.style.display = 'block';
        img.classList.add('show'); // Tambahkan kelas untuk menampilkan gambar
    } else {
        img.style.display = 'none';
        img.classList.remove('show'); // Hapus kelas untuk menyembunyikan gambar
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Menghapus kelas 'active' dari semua item
            items.forEach(i => i.classList.remove('active'));

            // Menambahkan kelas 'active' ke item yang diklik
            this.classList.add('active');
        });
    });
});
