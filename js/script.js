/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


  /*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'Every man should stand for himself, or fall with the unworthy.',
    source: 'Daredevil',
    citation: 'Nobu',
    year: '2015-2018'
  }, 
  {
    quote: 'The past is the past. And the only direction in life that matters is forward. Never backwards.',
    source: 'S1.Ep1 - Luke Cage',
    citation: 'Henry "Pop" Hunter',
    year: '2016-2018'
  },
  {
    quote: 'If you tell the truth, you don\'t have to remember anything.',
    source: 'Mark Twain' 
  },
  {
    quote: 'I\'m sick of following my dreams, man. I\'m just going to ask where they\’re going and hook up with them later.',
    source: 'Mitch Hedberg'
  },
  {
    quote: 'I walk around like everything\’s fine, but deep down, inside my shoe, my sock is sliding off.',
    source: 'Anonymous'
  }
];

console.log(quotes);



/***
 * `getRandomQuote` function
***/


function getRandomQuote() {
  let ran = Math.floor((Math.random() * quotes.length));
  return quotes[ran];
};
/*
console.log(getRandomQuote());
*/

/***
 * `printQuote` function
***/

function printQuote() {
  var print = getRandomQuote();
  var hold = '<p class="quote">' + print.quote + '</p>';
  hold += '<p class="source">' + print.source;
  if (print.citation) {
    hold += '<span class="citation">' + hold.citation + '</span>';
  }; 
  if (print.year) {
    hold += '<span class="year">' + hold.year + '</span>';
  };
  hold += '</p>';
  document.getElementById('quote-box').innerHTML = hold;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);