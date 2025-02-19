function saveFakeLogin(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    localStorage.setItem("fakeUsername", username);
    localStorage.setItem("fakePassword", password);
    
    alert("Přihlášení uloženo lokálně!");
}
