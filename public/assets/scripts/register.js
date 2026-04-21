
const form = document.getElementById("form");

// Evento submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // -----------------------------
  // VALIDAR CORREO .edu.pe
  // -----------------------------
  const regexEdu = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.edu\.pe$/;

  if (!regexEdu.test(email)) {
    mostrarNotificacion("Debes registrarte con un correo universitario (.edu.pe)", "error");
    return;
  }

  // -----------------------------
  // VALIDAR CONTRASEÑAS
  // -----------------------------
  if (password.length < 8) {
    mostrarNotificacion("La contraseña debe tener al menos 8 caracteres", "error");
    return;
  }

  if (password !== confirmPassword) {
    mostrarNotificacion("Las contraseñas no coinciden", "error");
    return;
  }

  // -----------------------------
  // HAPPY PATH 
  // -----------------------------
  mostrarNotificacion("Se envió un mensaje de confirmación a tu correo", "success");

  // Opcional: limpiar formulario
  form.reset();
});


// -----------------------------
// FUNCIÓN DE NOTIFICACIÓN
// -----------------------------
function mostrarNotificacion(mensaje, tipo) {
  // Eliminamos notificación previa si existe
  const existente = document.querySelector(".notificacion");
  if (existente) existente.remove();

  const div = document.createElement("div");
  div.classList.add("notificacion");

  // Tipo de mensaje
  if (tipo === "error") {
    div.style.backgroundColor = "#ff4d4d";
  } else {
    div.style.backgroundColor = "#4CAF50";
  }

  div.style.color = "#fff";
  div.style.padding = "12px";
  div.style.marginTop = "10px";
  div.style.borderRadius = "6px";
  div.style.textAlign = "center";
  div.style.fontWeight = "bold";

  div.textContent = mensaje;

  // Insertamos arriba del formulario
  form.prepend(div);

  // Se borra automáticamente después de 3s
  setTimeout(() => {
    div.remove();
  }, 3000);
}