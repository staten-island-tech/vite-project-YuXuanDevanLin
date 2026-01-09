import './style.css'

const artPieces = [
  { title: "",
    category: "Collab 1", 
    year: 2024,
    artist: "rzskylark",
    month: "October",
    day: 21,
    src: "",
    alt: "Artwork by rzskylark from Collab 1, October 21, 2024"
  },
  { title: "",
    category: "Collab 1", 
    year: 2024,
    artist: "turkishwarrior420",
    month: "October",
    day: 20,
    src: "",
    alt: "Artwork by turkishwarrior420 from Collab 1, October 20, 2024"
  },
  { title: "",
    category: "Collab 1", 
    year: 2024,
    artist: "dokuzuu",
    month: "October",
    day: 20,
    src: "",
    alt: "Artwork by dokuzuu from Collab 1, October 20, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2024,
    artist: "snail.www",
    month: "November",
    day: 28,
    src: "",
    alt: "Artwork by snail.www from Collab 2, November 28, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2024,
    artist: "sewerratarv2",
    month: "November",
    day: 30,
    src: "",
    alt: "Artwork by sewerratarv2 from Collab 2, November 30, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2024,
    artist: "kiyoshot",
    month: "December",
    day: 1,
    src: "",
    alt: "Artwork by kiyoshot from Collab 2, December 1, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2024,
    artist: "unga_bunga243",
    month: "December",
    day: 2,
    src: "",
    alt: "Artwork by unga_bunga243 from Collab 2, December 2, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2024,
    artist: "mjyukwie",
    month: "December",
    day: 4,
    src: "",
    alt: "Artwork by mjyukwie from Collab 2, December 4, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2024,
    artist: "ch.alks",
    month: "December",
    day: 5,
    src: "",
    alt: "Artwork by ch.alks from Collab 2, December 5, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2024,
    artist: "alaudase",
    month: "December",
    day: 8,
    src: "",
    alt: "Artwork by alaudase from Collab 2, December 8, 2024"
  },
  { title: "",
    category: "Collab 2 (name tbd)", 
    year: 2025,
    artist: "_.gaiahad",
    month: "January",
    day: 17,
    src: "",
    alt: "Artwork by _.gaiahad from Collab 2, January 17, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: [ 
      "multiple artists", 
      "rayerm12", 
      "unknown artist", 
      "_.gaiahad", 
      "alaudase", 
      "khanashii_",
      "mjyukwie",
      "exgoeast",
      "kiyoshot",
      "mochi.wert"
    ],
    month: "January",
    day: 23,
    src: "",
    alt: "Artwork by multiple artists from Collab 3, January 23, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "rayerm12",
    month: "January",
    day: 25,
    src: "",
    alt: "Artwork by rayerm12 from Collab 3, January 25, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "unknown artist",
    month: "January",
    day: 28,
    src: "",
    alt: "Artwork by unknown artist from Collab 3, January 28, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "_.gaiahad",
    month: "January",
    day: 30,
    src: "",
    alt: "Artwork by _.gaiahad from Collab 3, January 30, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "alaudase",
    month: "January",
    day: 31,
    src: "",
    alt: "Artwork by alaudase from Collab 3, January 31, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "khanashii_",
    month: "February",
    day: 2,
    src: "",
    alt: "Artwork by khanashii_ from Collab 3, February 2, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "mjyukwie",
    month: "February",
    day: 3,
    src: "",
    alt: "Artwork by mjyukwie from Collab 3, February 3, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "exgoeast",
    month: "February",
    day: 13,
    src: "",
    alt: "Artwork by exgoeast from Collab 3, February 13, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "kiyoshot",
    month: "February",
    day: 13,
    src: "",
    alt: "Artwork by kiyoshot from Collab 3, February 13, 2025"
  },
  { title: "",
    category: "Collab 3 (name tbd)", 
    year: 2025,
    artist: "mochi.wert",
    month: "February",
    day: 13,
    src: "",
    alt: "Artwork by mochi.wert from Collab 3, February 13, 2025"
  },
  { title: "",
    category: "Collab 4 (name tbd)", 
    year: 2025,
    artist: "kiyoshot",
    month: "February",
    day: 14,
    src: "",
    alt: "Artwork by kiyoshot from Collab 4, February 14, 2025"
  },
  { title: "",
    category: "Collab 4 (name tbd)", 
    year: 2025,
    artist: "snail.www",
    month: "February",
    day: 15,
    src: "",
    alt: "Artwork by snail.www from Collab 4, February 15, 2025"
  },
  { title: "",
    category: "Collab 4 (name tbd)", 
    year: 2025,
    artist: "rayerm12",
    month: "February",
    day: 17,
    src: "",
    alt: "Artwork by rayerm12 from Collab 4, February 17, 2025"
  },
  { title: "",
    category: "Collab 4 (name tbd)", 
    year: 2025,
    artist: "unknown artist",
    month: "February",
    day: 20,
    src: "",
    alt: "Artwork by unknown artist from Collab 4, February 20, 2025"
  },
  { title: "",
    category: "Collab 4 (name tbd)", 
    year: 2025,
    artist: "mochi.wert",
    month: "February",
    day: 20,
    src: "",
    alt: "Artwork by mochi.wert from Collab 4, February 20, 2025"
  },
  { title: "Turkish Warrior 420",
    category: "Collab 4 (name tbd)", 
    year: 2025,
    artist: "turkishwarrior420",
    month: "February",
    day: 21,
    src: "",
    alt: "Artwork by turkishwarrior420 from Collab 4, February 21, 2025"
  }
]

