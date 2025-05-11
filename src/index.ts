
// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')

import { Permissions, LoyaltyUser,} from '../enum.ts'
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from '../Utils.ts'
import { Price, Country} from '../types.ts'
import { Review } from '../interfaces.ts'
let isLoggedIn: boolean



const reviews : Review[] = [
//   {
//   name: string;
//     stars: number;
//     loyaltyUser: LoyaltyUser;
//     date: string; 
// } |
// {
//     name: string;
//     stars: number;
//     loyaltyUser: LoyaltyUser;
//     date: string;
//     description: string;
// }
// [] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser:LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
    // description: 'Great housekeeping',
  },
];


showReviewTotal(reviews.length , reviews[0].name, reviews[0].loyaltyUser);


const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


const properties : {
  image: string;
  title: string;
  price: number;
  location: {
      firstLine: string;
      city: string;
      code: number;
      country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: 'images/dddddd.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
        firstLine: 'shack 37',
        city: 'Bogota',
        code: 45632,
        country: 'Colombia'
  },
  contact:[ +1123495082908, 'marywinkle@gmail.com'],
  isAvailable: true 
},
{
  image: 'images/th.jpg',
  title: 'Polish Cottage',
  price: 41,
  location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland'
  },
  contact: [ +1123495082908, 'garydavis@hotmail.com'],
  isAvailable: false 
},
{
  image: 'images/lllllllll.jpg',
  title: 'London Flat',
  price: 33,
  location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 35433,
      country: 'United Kingdom',
  },
  contact: [ +1123495082908, 'andyluger@aol.com'],
  isAvailable: true
}
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


populateUser(you.isReturning, you.firstName)

let authorityStatus : any

isLoggedIn = true



for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  const title = document.createElement('h3')
  title.textContent = properties[i].title
  card.appendChild(title)
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  image.setAttribute('alt', properties[i].title)
  card.appendChild(image)
  propertyContainer?.appendChild(card)
  showDetails(isLoggedIn, card, properties[i].price)
}

//Broken code
let count = 0
function addReviews(array: Review[] ) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))


let currentLocation: [string, string, number] = ['south africa', '3:59', 25]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

