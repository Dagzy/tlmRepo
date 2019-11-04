//There are several console logs that I have commented out, and one crucial console log that I have left in. You can use these to see how the data is being used. I left the chosenWord console log in for testing purposes but obviously if anyone checks the console they'd know what the chosenWord is for the current round which kind of defeats the purpose of the game.

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let wordList = [
    // Borrowed from xkcd password generator which borrowed it from wherever
    "ability", "able", "aboard", "about", "above", "accept", "accident", "according",
    "account", "accurate", "acres", "across", "act", "action", "active", "activity",
    "actual", "actually", "add", "addition", "additional", "adjective", "adult", "adventure",
    "advice", "affect", "afraid", "after", "afternoon", "again", "against", "age",
    "ago", "agree", "ahead", "aid", "air", "airplane", "alike", "alive",
    "all", "allow", "almost", "alone", "along", "aloud", "alphabet", "already",
    "also", "although", "am", "among", "amount", "ancient", "angle", "angry",
    "animal", "announced", "another", "answer", "ants", "any", "anybody", "anyone",
    "anything", "anyway", "anywhere", "apart", "apartment", "appearance", "apple", "applied",
    "appropriate", "are", "area", "arm", "army", "around", "arrange", "arrangement",
    "arrive", "arrow", "art", "article", "as", "aside", "ask", "asleep",
    "at", "ate", "atmosphere", "atom", "atomic", "attached", "attack", "attempt",
    "attention", "audience", "author", "automobile", "available", "average", "avoid", "aware",
    "away", "baby", "back", "bad", "badly", "bag", "balance", "ball",
    "balloon", "band", "bank", "bar", "bare", "bark", "barn", "base",
    "baseball", "basic", "basis", "basket", "bat", "battle", "be", "bean",
    "bear", "beat", "beautiful", "beauty", "became", "because", "become", "becoming",
    "bee", "been", "before", "began", "beginning", "begun", "behavior", "behind",
    "being", "believed", "bell", "belong", "below", "belt", "bend", "beneath",
    "bent", "beside", "best", "bet", "better", "between", "beyond", "bicycle",
    "bigger", "biggest", "bill", "birds", "birth", "birthday", "bit", "bite",
    "black", "blank", "blanket", "blew", "blind", "block", "blood", "blow",
    "blue", "board", "boat", "body", "bone", "book", "border", "born",
    "both", "bottle", "bottom", "bound", "bow", "bowl", "box", "boy",
    "brain", "branch", "brass", "brave", "bread", "break", "breakfast", "breath",
    "breathe", "breathing", "breeze", "brick", "bridge", "brief", "bright", "bring",
    "broad", "broke", "broken", "brother", "brought", "brown", "brush", "buffalo",
    "build", "building", "built", "buried", "burn", "burst", "bus", "bush",
    "business", "busy", "but", "butter", "buy", "by", "cabin", "cage",
    "cake", "call", "calm", "came", "camera", "camp", "can", "canal",
    "cannot", "cap", "capital", "captain", "captured", "car", "carbon", "card",
    "care", "careful", "carefully", "carried", "carry", "case", "cast", "castle",
    "cat", "catch", "cattle", "caught", "cause", "cave", "cell", "cent",
    "center", "central", "century", "certain", "certainly", "chain", "chair", "chamber",
    "chance", "change", "changing", "chapter", "character", "characteristic", "charge", "chart",
    "check", "cheese", "chemical", "chest", "chicken", "chief", "child", "children",
    "choice", "choose", "chose", "chosen", "church", "circle", "circus", "citizen",
    "city", "class", "classroom", "claws", "clay", "clean", "clear", "clearly",
    "climate", "climb", "clock", "close", "closely", "closer", "cloth", "clothes",
    "clothing", "cloud", "club", "coach", "coal", "coast", "coat", "coffee",
    "cold", "collect", "college", "colony", "color", "column", "combination", "combine",
    "come", "comfortable", "coming", "command", "common", "community", "company", "compare",
    "compass", "complete", "completely", "complex", "composed", "composition", "compound", "concerned",
    "condition", "congress", "connected", "consider", "consist", "consonant", "constantly", "construction",
    "contain", "continent", "continued", "contrast", "control", "conversation", "cook", "cookies",
    "cool", "copper", "copy", "corn", "corner", "correct", "correctly", "cost",
    "cotton", "could", "count", "country", "couple", "courage", "course", "court",
    "cover", "cow", "cowboy", "crack", "cream", "create", "creature", "crew",
    "crop", "cross", "crowd", "cry", "cup", "curious", "current", "curve",
    "customs", "cut", "cutting", "daily", "damage", "dance", "danger", "dangerous",
    "dark", "darkness", "date", "daughter", "dawn", "day", "dead", "deal",
    "dear", "death", "decide", "declared", "deep", "deeply", "deer", "definition",
    "degree", "depend", "depth", "describe", "desert", "design", "desk", "detail",
    "determine", "develop", "development", "diagram", "diameter", "did", "die", "differ",
    "difference", "different", "difficult", "difficulty", "dig", "dinner", "direct", "direction",
    "directly", "dirt", "dirty", "disappear", "discover", "discovery", "discuss", "discussion",
    "disease", "dish", "distance", "distant", "divide", "division", "do", "doctor",
    "does", "dog", "doing", "doll", "dollar", "done", "donkey", "door",
    "dot", "double", "doubt", "down", "dozen", "draw", "drawn", "dream",
    "dress", "drew", "dried", "drink", "drive", "driven", "driver", "driving",
    "drop", "dropped", "drove", "dry", "duck", "due", "dug", "dull",
    "during", "dust", "duty", "each", "eager", "ear", "earlier", "early",
    "earn", "earth", "easier", "easily", "east", "easy", "eat", "eaten",
    "edge", "education", "effect", "effort", "egg", "eight", "either", "electric",
    "electricity", "element", "elephant", "eleven", "else", "empty", "end", "enemy",
    "energy", "engine", "engineer", "enjoy", "enough", "enter", "entire", "entirely",
    "environment", "equal", "equally", "equator", "equipment", "escape", "especially", "essential",
    "establish", "even", "evening", "event", "eventually", "ever", "every", "everybody",
    "everyone", "everything", "everywhere", "evidence", "exact", "exactly", "examine", "example",
    "excellent", "except", "exchange", "excited", "excitement", "exciting", "exclaimed", "exercise",
    "exist", "expect", "experience", "experiment", "explain", "explanation", "explore", "express",
    "expression", "extra", "eye", "face", "facing", "fact", "factor", "factory",
    "failed", "fair", "fairly", "fall", "fallen", "familiar", "family", "famous",
    "far", "farm", "farmer", "farther", "fast", "fastened", "faster", "fat",
    "father", "favorite", "fear", "feathers", "feature", "fed", "feed", "feel",
    "feet", "fell", "fellow", "felt", "fence", "few", "fewer", "field",
    "fierce", "fifteen", "fifth", "fifty", "fight", "fighting", "figure", "fill",
    "film", "final", "finally", "find", "fine", "finest", "finger", "finish",
    "fire", "fireplace", "firm", "first", "fish", "five", "fix", "flag",
    "flame", "flat", "flew", "flies", "flight", "floating", "floor", "flow",
    "flower", "fly", "fog", "folks", "follow", "food", "foot", "football",
    "for", "force", "foreign", "forest", "forget", "forgot", "forgotten", "form",
    "former", "fort", "forth", "forty", "forward", "fought", "found", "four",
    "fourth", "fox", "frame", "free", "freedom", "frequently", "fresh", "friend",
    "friendly", "frighten", "frog", "from", "front", "frozen", "fruit", "fuel",
    "full", "fully", "fun", "function", "funny", "fur", "furniture", "further",
    "future", "gain", "game", "garage", "garden", "gas", "gasoline", "gate",
    "gather", "gave", "general", "generally", "gentle", "gently", "get", "getting",
    "giant", "gift", "girl", "give", "given", "giving", "glad", "glass",
    "globe", "go", "goes", "gold", "golden", "gone", "good", "goose",
    "got", "government", "grabbed", "grade", "gradually", "grain", "grandfather", "grandmother",
    "graph", "grass", "gravity", "gray", "great", "greater", "greatest", "greatly",
    "green", "grew", "ground", "group", "grow", "grown", "growth", "guard",
    "guess", "guide", "gulf", "gun", "habit", "had", "hair", "half",
    "halfway", "hall", "hand", "handle", "handsome", "hang", "happen", "happened",
    "happily", "happy", "harbor", "hard", "harder", "hardly", "has", "hat",
    "have", "having", "hay", "he", "headed", "heading", "health", "heard",
    "hearing", "heart", "heat", "heavy", "height", "held", "hello", "help",
    "helpful", "her", "herd", "here", "herself", "hidden", "hide", "high",
    "higher", "highest", "highway", "hill", "him", "himself", "his", "history",
    "hit", "hold", "hole", "hollow", "home", "honor", "hope", "horn",
    "horse", "hospital", "hot", "hour", "house", "how", "however", "huge",
    "human", "hundred", "hung", "hungry", "hunt", "hunter", "hurried", "hurry",
    "hurt", "husband", "ice", "idea", "identity", "if", "ill", "image",
    "imagine", "immediately", "importance", "important", "impossible", "improve", "in", "inch",
    "include", "including", "income", "increase", "indeed", "independent", "indicate", "individual",
    "industrial", "industry", "influence", "information", "inside", "instance", "instant", "instead",
    "instrument", "interest", "interior", "into", "introduced", "invented", "involved", "iron",
    "is", "island", "it", "its", "itself", "jack", "jar", "jet",
    "job", "join", "joined", "journey", "joy", "judge", "jump", "jungle",
    "just", "keep", "kept", "key", "kids", "kill", "kind", "kitchen",
    "knew", "knife", "know", "knowledge", "known", "label", "labor", "lack",
    "lady", "laid", "lake", "lamp", "land", "language", "large", "larger",
    "largest", "last", "late", "later", "laugh", "law", "lay", "layers",
    "lead", "leader", "leaf", "learn", "least", "leather", "leave", "leaving",
    "led", "left", "leg", "length", "lesson", "let", "letter", "level",
    "library", "lie", "life", "lift", "light", "like", "likely", "limited",
    "line", "lion", "lips", "liquid", "list", "listen", "little", "live",
    "living", "load", "local", "locate", "location", "log", "lonely", "long",
    "longer", "look", "loose", "lose", "loss", "lost", "lot", "loud",
    "love", "lovely", "low", "lower", "luck", "lucky", "lunch", "lungs",
    "lying", "machine", "machinery", "mad", "made", "magic", "magnet", "mail",
    "main", "mainly", "major", "make", "making", "man", "managed", "manner",
    "manufacturing", "many", "map", "mark", "market", "married", "mass", "massage",
    "master", "material", "mathematics", "matter", "may", "maybe", "me", "meal",
    "mean", "means", "meant", "measure", "meat", "medicine", "meet", "melted",
    "member", "memory", "men", "mental", "merely", "met", "metal", "method",
    "mice", "middle", "might", "mighty", "mile", "military", "milk", "mill",
    "mind", "mine", "minerals", "minute", "mirror", "missing", "mission", "mistake",
    "mix", "mixture", "model", "modern", "molecular", "moment", "money", "monkey",
    "month", "mood", "moon", "more", "morning", "most", "mostly", "mother",
    "motion", "motor", "mountain", "mouse", "mouth", "move", "movement", "movie",
    "moving", "mud", "muscle", "music", "musical", "must", "my", "myself",
    "mysterious", "nails", "name", "nation", "national", "native", "natural", "naturally",
    "nature", "near", "nearby", "nearer", "nearest", "nearly", "necessary", "neck",
    "needed", "needle", "needs", "negative", "neighbor", "neighborhood", "nervous", "nest",
    "never", "new", "news", "newspaper", "next", "nice", "night", "nine",
    "no", "nobody", "nodded", "noise", "none", "noon", "nor", "north",
    "nose", "not", "note", "noted", "nothing", "notice", "noun", "now",
    "number", "numeral", "nuts", "object", "observe", "obtain", "occasionally", "occur",
    "ocean", "of", "off", "offer", "office", "officer", "official", "oil",
    "old", "older", "oldest", "on", "once", "one", "only", "onto",
    "open", "operation", "opinion", "opportunity", "opposite", "or", "orange", "orbit",
    "order", "ordinary", "organization", "organized", "origin", "original", "other", "ought",
    "our", "ourselves", "out", "outer", "outline", "outside", "over", "own",
    "owner", "oxygen", "pack", "package", "page", "paid", "pain", "paint",
    "pair", "palace", "pale", "pan", "paper", "paragraph", "parallel", "parent",
    "park", "part", "particles", "particular", "particularly", "partly", "parts", "party",
    "pass", "passage", "past", "path", "pattern", "pay", "peace", "pen",
    "pencil", "people", "per", "percent", "perfect", "perfectly", "perhaps", "period",
    "person", "personal", "pet", "phrase", "physical", "piano", "pick", "picture",
    "pictured", "pie", "piece", "pig", "pile", "pilot", "pine", "pink",
    "pipe", "pitch", "place", "plain", "plan", "plane", "planet", "planned",
    "planning", "plant", "plastic", "plate", "plates", "play", "pleasant", "please",
    "pleasure", "plenty", "plural", "plus", "pocket", "poem", "poet", "poetry",
    "point", "pole", "police", "policeman", "political", "pond", "pony", "pool",
    "poor", "popular", "population", "porch", "port", "position", "positive", "possible",
    "possibly", "post", "pot", "potatoes", "pound", "pour", "powder", "power",
    "powerful", "practical", "practice", "prepare", "present", "president", "press", "pressure",
    "pretty", "prevent", "previous", "price", "pride", "primitive", "principal", "principle",
    "printed", "private", "prize", "probably", "problem", "process", "produce", "product",
    "production", "program", "progress", "promised", "proper", "properly", "property", "protection",
    "proud", "prove", "provide", "public", "pull", "pupil", "pure", "purple",
    "purpose", "push", "put", "putting", "quarter", "queen", "question", "quick",
    "quickly", "quiet", "quietly", "quite", "rabbit", "race", "radio", "railroad",
    "rain", "raise", "ran", "ranch", "range", "rapidly", "rate", "rather",
    "raw", "rays", "reach", "read", "reader", "ready", "real", "realize",
    "rear", "reason", "recall", "receive", "recent", "recently", "recognize", "record",
    "red", "refer", "refused", "region", "regular", "related", "relationship", "religious",
    "remain", "remarkable", "remember", "remove", "repeat", "replace", "replied", "report",
    "represent", "require", "research", "respect", "rest", "result", "return", "review",
    "rhyme", "rhythm", "rice", "rich", "ride", "riding", "right", "ring",
    "rise", "rising", "river", "road", "roar", "rock", "rocket", "rocky",
    "rod", "roll", "roof", "room", "root", "rope", "rose", "rough",
    "round", "route", "row", "rubbed", "rubber", "rule", "ruler", "run",
    "running", "rush", "sad", "saddle", "safe", "safety", "said", "sail",
    "sale", "salmon", "salt", "same", "sand", "sang", "sat", "satellites",
    "satisfied", "save", "saved", "saw", "say", "scale", "scared", "scene",
    "school", "science", "scientific", "scientist", "score", "screen", "sea", "search",
    "season", "seat", "second", "secret", "section", "see", "seed", "seeing",
    "seems", "seen", "seldom", "select", "selection", "sell", "send", "sense",
    "sent", "sentence", "separate", "series", "serious", "serve", "service", "sets",
    "setting", "settle", "settlers", "seven", "several", "shade", "shadow", "shake",
    "shaking", "shall", "shallow", "shape", "share", "sharp", "she", "sheep",
    "sheet", "shelf", "shells", "shelter", "shine", "shinning", "ship", "shirt",
    "shoe", "shoot", "shop", "shore", "short", "shorter", "shot", "should",
    "shoulder", "shout", "show", "shown", "shut", "sick", "sides", "sight",
    "sign", "signal", "silence", "silent", "silk", "silly", "silver", "similar",
    "simple", "simplest", "simply", "since", "sing", "single", "sink", "sister",
    "sit", "sitting", "situation", "six", "size", "skill", "skin", "sky",
    "slabs", "slave", "sleep", "slept", "slide", "slight", "slightly", "slip",
    "slipped", "slope", "slow", "slowly", "small", "smaller", "smallest", "smell",
    "smile", "smoke", "smooth", "snake", "snow", "so", "soap", "social",
    "society", "soft", "softly", "soil", "solar", "sold", "soldier", "solid",
    "solution", "solve", "some", "somebody", "somehow", "someone", "something", "sometime",
    "somewhere", "son", "song", "soon", "sort", "sound", "source", "south",
    "southern", "space", "speak", "special", "species", "specific", "speech", "speed",
    "spell", "spend", "spent", "spider", "spin", "spirit", "spite", "split",
    "spoken", "sport", "spread", "spring", "square", "stage", "stairs", "stand",
    "standard", "star", "stared", "start", "state", "statement", "station", "stay",
    "steady", "steam", "steel", "steep", "stems", "step", "stepped", "stick",
    "stiff", "still", "stock", "stomach", "stone", "stood", "stop", "stopped",
    "store", "storm", "story", "stove", "straight", "strange", "stranger", "straw",
    "stream", "street", "strength", "stretch", "strike", "string", "strip", "strong",
    "stronger", "struck", "structure", "struggle", "stuck", "student", "studied", "studying",
    "subject", "substance", "success", "successful", "such", "sudden", "suddenly", "sugar",
    "suggest", "suit", "sum", "summer", "sun", "sunlight", "supper", "supply",
    "support", "suppose", "sure", "surface", "surprise", "surrounded", "swam", "sweet",
    "swept", "swim", "swimming", "swing", "swung", "syllable", "symbol", "system",
    "table", "tail", "take", "taken", "tales", "talk", "tall", "tank",
    "tape", "task", "taste", "taught", "tax", "tea", "teach", "teacher",
    "team", "tears", "teeth", "telephone", "television", "tell", "temperature", "ten",
    "tent", "term", "terrible", "test", "than", "thank", "that", "thee",
    "them", "themselves", "then", "theory", "there", "therefore", "these", "they",
    "thick", "thin", "thing", "think", "third", "thirty", "this", "those",
    "thou", "though", "thought", "thousand", "thread", "three", "threw", "throat",
    "through", "throughout", "throw", "thrown", "thumb", "thus", "thy", "tide",
    "tie", "tight", "tightly", "till", "time", "tin", "tiny", "tip",
    "tired", "title", "to", "tobacco", "today", "together", "told", "tomorrow",
    "tone", "tongue", "tonight", "too", "took", "tool", "top", "topic",
    "torn", "total", "touch", "toward", "tower", "town", "toy", "trace",
    "track", "trade", "traffic", "trail", "train", "transportation", "trap", "travel",
    "treated", "tree", "triangle", "tribe", "trick", "tried", "trip", "troops",
    "tropical", "trouble", "truck", "trunk", "truth", "try", "tube", "tune",
    "turn", "twelve", "twenty", "twice", "two", "type", "typical", "uncle",
    "under", "underline", "understanding", "unhappy", "union", "unit", "universe", "unknown",
    "unless", "until", "unusual", "up", "upon", "upper", "upward", "us",
    "use", "useful", "using", "usual", "usually", "valley", "valuable", "value",
    "vapor", "variety", "various", "vast", "vegetable", "verb", "vertical", "very",
    "vessels", "victory", "view", "village", "visit", "visitor", "voice", "volume",
    "vote", "vowel", "voyage", "wagon", "wait", "walk", "wall", "want",
    "war", "warm", "warn", "was", "wash", "waste", "watch", "water",
    "wave", "way", "we", "weak", "wealth", "wear", "weather", "week",
    "weigh", "weight", "welcome", "well", "went", "were", "west", "western",
    "wet", "whale", "what", "whatever", "wheat", "wheel", "when", "whenever",
    "where", "wherever", "whether", "which", "while", "whispered", "whistle", "white",
    "who", "whole", "whom", "whose", "why", "wide", "widely", "wife",
    "wild", "will", "willing", "win", "wind", "window", "wing", "winter",
    "wire", "wise", "wish", "with", "within", "without", "wolf", "women",
    "won", "wonder", "wonderful", "wood", "wooden", "wool", "word", "wore",
    "work", "worker", "world", "worried", "worry", "worse", "worth", "would",
    "wrapped", "write", "writer", "writing", "written", "wrong", "wrote", "yard",
    "year", "yellow", "yes", "yesterday", "yet", "you", "young", "younger",
    "your", "yourself", "youth", "zero", "zebra", "zipper", "zoo", "zulu"
];

