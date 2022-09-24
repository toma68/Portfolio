fiche1 = document.getElementById("fiche1");
fiche2 = document.getElementById("fiche2");
fiche3 = document.getElementById("fiche3");
fiche4 = document.getElementById("fiche4");
fiche5 = document.getElementById("fiche5");


    window.addEventListener("scroll", function() {
        console.log(window.scrollY);
    if (window.scrollY > 100) {
        fiche1.style.opacity = "100%";
    } else {
        fiche1.style.opacity= "0%";
    }
    if (window.scrollY > 200) {
        fiche2.style.opacity = "100%";
    } else {
        fiche2.style.opacity= "0%";
    }
    if (window.scrollY > 300) {
        fiche3.style.opacity = "100%";
    } else {
        fiche3.style.opacity= "0%";
    }
    if (window.scrollY > 400) {
        fiche4.style.opacity = "100%";
    }
    else {
        fiche4.style.opacity= "0%";
    }
    if (window.scrollY > 500) {
        fiche5.style.opacity = "100%";
    }
    else {
        fiche5.style.opacity= "0%";
    }
});