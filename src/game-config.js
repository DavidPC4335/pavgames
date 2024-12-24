//image imports
import finance from './images/games/finance.png';
import math from './images/games/math.png';
import gyb from './images/games/gyb.png';
import matter from './images/games/matter.png';
import matterpt2 from './images/games/matterpt2.png';
import light from './images/games/light.png';
import lightpt2 from './images/games/lightpt2.png';
import physics from './images/games/physics.png';
import wurdle from './images/games/wurdle.png';
import pointOfView from './images/games/point-of-view.png';
import rightWord from './images/games/right-word.png';
import _2040shape from './images/games/2040shape.png';
import authorsPurpose from './images/games/authors-purpose.png';
import rounding from './images/games/rounding.png';
import apostrophe from './images/games/apostrophe.png';
import habitats from './images/games/habitats.png';
import habitatspt2 from './images/games/habitatspt2.png';
import worlder from './images/games/worlder.png';


export const gameData = {
    finance: {
        title: "Financial Literacy",
        name: "finance",
        description: "This is a finance game.",
        url: "https://pavgames-finance.netlify.app",
        isEducational: true,
        img: finance,
    },
    math: {
        name: "math",
        title: "Math",
        description: "This is a math game.",
        url: "https://pavgames-math.netlify.app",
        isEducational: true,
        img: math,
    },
    gyb: {
        name: "gyb",
        title: "Grippy Yellow Ball",
        description: "This is a game about a yellow ball.",
        url: "https://grippyyellowball.netlify.app",
        isEducational: false,
        img: gyb,
    },
    matter: {
        name: "matter",
        title: "Matter",
        description: "This is a game about matter.",
        url: "https://pavgames-matter.netlify.app",
        isEducational: true,
        img: matter,
    },
    matterpt2: {
        name: "matterpt2",
        title: "Matter Part 2",
        description: "This is a game about matter.",
        url: "https://pavgames-matterpt2.netlify.app",
        isEducational: true,
        img: matterpt2,
    },
    light: {
        name: "light",
        title: "Light",
        description: "This is a game about light.",
        url: "https://pavgames-light.netlify.app",
        isEducational: true,
        img: light,
    },
    lightpt2: {
        name: "lightpt2",
        title: "Light Part 2",
        description: "This is a game about light.",
        url: "https://pavgames-lightpt2.netlify.app",
        isEducational: true,
        img: lightpt2,
    },
    physics: {
        name: "physics",
        title: "Physics",
        description: "This is a physics game.",
        url: "https://pavgames-physics.netlify.app",
        isEducational: false,
        img: physics,
    },
    wurdle: {
        name: "wurdle",
        title: "Wurdle",
        description: "This is a word game.",
        url: "https://wurdle.netlify.app",
        isEducational: true,
        img: wurdle,
    },
    pointOfView: {
        name: "pointOfView",
        title: "Point of View",
        description: "This is a game about point of view.",
        url: "https://pavgames-point-of-view.netlify.app",
        isEducational: true,
        img: pointOfView,
    },
    rightWord: {
        name: "rightWord",
        title: "Right Word",
        description: "This is a game about using the right word.",
        url: "https://pavgames-right-word.netlify.app",
        isEducational: true,
        img: rightWord,
    },
    _2040shape: {
        name: "_2040shape",
        title: "2040 Shape",
        description: "This is a game about shapes.",
        url: "https://pavgames-2040shape.netlify.app",
        isEducational: false,
        img: _2040shape,
    },
    authorsPurpose: {
        name: "authorsPurpose",
        title: "Author's Purpose",
        description: "This is a game about author's purpose.",
        url: "https://pavgames-authors-purpose.netlify.app",
        isEducational: true,
        img: authorsPurpose,
    },
    rounding: {
        name: "rounding",
        title: "Rounding",
        description: "This is a game about rounding.",
        url: "https://pavgames-rounding.netlify.app",
        isEducational: true,
        img: rounding,
    },
    apostrophe: {
        name: "apostrophe",
        title: "Apostrophe",
        description: "This is a game about using the apostrophe.",
        url: "https://pavgames-apostrophe.netlify.app",
        isEducational: true,
        img: apostrophe,
    },
    habitats: {
        name: "habitats",
        title: "Habitats",
        description: "This is a game about habitats.",
        url: "https://pavgames-habitats.netlify.app",
        isEducational: true,
        img: habitats,
    },
    habitatspt2: {
        name: "habitatspt2",
        title: "Habitats Part 2",
        description: "This is a game about habitats.",
        url: "https://pavgames-habitatspt2.netlify.app",
        isEducational: true,
        img: habitatspt2,
    },
    worlder: {
        name: "worlder",
        title: "Worlder",
        description: "This is a game about the world.",
        url: "https://worlders.netlify.app",
        isEducational: true,
        img: worlder,
    },
    
}
/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {

    const cards = Object.keys(gameData).map((key, index) => {
      const game = gameData[key];
      return game;
    });
  
    // Shuffle array
    return cards.sort(() => Math.random() - 0.5).slice(0, 16);
  };
export const gameCategories = {
    Explore:getRandomCards(),
    Language: [
        gameData.wurdle,
        gameData.pointOfView,
        gameData.rightWord,
        gameData.authorsPurpose,
        gameData.apostrophe,
    ],
    Math:[
        gameData.math,
        gameData.rounding,
        gameData._2040shape,
        gameData.finance
    ],
    Science: [
        gameData.matter,
        gameData.matterpt2,
        gameData.light,
        gameData.lightpt2,
        gameData.physics,
        gameData.habitats,
        gameData.habitatspt2,
    ],
    Others: [
        gameData.finance,
        gameData.gyb,
        gameData.worlder,
        gameData.physics,
    ]
}

export const getEmptyGameData = () => {
    return {gameData:[
        {
            game:'finance',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'math',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'gyb',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'matter',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'matterpt2',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'light',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'lightpt2',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'physics',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'wurdle',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'pointOfView',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'rightWord',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'_2040shape',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'authorsPurpose',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'rounding',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'apostrophe',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'habitats',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'habitatspt2',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
        {
            game:'worlder',
            playtime:0,
            achievements:0,
            lastPlayed: null,
        },
    ]};
}