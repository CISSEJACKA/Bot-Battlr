# Bot-Battlr

Bot Battlr is a React application that allows users to browse, view details, enlist, and discharge bots from their army. The app fetches data from a local JSON server and provides sorting and filtering functionalities.

## Features

- View a collection of bots
- Enlist bots to your army
- Release bots from your army
- Discharge bots from the server
- Sort bots by health, damage, or armor
- Filter bots by class

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Start the JSON server: `json-server --watch db.json --port 8001`
5. Start the React app: `npm start`

## Endpoints

- GET /bots
- DELETE /bots/:id

## License

This project is licensed under the MIT License.
