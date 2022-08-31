let numberOfSeasons = 6;

let numberOfEpisodes = 12;

let episodeTime = 45;

let commercialTime = 5;

let tampon = (numberOfEpisodes * numberOfSeasons * episodeTime);

let totalShowTime = tampon - (tampon * commercialTime);

console.log(totalShowTime);

console.table(totalShowTime, commercialTime, tampon);