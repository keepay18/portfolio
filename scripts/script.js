const darkModeBtnEl = document.querySelector("button");
let theme = localStorage.getItem("theme") || "light";

darkModeBtnEl.addEventListener("click", function(){
    if(theme === "dark"){
        document.querySelector("body").classList.remove("dark");
        document.querySelector(".navbar").classList.remove("dark");
        document.getElementById("welcome-section").classList.remove("dark-border-bottom");
        document.getElementById("experience-section").classList.remove("dark-border-bottom");
        document.getElementById("skills-section").classList.remove("dark-border-bottom");
        document.getElementById("projects-section").classList.remove("dark-border-bottom");
        document.querySelector(".icon").classList.remove("icon-dark");
        theme = "light";
    }else{
        document.querySelector("body").classList.add("dark");
        document.querySelector(".navbar").classList.add("dark");
        document.getElementById("welcome-section").classList.add("dark-border-bottom");
        document.getElementById("experience-section").classList.add("dark-border-bottom");
        document.getElementById("skills-section").classList.add("dark-border-bottom");
        document.getElementById("projects-section").classList.add("dark-border-bottom");
        document.querySelector(".icon").classList.add("icon-dark");
        theme = "dark";
    }
    
    localStorage.setItem("theme",theme);
});



if (theme === "dark"){
    document.querySelector("body").classList.add("dark");
    document.querySelector(".navbar").classList.add("dark");
    document.getElementById("welcome-section").classList.add("dark-border-bottom");
    document.getElementById("experience-section").classList.add("dark-border-bottom");
    document.getElementById("skills-section").classList.add("dark-border-bottom");
    document.getElementById("projects-section").classList.add("dark-border-bottom");
    document.querySelector(".icon").classList.add("icon-dark");
}



/*

darkModeBtnEl.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "rgb(32,32,32)";
    document.querySelector("body").style.color = "white";
    document.getElementById("navbar").style.backgroundColor = "rgb(32,32,32)";
    document.getElementById("navbar").style.color = "white";
    document.getElementById("welcome-section").style.borderBottom = "2px solid white";
    document.getElementById("experience-section").style.borderBottom = "2px solid white";
    document.getElementById("skills-section").style.borderBottom = "2px solid white";
    document.getElementById("projects-section").style.borderBottom = "2px solid white";
});

*/