document.getElementById("formulir").addEventListener('submit', function(e){
    e.preventDefault();
    let berat=parseFloat(document.getElementById('berat').value);
    let tinggi=parseFloat(document.getElementById('tinggi').value)/100;
    let bmi=berat/(tinggi*tinggi);
    bmi=bmi.toFixed(1);
    let hasil='';

    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        hasil = 'Please enter valid numbers greater than 0 for both weight and height.';
    } 
    else if (berat < 20 || berat > 300 || tinggi < 0.5 || tinggi > 2.5) {
        hasil = 'Please enter realistic values for weight and height.';
    } 
    else {
        let bmi = berat / (tinggi * tinggi);
        bmi = bmi.toFixed(1);

        if (bmi < 18.5) {
            hasil = 'Your BMI is ' + bmi + '. which means you are Underweight.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            hasil = 'Your BMI is ' + bmi + '. which means you are Normal Weight.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            hasil = 'Your BMI is ' + bmi + '. which means you are Over Weight.';
        } else {
            hasil = 'Your BMI is ' + bmi + '. which means you are Obesity.';
        }
    }
    document.getElementById('hasil').textContent=hasil;
});
