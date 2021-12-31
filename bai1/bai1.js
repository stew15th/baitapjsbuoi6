function timso() {
    var n = 0;
    var s = 0;
    while (s < 10000) {
        n++;
        s = s + n;
    }
    sum.innerText = "Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: " + n;
    sum1.innerText = "Tổng các số từ 1 đến " + n + " là: " + s;
}
