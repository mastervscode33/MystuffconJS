function myfunction(){ 
    document.getElementById("nav1").style.width ="1600px";
    document.getElementById("nav1").style.left ="5%";
    document.getElementById("nav1").style.top ="0px";
    document.getElementById("nav1").style.borderRadius = "15px";
    document.getElementById("nav1").style.boxShadow = "0em 0em 0em";
    document.getElementById("menu.inline").style.fontSize = "30px";
}
function myfunction2(){
    document.getElementById("nav1").style.width ="100%";
    document.getElementById("nav1").style.left ="0";
    document.getElementById("nav1").style.top ="0px";
    document.getElementById("nav1").style.borderBottomLeftRadius ="15px";
    document.getElementById("nav1").style.borderBottomRightRadius ="15px";
        document.getElementById("nav1").style.boxShadow = " .1em .2em 0.1em";
}
window.addEventListener ("scroll",function(){

    if (window.pageYOffset>300) {
    document.getElementById ("tornasu").style.display= "block";
    }
    
    else if (window.pageYOffset<300) {
    document.getElementById ("tornasu").style.display= "none";
    }
    
    val[0].innerHTML= "PageYOffset = "+window.pageYOffset},!1);