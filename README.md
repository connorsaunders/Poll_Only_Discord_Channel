# Discord Poll Bot

This bot ensures that only messages starting with `/poll` are allowed in a specific channel of your Discord server. All other messages are automatically deleted to maintain the channel strictly for polls. (Currently hosted on AWS EC2)

## Setup and Installation

1. **Prerequisites**:
   - Ensure you have [Node.js](https://nodejs.org/) installed.
   - Install `discord.js` via npm (Node Package Manager):
     ```
     npm install discord.js
     ```

2. **Configuration**:
   - Replace `'---'` in the `TOKEN` constant with your Discord bot token.
   - Replace `'---'` in the `POLL_CHANNEL_ID` constant with the ID of the channel where you want to restrict messages to only polls.

3. **Running the Bot**:
   - Navigate to the bot's directory in your terminal.
   - Run the bot using:
     ```
     node yourfilename.js
     ```

## Usage

1. Once the bot is up and running, any message sent in the specified poll channel that does not start with `/poll` will be deleted automatically.
   
2. For creating polls, start your message with `/poll` followed by your poll details.

## Notes

- Ensure the bot has the necessary permissions in the specified channel to delete messages and read message content.
- This is a simple version and can be extended with additional features, such as creating embed polls, tallying votes, etc.

