let userName = "", userGender = "";
function showEmail() {
    userName = document.getElementById('name-input').value.trim();
    userGender = document.getElementById('gender-select').value;
    if(userName === ""){ alert("Ingresa tu nombre."); return; }
    document.getElementById('initial-form').style.display = 'none';
    document.getElementById('email-view').style.display = 'block';
    document.getElementById('recipient-name').textContent = userName;
    document.getElementById('email-name-display').textContent = userName;
}
function showCertificate() {
    document.getElementById('email-view').style.display = 'none';
    document.getElementById('certificate-view').style.display = 'block';
    document.getElementById('title-display').textContent = userGender === "female" ? "REINA DE LA FIESTA" : "REY DE LA FIESTA";
    document.getElementById('certificate-name-display').textContent = userName.toUpperCase();
    const music = document.getElementById("celebrationMusic");
    music.volume = 0.7; music.play().catch(() => {});
    confetti({ particleCount: 300, spread: 180, origin: { y: 0.6 } });
    const interval = setInterval(() => {
        confetti({ particleCount: 15, angle: 60, spread: 70, origin: { x: 0 } });
        confetti({ particleCount: 15, angle: 120, spread: 70, origin: { x: 1 } });
    }, 250);
    setTimeout(() => clearInterval(interval), 6000);
}
