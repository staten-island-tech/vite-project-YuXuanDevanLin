// ----------------------------
// YOUR ARRAY
// ----------------------------
const artPieces = [
  { title: "",
    category: "individual piece", 
    year: 2024,
    artist: "unknown artist",
    month: "November",
    day: 28,
    src: "https://scontent-lga3-1.cdninstagram.com/..."
  },
  { title: "",
    category: "Collab 1 (name tbd)",
    year: 2024,
    artist: "rzskylark",
    month: "October",
    day: 21,
    src: "https://scontent-lga3-3.cdninstagram.com/..."
  },
  // ... more
];

// ----------------------------
// 1. Render Gallery
// ----------------------------
const gallery = document.getElementById("gallery");

function renderGallery(list) {
  gallery.innerHTML = "";
  
  list.forEach(piece => {
    const img = document.createElement("img");
    img.src = piece.src;
    img.alt = piece.title || "Artwork";

    img.addEventListener("click", () => openModal(piece));

    gallery.appendChild(img);
  });
}

renderGallery(artPieces);

// ----------------------------
// 2. Filter Images
// ----------------------------
const filterSelect = document.getElementById("filterSelect");

filterSelect.addEventListener("change", () => {
  const value = filterSelect.value;

  if (value === "all") {
    renderGallery(artPieces);
  } else {
    const filtered = artPieces.filter(p => p.category === value);
    renderGallery(filtered);
  }
});

// ----------------------------
// 3. Random Art of the Day
// ----------------------------
function setArtOfTheDay() {
  const random = artPieces[Math.floor(Math.random() * artPieces.length)];

  const header = document.getElementById("artOfTheDay");
  header.textContent = `Art of the Day: ${random.artist} (${random.year})`;
}

setArtOfTheDay();


// ----------------------------
// 4. Modal Pop-up
// ----------------------------
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalInfo = document.getElementById("modalInfo");
const closeModal = document.getElementById("closeModal");

function openModal(piece) {
  modalImage.src = piece.src;
  modalTitle.textContent = piece.title || "Untitled Work";
  modalInfo.textContent = `${piece.artist} • ${piece.month} ${piece.day}, ${piece.year}`;

  modal.style.display = "flex";
}

closeModal.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// ----------------------------
// 5. Light/Dark Mode
// ----------------------------
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};
