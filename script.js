function sendMail(event) {
    event.preventDefault(); // Mencegah reload halaman

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Mengirim email menggunakan emailjs
    emailjs.send("service_8q8rgre", "template_5wnw6yi", parms)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email Sent Successfully!");
        })
        .catch(function(error) {
            console.error("FAILED...", error);
            alert("Failed to send email. Error: " + JSON.stringify(error));
        });
}
