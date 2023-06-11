// script.js
async function checkEmail() {
    try {
      const emailInput = document.getElementById("email");
      const email = emailInput.value;
  
      const response = await fetch('/demo/all');
      const data = await response.json();
  
      const foundUser = data.find(user => user.email === email);
  
      if (foundUser) {
        alert("Die E-Mail-Adresse ist bereits registriert.");
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
}

async function addUser() {
    try {
        const isEmailAvailable = await checkEmail();
        if(!checkPassword())
        {
            return;
        }
        else if(isEmailAvailable){
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const repeatpasswordInput = document.getElementById("repeatpassword");
            const plzInput = document.getElementById("plz");
            const ortInput = document.getElementById("ort");
            const strasseInput = document.getElementById("strasse");
            const formData = new FormData();
            formData.append("name", nameInput.value);
            formData.append("email", emailInput.value);
            formData.append("password", passwordInput.value);
            formData.append("plz", plzInput.value);
            formData.append("ort", ortInput.value);
            formData.append("strasse", strasseInput.value);
            fetch("/demo/add", {
                method: "POST",
                body: formData
            }).then(response => response.text()).then(data => console.log(data)).catch(error => console.error(error));
        }
    }
    catch (error) {
        console.error(error);
    }
}

function sendRequest() {
    fetch('/demo/all').then(response => response.text()).then(data => console.log(data)).catch(error => console.error(error));
}

function checkPassword() {
    const passwordInput = document.getElementById("password");
    const repeatpasswordInput = document.getElementById("repeatpassword");
    const password = passwordInput.value;
    const repeatpassword = repeatpasswordInput.value;

    if (password != repeatpassword) {
        alert("Passwörter stimmen nicht überein.");
        return false;
    }
    // Überprüfen der Länge des Passworts
    else if (password.length < 10) {
        alert("Das Passwort muss mindestens 10 Zeichen lang sein.");
        return false;
    }

    // Überprüfen, ob mindestens eine Zahl vorhanden ist
    else if (!/\d/.test(password)) {
        alert("Das Passwort muss mindestens eine Zahl enthalten.");
        return false;
    }

    // Überprüfen, ob mindestens ein Symbol vorhanden ist (nicht alphabetisch, nicht numerisch)
    else if (!/[^\w\s]/.test(password)) {
        alert("Das Passwort muss mindestens ein Symbol enthalten.");
        return false;
    }
    else {
        return true;
    }
}

function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Bitte füllen Sie alle Pflichtfelder aus.");
        return false;
    }
    return true;
}

function redirectToRegistration() {
    window.location.href = "/registry.html";
  }