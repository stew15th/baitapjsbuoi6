function indiv() {
    var divs = document.getElementsByClassName("btn");
    for (var i = 0; i < divs.length; i++) {
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
            divs[i].style.color = "white";
        } else {
            divs[i].style.background = "blue";
            divs[i].style.color = "white";
        }
    }
}
