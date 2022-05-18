function hitung(op) {
    var a1 = parseFloat(document.getElementById('ang1').value);
    var a2 = parseFloat(document.getElementById('ang2').value);

    if (isNaN(a1) || isNaN(a2)) {
        reset();
    } else {
        var hasil;

        if (op == '+') {
            hasil = a1 + a2;
        } else if (op == '-') {
            hasil = a1 - a2;
        } else if (op == '*') {
            hasil = a1 * a2;
        } else if (op == '/') {
            hasil = a1 / a2;
        } else if (op == '%') {
            hasil = a2 / a1 * 100;
        } else if (op == '^') {
            hasil = a1**a2;
        } else if (op == 'mod') {
            hasil = a1%a2;
        } else {
            hasil = 0;
            op = '?';
        }

        document.getElementById('row_hasil').style.display = '';
        document.getElementById('hasil').innerHTML =  +hasil;
        alert('Hasil : ' + hasil);
    }
}

function reset() {
    document.getElementById("ang1").value = "";
    document.getElementById("ang2").value = "";
    document.getElementById('row_hasil').style.display = '';
}