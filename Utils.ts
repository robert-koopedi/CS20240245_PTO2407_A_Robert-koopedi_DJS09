
const reviewTotalDisplay = document.querySelector("#reviews") 
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser } from './enums'

export function showReviewTotal (value : number, reviewer: string, isLoyalty: LoyaltyUser ) : void {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 
   'review' + makeMultiple(value) + ' ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
  }
  

 export function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
  }
  
  export function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
  }

  function add( firstValue: number ,secondValue: number) {
    return firstValue + secondValue
  }

  export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;
}[]) : {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;  
}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}
