function ktsnt(n) {
    if (n < 2) return false;
    if (n == 2) return true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
var result = " ";
function songuyento() {
    var n = document.getElementById("n").value * 1;
    if (n < 2) {
        sum.innerText = "Không có số nguyên tố nhỏ hơn 2";
    } else {
        for (var i = 2; i <= n; i++) {
            if (ktsnt(i) == true) {
                result += i + " ";
            }
        }
    }
    var resultel = document.getElementById("bai5result");
    resultel.innerHTML =
        "<div>Dãy số nguyên tố gần " + n + " nhất là: " + result + "</div>";
}
