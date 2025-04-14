// Fungsi untuk memeriksa apakah form sudah lengkap
function checkForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Mengambil tombol Send
    var sendButton = document.getElementById("send");
    
    // Cek apakah semua input terisi
    if (name && email && message) {
        sendButton.disabled = false;  // Aktifkan tombol Send jika semua field terisi
    } else {
        sendButton.disabled = true;   // Nonaktifkan tombol Send jika ada field yang kosong
    }
}

// Fungsi untuk mengubah warna background navigasi saat scroll
function changeNavBackground() {
    var navbar = document.querySelector(".navbar");
    
    console.log(document.body.scrollTop, document.documentElement.scrollTop); // Cek posisi scroll

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

