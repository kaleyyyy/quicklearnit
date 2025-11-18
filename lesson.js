// Lesson data structure
const lessonData = {
	// Unit 1 Main Module: Greetings Overview
	'greetings-overview': [
		{
			type: 'multiple-choice',
			question: 'What does "Per favore" mean?',
			options: ['Thank you', 'Please', 'Excuse me', 'Sorry'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: '<blank>, come stai?',
			translation: 'Hello, how are you?',
			options: ['Ciao', 'Grazie', 'Scusa', 'Prego'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Grazie', back: 'Thank you' },
				{ front: 'Prego', back: 'You\'re welcome' },
				{ front: 'Scusa', back: 'Excuse me/Sorry' },
				{ front: 'Per favore', back: 'Please' },
				{ front: 'Salve', back: 'Hello (formal)' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Grazie', english: 'Thank you' },
				{ italian: 'Prego', english: 'You\'re welcome' },
				{ italian: 'Scusa', english: 'Excuse me' },
				{ italian: 'Per favore', english: 'Please' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "You\'re welcome" in Italian?',
			options: ['Grazie', 'Prego', 'Scusa', 'Ciao'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: '<blank> mille!',
			translation: 'Thank you very much!',
			options: ['Grazie', 'Prego', 'Scusa', 'Ciao'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "Scusa" mean?',
			options: ['Hello', 'Goodbye', 'Excuse me', 'Thank you'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Un caffè, <blank>.',
			translation: 'A coffee, please.',
			options: ['per favore', 'grazie', 'prego', 'scusa'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'Which is more formal?',
			options: ['Ciao', 'Salve', 'Ehilà', 'Bella'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: '<blank>, non parlo italiano.',
			translation: 'Sorry, I don\'t speak Italian.',
			options: ['Scusa', 'Grazie', 'Prego', 'Ciao'],
			correct: 0
		}
	],
	
	// Unit 1 Lesson 1: Basic Greetings (Hello & Goodbye)
	'greetings-basic': [
		{
			type: 'multiple-choice',
			question: 'What does "Ciao" mean?',
			options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: '<blank>! Come stai?',
			translation: 'Hello! How are you?',
			options: ['Ciao', 'Grazie', 'Scusa', 'Prego'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Ciao', back: 'Hello/Bye' },
				{ front: 'Arrivederci', back: 'Goodbye' },
				{ front: 'Buongiorno', back: 'Good morning' },
				{ front: 'Buonasera', back: 'Good evening' },
				{ front: 'Buonanotte', back: 'Good night' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Ciao', english: 'Hello' },
				{ italian: 'Arrivederci', english: 'Goodbye' },
				{ italian: 'Buongiorno', english: 'Good morning' },
				{ italian: 'Buonanotte', english: 'Good night' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "Goodbye" in Italian?',
			options: ['Ciao', 'Arrivederci', 'Grazie', 'Prego'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: '<blank>, signora!',
			translation: 'Good morning, madam!',
			options: ['Buongiorno', 'Buonanotte', 'Ciao', 'Arrivederci'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What time of day is "Buonasera" used?',
			options: ['Morning', 'Afternoon', 'Evening', 'Night'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: '<blank> e buonanotte!',
			translation: 'Goodbye and good night!',
			options: ['Ciao', 'Grazie', 'Scusa', 'Prego'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'Which greeting is most formal?',
			options: ['Ciao', 'Salve', 'Buongiorno', 'Ehilà'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: '<blank>, amico!',
			translation: 'Goodbye, friend!',
			options: ['Arrivederci', 'Buonasera', 'Grazie', 'Scusa'],
			correct: 0
		}
	],
	
	// Unit 1 Lesson 2: Introductions (Nice to Meet You)
	'greetings-intro': [
		{
			type: 'multiple-choice',
			question: 'How do you say "My name is..." in Italian?',
			options: ['Io sono...', 'Mi chiamo...', 'Tu sei...', 'Lei è...'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Mi chiamo Marco. <blank> di conoscerla!',
			translation: 'My name is Marco. Nice to meet you!',
			options: ['Piacere', 'Grazie', 'Ciao', 'Scusa'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Mi chiamo...', back: 'My name is...' },
				{ front: 'Piacere', back: 'Nice to meet you' },
				{ front: 'Come ti chiami?', back: 'What is your name?' },
				{ front: 'Sono di...', back: 'I am from...' },
				{ front: 'E tu?', back: 'And you?' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Come ti chiami?', english: 'What is your name?' },
				{ italian: 'Piacere', english: 'Nice to meet you' },
				{ italian: 'Di dove sei?', english: 'Where are you from?' },
				{ italian: 'Sono americano', english: 'I am American' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'What does "Piacere" mean?',
			options: ['Thank you', 'Please', 'Nice to meet you', 'Excuse me'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Come <blank> chiami?',
			translation: 'What is your name?',
			options: ['ti', 'mi', 'si', 'vi'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you ask "Where are you from?" in Italian?',
			options: ['Come stai?', 'Di dove sei?', 'Che ore sono?', 'Quanto costa?'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Sono <blank> Milano.',
			translation: 'I am from Milan.',
			options: ['di', 'a', 'in', 'da'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'Which means "And you?" (informal)?',
			options: ['E Lei?', 'E tu?', 'E voi?', 'E loro?'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Molto <blank> di conoscerti!',
			translation: 'Very nice to meet you!',
			options: ['piacere', 'bene', 'grazie', 'male'],
			correct: 0
		}
	],
	
	// Unit 1 Lesson 3: How Are You?
	'greetings-wellbeing': [
		{
			type: 'multiple-choice',
			question: 'How do you say "How are you?" in Italian?',
			options: ['Come stai?', 'Dove vai?', 'Che fai?', 'Chi sei?'],
			correct: 0
		},
		{
			type: 'fill-blank',
			sentence: 'Sto <blank>, grazie!',
			translation: 'I am well, thank you!',
			options: ['bene', 'male', 'così', 'molto'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Come stai?', back: 'How are you?' },
				{ front: 'Bene', back: 'Well/Good' },
				{ front: 'Male', back: 'Bad' },
				{ front: 'Così così', back: 'So-so' },
				{ front: 'Molto bene', back: 'Very well' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Come stai?', english: 'How are you?' },
				{ italian: 'Bene', english: 'Well' },
				{ italian: 'Male', english: 'Bad' },
				{ italian: 'E tu?', english: 'And you?' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'What does "Sto bene" mean?',
			options: ['I am bad', 'I am well', 'I am tired', 'I am hungry'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Non sto <blank>.',
			translation: 'I am not well.',
			options: ['bene', 'male', 'qui', 'molto'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "Very well" in Italian?',
			options: ['Così così', 'Molto male', 'Molto bene', 'Un po\''],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Sto <blank> stanco.',
			translation: 'I am a bit tired.',
			options: ['un po\'', 'molto', 'non', 'sempre'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "Così così" mean?',
			options: ['Very good', 'Very bad', 'So-so', 'Thank you'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Come stai oggi? - <blank> bene!',
			translation: 'How are you today? - Very well!',
			options: ['Molto', 'Poco', 'Non', 'Sempre'],
			correct: 0
		}
	],
	
	// Unit 2 Main Module: Numbers Overview
	'numbers-overview': [
		{
			type: 'multiple-choice',
			question: 'What is "zero" in Italian?',
			options: ['Nulla', 'Zero', 'Niente', 'Vuoto'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Il numero è <blank>.',
			translation: 'The number is zero.',
			options: ['zero', 'uno', 'dieci', 'cento'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'zero', back: 'zero' },
				{ front: 'primo', back: 'first' },
				{ front: 'secondo', back: 'second' },
				{ front: 'terzo', back: 'third' },
				{ front: 'ultimo', back: 'last' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'primo', english: 'first' },
				{ italian: 'secondo', english: 'second' },
				{ italian: 'terzo', english: 'third' },
				{ italian: 'quarto', english: 'fourth' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "first" in Italian?',
			options: ['Uno', 'Primo', 'Una', 'Prima'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'È il <blank> giorno.',
			translation: 'It is the third day.',
			options: ['terzo', 'tre', 'terza', 'trenta'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "ultimo" mean?',
			options: ['First', 'Second', 'Last', 'Next'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Sono il <blank> studente.',
			translation: 'I am the second student.',
			options: ['secondo', 'due', 'prima', 'terzo'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "fourth" in Italian?',
			options: ['Quattro', 'Quarto', 'Quarta', 'Quaranta'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'È l\'<blank> volta.',
			translation: 'It is the last time.',
			options: ['ultimo', 'ultima', 'uno', 'una'],
			correct: 1
		}
	],
	
	// Unit 2 Lesson 1: Numbers 1-10
	'numbers-basic': [
		{
			type: 'multiple-choice',
			question: 'What is "uno" in English?',
			options: ['Two', 'One', 'Three', 'Zero'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ho <blank> gatti.',
			translation: 'I have three cats.',
			options: ['tre', 'due', 'quattro', 'cinque'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'uno', back: 'one' },
				{ front: 'due', back: 'two' },
				{ front: 'tre', back: 'three' },
				{ front: 'quattro', back: 'four' },
				{ front: 'cinque', back: 'five' },
				{ front: 'sei', back: 'six' },
				{ front: 'sette', back: 'seven' },
				{ front: 'otto', back: 'eight' },
				{ front: 'nove', back: 'nine' },
				{ front: 'dieci', back: 'ten' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'uno', english: 'one' },
				{ italian: 'cinque', english: 'five' },
				{ italian: 'sette', english: 'seven' },
				{ italian: 'dieci', english: 'ten' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'What number is "sette"?',
			options: ['6', '7', '8', '9'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ci sono <blank> mele.',
			translation: 'There are five apples.',
			options: ['cinque', 'sei', 'sette', 'otto'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "eight" in Italian?',
			options: ['sette', 'otto', 'nove', 'sei'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ho <blank> anni.',
			translation: 'I am ten years old.',
			options: ['dieci', 'nove', 'undici', 'dodici'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What is "quattro" in English?',
			options: ['Three', 'Four', 'Five', 'Six'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Vorrei <blank> biglietti.',
			translation: 'I would like two tickets.',
			options: ['due', 'tre', 'uno', 'quattro'],
			correct: 0
		}
	],
	
	// Unit 2 Lesson 2: Counting Higher
	'numbers-advanced': [
		{
			type: 'multiple-choice',
			question: 'What is "venti" in English?',
			options: ['Ten', 'Twenty', 'Thirty', 'Fifty'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ho <blank> anni.',
			translation: 'I am twenty-five years old.',
			options: ['venticinque', 'ventuno', 'trenta', 'quindici'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'undici', back: 'eleven' },
				{ front: 'quindici', back: 'fifteen' },
				{ front: 'venti', back: 'twenty' },
				{ front: 'trenta', back: 'thirty' },
				{ front: 'cinquanta', back: 'fifty' },
				{ front: 'cento', back: 'one hundred' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'venti', english: 'twenty' },
				{ italian: 'trenta', english: 'thirty' },
				{ italian: 'cinquanta', english: 'fifty' },
				{ italian: 'cento', english: 'one hundred' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "fifty" in Italian?',
			options: ['quaranta', 'cinquanta', 'sessanta', 'settanta'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Costa <blank> euro.',
			translation: 'It costs thirty euros.',
			options: ['trenta', 'venti', 'quaranta', 'cinquanta'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What is "cento" in English?',
			options: ['Ten', 'Fifty', 'One hundred', 'One thousand'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Ci sono <blank> studenti.',
			translation: 'There are fifteen students.',
			options: ['quindici', 'quattordici', 'sedici', 'diciassette'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What number is "quaranta"?',
			options: ['30', '40', '50', '60'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Il libro costa <blank> euro.',
			translation: 'The book costs twelve euros.',
			options: ['dodici', 'undici', 'tredici', 'quattordici'],
			correct: 0
		}
	],
	
	// Unit 2 Lesson 3: Time & Dates
	'numbers-time': [
		{
			type: 'multiple-choice',
			question: 'How do you ask "What time is it?" in Italian?',
			options: ['Che ore sono?', 'Che giorno è?', 'Quanto costa?', 'Dove vai?'],
			correct: 0
		},
		{
			type: 'fill-blank',
			sentence: 'Sono le <blank>.',
			translation: 'It is three o\'clock.',
			options: ['tre', 'due', 'quattro', 'cinque'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Che ore sono?', back: 'What time is it?' },
				{ front: 'È l\'una', back: 'It is one o\'clock' },
				{ front: 'Sono le due', back: 'It is two o\'clock' },
				{ front: 'Mezzogiorno', back: 'Noon' },
				{ front: 'Mezzanotte', back: 'Midnight' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Che ore sono?', english: 'What time is it?' },
				{ italian: 'Mezzogiorno', english: 'Noon' },
				{ italian: 'Mezzanotte', english: 'Midnight' },
				{ italian: 'Un quarto', english: 'Quarter' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'What is "mezzogiorno" in English?',
			options: ['Midnight', 'Noon', 'Morning', 'Evening'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'È <blank>.',
			translation: 'It is midnight.',
			options: ['mezzanotte', 'mezzogiorno', 'sera', 'mattina'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "quarter past" in Italian?',
			options: ['E mezzo', 'E un quarto', 'Meno un quarto', 'In punto'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Sono le cinque e <blank>.',
			translation: 'It is half past five.',
			options: ['mezzo', 'quarto', 'dieci', 'venti'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "in punto" mean?',
			options: ['Half past', 'Quarter to', 'O\'clock (sharp)', 'About'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Sono le otto <blank> un quarto.',
			translation: 'It is quarter to eight.',
			options: ['meno', 'e', 'più', 'con'],
			correct: 0
		}
	],
	
	// Unit 3 Main Module: Food Overview
	'food-overview': [
		{
			type: 'multiple-choice',
			question: 'What does "Buon appetito" mean?',
			options: ['Good night', 'Enjoy your meal', 'Good morning', 'Thank you'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: '<blank> appetito!',
			translation: 'Enjoy your meal!',
			options: ['Buon', 'Buona', 'Bene', 'Brava'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Fame', back: 'Hunger' },
				{ front: 'Sete', back: 'Thirst' },
				{ front: 'Delizioso', back: 'Delicious' },
				{ front: 'Piccante', back: 'Spicy' },
				{ front: 'Dolce', back: 'Sweet' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Fame', english: 'Hunger' },
				{ italian: 'Sete', english: 'Thirst' },
				{ italian: 'Delizioso', english: 'Delicious' },
				{ italian: 'Piccante', english: 'Spicy' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "I am hungry" in Italian?',
			options: ['Ho sete', 'Ho fame', 'Sono stanco', 'Sono felice'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ho <blank>!',
			translation: 'I am thirsty!',
			options: ['sete', 'fame', 'sonno', 'freddo'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "piccante" mean?',
			options: ['Sweet', 'Sour', 'Spicy', 'Salty'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Questo cibo è <blank>!',
			translation: 'This food is delicious!',
			options: ['delizioso', 'piccante', 'salato', 'amaro'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "sweet" in Italian?',
			options: ['Salato', 'Amaro', 'Dolce', 'Acido'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Mi piace il cibo <blank>.',
			translation: 'I like spicy food.',
			options: ['piccante', 'dolce', 'salato', 'freddo'],
			correct: 0
		}
	],
	
	// Unit 3 Lesson 1: Fruits & Vegetables
	'food-produce': [
		{
			type: 'multiple-choice',
			question: 'What is "mela" in English?',
			options: ['Orange', 'Apple', 'Banana', 'Pear'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Mi piace la <blank> rossa.',
			translation: 'I like the red apple.',
			options: ['mela', 'banana', 'arancia', 'pera'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'mela', back: 'apple' },
				{ front: 'banana', back: 'banana' },
				{ front: 'arancia', back: 'orange' },
				{ front: 'pomodoro', back: 'tomato' },
				{ front: 'insalata', back: 'lettuce/salad' },
				{ front: 'carota', back: 'carrot' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'mela', english: 'apple' },
				{ italian: 'pomodoro', english: 'tomato' },
				{ italian: 'carota', english: 'carrot' },
				{ italian: 'banana', english: 'banana' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "tomato" in Italian?',
			options: ['patata', 'pomodoro', 'cipolla', 'aglio'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Vorrei una <blank> verde.',
			translation: 'I would like a green salad.',
			options: ['insalata', 'mela', 'pera', 'banana'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What is "fragola" in English?',
			options: ['Strawberry', 'Blueberry', 'Raspberry', 'Cherry'],
			correct: 0
		},
		{
			type: 'fill-blank',
			sentence: 'Le <blank> sono arancioni.',
			translation: 'The carrots are orange.',
			options: ['carote', 'mele', 'banane', 'arance'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'Which is a vegetable?',
			options: ['mela', 'pera', 'carota', 'uva'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Compro delle <blank> fresche.',
			translation: 'I buy some fresh strawberries.',
			options: ['fragole', 'mele', 'pere', 'banane'],
			correct: 0
		}
	],
	
	// Unit 3 Lesson 2: Ordering Food
	'food-restaurant': [
		{
			type: 'multiple-choice',
			question: 'How do you say "I would like..." in Italian?',
			options: ['Voglio...', 'Vorrei...', 'Devo...', 'Posso...'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: '<blank> una pizza margherita, per favore.',
			translation: 'I would like a margherita pizza, please.',
			options: ['Vorrei', 'Voglio', 'Sono', 'Ho'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Vorrei...', back: 'I would like...' },
				{ front: 'Il conto', back: 'The bill/check' },
				{ front: 'Il menu', back: 'The menu' },
				{ front: 'Acqua', back: 'Water' },
				{ front: 'Vino', back: 'Wine' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Il conto', english: 'The bill' },
				{ italian: 'Vorrei', english: 'I would like' },
				{ italian: 'Acqua', english: 'Water' },
				{ italian: 'Il menu', english: 'The menu' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'What does "Il conto, per favore" mean?',
			options: ['The menu, please', 'The bill, please', 'Water, please', 'More bread, please'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Posso avere il <blank>, per favore?',
			translation: 'Can I have the menu, please?',
			options: ['menu', 'conto', 'pane', 'vino'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you order water in Italian?',
			options: ['Vorrei vino', 'Vorrei acqua', 'Vorrei caffè', 'Vorrei birra'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Un bicchiere di <blank>, per favore.',
			translation: 'A glass of wine, please.',
			options: ['vino', 'acqua', 'latte', 'succo'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What is "pane" in English?',
			options: ['Water', 'Bread', 'Wine', 'Cheese'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Il ristorante è <blank>!',
			translation: 'The restaurant is delicious!',
			options: ['buono', 'grande', 'piccolo', 'veloce'],
			correct: 0
		}
	],
	
	// Unit 3 Lesson 3: Drinks & Desserts
	'food-drinks': [
		{
			type: 'multiple-choice',
			question: 'How do you say "coffee" in Italian?',
			options: ['Tè', 'Caffè', 'Latte', 'Succo'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Vorrei un <blank>, per favore.',
			translation: 'I would like a coffee, please.',
			options: ['caffè', 'tè', 'acqua', 'vino'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Caffè', back: 'Coffee' },
				{ front: 'Tè', back: 'Tea' },
				{ front: 'Latte', back: 'Milk' },
				{ front: 'Gelato', back: 'Ice cream' },
				{ front: 'Tiramisù', back: 'Tiramisu' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Caffè', english: 'Coffee' },
				{ italian: 'Gelato', english: 'Ice cream' },
				{ italian: 'Succo', english: 'Juice' },
				{ italian: 'Birra', english: 'Beer' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'What does "gelato" mean?',
			options: ['Cake', 'Ice cream', 'Cookie', 'Pie'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Un <blank> di arancia, per favore.',
			translation: 'An orange juice, please.',
			options: ['succo', 'vino', 'caffè', 'latte'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "tea" in Italian?',
			options: ['Caffè', 'Tè', 'Latte', 'Cioccolata'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Mi piace il <blank> al cioccolato.',
			translation: 'I like chocolate ice cream.',
			options: ['gelato', 'caffè', 'pane', 'formaggio'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What is "birra" in English?',
			options: ['Wine', 'Water', 'Beer', 'Juice'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Vorrei un <blank> con latte.',
			translation: 'I would like a coffee with milk.',
			options: ['caffè', 'tè', 'succo', 'vino'],
			correct: 0
		}
	]
	,

	// Unit 4 Main Module: Travel Overview
	'travel-overview': [
		{ // general situational phrase
			type: 'multiple-choice',
			question: 'What does "Dove si trova...?" mean?',
			options: ['How much is it?', 'Where is ... located?', 'Who is there?', 'When does it open?'],
			correct: 1
		},
		{ // polite navigation help
			type: 'fill-blank',
			sentence: '<blank> mi aiuti con la mappa?',
			translation: 'Can you help me with the map?',
			options: ['Puoi', 'Hai', 'Sei', 'Vai'],
			correct: 0
		},
		{ // key travel vocab
			type: 'flashcard',
			cards: [
				{ front: 'mappa', back: 'map' },
				{ front: 'biglietto', back: 'ticket' },
				{ front: 'fermata', back: 'stop (bus/tram)' },
				{ front: 'viaggio', back: 'trip/journey' },
				{ front: 'aeroporto', back: 'airport' }
			]
		},
		{ // matching travel basics
			type: 'matching',
			pairs: [
				{ italian: 'mappa', english: 'map' },
				{ italian: 'biglietto', english: 'ticket' },
				{ italian: 'fermata', english: 'stop' },
				{ italian: 'viaggio', english: 'journey' }
			]
		},
		{ // direction phrase
			type: 'multiple-choice',
			question: 'How do you ask for help finding the station?',
			options: ['Dove è la stazione?', 'Quanto costa la stazione?', 'Chi è la stazione?', 'Quando sei la stazione?'],
			correct: 0
		},
		{ // fill ticket purchase
			type: 'fill-blank',
			sentence: 'Vorrei un <blank> per Roma.',
			translation: 'I would like a ticket to Rome.',
			options: ['biglietto', 'viaggio', 'mappa', 'fermata'],
			correct: 0
		},
		{ // understanding airport
			type: 'multiple-choice',
			question: 'What does "aeroporto" mean?',
			options: ['Harbor', 'Airport', 'Highway', 'Bridge'],
			correct: 1
		},
		{ // fill arriving
			type: 'fill-blank',
			sentence: 'Il <blank> parte alle nove.',
			translation: 'The trip leaves at nine.',
			options: ['viaggio', 'biglietto', 'mappa', 'fermata'],
			correct: 0
		},
		{ // location clarity
			type: 'multiple-choice',
			question: 'Which word means a scheduled stop for public transport?',
			options: ['fermata', 'chiave', 'camera', 'strada'],
			correct: 0
		},
		{ // final reinforcement
			type: 'fill-blank',
			sentence: 'Ho bisogno della <blank> per orientarmi.',
			translation: 'I need the map to orient myself.',
			options: ['mappa', 'chiave', 'camera', 'valigia'],
			correct: 0
		}
	],

	// Unit 4 
	'travel-directions': [
		{ type: 'multiple-choice', question: 'What does "sinistra" mean?', options: ['Right', 'Left', 'Straight', 'Behind'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Gira a <blank> al semaforo.', translation: 'Turn left at the traffic light.', options: ['sinistra','destra','avanti','vicino'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'sinistra', back: 'left' },
			{ front: 'destra', back: 'right' },
			{ front: 'dritto', back: 'straight' },
			{ front: 'avanti', back: 'forward' },
			{ front: 'vicino', back: 'near' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'destra', english: 'right' },
			{ italian: 'sinistra', english: 'left' },
			{ italian: 'avanti', english: 'forward' },
			{ italian: 'vicino', english: 'near' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "straight ahead"?', options: ['Vai destra','Sempre dritto','Avanti vicino','Fermata dritto'], correct: 1 },
		{ type: 'fill-blank', sentence: 'La stazione è <blank> all’hotel.', translation: 'The station is near the hotel.', options: ['vicino','lontano','avanti','destra'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "lontano" mean?', options: ['Far','Slow','Near','Down'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Vai <blank> poi gira a destra.', translation: 'Go straight then turn right.', options: ['dritto','sinistra','vicino','lontano'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which word refers to a crossway where roads meet?', options: ['incrocio','fermata','stazione','valigia'], correct: 0 },
		{ type: 'fill-blank', sentence: 'L’<blank> è dopo il ponte.', translation: 'The intersection is after the bridge.', options: ['incrocio','avanti','biglietto','bagno'], correct: 0 }
	],

	// Unit 4 
	'travel-transport': [
		{ type: 'multiple-choice', question: 'What is "treno" in English?', options: ['Train','Tram','Track','Trip'], correct: 0 },
		{ type: 'fill-blank', sentence: 'La degli autobus è lì.', translation: 'The bus stop is there.', options: ['fermata','camera','chiave','strada'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'treno', back: 'train' },
			{ front: 'autobus', back: 'bus' },
			{ front: 'aereo', back: 'airplane' },
			{ front: 'taxi', back: 'taxi' },
			{ front: 'stazione', back: 'station' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'treno', english: 'train' },
			{ italian: 'autobus', english: 'bus' },
			{ italian: 'aereo', english: 'airplane' },
			{ italian: 'taxi', english: 'taxi' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "station" in Italian?', options: ['fermata','stazione','strada','viaggio'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Prendo l’<blank> per Milano.', translation: 'I take the train to Milan.', options: ['treno','autobus','taxi','aereo'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which word means airplane?', options: ['aereo','aria','aeroporto','viaggio'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Cerco un <blank> libero.', translation: 'I look for a free taxi.', options: ['taxi','autobus','viaggio','biglietto'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "biglietteria" refer to?', options: ['Ticket office','Luggage','Runway','Parking'], correct: 0 },
		{ type: 'fill-blank', sentence: 'La <blank> è vicino alla stazione.', translation: 'The ticket office is near the station.', options: ['biglietteria','valigia','camera','prenotazione'], correct: 0 }
	],

	// Unit 4 Lesson 3: Accommodation
	'travel-accommodation': [
		{ type: 'multiple-choice', question: 'What is "hotel" in Italian?', options: ['ostello','albergo','fermata','viaggio'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Ho una <blank> per due notti.', translation: 'I have a reservation for two nights.', options: ['prenotazione','camera','chiave','valigia'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'albergo', back: 'hotel' },
			{ front: 'ostello', back: 'hostel' },
			{ front: 'prenotazione', back: 'reservation' },
			{ front: 'camera', back: 'room' },
			{ front: 'chiave', back: 'key' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'prenotazione', english: 'reservation' },
			{ italian: 'camera', english: 'room' },
			{ italian: 'chiave', english: 'key' },
			{ italian: 'bagno', english: 'bathroom' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "room" in Italian?', options: ['camera','stanza','bagno','salotto'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Dov’è il <blank>?', translation: 'Where is the bathroom?', options: ['bagno','camera','chiave','ostello'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which word means key?', options: ['chiave','valigia','prenotazione','fermata'], correct: 0 },
		{ type: 'fill-blank', sentence: 'La <blank> è al terzo piano.', translation: 'The room is on the third floor.', options: ['camera','chiave','valigia','prenotazione'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "colazione" mean?', options: ['Breakfast','Dinner','Lunch','Snack'], correct: 0 },
		{ type: 'fill-blank', sentence: 'La <blank> è inclusa.', translation: 'Breakfast is included.', options: ['colazione','prenotazione','camera','chiave'], correct: 0 }
	],

	// Unit 5 
	'family-overview': [
		{ type: 'multiple-choice', question: 'What does "famiglia" mean?', options: ['Family','Famous','Farm','Female'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mia <blank> è grande.', translation: 'My family is big.', options: ['famiglia','sorella','zia','nonna'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'madre', back: 'mother' },
			{ front: 'padre', back: 'father' },
			{ front: 'fratello', back: 'brother' },
			{ front: 'sorella', back: 'sister' },
			{ front: 'genitori', back: 'parents' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'madre', english: 'mother' },
			{ italian: 'padre', english: 'father' },
			{ italian: 'fratello', english: 'brother' },
			{ italian: 'sorella', english: 'sister' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "parents" in Italian?', options: ['parenti','genitori','famiglia','nipoti'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Ho un <blank> maggiore.', translation: 'I have an older brother.', options: ['fratello','padre','cugino','zio'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "nonna" mean?', options: ['Aunt','Grandmother','Niece','Cousin'], correct: 1 },
		{ type: 'fill-blank', sentence: 'La <blank> cucina bene.', translation: 'Grandmother cooks well.', options: ['nonna','madre','zia','famiglia'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which word means uncle?', options: ['zio','cugino','nipote','marito'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mio <blank> lavora molto.', translation: 'My father works a lot.', options: ['padre','fratello','zio','cugino'], correct: 0 }
	],

	// Unit 5 
	'family-members': [
		{ type: 'multiple-choice', question: 'What is "cugino" in English?', options: ['Uncle','Cousin','Nephew','Brother'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Lei è mia <blank>.', translation: 'She is my sister.', options: ['sorella','madre','zia','nonna'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'zio', back: 'uncle' },
			{ front: 'zia', back: 'aunt' },
			{ front: 'cugino', back: 'cousin (m)' },
			{ front: 'cugina', back: 'cousin (f)' },
			{ front: 'nipote', back: 'grandchild / nephew / niece' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'zia', english: 'aunt' },
			{ italian: 'zio', english: 'uncle' },
			{ italian: 'cugino', english: 'cousin (m)' },
			{ italian: 'cugina', english: 'cousin (f)' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "aunt" in Italian?', options: ['zia','cugina','nonna','madre'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mia <blank> è giovane.', translation: 'My aunt is young.', options: ['zia','cugina','nonna','madre'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "nipote" NOT mean?', options: ['Niece','Nephew','Grandmother','Grandchild'], correct: 2 },
		{ type: 'fill-blank', sentence: 'Il <blank> di mio zio è mio cugino.', translation: 'My uncle’s son is my cousin.', options: ['figlio','nipote','marito','padre'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which word means daughter?', options: ['figlia','figlio','famiglia','madre'], correct: 0 },
		{ type: 'fill-blank', sentence: 'La <blank> di mia zia è mia cugina.', translation: 'My aunt’s daughter is my female cousin.', options: ['figlia','nipote','madre','nonna'], correct: 0 }
	],

	// Unit 5 Lesson 2: Relationships
	'family-relationships': [
		{ type: 'multiple-choice', question: 'What does "marito" mean?', options: ['Husband','Fiancé','Brother','Parent'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Lei è mia <blank>.', translation: 'She is my wife.', options: ['moglie','sorella','zia','madre'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'marito', back: 'husband' },
			{ front: 'moglie', back: 'wife' },
			{ front: 'fidanzato', back: 'boyfriend/fiancé' },
			{ front: 'fidanzata', back: 'girlfriend/fiancée' },
			{ front: 'matrimonio', back: 'marriage/wedding' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'marito', english: 'husband' },
			{ italian: 'moglie', english: 'wife' },
			{ italian: 'fidanzato', english: 'boyfriend' },
			{ italian: 'fidanzata', english: 'girlfriend' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "girlfriend"?', options: ['fidanzata','moglie','nipote','cugina'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Il loro <blank> è in giugno.', translation: 'Their wedding is in June.', options: ['matrimonio','famiglia','marito','parenti'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "parenti" mean?', options: ['Relatives','Parents','Children','Cousins'], correct: 0 },
		{ type: 'fill-blank', sentence: 'I miei <blank> vivono lontano.', translation: 'My relatives live far away.', options: ['parenti','genitori','figli','nipoti'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which word means grandson or nephew?', options: ['nipote','marito','cugino','fratello'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mia <blank> è molto felice.', translation: 'My fiancée is very happy.', options: ['fidanzata','moglie','cugina','sorella'], correct: 0 }
	],

	// Unit 5 Lesson 3: Family Activities
	'family-activities': [
		{ type: 'multiple-choice', question: 'What does "festeggiare" mean?', options: ['To celebrate','To study','To sleep','To wash'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Domani <blank> il compleanno di nonno.', translation: 'Tomorrow we celebrate grandpa’s birthday.', options: ['festeggiamo','dormiamo','leggiamo','cuciniamo'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'festeggiare', back: 'to celebrate' },
			{ front: 'visitare', back: 'to visit' },
			{ front: 'raccontare', back: 'to tell (stories)' },
			{ front: 'aiutare', back: 'to help' },
			{ front: 'passeggiare', back: 'to stroll' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'visitare', english: 'to visit' },
			{ italian: 'aiutare', english: 'to help' },
			{ italian: 'passeggiare', english: 'to stroll' },
			{ italian: 'festeggiare', english: 'to celebrate' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "to help" in Italian?', options: ['aiutare','avere','stare','parlare'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ci piace <blank> storie.', translation: 'We like to tell stories.', options: ['raccontare','leggere','scrivere','dormire'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which verb means to stroll?', options: ['passeggiare','riposare','correre','volare'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ogni sera <blank> un film.', translation: 'Every evening we watch a film.', options: ['guardiamo','festeggiamo','camminiamo','studiamo'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "raccontare" mean?', options: ['To tell','To cook','To arrive','To draw'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mi piace <blank> con la famiglia.', translation: 'I like to walk with the family.', options: ['passeggiare','dormire','scrivere','mangiare'], correct: 0 }
	],

	// Unit 6 Main Module: Verbs Overview
	'verbs-overview': [
		{ type: 'multiple-choice', question: 'What does "parlare" mean?', options: ['To speak','To sleep','To write','To arrive'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Io <blank> italiano.', translation: 'I speak Italian.', options: ['parlo','parla','parli','parlano'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'parlare', back: 'to speak' },
			{ front: 'mangiare', back: 'to eat' },
			{ front: 'andare', back: 'to go' },
			{ front: 'fare', back: 'to do/make' },
			{ front: 'essere', back: 'to be' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'parlare', english: 'to speak' },
			{ italian: 'mangiare', english: 'to eat' },
			{ italian: 'fare', english: 'to do' },
			{ italian: 'andare', english: 'to go' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "I go" in Italian?', options: ['Io vado','Io vai','Io va','Io andiamo'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Noi <blank> pizza.', translation: 'We eat pizza.', options: ['mangiamo','mangia','mangio','mangiate'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which verb means "to be"?', options: ['essere','avere','venire','vedere'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Lui <blank> molto.', translation: 'He does a lot.', options: ['fa','fai','fanno','fare'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "avere" mean?', options: ['To have','To be','To come','To sleep'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Io <blank> fame.', translation: 'I am hungry (I have hunger).', options: ['ho','hai','ha','hanno'], correct: 0 }
	],

	// Unit 6 Lesson 1: Common Verbs
	'verbs-common': [
		{ type: 'multiple-choice', question: 'What is "vedere" in English?', options: ['To see','To say','To sit','To send'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Noi <blank> un film.', translation: 'We watch (see) a film.', options: ['vediamo','vedo','vede','vedete'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'vedere', back: 'to see' },
			{ front: 'prendere', back: 'to take' },
			{ front: 'venire', back: 'to come' },
			{ front: 'dormire', back: 'to sleep' },
			{ front: 'avere', back: 'to have' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'dormire', english: 'to sleep' },
			{ italian: 'prendere', english: 'to take' },
			{ italian: 'venire', english: 'to come' },
			{ italian: 'vedere', english: 'to see' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "we sleep"?', options: ['dormiamo','dormite','dormi','dormono'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Loro <blank> tardi.', translation: 'They come late.', options: ['vengono','venite','viene','veniamo'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which verb means to take?', options: ['prendere','venire','vedere','dormire'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Io <blank> il treno.', translation: 'I take the train.', options: ['prendo','prendi','prende','prendiamo'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is the meaning of "vengo"?', options: ['I come','I see','I sleep','I take'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Tu <blank> fame?', translation: 'Are you hungry?', options: ['hai','ho','ha','hanno'], correct: 0 }
	],

	// Unit 6 Lesson 2: Daily Routine Verbs
	'verbs-daily': [
		{ type: 'multiple-choice', question: 'What does "svegliarsi" mean?', options: ['To wake up','To wash','To write','To go out'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Io mi <blank> alle sette.', translation: 'I wake up at seven.', options: ['sveglio','svegli','svegliamo','svegliate'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'svegliarsi', back: 'to wake up' },
			{ front: 'lavarsi', back: 'to wash oneself' },
			{ front: 'vestirsi', back: 'to get dressed' },
			{ front: 'studiare', back: 'to study' },
			{ front: 'lavorare', back: 'to work' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'studiare', english: 'to study' },
			{ italian: 'lavorare', english: 'to work' },
			{ italian: 'svegliarsi', english: 'to wake up' },
			{ italian: 'vestirsi', english: 'to get dressed' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "we work"?', options: ['lavoriamo','lavorate','lavori','lavora'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ti <blank> alle otto?', translation: 'Do you wash (yourself) at eight?', options: ['lavi','lava','laviamo','lavate'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which verb means to study?', options: ['studiare','lavarsi','vestirsi','uscire'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Noi ci <blank> velocemente.', translation: 'We get dressed quickly.', options: ['vestiamo','vestite','vesti','vestono'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "uscire" mean?', options: ['To go out','To eat','To sleep','To read'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Esco e poi <blank> al lavoro.', translation: 'I go out and then go to work.', options: ['vado','vai','andiamo','va'], correct: 0 }
	],

	// Unit 6 
	'verbs-past': [
		{ type: 'multiple-choice', question: 'What does "ho mangiato" mean?', options: ['I ate','I eat','I will eat','I am eating'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Sono <blank> al mercato.', translation: 'I went to the market.', options: ['andato','fatto','venuto','mangiato'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'ho parlato', back: 'I spoke' },
			{ front: 'sono andato/a', back: 'I went' },
			{ front: 'ho visto', back: 'I saw' },
			{ front: 'ho fatto', back: 'I did/made' },
			{ front: 'sono venuto/a', back: 'I came' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'ho fatto', english: 'I did' },
			{ italian: 'ho parlato', english: 'I spoke' },
			{ italian: 'sono andato', english: 'I went' },
			{ italian: 'ho visto', english: 'I saw' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "I slept"?', options: ['ho dormito','dormo','sono dormito','dormivo'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ho <blank> un libro.', translation: 'I read a book.', options: ['letto','scritto','visto','parlato'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which form means "I wrote"?', options: ['ho scritto','ho letto','ho preso','ho dormito'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ho <blank> il treno.', translation: 'I took the train.', options: ['preso','venuto','andato','fatto'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "sono venuto" mean?', options: ['I came','I saw','I went','I arrived later'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ho <blank> la città ieri.', translation: 'I saw the city yesterday.', options: ['visto','letto','parlato','fatto'], correct: 0 }
	],

	// Unit 7 Main Module: Colors & Clothing Overview
	'colors-overview': [
		{ type: 'multiple-choice', question: 'What does "rosso" mean?', options: ['Blue', 'Red', 'Green', 'Yellow'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Il cielo è <blank>.', translation: 'The sky is blue.', options: ['blu','rosso','verde','giallo'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'rosso', back: 'red' },
			{ front: 'blu', back: 'blue' },
			{ front: 'verde', back: 'green' },
			{ front: 'giallo', back: 'yellow' },
			{ front: 'nero', back: 'black' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'rosso', english: 'red' },
			{ italian: 'blu', english: 'blue' },
			{ italian: 'verde', english: 'green' },
			{ italian: 'bianco', english: 'white' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "clothing" in Italian?', options: ['vestiti','scarpe','colori','cappello'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Indosso una <blank> rossa.', translation: 'I wear a red shirt.', options: ['camicia','gonna','scarpa','cravatta'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "nero"?', options: ['White','Black','Gray','Brown'], correct: 1 },
		{ type: 'fill-blank', sentence: 'I miei <blank> sono neri.', translation: 'My pants are black.', options: ['pantaloni','scarpe','occhi','capelli'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "dress"?', options: ['vestito','camicia','gonna','cappotto'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Lei porta un <blank> elegante.', translation: 'She wears an elegant dress.', options: ['vestito','cappello','scarpe','guanti'], correct: 0 }
	],

	// Unit 7 Lesson 1: Colors
	'colors-basic': [
		{ type: 'multiple-choice', question: 'What is "verde" in English?', options: ['Red','Green','Yellow','Blue'], correct: 1 },
		{ type: 'fill-blank', sentence: 'L\'erba è <blank>.', translation: 'The grass is green.', options: ['verde','rosso','blu','giallo'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'arancione', back: 'orange' },
			{ front: 'viola', back: 'purple' },
			{ front: 'rosa', back: 'pink' },
			{ front: 'marrone', back: 'brown' },
			{ front: 'grigio', back: 'gray' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'giallo', english: 'yellow' },
			{ italian: 'arancione', english: 'orange' },
			{ italian: 'viola', english: 'purple' },
			{ italian: 'rosa', english: 'pink' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "white"?', options: ['nero','bianco','grigio','marrone'], correct: 1 },
		{ type: 'fill-blank', sentence: 'La neve è <blank>.', translation: 'The snow is white.', options: ['bianca','nera','grigia','marrone'], correct: 0 },
		{ type: 'multiple-choice', question: 'What color is "arancione"?', options: ['Orange','Purple','Pink','Brown'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Il sole è <blank>.', translation: 'The sun is yellow.', options: ['giallo','rosso','arancione','bianco'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "gray"?', options: ['marrone','nero','grigio','bianco'], correct: 2 },
		{ type: 'fill-blank', sentence: 'Le nuvole sono <blank>.', translation: 'The clouds are gray.', options: ['grigie','rosse','verdi','blu'], correct: 0 }
	],

	// Unit 7 Lesson 2: Clothing Items
	'clothing-items': [
		{ type: 'multiple-choice', question: 'What is "camicia" in English?', options: ['Pants','Shirt','Shoes','Hat'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Indosso una <blank> blu.', translation: 'I wear a blue shirt.', options: ['camicia','gonna','scarpa','giacca'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'pantaloni', back: 'pants' },
			{ front: 'gonna', back: 'skirt' },
			{ front: 'scarpe', back: 'shoes' },
			{ front: 'cappello', back: 'hat' },
			{ front: 'giacca', back: 'jacket' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'scarpe', english: 'shoes' },
			{ italian: 'pantaloni', english: 'pants' },
			{ italian: 'gonna', english: 'skirt' },
			{ italian: 'cappello', english: 'hat' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "jacket"?', options: ['cappotto','giacca','maglia','camicia'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Ho bisogno di una <blank> nuova.', translation: 'I need a new jacket.', options: ['giacca','gonna','scarpa','borsa'], correct: 0 },
		{ type: 'multiple-choice', question: 'What are "scarpe"?', options: ['Socks','Shoes','Pants','Gloves'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Le mie <blank> sono comode.', translation: 'My shoes are comfortable.', options: ['scarpe','calze','guanti','scarpe'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "coat"?', options: ['cappotto','giacca','maglia','camicia'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Fa freddo, metto il <blank>.', translation: 'It\'s cold, I put on my coat.', options: ['cappotto','cappello','guanti','sciarpa'], correct: 0 }
	],

	// Unit 7 Lesson 3: Descriptions
	'clothing-descriptions': [
		{ type: 'multiple-choice', question: 'What does "lungo" mean?', options: ['Short','Long','Wide','Tight'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Il vestito è molto <blank>.', translation: 'The dress is very long.', options: ['lungo','corto','stretto','largo'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'grande', back: 'big/large' },
			{ front: 'piccolo', back: 'small' },
			{ front: 'nuovo', back: 'new' },
			{ front: 'vecchio', back: 'old' },
			{ front: 'elegante', back: 'elegant' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'grande', english: 'large' },
			{ italian: 'piccolo', english: 'small' },
			{ italian: 'nuovo', english: 'new' },
			{ italian: 'vecchio', english: 'old' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "expensive"?', options: ['caro','economico','bello','brutto'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Questa borsa è troppo <blank>.', translation: 'This bag is too expensive.', options: ['cara','economica','grande','piccola'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "comodo"?', options: ['Uncomfortable','Comfortable','Beautiful','Ugly'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Queste scarpe sono <blank>.', translation: 'These shoes are comfortable.', options: ['comode','scomode','belle','brutte'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "beautiful"?', options: ['brutto','bello','nuovo','vecchio'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Che <blank> vestito!', translation: 'What a beautiful dress!', options: ['bel','brutto','vecchio','nuovo'], correct: 0 }
	],

	// Unit 8 Main Module: Weather & Seasons Overview
	'weather-overview': [
		{ type: 'multiple-choice', question: 'What does "piove" mean?', options: ['It snows','It rains','It\'s sunny','It\'s windy'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Oggi <blank>.', translation: 'Today it rains.', options: ['piove','nevica','splende','tira vento'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'piove', back: 'it rains' },
			{ front: 'nevica', back: 'it snows' },
			{ front: 'sole', back: 'sun' },
			{ front: 'vento', back: 'wind' },
			{ front: 'nuvola', back: 'cloud' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'piove', english: 'it rains' },
			{ italian: 'nevica', english: 'it snows' },
			{ italian: 'sole', english: 'sun' },
			{ italian: 'vento', english: 'wind' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "it\'s hot"?', options: ['fa freddo','fa caldo','piove','nevica'], correct: 1 },
		{ type: 'fill-blank', sentence: 'In estate <blank> caldo.', translation: 'In summer it\'s hot.', options: ['fa','piove','nevica','tira'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "primavera"?', options: ['Summer','Spring','Fall','Winter'], correct: 1 },
		{ type: 'fill-blank', sentence: 'La <blank> è bella.', translation: 'Spring is beautiful.', options: ['primavera','estate','autunno','inverno'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which season is "inverno"?', options: ['Spring','Summer','Fall','Winter'], correct: 3 },
		{ type: 'fill-blank', sentence: 'In <blank> fa freddo.', translation: 'In winter it\'s cold.', options: ['inverno','estate','primavera','autunno'], correct: 0 }
	],

	// Unit 8 Lesson 1: Weather Conditions
	'weather-conditions': [
		{ type: 'multiple-choice', question: 'What is "nuvoloso" in English?', options: ['Sunny','Cloudy','Rainy','Windy'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Il cielo è <blank>.', translation: 'The sky is cloudy.', options: ['nuvoloso','sereno','piovoso','ventoso'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'sereno', back: 'clear/sunny' },
			{ front: 'nuvoloso', back: 'cloudy' },
			{ front: 'piovoso', back: 'rainy' },
			{ front: 'ventoso', back: 'windy' },
			{ front: 'temporale', back: 'storm' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'sereno', english: 'clear' },
			{ italian: 'nuvoloso', english: 'cloudy' },
			{ italian: 'piovoso', english: 'rainy' },
			{ italian: 'ventoso', english: 'windy' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "it\'s sunny"?', options: ['c\'è sole','piove','nevica','tira vento'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Oggi <blank> sole.', translation: 'Today it\'s sunny.', options: ['c\'è','fa','piove','nevica'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "tira vento" mean?', options: ['It rains','It\'s windy','It snows','It\'s hot'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Oggi <blank> vento.', translation: 'Today it\'s windy.', options: ['tira','fa','c\'è','piove'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is a "temporale"?', options: ['Cloud','Rain','Storm','Wind'], correct: 2 },
		{ type: 'fill-blank', sentence: 'C\'è un <blank> stasera.', translation: 'There\'s a storm tonight.', options: ['temporale','sole','vento','nuvola'], correct: 0 }
	],

	// Unit 8 Lesson 2: Seasons
	'seasons': [
		{ type: 'multiple-choice', question: 'What is "estate" in English?', options: ['Spring','Summer','Fall','Winter'], correct: 1 },
		{ type: 'fill-blank', sentence: 'L\'<blank> è calda.', translation: 'Summer is hot.', options: ['estate','inverno','autunno','primavera'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'primavera', back: 'spring' },
			{ front: 'estate', back: 'summer' },
			{ front: 'autunno', back: 'fall/autumn' },
			{ front: 'inverno', back: 'winter' },
			{ front: 'stagione', back: 'season' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'primavera', english: 'spring' },
			{ italian: 'estate', english: 'summer' },
			{ italian: 'autunno', english: 'fall' },
			{ italian: 'inverno', english: 'winter' }
		]},
		{ type: 'multiple-choice', question: 'Which season has falling leaves?', options: ['primavera','estate','autunno','inverno'], correct: 2 },
		{ type: 'fill-blank', sentence: 'In <blank> cadono le foglie.', translation: 'In fall the leaves fall.', options: ['autunno','primavera','estate','inverno'], correct: 0 },
		{ type: 'multiple-choice', question: 'What season comes after winter?', options: ['primavera','estate','autunno','inverno'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Dopo l\'inverno viene la <blank>.', translation: 'After winter comes spring.', options: ['primavera','estate','autunno','stagione'], correct: 0 },
		{ type: 'multiple-choice', question: 'In which season does it snow most?', options: ['primavera','estate','autunno','inverno'], correct: 3 },
		{ type: 'fill-blank', sentence: 'Nevica in <blank>.', translation: 'It snows in winter.', options: ['inverno','estate','primavera','autunno'], correct: 0 }
	],

	// Unit 8 Lesson 3: Temperature
	'temperature': [
		{ type: 'multiple-choice', question: 'What does "freddo" mean?', options: ['Hot','Cold','Warm','Cool'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Fa molto <blank> oggi.', translation: 'It\'s very cold today.', options: ['freddo','caldo','bello','brutto'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'caldo', back: 'hot' },
			{ front: 'freddo', back: 'cold' },
			{ front: 'fresco', back: 'cool' },
			{ front: 'mite', back: 'mild' },
			{ front: 'temperatura', back: 'temperature' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'caldo', english: 'hot' },
			{ italian: 'freddo', english: 'cold' },
			{ italian: 'fresco', english: 'cool' },
			{ italian: 'mite', english: 'mild' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "it\'s warm"?', options: ['fa caldo','fa freddo','fa fresco','fa bel tempo'], correct: 0 },
		{ type: 'fill-blank', sentence: 'In primavera fa <blank>.', translation: 'In spring it\'s mild.', options: ['mite','caldo','freddo','fresco'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "temperatura"?', options: ['Weather','Season','Temperature','Climate'], correct: 2 },
		{ type: 'fill-blank', sentence: 'La <blank> è alta.', translation: 'The temperature is high.', options: ['temperatura','stagione','primavera','estate'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "pleasant weather"?', options: ['brutto tempo','bel tempo','cattivo tempo','mal tempo'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Oggi fa <blank> tempo.', translation: 'Today the weather is nice.', options: ['bel','brutto','cattivo','mal'], correct: 0 }
	],

	// Unit 9 Main Module: Shopping & Money Overview
	'shopping-overview': [
		{ type: 'multiple-choice', question: 'What does "Quanto costa?" mean?', options: ['How much?','Where is?','What time?','Who is?'], correct: 0 },
		{ type: 'fill-blank', sentence: '<blank> costa questo?', translation: 'How much does this cost?', options: ['Quanto','Dove','Quando','Chi'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'costa', back: 'it costs' },
			{ front: 'prezzo', back: 'price' },
			{ front: 'euro', back: 'euro' },
			{ front: 'comprare', back: 'to buy' },
			{ front: 'vendere', back: 'to sell' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'comprare', english: 'to buy' },
			{ italian: 'vendere', english: 'to sell' },
			{ italian: 'prezzo', english: 'price' },
			{ italian: 'soldi', english: 'money' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "I would like to buy"?', options: ['Vorrei comprare','Voglio vendere','Devo pagare','Posso vendere'], correct: 0 },
		{ type: 'fill-blank', sentence: '<blank> comprare questo.', translation: 'I would like to buy this.', options: ['Vorrei','Voglio','Devo','Posso'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "negozio"?', options: ['Money','Price','Store','Market'], correct: 2 },
		{ type: 'fill-blank', sentence: 'Vado al <blank>.', translation: 'I go to the store.', options: ['negozio','mercato','centro','prezzo'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "expensive"?', options: ['caro','economico','gratis','scontato'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Questo è troppo <blank>.', translation: 'This is too expensive.', options: ['caro','economico','gratis','bello'], correct: 0 }
	],

	// Unit 9 Lesson 1: Shopping Phrases
	'shopping-phrases': [
		{ type: 'multiple-choice', question: 'What is "vendita" in English?', options: ['Purchase','Sale','Price','Store'], correct: 1 },
		{ type: 'fill-blank', sentence: 'C\'è una grande <blank>.', translation: 'There\'s a big sale.', options: ['vendita','negozio','prezzo','borsa'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'sconto', back: 'discount' },
			{ front: 'offerta', back: 'offer' },
			{ front: 'saldo', back: 'sale' },
			{ front: 'cliente', back: 'customer' },
			{ front: 'cassiere', back: 'cashier' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'sconto', english: 'discount' },
			{ italian: 'offerta', english: 'offer' },
			{ italian: 'cliente', english: 'customer' },
			{ italian: 'cassiere', english: 'cashier' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "Can I try this?"', options: ['Posso provare questo?','Quanto costa?','Dov\'è il negozio?','Che taglia?'], correct: 0 },
		{ type: 'fill-blank', sentence: '<blank> provare questo?', translation: 'Can I try this?', options: ['Posso','Voglio','Devo','Ho'], correct: 0 },
		{ type: 'multiple-choice', question: 'What does "taglia" mean?', options: ['Price','Size','Color','Store'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Che <blank> porta?', translation: 'What size do you wear?', options: ['taglia','prezzo','colore','sconto'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "receipt"?', options: ['scontrino','borsa','carta','soldi'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ecco lo <blank>.', translation: 'Here\'s the receipt.', options: ['scontrino','sconto','euro','negozio'], correct: 0 }
	],

	// Unit 9 Lesson 2: Money & Prices
	'money-prices': [
		{ type: 'multiple-choice', question: 'What is "moneta" in English?', options: ['Bill','Coin','Price','Money'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Ho molte <blank>.', translation: 'I have many coins.', options: ['monete','banconote','euro','soldi'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'euro', back: 'euro' },
			{ front: 'centesimo', back: 'cent' },
			{ front: 'banconota', back: 'bill/note' },
			{ front: 'carta di credito', back: 'credit card' },
			{ front: 'contanti', back: 'cash' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'euro', english: 'euro' },
			{ italian: 'centesimo', english: 'cent' },
			{ italian: 'banconota', english: 'bill' },
			{ italian: 'contanti', english: 'cash' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "credit card"?', options: ['carta di credito','banconota','moneta','contanti'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Pago con la <blank> di credito.', translation: 'I pay with credit card.', options: ['carta','moneta','banconota','soldi'], correct: 0 },
		{ type: 'multiple-choice', question: 'What are "contanti"?', options: ['Card','Check','Cash','Coins'], correct: 2 },
		{ type: 'fill-blank', sentence: 'Pago in <blank>.', translation: 'I pay in cash.', options: ['contanti','carta','euro','monete'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "change" (money back)?', options: ['resto','sconto','prezzo','taglia'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ecco il <blank>.', translation: 'Here\'s your change.', options: ['resto','prezzo','sconto','euro'], correct: 0 }
	],

	// Unit 9 Lesson 3: At the Store
	'at-store': [
		{ type: 'multiple-choice', question: 'What does "aperto" mean?', options: ['Closed','Open','Expensive','Cheap'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Il negozio è <blank>.', translation: 'The store is open.', options: ['aperto','chiuso','caro','grande'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'aperto', back: 'open' },
			{ front: 'chiuso', back: 'closed' },
			{ front: 'entrata', back: 'entrance' },
			{ front: 'uscita', back: 'exit' },
			{ front: 'cassa', back: 'checkout/register' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'aperto', english: 'open' },
			{ italian: 'chiuso', english: 'closed' },
			{ italian: 'entrata', english: 'entrance' },
			{ italian: 'uscita', english: 'exit' }
		]},
		{ type: 'multiple-choice', question: 'How do you ask "Do you have...?"', options: ['Avete...?','Siete...?','Fate...?','Andate...?'], correct: 0 },
		{ type: 'fill-blank', sentence: '<blank> questo in blu?', translation: 'Do you have this in blue?', options: ['Avete','Siete','Fate','Costa'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "cassa"?', options: ['Box','Checkout','Door','Window'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Pago alla <blank>.', translation: 'I pay at the checkout.', options: ['cassa','porta','finestra','entrata'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "to pay"?', options: ['pagare','comprare','vendere','costare'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Devo <blank> il conto.', translation: 'I have to pay the bill.', options: ['pagare','comprare','vendere','aprire'], correct: 0 }
	],

	// Unit 10 Main Module: Body & Health Overview
	'health-overview': [
		{ type: 'multiple-choice', question: 'What does "testa" mean?', options: ['Hand','Foot','Head','Arm'], correct: 2 },
		{ type: 'fill-blank', sentence: 'Mi fa male la <blank>.', translation: 'My head hurts.', options: ['testa','mano','gamba','pancia'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'testa', back: 'head' },
			{ front: 'braccio', back: 'arm' },
			{ front: 'gamba', back: 'leg' },
			{ front: 'mano', back: 'hand' },
			{ front: 'piede', back: 'foot' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'testa', english: 'head' },
			{ italian: 'braccio', english: 'arm' },
			{ italian: 'gamba', english: 'leg' },
			{ italian: 'mano', english: 'hand' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "I feel sick"?', options: ['Mi sento male','Sto bene','Ho fame','Ho sete'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mi <blank> male.', translation: 'I feel sick.', options: ['sento','sono','ho','sto'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "medico"?', options: ['Medicine','Doctor','Hospital','Patient'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Devo andare dal <blank>.', translation: 'I have to go to the doctor.', options: ['medico','ospedale','farmacia','dentista'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "pharmacy"?', options: ['ospedale','farmacia','medico','infermiere'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Vado in <blank>.', translation: 'I go to the pharmacy.', options: ['farmacia','ospedale','casa','scuola'], correct: 0 }
	],

	// Unit 10 Lesson 1: Body Parts
	'body-parts': [
		{ type: 'multiple-choice', question: 'What is "occhio" in English?', options: ['Ear','Eye','Nose','Mouth'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Ho due <blank>.', translation: 'I have two eyes.', options: ['occhi','orecchie','mani','piedi'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'occhio', back: 'eye' },
			{ front: 'orecchio', back: 'ear' },
			{ front: 'naso', back: 'nose' },
			{ front: 'bocca', back: 'mouth' },
			{ front: 'dente', back: 'tooth' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'occhio', english: 'eye' },
			{ italian: 'orecchio', english: 'ear' },
			{ italian: 'naso', english: 'nose' },
			{ italian: 'bocca', english: 'mouth' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "finger"?', options: ['dito','mano','piede','braccio'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mi sono fatto male al <blank>.', translation: 'I hurt my finger.', options: ['dito','piede','naso','orecchio'], correct: 0 },
		{ type: 'multiple-choice', question: 'What are "denti"?', options: ['Fingers','Teeth','Toes','Eyes'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Mi fanno male i <blank>.', translation: 'My teeth hurt.', options: ['denti','piedi','occhi','orecchi'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "shoulder"?', options: ['spalla','gomito','ginocchio','polso'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Mi fa male la <blank>.', translation: 'My shoulder hurts.', options: ['spalla','testa','gamba','mano'], correct: 0 }
	],

	// Unit 10 Lesson 2: Feeling Sick
	'feeling-sick': [
		{ type: 'multiple-choice', question: 'What does "febbre" mean?', options: ['Cough','Fever','Cold','Pain'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Ho la <blank>.', translation: 'I have a fever.', options: ['febbre','tosse','raffreddore','influenza'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'febbre', back: 'fever' },
			{ front: 'tosse', back: 'cough' },
			{ front: 'raffreddore', back: 'cold' },
			{ front: 'mal di testa', back: 'headache' },
			{ front: 'mal di pancia', back: 'stomachache' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'febbre', english: 'fever' },
			{ italian: 'tosse', english: 'cough' },
			{ italian: 'raffreddore', english: 'cold' },
			{ italian: 'mal di testa', english: 'headache' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "I have a cold"?', options: ['Ho il raffreddore','Ho la febbre','Ho la tosse','Ho l\'influenza'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ho il <blank>.', translation: 'I have a cold.', options: ['raffreddore','febbre','tosse','dolore'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "dolore"?', options: ['Medicine','Pain','Fever','Cough'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Ho un <blank> forte.', translation: 'I have a strong pain.', options: ['dolore','febbre','tosse','naso'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "nausea"?', options: ['nausea','febbre','tosse','raffreddore'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ho la <blank>.', translation: 'I have nausea.', options: ['nausea','febbre','tosse','fame'], correct: 0 }
	],

	// Unit 10 Lesson 3: At the Doctor
	'at-doctor': [
		{ type: 'multiple-choice', question: 'What is "medicina" in English?', options: ['Doctor','Medicine','Hospital','Patient'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Prendo la <blank>.', translation: 'I take medicine.', options: ['medicina','febbre','tosse','testa'], correct: 0 },
		{ type: 'flashcard', cards: [
			{ front: 'medicina', back: 'medicine' },
			{ front: 'ricetta', back: 'prescription' },
			{ front: 'appuntamento', back: 'appointment' },
			{ front: 'ambulanza', back: 'ambulance' },
			{ front: 'emergenza', back: 'emergency' }
		]},
		{ type: 'matching', pairs: [
			{ italian: 'medicina', english: 'medicine' },
			{ italian: 'ricetta', english: 'prescription' },
			{ italian: 'appuntamento', english: 'appointment' },
			{ italian: 'emergenza', english: 'emergency' }
		]},
		{ type: 'multiple-choice', question: 'How do you say "I need an appointment"?', options: ['Ho bisogno di un appuntamento','Ho la febbre','Prendo la medicina','Vado in ospedale'], correct: 0 },
		{ type: 'fill-blank', sentence: 'Ho bisogno di un <blank>.', translation: 'I need an appointment.', options: ['appuntamento','medico','ospedale','farmacia'], correct: 0 },
		{ type: 'multiple-choice', question: 'What is "ricetta"?', options: ['Recipe','Prescription','Medicine','Doctor'], correct: 1 },
		{ type: 'fill-blank', sentence: 'Il medico scrive una <blank>.', translation: 'The doctor writes a prescription.', options: ['ricetta','medicina','lettera','nota'], correct: 0 },
		{ type: 'multiple-choice', question: 'Which means "emergency"?', options: ['urgenza','emergenza','ambulanza','ospedale'], correct: 1 },
		{ type: 'fill-blank', sentence: 'È un\'<blank>!', translation: 'It\'s an emergency!', options: ['emergenza','ambulanza','ospedale','medicina'], correct: 0 }
	]
};

// State management
let currentQuestionIndex = 0;
let correctAnswers = 0;
let hearts = 3;
let selectedAnswer = null;
let currentModuleId = 'greetings';
let currentLessonData = [];

// Matching game state
let matchingSelected = [];
let matchingCompleted = [];

// Flashcard state
let currentCardIndex = 0;
let isFlipped = false;

// Initialize lesson
function initLesson() {
	const urlParams = new URLSearchParams(window.location.search);
	const lessonParam = urlParams.get('lesson') || '1-1'; // Get lesson parameter like "1-1", "2-1", etc.
	const unitParam = urlParams.get('unit') || null;
	
	console.log('URL Params - lesson:', lessonParam, 'unit:', unitParam);
	
	// Map lesson IDs to lesson data keys
	const lessonMap = {
		// Unit 1 - Greetings
		'1-1': 'greetings-basic',      // Hello & Goodbye
		'1-2': 'greetings-intro',      // Nice to Meet You
		'1-3': 'greetings-wellbeing',  // How Are You?
		// Unit 2 - Numbers
		'2-1': 'numbers-basic',        // Numbers 1-10
		'2-2': 'numbers-advanced',     // Counting Higher
		'2-3': 'numbers-time',         // Time & Dates
		// Unit 3 - Food
		'3-1': 'food-produce',         // Fruits & Vegetables
		'3-2': 'food-restaurant',      // Ordering Food
		'3-3': 'food-drinks',          // Drinks & Desserts
		// Unit 4 - Travel
		'4-1': 'travel-directions',
		'4-2': 'travel-transport',
		'4-3': 'travel-accommodation',
		// Unit 5 - Family
		'5-1': 'family-members',
		'5-2': 'family-relationships',
		'5-3': 'family-activities',
		// Unit 6 - Verbs
		'6-1': 'verbs-common',
		'6-2': 'verbs-daily',
		'6-3': 'verbs-past',
		// Unit 7 - Colors & Clothing
		'7-1': 'colors-basic',
		'7-2': 'clothing-items',
		'7-3': 'clothing-descriptions',
		// Unit 8 - Weather & Seasons
		'8-1': 'weather-conditions',
		'8-2': 'seasons',
		'8-3': 'temperature',
		// Unit 9 - Shopping & Money
		'9-1': 'shopping-phrases',
		'9-2': 'money-prices',
		'9-3': 'at-store',
		// Unit 10 - Body & Health
		'10-1': 'body-parts',
		'10-2': 'feeling-sick',
		'10-3': 'at-doctor'
	};
	
	// If unit parameter is provided, use general unit content
	if (unitParam) {
		const unitMap = {
			'1': 'greetings-overview',
			'2': 'numbers-overview',
			'3': 'food-overview',
			'4': 'travel-overview',
			'5': 'family-overview',
			'6': 'verbs-overview',
			'7': 'colors-overview',
			'8': 'weather-overview',
			'9': 'shopping-overview',
			'10': 'health-overview'
		};
		currentModuleId = unitMap[unitParam] || 'greetings-overview';
	} else {
		currentModuleId = lessonMap[lessonParam] || 'greetings-overview';
	}
	
	console.log('Loading lesson type:', currentModuleId);
	console.log('Available lessons in lessonData:', Object.keys(lessonData));
	
	currentLessonData = lessonData[currentModuleId] || lessonData['greetings-overview'];
	
	console.log('Lesson data loaded:', currentLessonData);
	console.log('First question:', currentLessonData[0]);
	
	renderQuestion(currentQuestionIndex);
	updateProgressBar();
	updateQuestionCounter();
}

// Render current question
function renderQuestion(index) {
	const question = currentLessonData[index];
	const container = document.querySelector('.game-mode-container');
	
	// Hide all game modes
	document.querySelectorAll('.game-mode').forEach(mode => {
		mode.style.display = 'none';
	});
	
	// Reset feedback and buttons
	document.querySelector('.feedback').style.display = 'none';
	const checkBtn = document.querySelector('.check-btn');
	checkBtn.style.display = 'block';
	checkBtn.textContent = 'Check';
	checkBtn.disabled = true;
	// Hide all continue buttons (generic + flashcard variant)
	document.querySelectorAll('.continue-btn').forEach(btn => btn.style.display = 'none');
	selectedAnswer = null;
	
	// Render based on question type
	switch(question.type) {
		case 'fill-blank':
			renderFillBlank(question);
			break;
		case 'matching':
			renderMatching(question);
			break;
		case 'flashcard':
			renderFlashcard(question);
			break;
		case 'multiple-choice':
			renderMultipleChoice(question);
			break;
	}
	
	// Add TTS button after instruction
	addTTSButton(question);

	// Toggle a body-level class so CSS can adjust layout per mode (flashcard needs overlap)
	if (document && document.body) {
		document.body.classList.toggle('flashcard-mode', question.type === 'flashcard');
	}
}

// Render fill in the blank
function renderFillBlank(question) {
	const mode = document.querySelector('.fill-blank');
	const sentenceText = question.sentence.replace('<blank>', '<span class="blank">_____</span>');
	
	mode.querySelector('.question-text p:first-child').innerHTML = sentenceText;
	mode.querySelector('.translation').textContent = question.translation;
	
	const optionsContainer = mode.querySelector('.word-options');
	optionsContainer.innerHTML = '';
	
	question.options.forEach((option, index) => {
		const btn = document.createElement('button');
		btn.className = 'word-btn';
		btn.textContent = option;
		btn.onclick = () => selectFillBlank(index, btn);
		optionsContainer.appendChild(btn);
	});
	
	mode.style.display = 'block';
}

// Select fill blank answer
function selectFillBlank(index, btn) {
	document.querySelectorAll('.word-btn').forEach(b => b.classList.remove('selected'));
	btn.classList.add('selected');
	selectedAnswer = index;
	document.querySelector('.check-btn').disabled = false;
}

// Render matching game
function renderMatching(question) {
	const mode = document.querySelector('.matching');
	const grid = mode.querySelector('.matching-grid');
	grid.innerHTML = '';
	
	matchingSelected = [];
	matchingCompleted = [];
	
	// Shuffle pairs
	const italianWords = question.pairs.map((p, i) => ({ ...p, id: i, lang: 'italian' }));
	const englishWords = question.pairs.map((p, i) => ({ ...p, id: i, lang: 'english' }));
	
	const shuffledItalian = italianWords.sort(() => Math.random() - 0.5);
	const shuffledEnglish = englishWords.sort(() => Math.random() - 0.5);
	
	[...shuffledItalian, ...shuffledEnglish].forEach(item => {
		const btn = document.createElement('button');
		btn.className = 'match-card';
		btn.textContent = item.lang === 'italian' ? item.italian : item.english;
		btn.dataset.pair = item.id;
		btn.dataset.lang = item.lang;
		btn.onclick = () => selectMatchCard(btn);
		grid.appendChild(btn);
	});
	
	mode.style.display = 'block';
	
	// For matching, hide check button since it auto-advances
	document.querySelector('.check-btn').style.display = 'none';
}

// Select match card
function selectMatchCard(btn) {
	if (btn.classList.contains('matched')) return;
	if (matchingSelected.length >= 2) return;
	
	btn.classList.add('selected');
	matchingSelected.push(btn);
	
	if (matchingSelected.length === 2) {
		setTimeout(() => checkMatch(), 300);
	}
}

// Check match
function checkMatch() {
	const [card1, card2] = matchingSelected;
	
	if (card1.dataset.pair === card2.dataset.pair && card1.dataset.lang !== card2.dataset.lang) {
		// Correct match
		card1.classList.remove('selected');
		card2.classList.remove('selected');
		card1.classList.add('matched');
		card2.classList.add('matched');
		matchingCompleted.push(card1.dataset.pair);
		
		// Check if all matched
		if (matchingCompleted.length === currentLessonData[currentQuestionIndex].pairs.length) {
			setTimeout(() => {
				correctAnswers++;
				showFeedback(true);
			}, 500);
		}
	} else {
		
		card1.classList.add('wrong');
		card2.classList.add('wrong');
		
		
		if (matchingCompleted.length === 0 && !document.querySelector('.feedback').style.display) {
			loseHeart();
		}
		
		setTimeout(() => {
			card1.classList.remove('selected', 'wrong');
			card2.classList.remove('selected', 'wrong');
		}, 500);
	}
	
	matchingSelected = [];
}


function renderFlashcard(question) {
	const mode = document.querySelector('.flashcard');
	currentCardIndex = 0;
	isFlipped = false;
	
	updateFlashcard(question.cards[0]);
	updateCardCounter(question.cards.length);
	
	
	const flashcardContainer = mode.querySelector('.flashcard');
	const flashcardClickHandler = (e) => {
		
		if (e.target.closest('.flashcard-controls') || e.target.closest('.flashcard-meta')) return;
		flashcardContainer.classList.toggle('flipped');
		isFlipped = !isFlipped;
	};
	
	
	flashcardContainer.onclick = flashcardClickHandler;
	
	
	const prevBtn = mode.querySelector('.prev-card-btn');
	const nextBtn = mode.querySelector('.next-card-btn');
	
	prevBtn.onclick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigateCard(-1);
	};
	
	nextBtn.onclick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigateCard(1);
	};
	
	mode.style.display = 'block';
	
	
	const checkBtn = document.querySelector('.check-btn');
	checkBtn.style.display = 'none';
	const flashcardContinue = document.querySelector('.flashcard-continue-btn');
	if (flashcardContinue) {
		flashcardContinue.style.display = 'block';
		flashcardContinue.disabled = false;
	}
}


function updateFlashcard(card) {
	const mode = document.querySelector('.flashcard');
	const flashcardEl = mode.querySelector('.flashcard');
	
	
	flashcardEl.classList.remove('flipped');
	isFlipped = false;
	
	
	mode.querySelector('.flashcard-front .word').textContent = card.front;
	mode.querySelector('.flashcard-back .word').textContent = card.back;
}


function navigateCard(direction) {
	const question = currentLessonData[currentQuestionIndex];
	if (!question || question.type !== 'flashcard') return;
	
	const cards = question.cards;
	currentCardIndex = (currentCardIndex + direction + cards.length) % cards.length;
	updateFlashcard(cards[currentCardIndex]);
	updateCardCounter(cards.length);
}


function updateCardCounter(total) {
	document.querySelector('.current-card').textContent = currentCardIndex + 1;
	document.querySelector('.total-cards').textContent = total;
}


function renderMultipleChoice(question) {
	const mode = document.querySelector('.multiple-choice');
	
	mode.querySelector('.prompt-text').textContent = question.question;
	
	const optionsContainer = mode.querySelector('.choice-options');
	optionsContainer.innerHTML = '';
	
	question.options.forEach((option, index) => {
		const btn = document.createElement('button');
		btn.className = 'choice-btn';
		btn.textContent = option;
		btn.onclick = () => selectChoice(index, btn);
		optionsContainer.appendChild(btn);
	});
	
	mode.style.display = 'block';
}


function selectChoice(index, btn) {
	document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
	btn.classList.add('selected');
	selectedAnswer = index;
	document.querySelector('.check-btn').disabled = false;
}


function checkAnswer() {
	const question = currentLessonData[currentQuestionIndex];
	let isCorrect = false;
	
	if (question.type === 'flashcard') {
		
		correctAnswers++;
		continueLesson();
		return;
	} else if (question.type === 'matching') {
		// Already handled in matching logic
		return;
	} else {
		isCorrect = selectedAnswer === question.correct;
		showFeedback(isCorrect);
		
		if (isCorrect) {
			correctAnswers++;
		} else {
			loseHeart();
		}
	}
}


function showFeedback(isCorrect) {
	const feedback = document.querySelector('.feedback');
	const correctFeedback = feedback.querySelector('.feedback-content.correct');
	const incorrectFeedback = feedback.querySelector('.feedback-content.incorrect');
	
	if (isCorrect) {
		correctFeedback.style.display = 'block';
		incorrectFeedback.style.display = 'none';
		
		// Highlight correct answer
		const question = currentLessonData[currentQuestionIndex];
		if (question.type === 'fill-blank') {
			document.querySelectorAll('.word-btn')[question.correct].classList.add('correct');
		} else if (question.type === 'multiple-choice') {
			document.querySelectorAll('.choice-btn')[question.correct].classList.add('correct');
		}
	} else {
		correctFeedback.style.display = 'none';
		incorrectFeedback.style.display = 'block';
		
		
		const question = currentLessonData[currentQuestionIndex];
		let correctAnswer = '';
		if (question.type === 'fill-blank') {
			correctAnswer = question.options[question.correct];
			document.querySelectorAll('.word-btn')[selectedAnswer].classList.add('incorrect');
			document.querySelectorAll('.word-btn')[question.correct].classList.add('correct');
		} else if (question.type === 'multiple-choice') {
			correctAnswer = question.options[question.correct];
			document.querySelectorAll('.choice-btn')[selectedAnswer].classList.add('incorrect');
			document.querySelectorAll('.choice-btn')[question.correct].classList.add('correct');
		}
		incorrectFeedback.querySelector('.correct-answer strong').textContent = correctAnswer;
	}
	
	feedback.style.display = 'block';
	
	
	document.querySelector('.check-btn').style.display = 'none';
	
	const genericContinue = document.querySelector('.lesson-actions .continue-btn');
	if (genericContinue) genericContinue.style.display = 'block';
}


function loseHeart() {
	
	return;
}


function continueLesson() {
	currentQuestionIndex++;
	
	if (currentQuestionIndex >= currentLessonData.length) {
		showCompletion();
	} else {
		renderQuestion(currentQuestionIndex);
		updateProgressBar();
		updateQuestionCounter();
	}
}


function updateProgressBar() {
	const progress = ((currentQuestionIndex + 1) / currentLessonData.length) * 100;
	document.querySelector('.progress-fill').style.width = progress + '%';
}

// Update question counter
function updateQuestionCounter() {
	document.querySelector('.current-question').textContent = currentQuestionIndex + 1;
	document.querySelector('.total-questions').textContent = currentLessonData.length;
}


function showCompletion() {
	const modal = document.querySelector('.completion-modal');
	const accuracy = Math.round((correctAnswers / currentLessonData.length) * 100);
	
	modal.querySelector('.completion-stats .stat:first-child .stat-value').textContent = 
		`${correctAnswers}/${currentLessonData.length}`;
	modal.querySelector('.completion-stats .stat:last-child .stat-value').textContent = 
		`${accuracy}%`;
	
	
	saveLessonProgress(currentModuleId, accuracy);
	
	modal.style.display = 'flex';
}


function saveLessonProgress(lessonKey, accuracy) {
	try {
		const storageKey = 'quicklearnit-progress';
		const raw = localStorage.getItem(storageKey);
		const data = raw ? JSON.parse(raw) : {
			completedUnits: [],
			completedLessons: [],
			lessonsCompleted: 0,
			streak: 0,
			lastVisit: null,
			activities: []
		};


		if (!Array.isArray(data.completedLessons)) data.completedLessons = [];

	
		if (!data.completedLessons.includes(lessonKey)) {
			data.completedLessons.push(lessonKey);
			data.lessonsCompleted = data.completedLessons.length;

			
			data.activities = data.activities || [];
			data.activities.push({
				title: 'Completed lesson: ' + formatLessonTitle(lessonKey),
				icon: pickLessonIcon(lessonKey),
				accuracy: accuracy,
				timestamp: Date.now()
			});
		}

		
		updateProgressStreak(data);

		// Unit auto-complete: if all lessons for a unit done, mark unit
		const unitId = detectUnitFromLesson(lessonKey);
		if (unitId) {
			const unitLessons = getUnitLessonKeys(unitId);
			const allDone = unitLessons.every(k => data.completedLessons.includes(k));
			if (allDone && !data.completedUnits.includes(unitId)) {
				data.completedUnits.push(unitId);
				data.activities.push({
					title: 'Completed unit ' + unitId,
					icon: pickUnitIcon(unitId),
					timestamp: Date.now()
				});
			}
		}

		localStorage.setItem(storageKey, JSON.stringify(data));
	} catch (e) {
		console.warn('Failed to save lesson progress', e);
	}
}

function formatLessonTitle(key) {
	
	return key.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function pickLessonIcon(key) {
	const mapping = {
		greetings: 'fa-message',
		numbers: 'fa-calculator',
		food: 'fa-pizza-slice',
		travel: 'fa-plane',
		family: 'fa-people-group',
		verbs: 'fa-cart-shopping'
	};
	const prefix = key.split('-')[0];
	return mapping[prefix] || 'fa-circle-check';
}

function detectUnitFromLesson(key) {
	const prefix = key.split('-')[0];
	const map = { greetings: 1, numbers: 2, food: 3, travel: 4, family: 5, verbs: 6 };
	return map[prefix] || null;
}

function getUnitLessonKeys(unitId) {
	switch(String(unitId)) {
		case '1': return ['greetings-overview','greetings-basic','greetings-intro','greetings-wellbeing'];
		case '2': return ['numbers-overview','numbers-basic','numbers-advanced','numbers-time'];
		case '3': return ['food-overview','food-produce','food-restaurant','food-drinks'];
		case '4': return ['travel-overview','travel-directions','travel-transport','travel-accommodation'];
		case '5': return ['family-overview','family-members','family-relationships','family-activities'];
		case '6': return ['verbs-overview','verbs-common','verbs-daily','verbs-past'];
		default: return [];
	}
}

function pickUnitIcon(unitId) {
	const map = { 1:'fa-message',2:'fa-calculator',3:'fa-pizza-slice',4:'fa-plane',5:'fa-people-group',6:'fa-cart-shopping'};
	return map[unitId] || 'fa-flag-checkered';
}

function updateProgressStreak(data) {
	const today = new Date().setHours(0,0,0,0);
	const lastVisit = data.lastVisit ? new Date(data.lastVisit).setHours(0,0,0,0) : null;
	if (!lastVisit) {
		data.streak = 1;
	} else {
		const diffDays = Math.floor((today - lastVisit)/86400000);
		if (diffDays === 1) data.streak += 1; else if (diffDays > 1) data.streak = 1; // same day -> unchanged
	}
	data.lastVisit = Date.now();
}


function addTTSButton(question) {

	const existingBtn = document.getElementById('tts-btn');
	if (existingBtn) {
		existingBtn.remove();
	}
	
	
	const visibleMode = document.querySelector('.game-mode[style*="display: block"], .game-mode[style*="display: flex"]');
	if (!visibleMode) return;
	
	const instruction = visibleMode.querySelector('.instruction');
	if (!instruction) return;
	
	
	const ttsBtn = document.createElement('button');
	ttsBtn.className = 'tts-btn';
	ttsBtn.id = 'tts-btn';
	ttsBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Listen';
	ttsBtn.onclick = speakItalian;
	
	
	instruction.insertAdjacentElement('afterend', ttsBtn);
}


function speakItalian() {
	const question = currentLessonData[currentQuestionIndex];
	let textToSpeak = '';
	
	
	if (question.type === 'fill-blank') {
		
		textToSpeak = question.sentence.replace('<blank>', 'blank');
	} else if (question.type === 'multiple-choice') {
		
		const italianMatch = question.question.match(/"([^"]+)"/);
		if (italianMatch) {
			textToSpeak = italianMatch[1];
		}
	} else if (question.type === 'flashcard') {
		
		if (question.cards && question.cards[currentCardIndex]) {
			textToSpeak = question.cards[currentCardIndex].front;
		}
	} else if (question.type === 'matching') {
		
		if (question.pairs && question.pairs.length > 0) {
			textToSpeak = question.pairs.map(pair => pair.italian).join(', ');
		}
	}
	
	if (textToSpeak) {
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.lang = 'it-IT'; 
		utterance.rate = 0.8; 
		utterance.pitch = 1;

		
		const ttsBtn = document.getElementById('tts-btn');
		if (ttsBtn) {
			ttsBtn.classList.add('speaking');
			
			utterance.onend = () => {
				ttsBtn.classList.remove('speaking');
				
				if (handwritingEl) handwritingEl.classList.remove('playing');
			};
		}

		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(utterance);
	}
}


document.addEventListener('DOMContentLoaded', () => {
	initLesson();
	
	document.querySelector('.check-btn').addEventListener('click', checkAnswer);
	
	document.querySelectorAll('.continue-btn').forEach(btn => btn.addEventListener('click', continueLesson));
});

