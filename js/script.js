function hitung() {

    const beratBadan = parseFloat(document.getElementById("berat-badan").value);
    const tinggiBadanCm = parseFloat(document.getElementById("tinggi-badan").value);

    if (isNaN(beratBadan) || isNaN(tinggiBadanCm) || beratBadan <= 0 || tinggiBadanCm <= 0) {
        alert("Masukkan nilai berat badan dan tinggi badan yang valid.");
        return;
    }

    const tinggiBadanM = tinggiBadanCm / 100;
    const bmi = (beratBadan / (tinggiBadanM * tinggiBadanM)).toFixed(2);

    let kategori = "";
    let pesan = "";

    if (bmi < 18.5) {
        kategori = "Kekurangan Berat Badan";
        pesan = "Anda berada dalam kategori kekurangan berat badan. Disarankan untuk berkonsultasi dengan ahli gizi untuk mendapatkan pola makan yang sehat guna mencapai berat badan ideal.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = "Normal (Ideal)";
        pesan = "Selamat! Berat badan Anda berada dalam kategori normal atau ideal. Untuk mempertahankan berat badan ini, jaga pola makan seimbang dan aktif bergerak secara rutin. Pastikan untuk tetap memantau berat badan agar tidak berpindah ke kategori lain yang berisiko bagi kesehatan.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        kategori = "Kelebihan Berat Badan";
        pesan = "Anda berada dalam kategori kelebihan berat badan. Disarankan untuk mengatur pola makan yang sehat, menghindari makanan tinggi lemak dan gula, serta meningkatkan aktivitas fisik untuk menurunkan berat badan.";
    } else {
        kategori = "Obesitas";
        pesan = "Anda berada dalam kategori obesitas. Menurunkan berat badan ke kategori normal sangat dianjurkan untuk mencegah risiko penyakit serius seperti diabetes, hipertensi, dan penyakit jantung. Atur pola makan, hindari makanan tinggi kalori, dan lakukan olahraga secara teratur. Konsultasi dengan dokter atau ahli gizi juga sangat disarankan.";
    }

    document.getElementById("hasilBMI").innerText = `BMI Anda: ${bmi}`;
    document.getElementById("tampilkan2").innerText = `Kategori: ${kategori}`;
    document.getElementById("tampilkan3").innerText = `Nilai BMI Anda adalah ${bmi}, yang termasuk dalam kategori ${kategori}.`;
    document.getElementById("tampilkan4").innerText = pesan;
}

function reset() {
    location.reload(); 
}
