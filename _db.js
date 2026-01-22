export const games = [
  {
    id: "1",
    title: "God of War",
    platform: ["PlayStation", "PC"]
  },
  {
    id: "2",
    title: "GTA V",
    platform: ["PlayStation", "Xbox", "PC"]
  },
  {
    id: "3",
    title: "Cyberpunk 2077",
    platform: ["PC", "PlayStation", "Xbox"]
  },
  {
    id: "4",
    title: "Minecraft",
    platform: ["PC", "PlayStation", "Xbox", "Mobile"]
  }
];

export const authors = [
  {
    id: "1",
    name: "John Doe",
    verified: true
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false
  },
  {
    id: "3",
    name: "Alex Johnson",
    verified: true
  }
];

export const reviews = [
  {
    id: "1",
    rating: 9,
    containt: "Amazing gameplay and story.",
    game_id: "1",
    author_id: "1"
  },
  {
    id: "2",
    rating: 8,
    containt: "Open world is huge and fun.",
    game_id: "2",
    author_id: "2"
  },
  {
    id: "3",
    rating: 7,
    containt: "Graphics are next level, but buggy.",
    game_id: "3",
    author_id: "3"
  },
  {
    id: "4",
    rating: 10,
    containt: "Best sandbox game ever made.",
    game_id: "4",
    author_id: "1"
  }
];


export default {games, authors, reviews};