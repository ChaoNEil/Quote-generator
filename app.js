//variables 
const btn = document.querySelector("#new-quote")
const quote = document.querySelector(".quote")
const person = document.querySelector(".person")

const quotes = [{
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein `
}, {
    quote: `"It is never too late to be what you might have been."`,
    person: `Will Rogers`
}, {
    quote: `"I can accept failure, everyone fails at something. But I can't accept not trying."`,
    person: `Michael Jordan`
}, {
    quote: `"Everything happens for a reason."`,
    person: `Unknown`
}, {
    quote: `"Life is what we make it and how we make it; whether we realize it or not."`,
    person: `Napoleon Hill`
}, {
    quote: `"The way to get started is to quit talking and begin doing"`,
    person: `Walt Disney`
}, {
    quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
    person: `Steve Jobs`
}, {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    person: `Eleanor Roosevelt`
}, {
    quote: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
    person: `James Cameron`
}, {
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    person: `Maya Angelou`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    person: `Dalai Lama`
}, {
    quote: `"If you want something you've never had, you must be willing to do something you've never done."`,
    person: `Unknown`
}, {
    quote: `"Never give up and never let anyone down"`,
    person: `Unknown`
}
];

btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * quotes.length); // math.random does not generate whole number, that is why we wrap it inside math.floor
                                                            // math.floor rounds the number to nearest integer

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})