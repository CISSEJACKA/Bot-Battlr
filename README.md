# Bot Battlr

Bot Battlr is a React app where you can build and manage your own army of bots.

## Features

- View all bots.
- Enlist bots into your army.
- Release bots from your army.
- Discharge bots permanently.

### Prerequisites
- Node.js and npm installed.

### Installation

1. Clone the Repository

    git clone git@github.com:CISSEJACKA/Bot-Battlr.git


2. Install Dependencies
    npm install
    

3. Set Up JSON Server
    - Create a `db.json` file in the project root with the following content:
      
      {
        "bots": [
          {
            "id": 101,
            "name": "wHz-93",
            "health": 94,
            "damage": 20,
            "armor": 63,
            "bot_class": "Support",
            "catchphrase": "1010010101001101100011000111101",
            "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
          },
          {
            "id": 102,
            "name": "RyM-66",
            "health": 86,
            "damage": 36,
            "armor": 77,
            "bot_class": "Medic",
            "catchphrase": "0110011100000100011110100110011000011001",
            "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1"
          }
        ]
      }
      ```

4. Run JSON Server
    npx json-server db.json --port 8001
    

5. Start the React App
    npm start
    

## Usage

- View bots on the main page.
- Click a bot to enlist it into your army.
- Click a bot in your army to release it.
- Click the red "x" to discharge a bot permanently.

## License

MIT License



