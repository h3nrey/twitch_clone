import { Card } from '@/Components/Browse/CategoryCard'

const categoriesIconUrl = "https://static-cdn.jtvnw.net/c3-vg/verticals/"
export const categories = [
  {
    icon: `${categoriesIconUrl}gaming.svg`,
    title: 'Games',
    description: "Live streams of all your favorite games, from shooters to platformers and everything in between"
  },
  {
    icon: `${categoriesIconUrl}irl.svg`,
    title: 'IRL',
    description: "The home for everything from working out to exploring the world to chatting and beyond!"
  },
  {
    icon: `${categoriesIconUrl}music.svg`,
    title: 'Music',
    description: "Your favorite artists and all the best live performances, music production, and special events"
  },
  {
    icon: `${categoriesIconUrl}esports.svg`,
    title: 'Esports',
    description: "Live tournaments, match highlights, and your favorite pro players all in one place"
  },
  {
    icon: `${categoriesIconUrl}creative.svg`,
    title: 'Creative',
    description: "A place to share creativity through painting, cooking, programming, and more!"
  },
]

export const gamesGenre = [
  "Plataform", 
  "Action",
  "Adventure",
  "Open World",
  "FPS",
  "Pinball",
  "RPG",
  "Puzzle",
  "Horror",
  "Indie",
  "Arcade"

]

export const games: Card[] = [
  {
    url: 'valorant',
    imageURL: 'https://static-cdn.jtvnw.net/ttv-boxart/899559811_IGDB-285x380.jpg',
    gameTitle: 'The legend of Zelda: A Link to the past',
    viewers: 100,
    tags: ['FPS', 'Shooter'],
  },
  {
    url: 'celeste',
    imageURL: 'https://static-cdn.jtvnw.net/ttv-boxart/492535_IGDB-285x380.jpg',
    gameTitle: 'Celeste',
    viewers: 10000,
    tags: ['Indie', 'Plataform'],
  },
  {
    url: 'undertale',
    imageURL: 'https://static-cdn.jtvnw.net/ttv-boxart/490713_IGDB-285x380.jpg',
    gameTitle: 'Undertale',
    viewers: 100,
    tags: ['RPG', 'Indie'],
  },
  {
    url: 'portaltwo',
    imageURL: 'https://static-cdn.jtvnw.net/ttv-boxart/19731_IGDB-285x380.jpg',
    gameTitle: 'Portal 2',
    viewers: 100,
    tags: ['FPS', 'Shooter'],
  },
  {
    url: 'valorant',
    imageURL: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
    gameTitle: 'Valorant',
    viewers: 100,
    tags: ['FPS', 'Shooter'],
  },
  {
    url: 'bioshockinfinite',
    imageURL: 'https://static-cdn.jtvnw.net/ttv-boxart/29099_IGDB-285x380.jpg',
    gameTitle: 'Bioshock Infinite',
    viewers: 100,
    tags: ['FPS', 'Shooter'],
  },
  {
    url: 'superchickenjumper',
    imageURL: 'https://static-cdn.jtvnw.net/ttv-boxart/1634139700_IGDB-285x380.jpg',
    gameTitle: 'Super Chicken Jumper',
    viewers: 100,
    tags: ['2D', 'Plataform'],
  },
]
