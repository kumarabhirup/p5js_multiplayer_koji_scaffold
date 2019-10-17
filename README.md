# `📦 p5.js Multiplayer Scaffold`

Start your day with some multiplayer gaming p5.js juice!

## 😃 Getting Started

Main code is in *frontend/app/index.js*

I've provided comments in the most important parts of the code, so you don't get lost.

Feel free to modify anything, upgrade the game, add more stuff!

## 💥 About The Game

This is a multiplayer game scaffold that uses `@withkoji/dispatch`.

## ⚒️ Customizations

Things that can be customized:

### Colors

- Many colors are already set for you. Just use them in code.

- Color names here.

### Images

- Many images are already set for you. Just use them in code.

- Put all your Image names here.

### Sounds

- Many sounds are already set for you. Just use them in code.

- Put your Sound names here.

### Game Settings

- Many strings are already set for you. Just use them in code.

- Put your game settings here.

## 📖 Notes

Avoid resizing the game window while playing, weird stuff happens.

Few Koji Visual Customization Controls are already there for you to use. They were put together by @Svarog on Koji platform.

## ☕ For developers

### For using the `with-arena` branch

> Note*: The with-arena branch has the arena with moving players. Also a character picker is made available in that branch.

- Remix the p5.js Scaffold

- Run the following commands in the terminal

```bash
$ git checkout with-arena
$ git merge --strategy=ours master
$ git checkout master
$ git merge with-arena
$ git commit -m "The Mega Merge"
$ git branch -d with-arena
$ git push origin master
```

- If something doesn't work after following these steps, kill all processes and do `$ npm i` in both the `frontend` and `backend` directories.

- Then start both the containers again. Take a look at `package.json` to see what command starts the dev server.

### For setting scores, use the following code snippet 👇

```js
window.setScore(score)
window.setAppView('setScore')
```

Similarly, the app view can be set to `game`, `mainMenu` and so on.

### Develop locally

- Developing locally on VSCode gives you perks of ESLint and Prettier and having them lint code automatically is fun!

- Just do `git clone <REMOTE_GIT_URL> <PROJECT_NAME>`

- Then do `$ npm i` in the `frontend` and `backend` directories.

- Now, run the `$ env` command in the online Koji editor terminal and copy the result.

- Create `.env` file in the root directory of the project and paste the content in it. Now, your environment variables will be filled with the necessary tokens needed to run the Leaderboard.

- Run `$ npm start` and `$ npm run start-dev` in the `frontend` and `backend` directories respectively.

- That's how you get your local dev environment.

- As per now, there are problems with Leaderboard working locally. But you don't have to worry as Leaderboard will always work when you deploy your changes.

### Save to GitHub

- Create a New Repository

- Run the following commands Local Terminal or on Online Koji Editor terminal

```bash
$ git remote add github https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git
$ git push -u github master
```

- And now everytime you make changes, do the following

```bash
$ git add .
$ git commit -m "Save changes"
$ git push origin master
$ git push github master
```

- On GitHub, for better development processes, you are advised to use Branches and Pull Requests instead of directly commiting to master. Learn more [here](https://guides.github.com/).

### Deploying the changes made locally

- Run the following commands

```bash
$ git add .
$ git commit -m "Save changes"
$ git push origin master
$ git push github master # <- only if you also maintain a GitHub Repository
```

- Now open the online Koji Editor and get the changes you made by running the following command 👉 `$ git pull origin master`

- To officially deploy your project, you can **Publish the project using the Koji GUI**.

## 🤙 Wanna contribute❓

Just shoot a Pull Request at [the official GitHub repository of this game 📦](https://github.com/KumarAbhirup/p5js_multiplayer_koji_scaffold)

Or follow me and DM on [Twitter @kumar_abhirup](https://twitter.com/kumar_abhirup) 🙌

Or hit me up on Koji's official Discord server, username: kumar_abhirup 🌱

## 📝 Licence

**GPL © [Kumar Abhirup](https://kumar.now.sh)**

_Follow me 👋 **on Twitter**_ →   [![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup)

## Credits for assets

OpenGameArt 👉 [https://opengameart.org](https://opengameart.org)

If you see your assets being used without your permission, DM me for getting credited or remove the asset altogether!
