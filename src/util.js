const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
    embed: () => {
        return new MessageEmbed()
            .setColor("#99AAB5");
    },
    durationToMillis: (dur) => {
        return dur.split(":").map(Number).reduce((acc, curr) => curr + acc * 60) * 1000;
    },
    millisToDuration: (ms) => {
        return prettyMilliseconds(ms, { colonNotation: true, secondsDecimalDigits: 0 });
    }
};
