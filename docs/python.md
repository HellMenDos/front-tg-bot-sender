# Python
How to install ?
```pip
pip install tg-bot-sender
```
## Imports 
```python
from tg_bot_sender import Data, TelegramSender
```
## Getting started
The logs parameter indicates that logs are saved in json format
```python
tg = TelegramSender(telegramToken, logs = False)
```
Response structure
```json
{ "amount": 0 } // number of messages sent
```
## Options for sending messages
#### sendFromIds - sending to users
```python
tg.sendFromIds([...telegramUserIds], Data(
    text = 'Hello',
    photo = 'Photo link',
    buttons = [{
        buttonTitle: 'Hello',
        buttonUrl: 'https://google.com'
    }]
))
```
#### sendFromId - sending to the user
```python
tg.sendFromIds(telegramUserId, Data(
    text = 'Hello',
    photo = 'Photo link',
    buttons = [{
        buttonTitle: 'Hello',
        buttonUrl: 'https://google.com'
    }]
))
```
