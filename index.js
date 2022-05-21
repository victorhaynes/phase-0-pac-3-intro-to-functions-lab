function shout(string){
    //TBD
    return string.toUpperCase();
}

function whisper(string){
    //TBD
    return string.toLowerCase();
}

function logShout(string){
    //TBD
     console.log(string.toUpperCase());
}

function logWhisper(string){
    //TBD
     console.log(string.toLowerCase());
}
/*
function sayHiToHeadPhonedRoomate(string){
    if (string === string.toLowercase())
    console.log("I can't hear you!")
} else if (string === string.UpperCase()) {
    console.log("YES INDEED!")
} else if (string === "Let/'s have dinner together!"){
    console.log("I would love to!")
}
*/

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return("I can\'t hear you!")
    } else if (string === string.toUpperCase()){
        return("YES INDEED!")
    } else if (string === "Let\'s have dinner together!"){
        return("I would love to!")
    }
}