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
