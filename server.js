const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Mencegah Browser Caching agar perubahan file langsung dibaca oleh browser
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Menyediakan file statis (HTML, Foto, Video) di dalam folder proyek
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`Server SPPG Berjalan di http://localhost:${PORT}`);
  console.log(`Akses aplikasi via http://localhost:3000 di browser`);
  console.log(`===================================================`);
});
