// Dynamically load all IMG_*.jpeg files from the gfx/Gallery folder
const photoFilenames = [
  "IMG_9753.jpeg",
  "IMG_9736.jpeg",
  "IMG_9729.jpeg",
  "IMG_9421.jpeg",
  "IMG_9342.jpeg",
  "IMG_9226.jpeg",
  "IMG_9154.jpeg",
  "IMG_9149.jpeg"
];

const photos = photoFilenames.map(filename => ({
  src: `gfx/Gallery/${filename}`,
  caption: filename
}));

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