// Dynamically load all IMG_*.jpeg files from the gfx/Gallery folder
const photos = [
  { src: "gfx/Gallery/IMG_9736.jpeg", caption: "R2-C8 with Neil Armstrong's Corvette!" },
  { src: "gfx/Gallery/IMG_9729.jpeg", caption: "R2 with an F-14 Tomcat" },
  { src: "gfx/Gallery/IMG_9421.jpeg", caption: "R2-C8 Visits Old Town Kissimmee" },
  { src: "gfx/Gallery/IMG_9342.jpeg", caption: "A Peek at the \"Engine\"" },
  { src: "gfx/Gallery/IMG_9154.jpeg", caption: "Southern R2 Builder's Club Challenge Coin" },
  { src: "gfx/Gallery/IMG_9149.jpeg", caption: "R2-C8 riding shotgun in the C8" }
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