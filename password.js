function verifyPassword() {
    // Getting the passwords
    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;

    // Checking the password is 8 characters 
    if (password1.length < 8 || password2.length < 8) {
        window.alert("Both passwords must be at least 8 characters long.");
        return;
    }

    // Checking password is a match
    if (password1 != password2) {
        window.alert("Passwords do not match.");
    } 
    else {
        window.alert("Passwords match!");
    }
}