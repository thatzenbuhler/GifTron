# GifTron: a Discord Bot for GIF Reactions

Welcome to GifTron, a simple Discord bot that can react in gifs to a simple command! All you have to do is type the
following command into the chat when the bot is running in your server:

```
!gif <search_query>
```

The bot will then react to the query with a randomly chosen gif from the search results.

## Important!
In order for this bot to work, you must create a file in the same directory called auth.json with the following format:
```json
{
    "discordToken": "YOUR_DISCORD_API_TOKEN",
    "giphyToken": "YOUR_GIPHY_API_TOKEN"
}
```

### Functionality
Currently works by pasting the gif URL into the channel, which should create a live preview.
Only works with one-word queries currently.