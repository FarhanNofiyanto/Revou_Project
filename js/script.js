document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai input dari form
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validasi input
    if (isNaN(weight) || isNaN(height) || !gender) {
        alert('Silakan masukkan data yang valid.');
        return;
    }

    // Menghitung BMI
    const heightInMeters = height / 100; // Konversi tinggi badan ke meter
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Hitung BMI

    // Menentukan kategori BMI berdasarkan nilai BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Berat badan normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Kelebihan berat badan';
    } else if (bmi >= 30) {
        category = 'Kegemukan (Obesitas)';
    }

    // Menampilkan hasil di halaman
    document.getElementById('genderResult').textContent = `Jenis Kelamin: ${gender}`;
    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi}`;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;

    // Menampilkan div hasil
    document.getElementById('bmiResult').classList.remove('hidden');
});
