# Mern-stack : Secured on the cloud

### Mern-stack is a Notes App created using MERN Stack, to help users store their notes, and access it anywhere anytime.

---

### Technologies Used:

#### Frontend:

- ReactJS
- Styling: [ Tailwind CSS ]
- UI: [ react-hot-toast ]
- Icons: [ react-icon ]
- axios

#### Backend:

- NodeJS
- ExpressJs
- MongoDb
- jsonwebtoken

---

## Getting Started with the Project

- Fork the Repository.
- Clone the Repository to your local Environment.

```js
run `git init` in your project directory
run `git clone Your_Repository_Link` ex.=> `git clone https://github.com/shahin-mahmud98/Dev_Notes.git`
```

- Run `npm run init` cpmmand in the root directory of the project (To install all the dependencies).
- Create a .env file in the "Backend" Folder.

```js
JWT_SIGNATURE = YOUR_JWT_SECRET
MONGO_URI = YOUR_MONGO_DB_URL
FRONTEND_DEV = VITE_APP_URL ` http://localhost/5000 `
FRONTEND =  Live Link

```

- Create a .env file in the "Frontend" Folder.

```js
VITE_HOST = ` https://web-app-mern-server.vercel.app `
In Development => ` https://web-app-mern-server.vercel.app ` (default:5000)
In Production  => YOUR_BACKEND_WEBSITE_LINK (afer deploying your backend)
```

- Run `npm run dev`

`Your App is live on YOUR_FRONTEND_PORT(3000) and server is running on YOUR_BACKEND_PORT(5000)`

---

### Update App according to you.

### Run the following commands

- Setup:
  - `git branch -M main`
  - `git remote add origin main`
  - `git checkout -m [new_update_branch_name]`
- Update or Add any functionality...
- Add and commit Your changes:
  - `git add .`
  - `git commit -m "YOUR_COMMIT_MESSAGE"`
  - `git push -u origin [new_update_branch_name]`

`You have Updated you Github Repository with these changes`

---

## Deploy the App

- Create an Accout on Vercel.com
- Connect your Github account
- Allow Your Repository access for vercel

### Create Frontend

- On Dashboard click NEW_PROJECT
- Select your repository
- Connect your github repository
- Choose root directory as FRONTEND
- Override output direcory to build.

#### Add details:

```js
Name : Web-app
Branch : main
Root Directory : Frontend
publish directory : build
```

- click deploy.
- Copy your newly created WEBSITE_URL it will needed in next step.

### Create Backend

- On Dashboard click NEW_PROJECT
- Select your repository
- Connect your github repository
- Choose root directory as BACKEND

```js
Add details:
APP Name : Web-app
Branch : main
Root Directory : BACKEND

**** Under Environment **** => create a environment variable

key   : FRONTEND, value : YOUR_FRONTEND_WEBSITE_URL (PASTE YOUR FRONTEND URL HERE),
key   : JWT_SIGNATURE, value : YOUR_JWT_SECRET,
key   : MONGO_URI, value : YOUR_MONGO_DB_URL,
key   : FRONTEND_DEV, value : ` https://web-app-mern-server.vercel.app `

```

- click deploy
- Copy your WEBSITE_URL
- Go to dashboard and go to your frontend app
- Under Environment => add enviromnment=> create a environment variable

```js
key: VITE_HOST;
value: YOUR_BACKEND_WEBSITE_URL;
```
---

##  website is live on Frontend Website Link.

