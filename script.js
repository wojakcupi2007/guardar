
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('guardarBtn').addEventListener('click', function() {
    guardarDatos();
  });

  document.getElementById('recuperarBtn').addEventListener('click', function() {
    recuperarDatos();
  });

  function guardarDatos() {
    const valorNumero = document.getElementById('numberInput').value;
    const valorNombre = document.getElementById('nameInput').value;

      localStorage.setItem('numeroUsuario', valorNumero);
      localStorage.setItem('nombreUsuario', valorNombre);

      alert('Datos guardados correctamente.');
      

      console.log('Datos guardados en el localStorage:', localStorage);
    
  }

  function recuperarDatos() {
    const numeroAlmacenado = localStorage.getItem('numeroUsuario');
    const nombreAlmacenado = localStorage.getItem('nombreUsuario');

   
      alert(`Número: ${numeroAlmacenado}\nNombre: ${nombreAlmacenado}`);
      
      console.log('Datos recuperados del localStorage:', localStorage);
   
  }
});