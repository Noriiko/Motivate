


const quotes = [
    "Don’t stop when you’re tired. STOP when you are DONE.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "Aim for the moon. If you miss, you may hit a star.",
    "The ones who are crazy enough to think they can change the world, are the ones who do.",
    "Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier, wish you were better. - Jim Rohn",
    "It does not matter how slowly you go, so long as you do not stop. -Confucuis",
    "I find that the harder I work, the more luck I seem to have. -Thomas Jeffson",
    "You don’t have to be great to start, but you have to start to be great. -Zig Ziglar",
    "Life begins at the end of your comfort zone. -Neale Donald Walsh",
    "Things work out best for those who make the best of how things work out. -John Wooden",
    "Nothing in the world is more common than unsuccessful people with talent.",
    "Expect problems and eat them for breakfast. -Alfred A. Montapert",
    "Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill",
    "Opportunities don’t happen, you create them. -Chris Grosser",
    "The secret of getting ahead is getting started. -Mark Twain"
]
function motivate() {
    let numberQuotes = quotes.length;
    let randomDecimal = Math.random();
    let randomNumberwithDecimal = randomDecimal * numberQuotes;
    let randomInteger = Math.floor(randomNumberwithDecimal);
    document.getElementById("displayText").innerHTML = quotes[randomInteger];
    console.log("button is working");
}

//console.log (Math.random());

//console.log("you have"+ quotes.length + "quotes");

//console.log(Math.random()  * quotes.length);

//console.log(Math.floor(Math.random() * quotes.length));








 
