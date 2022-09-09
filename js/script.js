function validateform() {
    var email = document.myform.email.value;
    var password = document.myform.password.value;

    if (email == null || email == "") {
        alert("Please enter a valid email !");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}  


