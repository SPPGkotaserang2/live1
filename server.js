const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Menyediakan file statis di dalam folder proyek
app.use(express.static(__dirname));

// API Endpoint untuk memindai file media di folder secara otomatis
app.get('/api/media', (req, res) => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Gagal membaca folder' });
    }

    // Filter file berdasarkan nama dan formatnya
    const fullVideos = files.filter(f => /^videofull.*\.(mp4|webm|mkv)$/i.test(f)).sort();
    const normalVideos = files.filter(f => /^[0-9]+\.(mp4|webm|mkv)$/i.test(f)).sort();
    const dapurPhotos = files.filter(f => /^dpr.*\.(jpg|jpeg|png|webp)$/i.test(f)).sort();
    const distribusiPhotos = files.filter(f => /^[0-9]+\.(jpg|jpeg|png|webp)$/i.test(f)).sort();

    res.json({
      fullVideos,
      normalVideos,
      dapurPhotos,
      distribusiPhotos
    });
  });
});

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`Server SPPG Berjalan di http://localhost:${PORT}`);
  console.log(`Tambahkan media baru ke folder tanpa perlu refresh browser!`);
  console.log(`===================================================`);
});