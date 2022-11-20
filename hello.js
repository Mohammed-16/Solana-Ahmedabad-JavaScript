var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

const quote = Quote.getRandomQuote();
console.log(
  cowsay.say({
    text: Quote.getRandomQuote(),
    e: "oO",
    T: "U ",
  })
);
