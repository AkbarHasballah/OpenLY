const button = document.getElementById('ambilData');
const hasil = document.getElementById('hasil');

// Fungsi untuk mengambil data dari API
async function ambilDataDariAPI() {
    try {
        const response = await fetch('https://asia-southeast2-bustling-walker-340203.cloudfunctions.net/function-GetGeoJson');
        const data = await response.text(); // Menggunakan response.text() untuk mengambil teks respons

        // Tampilkan data di dalam elemen hasil
        hasil.innerHTML = `<p>Data dari API: ${data}</p>`;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        hasil.innerHTML = '<p>Terjadi kesalahan saat mengambil data dari API.</p>';
    }
}

// Menambahkan event listener pada tombol untuk mengambil data dari API
button.addEventListener('click', ambilDataDariAPI);