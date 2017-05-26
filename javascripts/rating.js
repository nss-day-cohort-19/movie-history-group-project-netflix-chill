"use strict";

let $ = require('jquery');

function addStars(event) {
  console.log('clicked add to watchlist');
  event.target.closest('div').innerHTML = zeroRating;
}

function starStuff(e) {
  switch(e.id) {
    case 'oneStar':
      console.log('One Star Rating', e);
      e.closest('div').innerHTML = oneStarRating;
      break;
    case 'twoStar':
      console.log('Two Star Rating');
      e.closest('div').innerHTML = twoStarRating;
      break;
    case 'threeStar':
      console.log('Three Star Rating');
      e.closest('div').innerHTML = threeStarRating;
      break;
    case 'fourStar':
      console.log('Four Star Rating');
      e.closest('div').innerHTML = fourStarRating;
      break;
    case 'fiveStar':
      console.log('Five Star Rating');
      e.closest('div').innerHTML = fiveStarRating;
      break;
    case 'sixStar':
      console.log('Six Star Rating');
      e.closest('div').innerHTML = sixStarRating;
      break;
    case 'sevenStar':
      console.log('Seven Star Rating');
      e.closest('div').innerHTML = sevenStarRating;
      break;
    case 'eightStar':
      console.log('Eight Star Rating');
      e.closest('div').innerHTML = eightStarRating;
      break;
    case 'nineStar':
      console.log('Nine Star Rating');
      e.closest('div').innerHTML = nineStarRating;
      break;
    case 'tenStar':
      console.log('Ten Star Rating');
      e.closest('div').innerHTML = tenStarRating;
      break;

  }
}
let zeroRating = `<div class="rating">
										<span class="star" id="tenStar">☆</span>
                    <span class="star" id="nineStar">☆</span>
                    <span class="star" id="eightStar">☆</span>
                    <span class="star" id="sevenStar">☆</span>
                    <span class="star" id="sixStar">☆</span>
                    <span class="star" id="fiveStar">☆</span>
                    <span class="star" id="fourStar">☆</span>
                    <span class="star" id="threeStar">☆</span>
                    <span class="star" id="twoStar">☆</span>
                    <span class="star" id="oneStar">☆</span>
									</div>`;
let oneStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star" id="eightStar">☆</span><span class="star" id="sevenStar">☆</span><span class="star" id="sixStar">☆</span><span class="star" id="fiveStar">☆</span><span class="star" id="fourStar">☆</span><span class="star" id="threeStar">☆</span><span class="star" id="twoStar">☆</span><span class="star ratedStar" id="oneStar">★</span>`;
let twoStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star" id="eightStar">☆</span><span class="star" id="sevenStar">☆</span><span class="star" id="sixStar">☆</span><span class="star" id="fiveStar">☆</span><span class="star" id="fourStar">☆</span><span class="star" id="threeStar">☆</span><span class="star ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let threeStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star" id="eightStar">☆</span><span class="star" id="sevenStar">☆</span><span class="star" id="sixStar">☆</span><span class="star" id="fiveStar">☆</span><span class="star" id="fourStar">☆</span><span class="star ratedStar" id="threeStar">★</span><span class="star  ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let fourStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star" id="eightStar">☆</span><span class="star" id="sevenStar">☆</span><span class="star" id="sixStar">☆</span><span class="star" id="fiveStar">☆</span><span class="star ratedStar" id="fourStar">★</span><span class="star ratedStar" id="threeStar">★</span><span class="star  ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let fiveStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star" id="eightStar">☆</span><span class="star" id="sevenStar">☆</span><span class="star" id="sixStar">☆</span><span class="star ratedStar" id="fiveStar">★</span><span class="star ratedStar" id="fourStar">★</span><span class="star ratedStar" id="threeStar">★</span><span class="star  ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let sixStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star" id="eightStar">☆</span><span class="star" id="sevenStar">☆</span><span class="star ratedStar" id="sixStar">★</span><span class="star ratedStar" id="fiveStar">★</span><span class="star ratedStar" id="fourStar">★</span><span class="star ratedStar" id="threeStar">★</span><span class="star  ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let sevenStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star" id="eightStar">☆</span><span class="star ratedStar" id="sevenStar">★</span><span class="star ratedStar" id="sixStar">★</span><span class="star ratedStar" id="fiveStar">★</span><span class="star ratedStar" id="fourStar">★</span><span class="star ratedStar" id="threeStar">★</span><span class="star  ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let eightStarRating = `<span class="star" id="tenStar">☆</span><span class="star" id="nineStar">☆</span><span class="star ratedStar" id="eightStar">★</span><span class="star ratedStar" id="sevenStar">★</span><span class="star ratedStar" id="sixStar">★</span><span class="star ratedStar" id="fiveStar">★</span><span class="star ratedStar" id="fourStar">★</span><span class="star ratedStar" id="threeStar">★</span><span class="star  ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let nineStarRating = `<span class="star" id="tenStar">☆</span><span class="star ratedStar" id="nineStar">★</span><span class="star ratedStar" id="eightStar">★</span><span class="star ratedStar" id="sevenStar">★</span><span class="star ratedStar" id="sixStar">★</span><span class="star ratedStar" id="fiveStar">★</span><span class="star ratedStar" id="fourStar">★</span><span class="star ratedStar" id="threeStar">★</span><span class="star  ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;
let tenStarRating = `<span class="star ratedStar" id="tenStar">★</span><span class="star ratedStar" id="nineStar">★</span><span class="star ratedStar" id="eightStar">★</span><span class="star ratedStar" id="sevenStar">★</span><span class="star ratedStar" id="sixStar">★</span><span class="star ratedStar" id="fiveStar">★</span><span class="star ratedStar" id="fourStar">★</span><span class="star ratedStar" id="threeStar">★</span><span class="star ratedStar" id="twoStar">★</span><span class="star ratedStar" id="oneStar">★</span>`;

module.exports = {starStuff, addStars};