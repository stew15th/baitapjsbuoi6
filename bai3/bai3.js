function giaithua() {
    var n = document.getElementById("n").value * 1;
    var s = 1;
    var result = 0;
    for (var i = 1; i <= n; i++) {
        s *= i;
    }
    sum.innerText = "giai thừa của " + n + " là: " + s;
}
