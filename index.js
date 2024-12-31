const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.new-quote')

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    author: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    author: ` Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    author: `Aristotle`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    author: ` Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    author: ` Benjamin Franklin`
}, {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    author: `Confucius`
}, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    author: `Martin Luther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    author: `Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    author: `Lao Tzu`
}, ];



