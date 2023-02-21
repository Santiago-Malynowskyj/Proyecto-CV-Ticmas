function mostrarNombre() {
  console.log("mostrarnombre");
  let mostrarDefault = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarDefault"
  );
  let mostrarTelefono = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarTel"
  );
  let mostrarEmail = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarEmail"
  );
  mostrarDefault.classList.remove("esconder_div");
  mostrarTelefono.classList.add("esconder_div");
  mostrarEmail.classList.add("esconder_div");
}
function mostrarTelefono() {
  let mostrarDefault = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarDefault"
  );
  let mostrarTelefono = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarTel"
  );
  let mostrarEmail = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarEmail"
  );
  mostrarDefault.classList.add("esconder_div");
  mostrarTelefono.classList.remove("esconder_div");
  mostrarEmail.classList.add("esconder_div");
}
function mostrarEmail() {
  let mostrarDefault = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarDefault"
  );
  let mostrarTelefono = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarTel"
  );
  let mostrarEmail = document.querySelector(
    ".contenedorPrincipal-informacion-mostrarEmail"
  );
  mostrarDefault.classList.add("esconder_div");
  mostrarTelefono.classList.add("esconder_div");
  mostrarEmail.classList.remove("esconder_div");
}
