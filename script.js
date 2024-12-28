emailjs.init("3SAc1A3f3CHRXY6oc"); // Ganti dengan Public Key Anda


function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value, 
        message : document.getElementById("message").value, 
    }

    emailjs.send("service_8q8rgre", "template_5wnw6yi", parms)
        .then(function(response) {
            console.log("SUCCESS:", response);
            alert("Email Sent Successfully!");
        })
        .catch(function(error) {
            console.error("FAILED:", error);
            alert("Failed to send email. Error: " + JSON.stringify(error));
        });


    // emailjs.send("service_8q8rgre", "template_5wnw6yi",parms).then(alert("Email Sent!!"))
}