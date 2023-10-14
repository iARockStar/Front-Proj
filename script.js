function navfunct(){
    const atag1 = document.querySelector("#first");
    const atag2 = document.querySelector("#second");
    const atag3 = document.querySelector("#third");
    atag1.style.visibility = "visible";
    atag2.style.visibility = "visible";
    atag3.style.visibility = "visible";
    
    const navpage = document.querySelector("#mobilenav");
    navpage.style.visibility = "visible";
    navpage.style.height = "85vh";
    navpage.style.width = "100%";
    navpage.style.padding = "130px 0px 0px 0px";

    const hamburger = document.querySelector("#hambergur");
    const closebtn = document.querySelector("#closebtn");
    hamburger.style.visibility = "hidden";
    closebtn.style.visibility = "visible";
    closebtn.style.width = "35px";
    hamburger.style.width = "0px";
    closebtn.style.height = "38px";
    hamburger.style.height = "0px";
    closebtn.style.flexBasis = "50%";
    hamburger.style.flexBasis = "0%";
    closebtn.style.margin = "0px 0px 0px 65%";
    hamburger.style.margin = "0px 0px 0px 0%";

}

function closefunct(){
    const atag1 = document.querySelector("#first");
    const atag2 = document.querySelector("#second");
    const atag3 = document.querySelector("#third");
    atag1.style.visibility = "hidden";
    atag2.style.visibility = "hidden";
    atag3.style.visibility = "hidden";
    
    const navpage = document.querySelector("#mobilenav");
    navpage.style.visibility = "hidden";
    navpage.style.height = "0";
    navpage.style.width = "0";
    navpage.style.padding = "0px 0px 0px 0px";

    const hamburger = document.querySelector("#hambergur");
    const closebtn = document.querySelector("#closebtn");
    hamburger.style.visibility = "visible";
    closebtn.style.visibility = "hidden";
    closebtn.style.width = "0px";
    hamburger.style.width = "35px";
    closebtn.style.height = "0px";
    hamburger.style.height = "38px";
    closebtn.style.flexBasis = "0%";
    hamburger.style.flexBasis = "50%";
    closebtn.style.margin = "0px 0px 0px 0%";
    hamburger.style.margin = "0px 0px 0px 65%";
}