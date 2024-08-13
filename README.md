# vizh-react


## Requirements:
- NodeJS 20
- NPM 9
- Windows OS 10 or 11
  - Backend of project has been build for windows os only and for other OSes you need to download related executable file of backend.


## Project Structure

### Backend

The backend is serverless infrastructure. I have chosen [**PocketBase**](https://pocketbase.io/) due to its simplicity and effectiveness. PocketBase has been written with **Go** and uses **SQLite** as its DB.

To start the backend in the root of the repository folder run this command:

`npm run backend`

By starting the backend you will have two endpoints. the REST API endpoint and the Admin UI endpoint. You can enter the Admin UI endpoint in the browser and see the Admin panel of the PocketBase and interact with the DB data.

Admin UI credentials:
- Username: `test`
- Password: `qwsaqwsa1234`


### Frontend

The front-end of this project is Single Page Application (SPA) written with **TypeScript** & **ReactJS** library. I have used `vite` to setup and build the project & also have used `TailwindCSS` & `PostCSS` to manage the styling of the project. We don't have much data related to Client State (only the Authentication data), and for that, I have used `zustand` (while React Context could be fine too)

To start the front end project, you need to navigate to `nft-project` directory:
- `cd nft-project`

and then run :
- `npm run dev`

To build the project just run:
- `npm run build`

Also, this project uses ESLint to lint and format the codes.
