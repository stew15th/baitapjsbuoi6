function tinhtong() {
    var x = document.getElementById("x").value * 1;
    var n = document.getElementById("n").value * 1;
    var luythua = 1;
    var s = 0;
    for (i = 1; i <= n; i++) {
        luythua = luythua * x;
        s += luythua;
        sum.innerText = "Tổng x+x^2+...+x^n: " + s;
    }
}
