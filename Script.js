// JavaScript source code
console.log("Welcome to my portfolio website!");
document.querySelectorAll('.parallax').forEach(section => {
    const image = section.getAttribute('data-image');
    section.style.backgroundImage = `url(${image})`;
  });