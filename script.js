const abrirBtn = document.getElementById('abrirBtn');
const portada = document.getElementById('portada');
const invitacion = document.getElementById('invitacion');

abrirBtn.addEventListener('click', () => {
  portada.classList.add('oculto');
  invitacion.classList.remove('oculto');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Cuenta regresiva: 12 de diciembre de 2026, a las 20:00 (hora de Bolivia).
const fechaEvento = new Date('2026-12-12T20:00:00-04:00').getTime();

function actualizarCuenta() {
  const ahora = Date.now();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    document.getElementById('cuenta').innerHTML = '<p>¡Llegó el gran día! Gracias por acompañarme ♡</p>';
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = String(horas).padStart(2, '0');
  document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
  document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

actualizarCuenta();
setInterval(actualizarCuenta, 1000);
