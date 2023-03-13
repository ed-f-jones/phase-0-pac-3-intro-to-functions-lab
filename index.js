function shout(voice) {
return voice.toUpperCase("Hello")
}

function whisper(voice) {
    return voice.toLowerCase("HELLO")
}

function logShout (voice) {
    return console.log(voice.toUpperCase("Hello"))
}

function logWhisper(voice) {
    return console.log(voice.toLowerCase("HELLO"))
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else if( string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if ("Let's have dinner together!") {
        return "I would love to!"
    }
}

