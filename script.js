function enviar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };
  
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error al enviar el formulario:", error);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    let boton = document.getElementById("botoncito");
    boton.addEventListener("click", () => {
        enviar();
    });
  });