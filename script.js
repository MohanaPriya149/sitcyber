// Disable keyboard and mouse
function disableInput() {
  document.addEventListener('keydown', e => e.preventDefault(), true);
  document.addEventListener('keyup', e => e.preventDefault(), true);
  document.addEventListener('keypress', e => e.preventDefault(), true);
  document.addEventListener('mousemove', e => e.stopPropagation(), true);
  document.addEventListener('mousedown', e => e.stopPropagation(), true);
  document.addEventListener('mouseup', e => e.stopPropagation(), true);
  document.addEventListener('click', e => e.stopPropagation(), true);
}

disableInput();

// Re-enable after 60 seconds by reloading page
setTimeout(() => {
  location.reload();
}, 60000);