function inject(artPieces){
  const container= document.querySelector(".container")
  container.insertAdjacentHTML("beforeend",
    `<div class = "card">
    <h3 class = "artname"> Art Name : ${artPieces.category}</h3>
    </div>`
  )

}
inject(artPieces)




// function injectGallery(pieces) {
//   const gallery = document.getElementById("gallery")
//   if (!gallery) return

//   gallery.innerHTML = "" // clear existing content

//   pieces.forEach(piece => {
//     const card = document.createElement("article")
//     card.className = "art-card"

//     const artists = Array.isArray(piece.artist)
//       ? piece.artist.join(", ")
//       : piece.artist

//     card.innerHTML = `
//       <img src="${piece.src}" alt="${piece.title || "artwork"}" loading="lazy" />
//       <div class="meta">
//         <p class="category">${piece.category}</p>
//         <p class="artist">${artists}</p>
//         <p class="date">${piece.month} ${piece.day}, ${piece.year}</p>
//       </div>
//     `

//     gallery.appendChild(card)
//   })
// }

// function inject(item) {
//   const container = document.querySelector(".container");
//   if (!container) return;

//   const categories = Array.isArray(item.category)
//     ? item.category.map(c => c.toLowerCase()).join(", ")
//     : String(item.category).toLowerCase();

//   const artist = Array.isArray(item.artist)
//     ? item.artist.join(", ")
//     : item.artist;

//   container.insertAdjacentHTML(
//     "beforeend",
//     `<div class="card" data-cat="${categories}">
//       <img src="${item.src}" alt="${item.alt || item.name}" />
//       <h2>${item.name || "Untitled"}</h2>
//       <h3>${artist}</h3>
//       <p>${item.published || ""}</p>
//     </div>`
//   );
// }

// /* -----------------------------
//    Modal (event delegation)
// ----------------------------- */
// function enableModal() {
//   const modal = document.getElementById("modal");

//   document.querySelector(".container").addEventListener("click", (event) => {
//     const card = event.target.closest(".card");
//     if (!card) return;

//     modal.querySelector("#modalImg").src =
//       card.querySelector("img").src;
//     modal.querySelector("#modalName").textContent =
//       card.querySelector("h2").textContent;
//     modal.querySelector("#modalArtist").textContent =
//       card.querySelector("h3").textContent;
//     modal.querySelector("#modalYear").textContent =
//       card.querySelector("p").textContent;

//     modal.classList.add("show");
//   });

//   modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       modal.classList.remove("show");
//     }
//   });
// }

// /* -----------------------------
//    Filtering
// ----------------------------- */
// function filterByCategory(category) {
//   const target = category.toLowerCase();

//   document.querySelectorAll(".card").forEach((card) => {
//     const cats = card.dataset.cat;
//     card.style.display =
//       target === "all" || cats.includes(target) ? "" : "none";
//   });
// }

// function setupFilterButtons() {
//   document.querySelectorAll(".filter__buttons").forEach((button) => {
//     button.addEventListener("click", () => {
//       filterByCategory(button.textContent.trim());
//     });
//   });
// }

// /* -----------------------------
//    Random Art of the Day
// ----------------------------- */
// function randomArtOfTheDay() {
//   const img = document.getElementById("artofDayImg");
//   if (!img || !artPieces.length) return;

//   const item = artPieces[Math.floor(Math.random() * artPieces.length)];
//   img.src = item.src || "";
//   img.alt = item.alt || item.title || "";
// }

// /* -----------------------------
//    DOM Ready
// ----------------------------- */
// document.addEventListener("DOMContentLoaded", () => {
//   // Use the defined artPieces array
//   artPieces.forEach(inject);

//   // also populate the #gallery if present
//   const galleryEl = document.getElementById("gallery");
//   if (galleryEl) injectGallery(artPieces);

//   enableModal();
//   setupFilterButtons();
//   randomArtOfTheDay();
//   filterByCategory("All");

//   //upload info
//   const uploadForm = document.getElementById("uploadForm");
//   const uploadName = document.getElementById("uploadName");
//   const uploadArtist = document.getElementById("uploadArtist");
//   const uploadYear = document.getElementById("uploadYear");

//   if (uploadForm) {
//     uploadForm.addEventListener("submit", (event) => {
//       event.preventDefault();

//       const fileInput = uploadForm.querySelector('input[type="file"]');
//       const file = fileInput ? fileInput.files[0] : null;
//       if (!file) return alert("Please select an image");

//       const newArt = {
//         name: (uploadName && uploadName.value) || "Untitled",
//         artist: (uploadArtist && uploadArtist.value) || "Unknown",
//         published: (uploadYear && uploadYear.value) || "",
//         src: URL.createObjectURL(file),
//         alt: (uploadName && uploadName.value) || "",
//         category: ["user upload"],
//       };

//       artPieces.push(newArt);
//       inject(newArt);
//       uploadForm.reset();
//     });
//   }

//   //theme toggle 
//   const toggleButton = document.getElementById("theme-toggle");
//   const body = document.body;

//   body.classList.add("warm");

//   if (toggleButton) {
//     toggleButton.addEventListener("click", () => {
//       if (body.classList.contains("warm")) {
//         body.classList.replace("warm", "cool"); // switch to dark
//       } else {
//         body.classList.replace("cool", "warm"); // switch to light
//       }
//     });
//   }
// });
