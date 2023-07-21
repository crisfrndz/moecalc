function compMoe() {
    let z = parseFloat(document.getElementById("z").value);
    let p = parseFloat(document.getElementById("p").value);
    let s = parseFloat(document.getElementById("s").value);
    let n = parseFloat(document.getElementById("n").value);

    if (p == 0) {
        let moe = z * s / Math.sqrt(n);
        let moepercent = moe * 100;
        alert("Margin of error: " + moe.toFixed(3) + "\nPercentage: " + moepercent.toFixed(2) + "%");
        document.getElementById("xmoe1").innerHTML = "MOE: " + moe.toFixed(3);
        document.getElementById("perc1").innerHTML = "Percentage: " + moepercent.toFixed(2) + "%"; 
        document.getElementById("solution1").style.display = "block";
        document.getElementById("solution2").style.display = "none";
        document.getElementById("zz1").innerHTML = z;
        document.getElementById("ss1").innerHTML = s;
        document.getElementById("nn1").innerHTML = n;

    } else if (p > 0) {
        let moe = z * Math.sqrt((p * (1 - p)) / n);
        let moepercent = moe * 100;
        alert("Margin of error: " + moe.toFixed(3) + "\nPercentage: " + moepercent.toFixed(2) + "%");
        document.getElementById("solution2").style.display = "block";
        document.getElementById("solution1").style.display = "none";
        document.getElementById("xmoe2").innerHTML = "MOE: " + moe.toFixed(3);
        document.getElementById("perc2").innerHTML = "Percentage: " + moepercent.toFixed(2) + "%"; 
        document.getElementById("zz2").innerHTML = z;
        document.getElementById("pp1").innerHTML = p;
        document.getElementById("pp2").innerHTML = p;
        document.getElementById("nn2").innerHTML = n;

    } else {
        alert("Invalid, please try again");
    }
}
