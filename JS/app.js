/*const profesional_card = document.querySelectorAll(".profesional-card");
profesional_card.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    })
})


  alert("¡Hola! JavaScript está funcionando.");
  */
const profesionalCards = document.querySelectorAll(".profesional-card");

profesionalCards.forEach((card) => {
  card.addEventListener("click", () => {
    // First, collapse all cards except the one that was clicked
    profesionalCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.remove("active");
        // Update the icon back to add-outline on collapsed cards
        const otherIcon = otherCard.querySelector(
          ".container-card_job-posting ion-icon"
        );
        if (otherIcon) {
          otherIcon.setAttribute("name", "add-outline");
        }
      }
    });

    // Then, toggle the clicked card
    card.classList.toggle("active");

    // Update the icon on the clicked card
    const icon = card.querySelector(".container-card_job-posting ion-icon");
    if (icon) {
      if (card.classList.contains("active")) {
        icon.setAttribute("name", "remove-outline");
      } else {
        icon.setAttribute("name", "add-outline");
      }
    }
  });
});