let allTheStrikes = ["", "❌", "❌❌", "❌❌❌", "❌❌❌❌", "❌❌❌❌❌", "❌❌❌❌❌❌", "❌❌❌❌❌❌❌", "❌❌❌❌❌❌❌❌", "❌❌❌❌❌❌❌❌❌"]


//Array of my images so I can switch them out using the index
let stickImages = ['', 'assets/stick-7.png', 'assets/stick-6.png', 'assets/stick-5.png', 'assets/stick-4.png', 'assets/stick-3.png', 'assets/stick-2.png', 'assets/stick-1.png', 'assets/stick-full.png']

//set-up of identifying a few html elements that I'll be appending things to later. Initializing a few varibles that will be used as well.
let boxOStrikes = document.getElementById('strikeBox')
let guess = document.getElementById('guessArea')
let chosenWord = ""
let strike = 0
let playArea = document.getElementById("playArea");
let stick = document.createElement('img')
stick.setAttribute('src', "")
playArea.appendChild(stick)

//Creating a button for each letter in my "Alphabet" variable and giving them a few attributes that Ill use later, as well as attaching an event listener
for (i in alphabet) {
    let letter = document.createElement('button')
    letter.textContent = alphabet[i]
    document.getElementById('letterBox').appendChild(letter)
    letter.setAttribute('class', 'letterBtn')
    letter.setAttribute('value', String(alphabet[i]))
    letter.setAttribute('disabled', 'true')
    letter.addEventListener('click', () => {
        a = letter.value
        letter.setAttribute('disabled', 'true')
        letter.style.opacity = '.7'
        bunk(a)
    })
}

