// Funcionalidad para el menú móvil
document.getElementById("mobileMenuBtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
});

// Funcionalidad para las preguntas frecuentes
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");

    // Cambiar el símbolo + por - cuando está activo
    const symbol = question.querySelector("span:last-child");
    symbol.textContent = faqItem.classList.contains("active") ? "-" : "+";
  });
});

// Funcionalidad para el modal de video
const videoModal = document.getElementById("videoModal");
const playVideoBtn = document.getElementById("playVideoBtn");
const closeVideoModal = document.getElementById("closeVideoModal");

playVideoBtn.addEventListener("click", () => {
  videoModal.style.display = "flex";
});

closeVideoModal.addEventListener("click", () => {
  videoModal.style.display = "none";
});

// Funcionalidad para el modal de música
const musicModal = document.getElementById("musicModal");
const playMusicBtn = document.getElementById("playMusicBtn");
const closeMusicModal = document.getElementById("closeMusicModal");

playMusicBtn.addEventListener("click", () => {
  musicModal.style.display = "flex";
});

closeMusicModal.addEventListener("click", () => {
  musicModal.style.display = "none";
});

document.getElementById("playMusicBtn").addEventListener("click", () => {
  document.getElementById("audioCorporativo").play();
});

// Funcionalidad para el formulario de login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Inicio de sesión simulado. En una implementación real, se enviarían los datos al servidor."
  );
  // Aquí normalmente enviaríamos los datos al servidor
  this.reset();
});

// Funcionalidad para el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto."
  );
  // Aquí normalmente enviaríamos los datos al servidor
  this.reset();
});

// Cerrar modales al hacer clic fuera de ellos
window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
  }
  if (e.target === musicModal) {
    musicModal.style.display = "none";
  }
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Cerrar menú móvil si está abierto
      const mobileMenu = document.getElementById("mobileMenu");
      if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
      }
    }
  });
});
