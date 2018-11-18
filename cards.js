const tarotCards = [ 
    {
    name: "theMagician", 
        desc: " Confident, Creative,  Important communications, Skillful, Talented, proficient",
    },
    {
    name: "theHighPriestess",
        desc: "Feminine influences, Insightful, Mystery, Understanding, Wisdom ",
    },
    {
    name: "theEmpress",
        desc: "Abundant creativity, Fertility, Fulfillment, Mother figure, Productivity",
    },
    {
    name: "theEmperor",
        desc: "Authority, Father figure, Masculine influence, Rational, Stable ",
    },
    {
    name: "theHierophant",
        desc: "Approval, Conformity, Consent, Good advice, Marriage or Union",
    },
    {
    name: "theLovers",
        desc: "Attachment or combination, Conflicting choices, Partners, Relationships, Union",
    },
    {
    name: "theChariot",
        desc: " Journey, Progression, Strong character, Success from effort, Transportation and movement",
    },
    {
    name: "strength",
        desc: "Energy, Facing problems, Strengh, Vitality, Willpower",
    },
    {
    name: "theHermit",
        desc: "Detachment, Guidance, Solitude, Sour-searching and introspection, Thinking and reflection",
    },
    {
    name: "wheelOfFortune",
        desc: "Change, Destiny, Good luck, Life cycles, New direction",
    },
    {
    name: "justice",
        desc: "Balance, Equality, Fairness, Justice, Law and legal matters",
    },
    {
    name: "theHangedMan",
        desc: "A period of transition, Gaining for a sacrifice, Suspending, Restricting, Discontinued",
    },
    {
    name: "death",
        desc: "End, New beginning, Loss, Dramatic change, Destruction",
    },
    {
    name: "temperance",
        desc: "Capable, Control, Harmony and balance, Moderation, Self-confidence",
    },
    {
    name: "theDevil",
        desc: "Anger, Jealousy and resentment, Self-delusion, Selfishness, Violence",
    },
    {
    name: "theTower",
        desc: "Destruction, Dramatic change, Loss and ruin, New start, Unexpected events",
    },
    {
    name: "theStar",
        desc: "Calm and serenity, Destiny, Hope, Opportunity, Renewal",
    },
    {
    name: "theMoon",
        desc: "Be careful, Caution, Confusion, Delusion, Risk",
    },
    {
    name: "theSun",
        desc: "Abundance, Achievement, Joy, Productivity, Success",
    },
    {
    name: "judgement",
        desc: "Change, Decisions, Success, Transformation, Upheaval",
    },
    {
    name: "theFool",
        desc: "Carefree, Foolish, Important decisions, New beginnings, Optimistic",
    },
    {
    name: "theWorld",
        desc: "Certainty, Completion, Positive, Reward, Satisfaction",
    }, 
    {
    name: "aceOfWands",
        desc: "Birth, Commencement, Creativity, Inventiveness, New Beginnings",
    },
    {
    name: "twoOfWands",
        desc: "Achievement, Anxiety, Gain, Goals, Partnership",
    },
    {
    name: "threeOfWands",
        desc: "Achievement, Fresh starts, Long-term success, Partnerships, Trade",
    },
    {
    name: "fourOfWands",
        desc: "Celebrations and happiness, Completion, Harmony, New beginnings, Pleasure",
    },
    {
    name: "fiveOfWands",
        desc: "Anxiety, Conflict, Disagreement, Strife, Struggle",
    },
    {
    name: "sixOfWands",
        desc: "Completion, Good news, Reward and Recognition, Success, Triumph",
    },
    {
    name: "sevenOfWands",
        desc: "Coping and Resistance, Courage, Long-term successes, Perseverance, Strength",
    },
    {
    name: "eightOfWands",
        desc: "Hasty actions, Journey and Travel, A Journey or Flight, Motion, End to a delay",
    },
    {
    name: "nineOfWands",
        desc: "Afraid, Cautious, Defensive, Impermanent Security, Inner strength",
    },
    {
    name: "tenOfWands",
        desc: "Burdens, Challenges, Intense pressure, Oppression, Overcommitment",
    },
    {
    name: "pageOfWands",
        desc: "Adventurous, Ambitious, Energetic and Active, New beginnings, Skilled",
    },
    {
    name: "knightOfWands",
        desc: "Challenging, Determination, Foreign travel, Leader, Unpredictability",
    },
    {
    name: "queenOfWands",
        desc: "Career-oriented, Hard worker, Honest, Independent and home-loving, Thoughtful",
    },
    {
    name: "kingOfWands",
        desc: "Authority figure, Financial gain, Honest and trustworthy, Mediation, Professional",
    },
    {
    name: "aceOfCups",
        desc: "Abundance, Creativity, Intense relationship, Satisfaction, Success",
    },
    {
    name: "twoOfCups",
        desc: "Commitment, Friendship, Love, Partnership, Relationship",
    },
    {
    name: "threeOfCups",
        desc: "Abundance, Celebration, Creativity, Entertainment, Gathering",
    },
    {
    name: "fourOfCups",
        desc: "Boredom, Disappointment, Dissatisfaction, Re-evaluation, Tedious",
    },
    {
    name: "fiveOfCups",
        desc: "Avoidance, Detachment, Loss, New hope, Regret",
    },
    {
    name: "sixOfCups",
        desc: "Apology, Past associations, Reconciliation, Reminiscent, Return",
    },
    {
    name: "sevenOfCups",
        desc: "Confusion, Dreams and ambitions, Speculating, Decision, Temptation",
    },
    {
    name: "eightOfCups",
        desc: "Abandonment, Avoiding, Changes in lifestyle, Leaving / Going, Personal development",
    },
    {
    name: "nineOfCups",
        desc: "Complete, Fulfilled, Generous, Pleasure, Satisfaction",
    },
    {
    name: "tenOfCups",
        desc: "Abundance, Achievement, Commitment, Family, Happiness",
    },
    {
    name: "pageOfCups",
        desc: "Announcement, Birth, Creative ideas, Good news, Message",
    },
    {
    name: "knightOfCups",
        desc: "Arrival, Creative, Invitation, New opportunities, Proposal",
    },
    {
    name: "queenOfCups",
        desc: "Intuitive, Mature, Sensitive Woman, Spouse, Virtuous, Wise",
    },
    {
    name: "kingOfCups",
        desc: "Compassionate, Good advice / Helpful, Integrity, Mature, Authoritative Man, Spouse",
    },
    {
    name: "aceOfSwords",
        desc: "Achievement, Advantage, Advantage, Mental focus, Victory",
    },
    {
    name: "twoOfSwords",
        desc: "Balance, Conflict resolution, Decisions, Peace of mind, Prejudice",
    },
    {
    name: "threeOfSwords",
        desc: "Fresh beginning, Loss, Pain, Separation, Suffering",
    },
    {
    name: "fourOfSwords",
        desc: "Delays, Healing, Rest, Sickness, Withdrawal",
    },
    {
    name: "fiveOfSwords",
        desc: "Conflict, Defeat, Loss, Low self-esteem, Separation",
    },
    {
    name: "sixOfSwords",
        desc: "A journey, Better future, Escape, Left over challenges, Travel",
    },
    {
    name: "sevenOfSwords",
        desc: "Avoiding confrontation, Failure, Incomplete, Theft, Unknown opponents",
    },
    {
    name: "eightOfSwords",
        desc: "Constraint, Disillusioned, Frustration, Obstacles, Restrictions",
    },
    {
    name: "nineOfSwords",
        desc: "Accidents, Paranoia, Depression, Grief, Mental anguish",
    },
    {
    name: "tenOfSwords",
        desc: "End, Failure, Mortality, New hope, Ruin",
    },
    {
    name: "pageOfSwords",
        desc: "Aggressive, Challenging, Change, Intelligent, Vigilant",
    },
    {
    name: "knightOfSwords",
        desc: "Conflict, Destruction, Domineering, Loss, Unexpected",
    },
    {
    name: "queenOfSwords",
        desc: "A mature, perceptive woman, Independent, Loss, Pain, Separation",
    },
    {
    name: "kingOfSwords",
        desc: " Mature, authoritative man, Assertive, Authority, Government / Legal, Leadership",
    },
    {
    name: "aceOfPentacles",
        desc: "Emotional stability, Financial gain, Luck, Recognition, Success",
    },
    {
    name: "twoOfPentacles",
        desc: "Balance, Fluctuating Wealth, Juggling, Prudence, Transfer or Exchange",
    },
    {
    name: "threeOfPentacles",
        desc: "Excellence, Mastery, Satisfaction, Success, Teamwork",
    },
    {
    name: "fourOfPentacles",
        desc: "Certainty, Possessive, Reliable, Security, Tenacity",
    },
    {
    name: "fiveOfPentacles",
        desc: "Emotional or Financial troubles, Inadequacy, Poverty, Scarcity, Worry",
    },
    {
    name: "sixOfPentacles",
        desc: "Distribution, Donation, Favour, Prosperity, Solvency",
    },
    {
    name: "sevenOfPentacles",
        desc: "Business & Trade, Long-term success, Occupation, Perseverance, Wealth",
    },
    {
    name: "eightOfPentacles",
        desc: "Apprentice, Career, Craftsmanship, New skills, Prudence",
    },
    {
    name: "nineOfPentacles",
        desc: "Abundance, Financial security, Opulence, Prosperous, Wealth",
    },
    {
    name: "tenOfPentacles",
        desc: "Close relationships, Family, Fortune, Inheritance, Prosperous",
    },
    {
    name: "pageOfPentacles",
        desc: "Attentive, Motivated, Scholarship, Skillful, Studious",
    },
    {
    name: "knightOfPentacles",
        desc: "Ambitious, Dependable, Faithful, Honourable, Thorough",
    },
    {
    name: "queenOfPentacles",
        desc: "Abundance, Financial help, Practicality, Prosperity, Wealth",
    },
    {
    name: "kingOfPentacles",
        desc: "Confident, Reliable, Security, Success, Wealth",
    },

] // end of tarotCards 

