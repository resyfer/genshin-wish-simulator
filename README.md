# Genshin Impact Wish Simulator

![img](https://img.shields.io/github/license/resyfer/genshin-wish-simulator?color=blueviolet) ![img](https://img.shields.io/badge/Status-Work%20In%20Progress-orange) ![img](https://img.shields.io/badge/Stack-MERN-4722df)

My Simulator for Genshin Impact's probability driven Gacha Wish System

Visit the [instructions on development setup](#development)

Frontend : [![img](https://img.shields.io/badge/Status-Work%20In%20Progress-orange)](https://genshin-wish-simulator.vercel.app/)

Backend API Calls :
- `GET` `https://resyfer-genshin-wish-sim.herokuapp.com/api/v1/all` : To view all items available through Gacha
- `GET` `https://resyfer-genshin-wish-sim.herokuapp.com/api/v1/one` : To make a 1 pull
- `GET` `https://resyfer-genshin-wish-sim.herokuapp.com/api/v1/ten` : To make a 10 pull


**NOTE**: The current rates for the characters or items are for the banner `Adrift In The Harbor`

![banner](https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ffb27a5258e6bccfc4b158a%2FGanyu%2F960x0.jpg%3Ffit%3Dscale)

Rate-Ups :
- 5⭐ Characters : `Ganyu`
- 4⭐ Characters : `Noelle`, `Xingqiu`, `Xiangling`

Getting a 5⭐ character has a 0.6% chance (`Ganyu` has a 50% chance given it's a 5⭐), while getting a 4⭐ has a 5.1% chance (`Noelle`, `Chongyun` and `Xiangling` have a 50% chance total given it's a 4⭐, and they have an equal chance of occuring).

Moreover, there's a guaranteed 5⭐ in every 90 pulls from the previous 5⭐, and a guaranteed 4⭐ in every 10 pulls from the previous 4⭐. If, in the event of getting a 5⭐ or a 4⭐ that is not a rate-up character, the next 5⭐ or 4⭐ respectively and separately will be a guaranteed rate-up.

## Development

i) Clone the project, and install the dependencies
```
git clone https://github.com/resyfer/genshin-wish-simulator.git
cd genshin-wish-simulator
cd server && npm i
cd ..
cd client && npm i
```

ii) Environment Variables

Make a copy of `.env.example` and rename it as `.env` and enter your own MongoDB database below the existing content as:
```
MONGO_URI = YOUR_MONGODB_URL_HERE
```

iii) Run the project
Open two terminal tabs and cd into the project in both

- Tab 1:
```
cd server
npm run dev
```

- Tab 2:
```
cd client
npm start
```

(Ask for `.env` from author if authorized)

![img](https://img.shields.io/tokei/lines/github/resyfer/genshin-wish-simulator) ![img](https://img.shields.io/github/repo-size/resyfer/genshin-wish-simulator)
