document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman direfresh

    // Mengambil nilai dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // cm ke meter
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Silakan masukkan nilai berat dan tinggi yang valid.");
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menampilkan hasil
    const resultSection = document.getElementById('result');
    const bmiResult = document.getElementById('bmiResult');
    const bmiExplanation = document.getElementById('bmiExplanation');

    bmiResult.textContent = `BMI Anda adalah ${bmi.toFixed(2)}.`;
    bmiExplanation.textContent = generateExplanation(bmi, gender);

    resultSection.style.display = 'block';
});

function generateExplanation(bmi, gender) {
    let explanation = "";

    if (bmi < 18.5) {
        explanation = "Anda berada dalam kategori berat badan kurang.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        explanation = "Anda berada dalam kategori berat badan ideal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        explanation = "Anda berada dalam kategori berat badan berlebih.";
    } else {
        explanation = "Anda berada dalam kategori obesitas.";
    }

    return explanation;
}
