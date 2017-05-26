"use strict";

let $ = require('jquery');

function starStuff(e) {
  switch(e.id) {
    case 'oneStar':
      console.log('One Star Rating', e);
      e.closest('div').innerHTML = oneStarRating;
      return 1;
    case 'twoStar':
      console.log('Two Star Rating');
      e.closest('div').innerHTML = twoStarRating;
      return 2;
    case 'threeStar':
      console.log('Three Star Rating');
      e.closest('div').innerHTML = threeStarRating;
      return 3;
    case 'fourStar':
      console.log('Four Star Rating');
      e.closest('div').innerHTML = fourStarRating;
      return 4;
    case 'fiveStar':
      console.log('Five Star Rating');
      e.closest('div').innerHTML = fiveStarRating;
      return 5;
    case 'sixStar':
      console.log('Six Star Rating');
      e.closest('div').innerHTML = sixStarRating;
      return 6;
    case 'sevenStar':
      console.log('Seven Star Rating');
      e.closest('div').innerHTML = sevenStarRating;
      return 7;
    case 'eightStar':
      console.log('Eight Star Rating');
      e.closest('div').innerHTML = eightStarRating;
      return 8;
    case 'nineStar':
      console.log('Nine Star Rating');
      e.closest('div').innerHTML = nineStarRating;
      return 9;
    case 'tenStar':
      console.log('Ten Star Rating');
      e.closest('div').innerHTML = tenStarRating;
      return 10;

  }
}

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

let rater = {oneStarRating, twoStarRating, threeStarRating, fourStarRating, fiveStarRating, sixStarRating, sevenStarRating, eightStarRating, nineStarRating, tenStarRating};
module.exports = {starStuff, rater};