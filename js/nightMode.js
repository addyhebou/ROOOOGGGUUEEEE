// var moon = document.getElementById("moon");
// var moon = {
//     name = "moon"
// }
function shiftColorsToNight() {
    // if (this.name == "moon"){
        document.getElementById("bckgrnd").style.backgroundColor = "black";
        document.getElementById("whiteLogo").style.display = "block";
        document.getElementById("sun").style.display = "block";
        console.log("sun display");
        document.getElementById("whiteMenuPic").style.display = "block";
        console.log("whitepic display");

    // }
}
function shiftColorsToDay() {
    // if (this.name == "moon"){
        document.getElementById("bckgrnd").style.backgroundColor = "white";
        document.getElementById("whiteLogo").style.display = "none";
        document.getElementById("sun").style.display = "none";
        document.getElementById("whiteMenuPic").style.display = "none";

    // }
}