const app = {}

app.init = function (){
    app.selectCard();
    app.selectThree();
    app.shuffleCards();
}

$(function () { // start document ready 
    app.init();
}); // end of document ready 


app.shuffleCards = function () {
    $('#shuffleCards').on('click', function () {  
        app.reset();
        $('.deckOfCards img').attr("src", `assets/cardback.svg`);
        $('.deckOfCards img').addClass('animated flip').one('animationend', function () {
            $(this).removeClass('animated flip')
        });
        $('.cardDescription').addClass('hide') 
    })
} // ends the shuffleCards function 

app.getRandomCard = function(listOfCards) {
    const result = listOfCards[Math.floor((Math.random() * listOfCards.length))];
    return result;
}

app.selectCard = function (){ 
    $('#selectCard').on('click', function(clickEvent){
    app.reset();
    const randomCard = app.getRandomCard(tarotCards);
       const cardnameReplaced = randomCard.name.replace(/([A-Z])/g, ' $1'); // this is the regex to add a space before every capital letter
    // $('.deckOfCards img').attr("src",`assets/${randomCard.name}.jpg`);
    $('.single img').attr("src",`assets/${randomCard.name}.jpg`);
    $('.single img').addClass('animated slideInUp').one('animationend', function () {
            $(this).removeClass('animated slideInUp')
    });
    
    const cardMoreInfo = randomCard.name.replace(/([A-Z])/g, '-$1'); 
     console.log(cardMoreInfo)

        $('.cardDescription h3').text(`★ ${cardnameReplaced}`) // adding .text will add it as text, rather than as html
    $('.cardDescription p').text(randomCard.desc)

    $('.cardDescription').removeClass('hide')
    $('.cardDescription3').addClass('hide')

    $('.cardDescription p').text(randomCard.desc)
    $('.faceDown').addClass('hide')
    }) // ends the selectCard function
} // ends the app.selectcard

