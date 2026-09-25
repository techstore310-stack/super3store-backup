require('dotenv').config();

const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'super3store-v2' });
});

if (process.env.BOT_TOKEN) {
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.start((ctx) => ctx.reply('Super3Store V2 is running'));

  bot.launch().catch(console.error);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
