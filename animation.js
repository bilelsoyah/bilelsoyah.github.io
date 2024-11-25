document.querySelectorAll('.line').forEach(line => {
  const content = line.querySelector('.line-content');

  line.addEventListener('mousemove', (event) => {
    const rect = line.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Position de la souris dans .line
    const width = rect.width;
    
    // Calcule un pourcentage pour la position de la souris dans l'élément
    const percentage = mouseX / width;

    // La translation de `.line-content` varie en fonction de ce pourcentage
    const maxTranslate = content.scrollWidth - width; // Maximum de déplacement
    const translateX = -percentage * maxTranslate; // Translation vers la gauche

    content.style.transform = `translateX(${translateX}px)`;
  });
});

