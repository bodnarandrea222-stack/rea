// Alap JavaScript logika

document.addEventListener("DOMContentLoaded", () => {
    console.log("Az app.js sikeresen betöltődött! 🎉");

    const gombok = document.querySelectorAll("button");

    gombok.forEach(gomb => {
        gomb.addEventListener("click", () => {
            alert("Megnyomtad a gombot! 😍");
        });
    });
});