//Simply adding a click listener to my start button
document.getElementById("start").addEventListener("click", () => {

    startGame()
})

//random math function to pick a word from my wordlist
function wordPicker() {
    return Math.floor(Math.random() * (wordList.length + 1))
}

//My function that runs each time my start button is clicked. It resets strikes each time and also removes the "disabled" attribute from the buttons that may have been pressed during the previous round of letter guessing. This function also uses our random math function and assigns the randomly chosen word to chosenWord. After that I use a for loop to create a word blank for each individual letter in whatever word was chosen that has a value equal to that letters index in the word.
function startGame() {
    strike = 0
    guess.innerHTML = null
    theWord = wordPicker()
    chosenWord = wordList[theWord]
    console.log(chosenWord)
    boxOStrikes.textContent = null
    var reset = document.querySelectorAll('button');
    var i
    for (i = 0; i < reset.length; i++) {
        reset[i].removeAttribute('disabled')
        reset[i].style.opacity = '1'
    }
    for (x in chosenWord) {

        var blanks = document.createElement('div')
        blanks.setAttribute('class', 'letters')
        blanks.setAttribute('value', x)
        guess.appendChild(blanks)
        stick.setAttribute('src', '')
    }
    return chosenWord
}

//This function provides some of the logic responsible for determining what will happen if the  button the user clicks is a letter that is part of whatever our chosenWord is, and what will happen if the letter that they chose is incorrect and not a part of the chosenWord.
function bunk(a) {
    imageUrl = ''
    var guessed = a;
    var checked = chosenWord.includes(guessed.toLowerCase())

    // console.log(checked, guessed)
    let splitWord = chosenWord.split("")
    // console.log(splitWord)

    if (checked === false) {
        strike++
        strikes = strike
        console.log('Incorrect Guess!', strikes)
        stick.setAttribute('src', stickImages[strikes])
        boxOStrikes.textContent = allTheStrikes[strikes]
        if (strikes > 8) {
            alert("Gratz, you've been bunked! Better luck next time!")
            strike = 0
            stick.setAttribute('src', "")
        }
    }
    getIndex(splitWord, guessed.toLowerCase())

    //This segement looks at all of our word blanks which by default have no id on them. Once a letter is matched it is given an id. This allows me to compare all my blanks and figure out if each blank has been filled, if this condition is met it essentially means the player has won and fully figured out the chosenWord. Using querySelectorAll I am given an array of my blanks that have a class of letters (WHICH THEY ALL SHOULD) and an array of blanks that have an id of matched. I then compare the length of each array, once they match thats a win!
    let hasNotBeenMatched = document.querySelectorAll("div.letters")
    let hasBeenMatched = document.querySelectorAll("div#matched")
    console.log(hasNotBeenMatched, hasBeenMatched)
    if (hasBeenMatched.length === hasNotBeenMatched.length) {
        alert("Congrats! You figured out the word!")
        startGame()
    }
}
//the sole purpose of this function is to compare the letters in the currently chosenWord and the value of whatever button was clicked and passed down through our hang() function to here. It runs a loop which is used to compare the values, if the values match a for in loop is ran which sets the text content of each blank that contains the matching letter. This also adds an Id of "matched" which is used above in our hang() function to determine when players have met the win condition.
function getIndex(arr, val) {
    let indexes = [],
        i;
    // console.log(arr, val)

    for (i = 0; i < arr.length; i++) {

        if (arr[i] === val) {
            indexes.push(i);
            for (x in indexes) {
                let matchedLetter = indexes[x];
                let spaces = document.getElementsByClassName("letters")
                let toChange = spaces[matchedLetter]
                toChange.style.color = "black";
                toChange.textContent = val
                toChange.setAttribute('id', 'matched')
                // console.log(matchedLetter, spaces)
            }
        }
        // console.log(indexes)
    }
}