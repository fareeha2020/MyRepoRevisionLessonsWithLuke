// let age=27,isDriving=false,isOnMed=true;
// if(age<18 || isDriving || isOnMed){
//     console.log("nt allowed to drink")
// }else{
//     console.log("can drink");
// }
let opentime = 17;
let closetime = 22;
let currenttime = 18;
let isMonday = "Mnday";
if (currenttime > closetime || currenttime < opentime || isMonday == "Monday") {
    console.log(" restaurant is closed");
}
else {
    console.log("yes restaurant is open");
}
