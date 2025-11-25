import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const artPieces = [
  { title: "Starry Night",
    artist: "Vincent van Gogh", 
    year: 2024,
    month: 11,
    day: 28,
    src: "https://scontent-lga3-1.cdninstagram.com/v/t51.29350-15/468819304_465430959495231_1529626118058210351_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODF4MTM1Mi5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QFVQy4JugmROa7uLvhRq_zRUXWUsJbYM__K5IQOJyck4N_WuVs6yeMdhYIr_zPJWELxjBTUysEMWbWPsPFmZybz&_nc_ohc=l9OBZg7d2tkQ7kNvwE4rl3B&_nc_gid=62oxODFaUrF3124ZXHz52A&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUxMTUxNTYxMzY5NjkyMjI5OA%3D%3D.3-ccb7-5&oh=00_AfhuPtX-J4wgXQwgMP1lZQt3H4DZaYo7jzan7mD-LrRdHw&oe=692AF183&_nc_sid=22de04"
  },
  { title: "Starry Night",
    artist: "Vincent van Gogh", 
    year: 2024,
    month: 10,
    day: 21,
    src: "https://scontent-lga3-3.cdninstagram.com/v/t51.29350-15/463730256_8830583776971856_9046570775838030408_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjg4NXg5NDYuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlLmMyIn0&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QFVQy4JugmROa7uLvhRq_zRUXWUsJbYM__K5IQOJyck4N_WuVs6yeMdhYIr_zPJWELxjBTUysEMWbWPsPFmZybz&_nc_ohc=rq5nDQZ1TcMQ7kNvwGr4vjF&_nc_gid=62oxODFaUrF3124ZXHz52A&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ4MzkxMTMwMzQwODgxNzEzNQ%3D%3D.3-ccb7-5&oh=00_Afj9IZmRxRIvB33u9X5RO1bqb7ihyj2r4gq6niDF-fjnww&oe=692AF723&_nc_sid=22de04"
  },
  { title: "Starry Night",
    artist: "Vincent van Gogh", 
    year: 2024,
    month: 10,
    day: 20,
    src: "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/464167515_541718595465121_1016828436024591641_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2QFVQy4JugmROa7uLvhRq_zRUXWUsJbYM__K5IQOJyck4N_WuVs6yeMdhYIr_zPJWELxjBTUysEMWbWPsPFmZybz&_nc_ohc=bDOxeyvuEbsQ7kNvwEeZ9IA&_nc_gid=62oxODFaUrF3124ZXHz52A&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ4MzI5MzE0NjU1ODAzNjIyNQ%3D%3D.3-ccb7-5&oh=00_AfiYd1pEml-EIqUdeUe8WwuKycYrDZnn2nMzGM-8u74Saw&oe=692AEE09&_nc_sid=22de04"
  },
  { title: "Starry Night",
    artist: "Vincent van Gogh", 
    year: 2024,
    month: 10,
    day: 20,
    src: "https://scontent-lga3-3.cdninstagram.com/v/t51.29350-15/463651627_1801148500289530_3042779038848272049_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTU3OS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2QFVQy4JugmROa7uLvhRq_zRUXWUsJbYM__K5IQOJyck4N_WuVs6yeMdhYIr_zPJWELxjBTUysEMWbWPsPFmZybz&_nc_ohc=oyMZhrzl1SAQ7kNvwEWWLoy&_nc_gid=62oxODFaUrF3124ZXHz52A&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQ4Mzc0NTczNDg4NTczODQyNg%3D%3D.3-ccb7-5&oh=00_AfiaZeFnmn3CVeWNMQ86jNSAaisXkdJ8zV9h2N9LWca4pw&oe=692AF120&_nc_sid=22de04"
  },
  { title: "Starry Night",
    artist: "Vincent van Gogh", 
    year: 2024,
    month: 11,
    day: 28,
    src: "https://scontent-lga3-3.cdninstagram.com/v/t51.29350-15/468569243_566788342627914_3613043542215816904_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTc3MS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QFVQy4JugmROa7uLvhRq_zRUXWUsJbYM__K5IQOJyck4N_WuVs6yeMdhYIr_zPJWELxjBTUysEMWbWPsPFmZybz&_nc_ohc=oyeD6vJ8CskQ7kNvwF8dUfs&_nc_gid=62oxODFaUrF3124ZXHz52A&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUxMTUxNjk3MDc4OTIyNjY4Nw%3D%3D.3-ccb7-5&oh=00_Afjql8Q1jlDz44YulkUW2ITkWK64gL1kw6mohiKQeNPoHQ&oe=692AE8B5&_nc_sid=22de04"
  },
  { title: "Starry Night",
    artist: "Vincent van Gogh", 
    year: 2025,
    month: 2,
    day: 2,
    src: "https://scontent-lga3-3.cdninstagram.com/v/t51.75761-15/476137696_17864267460328472_1613198709888328208_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzU1OTIyMDY5NTY4NzA0NzU0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=8YuAaC7wp5gQ7kNvwFEAoAq&_nc_oc=AdmbmJD784LWUZMWaaF7wyTr3tRqnwyrDHk81ffzdBNSAukp9_S2Pj96zRg_fXUhP8-MXaSTFyIaA0UmHIziCldV&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_gid=PGP9dD83zWOV4wLuS8_bnA&oh=00_AfiradEXB6SM4aBnAkczvKlWFY0f9z06G03JJ4fFORY75w&oe=692AE245"
  },
]

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
