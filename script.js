const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click", () => {
    mensaje.textContent = "¡Has hecho clic en el botón!";
});
