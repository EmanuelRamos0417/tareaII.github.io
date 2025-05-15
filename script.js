function cambiarFondo() {
    const colores = ["#1e1e2f", "#2a003f", "#002b36", "#001f1f", "#111133"];
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = color;
  }
  
  function mostrarMensaje(nombre) {
    alert(`📁 Abriste ${nombre}. ¡Revisa bien la estructura de datos! 🧠`);
  }
  
  window.onload = function () {
    const saludo = document.getElementById("saludo");
    const hora = new Date().getHours();
    if (hora < 12) {
      saludo.textContent = "¡Buenos días, futuro DBA! ☀️";
    } else if (hora < 18) {
      saludo.textContent = "¡Buenas tardes, diseñador de queries! 💻";
    } else {
      saludo.textContent = "¡Buenas noches, maestro de datos! 🌙";
    }
  }
  