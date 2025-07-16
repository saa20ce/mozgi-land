import os
from telegram import Bot
from dotenv import load_dotenv

load_dotenv()

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
TELEGRAM_CHAT_IDS = os.getenv("TELEGRAM_CHAT_IDS")
chat_ids = TELEGRAM_CHAT_IDS.split(',')

async def send_telegram_message(text):
    if not TELEGRAM_TOKEN or not TELEGRAM_CHAT_IDS:
        return

    bot = Bot(token=TELEGRAM_TOKEN)

    for chat_id in chat_ids:
        await bot.send_message(chat_id=chat_id.strip(), text=text)