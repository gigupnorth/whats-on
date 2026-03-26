
// script.js

(async function() {
  // 1️⃣ Grab the container where cards will go
  const container = document.getElementById("cards-view");
  if (!container) {
    console.error("Cards container not found!");
    return;
  }

  // 2️⃣ Load your JSON data
  let data = [];
  try {
    const res = await fetch("data.json"); // Make sure this is your correct JSON file path
    data = await res.json();
    console.log("Loaded JSON data:", data);
  } catch (err) {
    console.error("Failed to load JSON data:", err);
    return;
  }

  // 3️⃣ Loop through the data and create basic cards
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card"; // style this in your CSS

    // For now, just show title and venue
    card.innerHTML = `
      <h3>${item.title || "No title"}</h3>
      <p>${item.venue || "No venue"}</p>
    `;

    container.appendChild(card);
  });
})();
