function changeImg1() {
    var img = document.getElementById("img1");
    var sel = document.getElementById("select1");

    if (sel.value == "sunburst") {
        img.src = "stratosunburst.png";
    }
    else if (sel.value == "white") {
        img.src = "stratowhite.png";
    }
    else if (sel.value == "black") {
        img.src = "stratoblack.png";
    }
}

function changeImg2() {
    var img = document.getElementById("img2");
    var sel = document.getElementById("select2");

    if (sel.value == "sunburst") {
        img.src = "telesunburst.png";
    }
    else if (sel.value == "white") {
        img.src = "telewhite.png";
    }
    else if (sel.value == "black") {
        img.src = "teleblack.png";
    }
    else if (sel.value == "butter") {
        img.src = "telebutter.png";
    }
}