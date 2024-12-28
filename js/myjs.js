const navbar = document.getElementsByTagName('nav') [0];
window.addEventListener('scroll',function() {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent' );
    }
});

// Fungsi untuk memeriksa apakah semua input telah diisi
function checkForm() {
    var name = document.getElementById('name').value.trim();  // Gunakan trim untuk menghapus spasi ekstra
    var email = document.getElementById('email').value.trim();  // Gunakan trim untuk menghapus spasi ekstra
    var message = document.getElementById('message').value.trim();  // Gunakan trim untuk menghapus spasi ekstra
    var submitButton = document.getElementById('send');

    console.log("Name:", name, "Email:", email, "Message:", message);  // Log untuk memverifikasi nilai input

    // Pastikan semua field terisi dan tidak hanya spasi kosong
    // Selain itu, tambahkan pemeriksaan panjang minimum untuk message, misalnya minimal 5 karakter
    if (name !== "" && email !== "" && message.length >= 5) {
        submitButton.disabled = false;  // Mengaktifkan tombol
        submitButton.classList.add("animate__animated", "animate__fadeIn");  // Menambahkan animasi
    } else {
        submitButton.disabled = true;  // Menonaktifkan tombol
        submitButton.classList.remove("animate__animated", "animate__fadeIn");  // Menghapus animasi
    }
}


// Menambahkan event listener untuk setiap input form
document.getElementById('name').addEventListener('input', checkForm);
document.getElementById('email').addEventListener('input', checkForm);
document.getElementById('message').addEventListener('input', checkForm);
