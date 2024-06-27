document.addEventListener('mousemove', (e) => {
  const codeEffect = document.querySelector('.code-effect');
  const { clientX: mouseX, clientY: mouseY } = e;
  const { left, top, width, height } = codeEffect.getBoundingClientRect();
  
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  
  const deltaX = (mouseX - centerX) / 20;
  const deltaY = (mouseY - centerY) / 20;
  
  codeEffect.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});