app.selectThree = function () {
    $('#selectThree').on('click', function () {
        app.reset();
        const randomCard = app.getRandomCard(tarotCards);   
        $('.cardDescription3').removeClass('hide')
        $('.cardDescription').addClass('hide')

        $('.faceDown').addClass('hide')
        // instead of calling getRandomCard three times, we could make a copy of the tarotCards array, shuffle it (using the google strategies), and then take the first three items and send them to a "final" array 
        // underscore library has a shuffle method 
        app.threeCards = []; 
        app.threeCardsDesc = [];

        for (i = 1; i < 4; i++){
            app.randomCard = app.getRandomCard(tarotCards);
            app.threeCards.push(app.randomCard.name);
            app.threeCardsDesc.push(app.randomCard.desc);
        }
        
        app.threeCards.forEach(function(item) {
            console.log(item);
            const cardnameReplaced = item.replace(/([A-Z])/g, ' $1');
            $('.three').append(`<img src="assets/${item}.jpg" alt="alt" class="threeCardsImg">`);
            $('.three img').addClass('animated slideInUp').one('animationend', function () {
                $(this).removeClass('animated slideInUp')
            });
            $('.cardDescription3').append(`<h3>★ ${cardnameReplaced}</h3`);
            $('.cardDescription3').append(`<p></p>`);


        });

    }) // end of selectCard function

    app.reset = function(){
        $('.threeCardsImg').remove()
        app.threeCards = [];
        $('.single img').attr("src", ``);


    }

} // ends the app.selectcard






