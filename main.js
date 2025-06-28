// Add your images here (add more if you want!)
const photos = [
  { src: "IMG_9753.jpeg", caption: "R2-C8 at the show" },
  { src: "IMG_9729.jpeg", caption: "Corvette & Astromech" },
  { src: "IMG_9227.jpeg", caption: "Night mode: Dragon's Breath" },
  { src: "IMG_9140.jpeg", caption: "Engine bay with red/black carbon" },
  { src: "IMG_9127.jpeg", caption: "Victor Racing GT3 Wing" }
];

const grid = document.getElementById('photoGrid');
photos.forEach(photo => {
  const div = document.createElement('div');
  div.className = "photo-card";
  div.innerHTML = `<img src="${photo.src}" alt=""><span>${photo.caption}</span>`;
  grid.appendChild(div);
});

// Register PWA service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}