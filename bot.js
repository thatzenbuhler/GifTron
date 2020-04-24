// GifTron, a Discord bot meant for calling gif queries and displaying random results.
// Created by Tyler Hatzenbuhler 2020

'use:strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const axios = require('axios');

const gifListSize = 25;

function getRandomInt(min, max) { // Min inclusive, max exclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

async function searchGifs(searchTerm) {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const res = await axios.get(url, {
        params: {
            api_key: auth.giphyToken,
            limit: gifListSize,
            q: searchTerm,
            lang: 'en',
            offset: 0,
            rating: 'R'
        }
    });
    return res.data.data;
}

client.on('ready', () => {
    console.log('Logged in as ' + client.user.username + '.');
});

client.on('message', msg => {
    let args = msg.content.split(' ');

    if (args.length == 2 && args[0] == '!gif') {
        const gifs = searchGifs(args[1]);
        const rnd = getRandomInt(0, gifListSize)
        gifs.then((data) => {
            console.log(data[rnd]);
        }).catch(any => {
            console.log('Promise rejected: ' + any);
        })
    }
});

client.login(auth.discordToken);