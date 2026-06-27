// Data Interaktif Rantai Makanan (Ditambah Dekomposer)
const dataOrganisme = {
    'sayur': '🥬 <strong>Sayur (Produsen)</strong><br>Mengolah energi cahaya Matahari menjadi makanan melalui fotosintesis.',
    'siput': '🐌 <strong>Siput (Konsumen Tingkat 1)</strong><br>Kelompok hewan herbivora yang mendapatkan energi dengan memakan produsen (sayur).',
    'katak': '🐸 <strong>Katak (Konsumen Tingkat 2)</strong><br>Kelompok karnivora yang mendapatkan energi dengan memakan siput.',
    'ular': '🐍 <strong>Ular (Konsumen Tingkat 3 / Puncak)</strong><br>Kelompok karnivora yang mendapatkan energi dengan memangsa katak.',
    'jamur': '🍄 <strong>Jamur (Dekomposer/Pengurai)</strong><br>Menguraikan sisa makhluk hidup (bangkai ular/tumbuhan mati) menjadi nutrisi untuk tanah agar bisa diserap kembali oleh sayur.'
};

function showInfo(organisme) {
    const infoPanel = document.getElementById('organism-info');
    if (infoPanel) {
        infoPanel.innerHTML = dataOrganisme[organisme];
        infoPanel.style.backgroundColor = '#e8f5e9';
        infoPanel.style.borderLeftColor = '#4CAF50';
    }
}

// Data Interaktif Piramida Makanan
const dataPiramida = {
    'produsen': '🌱 <strong>Lantai 1: Produsen (Tumbuhan)</strong><br>Populasinya harus <strong>paling banyak</strong> dalam ekosistem. Mereka menyimpan 100% energi dari Matahari.',
    'herbivora': '🐌 <strong>Lantai 2: Konsumen Tingkat 1 (Herbivora)</strong><br>Populasinya lebih sedikit dari produsen. Hanya mendapat energi sebesar 10% dari lantai di bawahnya.',
    'karnivora': '🐸 <strong>Lantai 3: Konsumen Tingkat 2 (Karnivora)</strong><br>Populasinya lebih sedikit dari herbivora. Mendapat porsi energi yang semakin menyusut.',
    'puncak': '🦅 <strong>Lantai Puncak: Konsumen Tingkat 3</strong><br>Populasinya <strong>paling sedikit</strong>. Mereka mendapatkan sisa energi paling kecil dari rantai makanan.'
};

function showPyramidInfo(level) {
    const infoPanel = document.getElementById('pyramid-info');
    if (infoPanel) {
        infoPanel.innerHTML = dataPiramida[level];
        infoPanel.style.backgroundColor = '#e3f2fd';
        infoPanel.style.borderLeftColor = '#2196F3';
    }
}

// Kuis Keseimbangan Ekosistem (Revisi Studi Kasus KATAK)
function cekJawaban(jawaban) {
    const feedback = document.getElementById('quiz-feedback');
    if (feedback) {
        if (jawaban === 'benar') {
            feedback.className = 'feedback-panel correct';
            feedback.innerHTML = "✅ <strong>Benar!</strong> Jika katak dibunuh, populasi siput (hama) akan meningkat drastis karena tidak ada predatornya. Sebaliknya, populasi ular akan menurun karena kehilangan sumber makanan.";
        } else {
            feedback.className = 'feedback-panel incorrect';
            feedback.innerHTML = "❌ <strong>Kurang Tepat.</strong> Ingat, katak memakan siput. Jika pemangsa siput (katak) hilang, apa yang akan terjadi pada kebun?";
        }
    }
}

// Proyek Pemisahan Sampah Kompos
function cekSampah(jenis, namaBahan) {
    const feedback = document.getElementById('kompos-feedback');
    if (feedback) {
        if (jenis === 'hijau') {
            feedback.className = 'feedback-panel correct';
            feedback.innerHTML = `✅ <strong>${namaBahan}</strong> termasuk <strong>Sampah Hijau</strong><br>(Bahan kaya nitrogen. Contoh lain: buah segar, rumput segar, ampas kopi/teh).`;
        } else if (jenis === 'cokelat') {
            feedback.className = 'feedback-panel correct';
            feedback.innerHTML = `✅ <strong>${namaBahan}</strong> termasuk <strong>Sampah Cokelat</strong><br>(Bahan kaya karbon. Contoh lain: sekam padi, tangkai sayuran kering, kertas).`;
        }
    }
}

// Fitur Baru: Kuis Evaluasi Akhir
function cekEvaluasi(nomorSoal, jawaban) {
    const feedback = document.getElementById(`evaluasi-feedback-${nomorSoal}`);
    if (feedback) {
        if (jawaban === 'benar') {
            feedback.className = 'feedback-panel correct';
            if (nomorSoal === 1) {
                feedback.innerHTML = "✅ <strong>Tepat Sekali!</strong> Tanda panah menunjukkan arah aliran energi dari makhluk hidup yang dimakan ke makhluk hidup yang memakan.";
            } else if (nomorSoal === 2) {
                feedback.innerHTML = "✅ <strong>Luar Biasa!</strong> Produsen (seperti sayur) mendapatkan energi langsung dari Matahari dan harus memiliki jumlah paling banyak untuk menghidupi konsumen di atasnya.";
            }
        } else {
            feedback.className = 'feedback-panel incorrect';
            feedback.innerHTML = "❌ <strong>Jawaban Kurang Tepat.</strong> Ayo baca lagi materi di atas dan coba kembali!";
        }
    }
}
