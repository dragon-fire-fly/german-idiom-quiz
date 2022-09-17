/* Question List */

/* Below is an array of objects containing the questions for the quiz*/

const questions = [
    {
        id : 1,
        idiom : "Der Koch war verliebt",
        literal_translation : "The cook was in love",
        meanings : [
            "To get an extra portion",
            "The meal is too salty",
            "To find a hair in your meal",
            "The meal is already cold",
        ],
        correct_meaning : "The meal is too salty",
        correct: false,
    },
    {
        id : 2,
        idiom : "Am Essen war die Küchenfee dran",
        literal_translation : "It was the Kitchen Fairy's turn to cook",
        meanings : [
            "To get a take-away",
            "When no one wants to cook",
            "When the kitchen is in a mess",
            "The food was burnt",
        ],
        correct_meaning : "The food was burnt",
        correct: false,
    },
    {
        id : 3,
        idiom : "Nicht die hellster Glühbirne (im Shrank)",
        literal_translation : "Not the brightest lightbulb (in the cupboard)",
        meanings : [
            "Someone who is overly critical of others",
            "Someone who is not considered very attractive",
            "Someone who is not very welcoming to others",
            "Someone who is not considered very smart",
        ],
        correct_meaning : "Someone who is not considered very smart",
        english_equivalent : "Not the sharpest tool in the shed",
        correct: false,
    },
    {
        id : 4,
        idiom : "Das ist nur ein Katzensprung ",
        literal_translation : "That is only a cat's leap",
        meanings : [
            "When something is right around the corner",
            "When something is risky",
            "When something is simple",
            "When someone jumps to conclusions",
        ],
        correct_meaning : "When something is right around the corner",
        english_equivalent : "Only a stone's throw",
        correct: false,
    },
    {
        id : 5,
        idiom : "Jemanden die Schokoladeseite",
        literal_translation : "To show someone's chocolate side",
        meanings : [
            "To apologise for something",
            "To show your sweet side",
            "To manipulate a situation",
            "To give a compliment",
        ],
        correct_meaning : "To show your sweet side",
        correct: false,
    },
    {
        id : 6,
        idiom : "Hat nicht alle Tassen in Shrank",
        literal_translation : "Not all the cups are in the cupboard",
        meanings : [
            "The dishwasher needs unloading",
            "When someone is messy",
            "When someone can't make it to an event",
            "When someone is not 'all there'",
        ],
        correct_meaning: "When someone is not 'all there'",
        english_equivalent : "To not have all your marbles",
        correct: false,
    },
    {
        id : 7,
        idiom : "Da kannst du Gift darauf nehmen",
        literal_translation : "You can take poison on that",
        meanings : [
            "To give someone a gift",
            "When you don't like someone very much",
            "An expression of distrust",
            "You can be very certain about that",
        ],
        correct_meaning : "You can be very certain about that",
        english_equivalent : "You can bet your life on it",
        correct: false,
    },
    {
        id : 8,
        idiom : "Eine Extrawurst verlangen",
        literal_translation : "To ask for an extra sausage",
        meanings : [
            "To request an extra portion",
            "To fish for compliments",
            "To ask for special treatment",
            "To be the butt of a joke",
        ],
        correct_meaning : "To ask for special treatment",
        correct: false,
    },
    {
        id : 9,
        idiom : "Da steppt der Bär",
        literal_translation : "The bear dances there",
        meanings : [
            "It will be a great party",
            "When someone is crazy",
            "When somewhere is untidy",
            "When someone is daydreaming",
        ],
        correct_meaning : "It will be a great party",
        correct: false,
    },
    {
        id : 10,
        idiom : "Tomaten auf den Augen haben",
        literal_translation : "To have tomatoes on one's eyes",
        meanings : [
            "To look on the bright side of something",
            "To be oblivious to what’s going around you",
            "To be extremely angry",
            "To be embarrassed",
        ],
        correct_meaning : "To be oblivious to what’s going around you",
        english_equivalent: "To be blind to something",
        correct: false,
    },
    {
        id : 11,
        idiom : "Ich verstehe nur Bahnhof",
        literal_translation : "I only understand 'Train Station'",
        meanings : [
            "I don't understand what's going on",
            "To misunderstand someone",
            "When someone wants to go home",
            "When someone is feeling adventerous",
        ],
        correct_meaning : "I don't understand what's going on",
        english_equivalent : "It's all Greek to me",
        correct: false,
    },
    {
        id : 12,
        idiom : "Seinen Senf dazugeben",
        literal_translation : "To add their mustard",
        meanings : [
            "To add sauce to everything",
            "To add your opinion",
            "To cause an argument",
            "To make somewhere feel like home",
        ],
        correct_meaning : "To add your opinion",
        english_equivalent : "To add your two cents",
        correct: false,
    },
    {
        id : 13,
        idiom : "Jemandem die Daumen drücken",
        literal_translation : "To squeeze your thumbs for someone",
        meanings : [
            "To put someone under pressure",
            "To be rude to someone",
            "To keep your fingers crossed for someone",
            "To know someone well",
        ],
        correct_meaning : "To keep your fingers crossed for someone",
        correct: false,
    },
    {
        id : 14,
        idiom : "Etwas wie seine Westentasche kennen",
        literal_translation : "To know something like one’s waistcoat pocket",
        meanings : [
            "To know something very well",
            "To be inexperienced",
            "To be knowledgeable in a specific field of study",
            "To be argumentative",
        ],
        correct_meaning : "To know something very well",
        english_equivalent : "To know it like the back of one’s hand",
        correct: false,
    },
    {
        id : 15,
        idiom : "Man soll den Tag nicht vor dem Abend loben",
        literal_translation : "You shouldn't praise the day before the evening",
        meanings : [
            "Don't count on it",
            "Things are about to go wrong",
            "When someone is pessimistic",
            "To look on the bright side of things",
        ],
        correct_meaning : "Don't count on it",
        english_equivalent : "Don’t count your chicks before they hatch",
        correct: false,
    },
    {
        id : 16,
        idiom : "Die Kirche im Dorf lassen",
        literal_translation : "To leave the church in the village",
        meanings : [
            "To ask someone to get over something",
            "To feel adventurous",
            "To not get carried away",
            "To have a lot of lugguage",
        ],
        correct_meaning : "To not get carried away",
        correct: false,
    },
    {
        id : 17,
        idiom : "Schwein haben",
        literal_translation : "To have a pig",
        meanings : [
            "To be in a bad mood",
            "To have a stroke of luck",
            "To have a feast",
            "To have a hangover",
        ],
        correct_meaning : "To have a stroke of luck",
        correct: false,
    },
    {
        id : 18,
        idiom : "Ich bin nicht auf der Nudelsuppe daher geschwommen",
        literal_translation : "I didn’t swim over here on the noodle soup",
        meanings : [
            "When it takes a long time to get somewhere",
            "To not believe what someone is saying",
            "To say you took the car",
            "To say something you don't mean",
        ],
        correct_meaning : "To not believe what someone is saying",
        english_equivalent: "I wasn’t born yesterday",
        correct: false,
    },
    {
        id : 19,
        idiom : "Da haben wir den Salat",
        literal_translation : "There we have the salad",
        meanings : [
            "There's the final product",
            "To think something is boring",
            "To be in a real mess",
            "To put all the pieces together",
        ],
        correct_meaning : "To be in a real mess",
        english_equivalent : "The fat's in the fire",
        correct: false,
    },
    {
        id : 20,
        idiom : "Einen Vogel haben",
        literal_translation : "To have a bird",
        meanings : [
            "To have an argument",
            "To make yourself at home",
            "To have a day off",
            "To be crazy",
        ],
        correct_meaning : "To be crazy",
        english_equivalent: "To have a screw loose",
        correct: false,
    },
    {
        id : 21,
        idiom : "Um den heißen Brei herumreden",
        literal_translation : "To talk around the hot porridge",
        meanings : [
            "To pretend something is better than it is",
            "To not get to the point",
            "To gossip about others",
            "To explain something",
        ],
        correct_meaning : "To not get to the point",
        english_equivalent : "To beat around the bush",
        correct: false,
    },
    {
        id : 22,
        idiom : "Die Daumenschrauben anziehen",
        literal_translation : "To tighten the thumbscrews",
        meanings : [
            "To put pressure on someone",
            "To be on a budget",
            "To become good friends with someone",
            "To make job cuts",
        ],
        correct_meaning : "To put pressure on someone",
        english_equivalent: "To put a squeeze on",
        correct: false,
    },
    {
        id : 23,
        idiom : "Ich bin Fix und Fertig",
        literal_translation : "I'm quick and ready",
        meanings : [
            "To want to go out",
            "To be energetic",
            "To be exhausted",
            "To be almost ready to leave",
        ],
        correct_meaning : "To be exhausted",
        english_equivalent: "I'm all tuckered out/done in",
        correct: false,
    },
    {
        id : 24,
        idiom : "Ich glaube ich spinne",
        literal_translation : "I think I'm spinning (yarn)",
        meanings : [
            "When you can't believe something happened",
            "When something is going badly",
            "To realise you've made a mistake",
            "To have a hangover",
        ],
        correct_meaning : "When you can't believe something happened",
        correct: false,
    },
    {
        id: 25,
        idiom : "Gleich rappelts im Karton",
        literal_translation : "The cardboard box is rattling",
        meaning1s: [
            "When someone is keeping a secret",
            "When someone is overly excited",
            "When someone is gossiping",
            "When someone is running out of patience",
        ],
        correct_meaning : "When someone is running out of patience",
        english_equivalent: "You're in trouble!",
        correct: false,
    },
    {
        id : 26,
        idiom : "Einen Kater haben",
        literal_translation : "To have a (male) cat",
        meanings : [
            "To be angry",
            "To have a hangover",
            "To be rude to someone",
            "To win a bet",
        ],
        correct_meaning : "To have a hangover",
        correct: false,
    },
    {
        id : 27,
        idiom : "Wo sich Fuchs und Hase gute Nacht sagen",
        literal_translation : "Where the fox and hare say goodnight",
        meanings : [
            "In the middle of nowhere",
            "When something is very unlikely to happen",
            "To make a compromise",
            "To meet someone secretly",
        ],
        correct_meaning : "In the middle of nowhere",
        english_equivalent: "In the back of beyond ",
        correct: false,
    },
    {
        id : 28,
        idiom : "Mit Jemandem Pferde stehlen",
        literal_translation : "To steal horses with someone",
        meanings : [
            "To gamble",
            "To be in a relationship with someone",
            "To gossip",
            "To be able to trust someone",
        ],
        correct_meaning : "To be able to trust someone",
        english_equivalent: "To be thick as thieves", /* ? */
        correct: false,
    },
    {
        id : 29,
        idiom : "Die beleidigte Leberwurst spielen",
        literal_translation : "To play the offended sausage",
        meanings : [
            "To be the butt of a joke",
            "To be unnecessarily pouty",
            "To take something too seriously",
            "To have a good sense of humour",
        ],
        correct_meaning : "To be unnecessarily pouty",
        english_equivalent: "She is playing the prima donna",
        correct: false,
    },
    {
        id : 30,
        idiom : "Einen Korb geben",
        literal_translation : "To give someone a basket",
        meanings : [
            "To give someone a compliment",
            "To be rude to someone",
            "To be a good listener",
            "To decline an invitation",
        ],
        correct_meaning : "To decline an invitation",
        english_equivalent: "To turn down (an invitation)",
        correct: false,
    },
    {
        id : 31,
        idiom : "Warum ist die Banane krumm?",
        literal_translation : "Why is the banana curved?",
        meanings : [
            "To ask a philosophical question",
            "To ask a stupid question",
            "To say 'I don't know either'",
            "To be unsure of oneself",
        ],
        correct_meaning : "To say 'I don't know either'",
        english_equivalent: "How long is a piece of string?",
        correct: false,
    },
    {
        id : 32,
        idiom : "Jemanden einen Bären aufbinden",
        literal_translation : "To tie a bear on someone",
        meanings : [
            "To tell someone a lie (usually in a teasing way)",
            "To trust someone",
            "To go to a party with someone",
            "To tell someone a secret",
        ],
        correct_meaning : "To tell someone a lie (usually in a teasing way)",
        english_equivalent:  "To pull someone's leg",
        correct: false,
    },
    {
        id : 33,
        idiom : "Alles in Butter",
        literal_translation : "Everything's in butter",
        meanings : [
            "To feel overwhelmed",
            "To be pessimistic",
            "To say 'Everything is ok'",
            "To be wealthy",
        ],
        correct_meaning : "To say 'Everything is ok'",
        english_equivalent:  "It's all good",
        correct: false,
    },
    {
        id : 34,
        idiom : "Jemanden übers Ohr hauen",
        literal_translation : "To hit someone over the ears",
        meanings : [
            "To shout at someone",
            "To trick someone",
            "To be disapproving of something",
            "To talk excessively",
        ],
        correct_meaning : "To trick someone",
        english_equivalent:  "To pull a fast one",
        correct: false,
    },
    {
        id : 35,
        idiom : "Die Hand für etwas/jemanden ins Feuer legen",
        literal_translation : "To put your hand in the fire for someone/something",
        meanings : [
            "To bet on something",
            "To feel under pressure",
            "To feel confident",
            "To guarantee something",
        ],
        correct_meaning : "To guarantee something",
        english_equivalent:  "I can vouch for that/them",
        correct: false,
    },
    {
        id : 36,
        idiom : "Halt die Ohren steif",
        literal_translation : "Hold your ears still",
        meanings : [
            "Hang on in there",
            "To ask someone to listen",
            "To slow down",
            "To confide in someone",
        ],
        correct_meaning : "Hang on in there",
        english_equivalent: "Keep a stiff upper lip!", /* keep calm and carry on */
        correct: false,
    },
    {
        id : 37,
        idiom : "Heute werde ich nicht alt",
        literal_translation : "I'm not getting old today",
        meanings : [
            "I'm not staying up late tonight",
            "To feel adventurous",
            "To take a big risk",
            "To feel very awake",
        ],
        correct_meaning : "I'm not staying up late tonight",
        english_equivalent:  "I'm going to crash early tonight.",
        correct: false,
    },
    {
        id : 38,
        idiom : "Wer restet, der rostet",
        literal_translation : "He who rests, rusts",
        meanings : [
            "To be opportunistic",
            "To be ambitious",
            "Use it or lose it",
            "To feel energetic",
        ],
        correct_meaning : "Use it or lose it",
        english_equivalent:  "You snooze, you lose",
        correct: false,
    },
    {
        id : 39,
        idiom : "Das macht den Braten auch nicht fett",
        literal_translation : "It doesn't make the roast any fattier",
        meaning1 : "",
        meaning2 : "It doesn't make any difference",
        meaning3 : "",
        meaning4 : "",
        correct_meaning : "It doesn't make any difference",
        english_equivalent:  "The damage is already done",
        correct: false,
    },
    {
        id : 40,
        idiom : "Ich glaube mein Schwein pfeift",
        literal_translation : "I think my pig whistles",
        meanings : [
            "I can't believe it",
            "I'm feeling lucky",
            "To get carried away",
            "To think someone is lying",
        ],
        correct_meaning : "I can't believe it",
        english_equivalent: "I think I'm going off my rocker",
        correct: false,
    },
    {
        id : 41,
        idiom : "Mühsam ernährt sich das Eichhörnchen",
        literal_translation : "The squirrel feeds with great difficulty",
        meanings : [
            "Making very slow progress",
            "To be going through tough times",
            "To be upset about something",
            "To be forgetful",
        ],
        correct_meaning : "Making very slow progress",
        english_equivalent: "Slowly but surely",
        correct: false,
    },
    {
        id : 42,
        idiom : "Nah am Wasser gebaut",
        literal_translation : "To build (a house) near the water",
        meanings : [
            "To be foolish",
            "Someone who is emotional/likely to cry",
            "To be impatient",
            "To be resourceful",
        ],
        correct_meaning : "Someone who is emotional/likely to cry",
        english_equivalent:  "To be weepy",
        correct: false,
    },
    {
        id : 43,
        idiom : "Auf dem Zahnfleisch gehen",
        literal_translation : "To walk on your gums",
        meanings : [
            "To be extremely exhausted",
            "To promise more than you can deliver",
            "To be overly cautious",
            "To be optimistic",
        ],
        correct_meaning : "To be extremely exhausted",
        english_equivalent: "To be on one's last legs", /* to run on fumes */
        correct: false,
    },
    {
        id : 44,
        idiom : "Auf dem Sclauch stehen",
        literal_translation : "To stand on the hose",
        meanings : [
            "To have a mental block",
            "To make a mistake",
            "To require extra attention",
            "To make a fool of oneself",
        ],
        correct_meaning : "To have have a mental block",
        correct: false,
    },
]


 /* die Musik der Zukunft (?) */

 /* Wie Pech und Schwerfel sein / wie Pech und Schwefel zusammenhalten
 to be like pitch and sulfur
 to be (as) thick as thieves
 */


 /* wie ein Hecht im Karpfenteich sein */

 /* Ich bin heute nicht ganz auf der Höhe.
 I'm not quite myself today/ a bit under the weather */

 /* Was schert es die (deutsche) Eiche, wenn sich die Sau dran reibt. 
 You can criticise something, but nothing will change
 Does the moon care when dogs bark at it.*/

 /* Die Flinte ins Korn werfen
 To throw your rifle into the cornfield
 To not give up easily */

 /* eine Wundertüte sein - 
 to be a mystery bag
 to be unpredictable */