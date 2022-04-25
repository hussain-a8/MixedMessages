let quoteArray =["When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down 'happy'.  They told me I didn't understand the assignment, and I told them they didn't understand life. -John Lennon",
"Fall seven times and stand up eight. -Japanese Proverb",
"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. -Helen Keller",
"Everything has beauty, but not everyone can see. -Confucius",
"How wonderful it is that nobody need wait a single moment before starting to improve the world. -Anne Frank",
"When I let go of what I am, I become what I might be. -Lao Tzu",
"Life is not measured by the number of breaths we take, but by the moments that take our breath away. -Maya Angelou",
"Happiness is not something readymade.  It comes from your own actions. -Dalai Lama",
"If you're offered a seat on a rocket ship, don't ask what seat! Just get on. -Sheryl Sandberg",
"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. -Aristotle",
"If the wind will not serve, take to the oars. -Latin Proverb",
"You can't fall if you don't climb.  But there's no joy in living your whole life on the ground. -Unknown",
"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. -Marie Curie",
"Too many of us are not living our dreams because we are living our fears. -Les Brown",
"Challenges are what make life interesting and overcoming them is what makes life meaningful. -Joshua J. Marine",
"If you want to lift yourself up, lift up someone else. -Booker T. Washington",
"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. -Leonardo da Vinci",
"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. -Jamie Paolinetti",
"You take your life in your own hands, and what happens? A terrible thing, no one to blame. -Erica Jong",
"What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. -Bob Dylan",
"I didn't fail the test. I just found 100 ways to do it wrong. -Benjamin Franklin",
"In order to succeed, your desire for success should be greater than your fear of failure. -Bill Cosby",
"A person who never made a mistake never tried anything new. -Albert Einstein",
"The person who says it cannot be done should not interrupt the person who is doing it. -Chinese Proverb",
"There are no traffic jams along the extra mile. -Roger Staubach",
"It is never too late to be what you might have been. -George Eliot",
"You become what you believe. -Oprah Winfrey"
];

let greeting = ["Hello, ", "Greetings, ", "Hi there, ", "Salam, ", "Namaste, ", "Hallo, ", "Good day, ", "Shalom, ", "Hiya, ", "Welcome, ", "Glad tidings, "];

let quoteIntro = ["Your daily quote is: ", "Todays quote is: ", "The quote of the day is: ", "Remember: ", "A few words of wisdom for you: ", "Never forget: ", "Carry this with you: "]

const randomQuoteGen = () => {
    let displayQuote = [];
    displayQuote.push(greeting[Math.floor(Math.random()* greeting.length)])
    displayQuote.push(quoteIntro[Math.floor(Math.random()* quoteIntro.length)])
    displayQuote.push(quoteArray[Math.floor(Math.random()* quoteArray.length)])

    return displayQuote.join("")


}



console.log(randomQuoteGen())
