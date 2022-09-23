function showpassword(){
    var x = document.getElementById("passkey");
    var y = document.getElementById("eye1");
    var z = document.getElementById("eye2");
    
        if(x.type === 'password'){
            x.type = 'text';
            y.style.display = 'none';
            z.style.display = 'block';
        }

        else{
            x.type = 'password';
            y.style.display = 'block';
            z.style.display = 'none';
        }
}




// const password = document.getElementById("password");
// const togglePassword = document.getElementById("togglePassword");
// togglePassword.addEventListener("click", toggleClicked);
// function toggleClicked() {
//     password.classList.toggle("visible");
//     if (this.checked) {
//         password.type = "text";
//     }
    
//     else {password.type = "password";
//     }
// }