function ktsnt(n) {
    if (n < 2) return false;
    if (n == 2) return true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function songuyento() {
    var n = document.getElementById("n").value * 1;
    if (n < 2) {
        sum.innerText = "Không có số nguyên tố nhỏ hơn 2";
    } else {
        for (var i = 2; i <= n; i++) {
            if (ktsnt(i) == true) {
                sum.innerText = "Số nguyên tố gần " + n + " nhất là " + i;
            }
        }
    }
}
