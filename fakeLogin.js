function saveFakeLogin(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let data = `Username: ${username}\nPassword: ${password}`;
    
    let blob = new Blob([data], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "login_data.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert("Přihlášení bylo uloženo do souboru!");
}
