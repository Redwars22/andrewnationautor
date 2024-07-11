document.getElementById("send-button").addEventListener("click", () => {
    let subject = document.getElementById("subject").value;
    //let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let andrewNationEmail = "andrewnationdev@gmail.com";
    
    if(!subject || !message){
        window.alert("Preencha todos os campos");
        return;
    }
    
    window.open(`mailto:${andrewNationEmail}?subject=${subject}&body=${message}`);
})

