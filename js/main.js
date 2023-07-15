
var temp=0;

var arrOfQuotes=[
    {
        quote:'\"Beware of what you become in pursuit of what you want.\"',
        author:'\"Jim Rohn \"', 
    },
    {
        quote:'\"A friend is someone who knows all about you and still loves you.\"',
        author:'\"Elbert Hubbard \"', 
    },
    {
        quote:'\"To live is the rarest thing in the world. Most people exist, that is all.\"',
        author:'\"Oscar Wilde\"', 
    },
    {
        quote:'\"Two things are infinite: the universe and human stupidity and I am not sure about the universe.\"',
        author:'\"Albert Einstein\"', 
    },
    {
        quote:'\"So many books, so little time.\"',
        author:'\" Frank Zappa \"', 
    },
    {
        quote:'\"A room without books is like a body without a soul.\"',
        author:'\"Marcus Tullius Cicero \"', 
    },
    {
        quote:'\"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.\"',
        author:'\" Bernard M. Baruch \"', 
    },
    {
        quote:'\"You only live once, but if you do it right, once is enough\"',
        author:'\" Mae West \"', 
    },
    {
        quote:'\"Be the change that you wish to see in the world.\"',
        author:'\"Mahatma Gandhi\"', 
    },
    {
        quote:'\"If you tell the truth, you do not have to remember anything.\"',
        author:'\"Mark Twain \"', 
    },
]

function NewQuote(){
    
    var random=Math.floor(Math.random() * 10);
    
    while(random==temp){
        random=Math.floor(Math.random() * 10);
    }

    temp=random;

    

    
    
    console.log(temp);

document.getElementById('demo1').innerHTML= arrOfQuotes[random].quote;
document.getElementById('demo2').innerHTML= arrOfQuotes[random].author;

}

