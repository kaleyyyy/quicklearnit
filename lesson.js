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
				{ front: 'Grazie', back: 'Thank you', pronunciation: '/ˈɡrattsje/' },
				{ front: 'Prego', back: 'You\'re welcome', pronunciation: '/ˈprɛɡo/' },
				{ front: 'Scusa', back: 'Excuse me/Sorry', pronunciation: '/ˈskuza/' },
				{ front: 'Per favore', back: 'Please', pronunciation: '/per faˈvore/' },
				{ front: 'Salve', back: 'Hello (formal)', pronunciation: '/ˈsalve/' }
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
				{ front: 'Ciao', back: 'Hello/Bye', pronunciation: '/ˈtʃaʊ/' },
				{ front: 'Arrivederci', back: 'Goodbye', pronunciation: '/arːiveˈdertʃi/' },
				{ front: 'Buongiorno', back: 'Good morning', pronunciation: '/bwonˈdʒorno/' },
				{ front: 'Buonasera', back: 'Good evening', pronunciation: '/bwonaˈsera/' },
				{ front: 'Buonanotte', back: 'Good night', pronunciation: '/bwonaˈnotte/' }
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
				{ front: 'Mi chiamo...', back: 'My name is...', pronunciation: '/mi ˈkjamo/' },
				{ front: 'Piacere', back: 'Nice to meet you', pronunciation: '/pjaˈtʃere/' },
				{ front: 'Come ti chiami?', back: 'What is your name?', pronunciation: '/ˈkome ti ˈkjami/' },
				{ front: 'Sono di...', back: 'I am from...', pronunciation: '/ˈsono di/' },
				{ front: 'E tu?', back: 'And you?', pronunciation: '/e tu/' }
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
				{ front: 'Come stai?', back: 'How are you?', pronunciation: '/ˈkome ˈstai/' },
				{ front: 'Bene', back: 'Well/Good', pronunciation: '/ˈbɛne/' },
				{ front: 'Male', back: 'Bad', pronunciation: '/ˈmale/' },
				{ front: 'Così così', back: 'So-so', pronunciation: '/koˈsi koˈsi/' },
				{ front: 'Molto bene', back: 'Very well', pronunciation: '/ˈmolto ˈbɛne/' }
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
				{ front: 'zero', back: 'zero', pronunciation: '/ˈdzɛro/' },
				{ front: 'primo', back: 'first', pronunciation: '/ˈprimo/' },
				{ front: 'secondo', back: 'second', pronunciation: '/seˈkondo/' },
				{ front: 'terzo', back: 'third', pronunciation: '/ˈtɛrtso/' },
				{ front: 'ultimo', back: 'last', pronunciation: '/ˈultimo/' }
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
				{ front: 'uno', back: 'one', pronunciation: '/ˈuno/' },
				{ front: 'due', back: 'two', pronunciation: '/ˈdue/' },
				{ front: 'tre', back: 'three', pronunciation: '/tre/' },
				{ front: 'quattro', back: 'four', pronunciation: '/ˈkwattro/' },
				{ front: 'cinque', back: 'five', pronunciation: '/ˈtʃinkwe/' },
				{ front: 'sei', back: 'six', pronunciation: '/sɛi/' },
				{ front: 'sette', back: 'seven', pronunciation: '/ˈsette/' },
				{ front: 'otto', back: 'eight', pronunciation: '/ˈɔtto/' },
				{ front: 'nove', back: 'nine', pronunciation: '/ˈnɔve/' },
				{ front: 'dieci', back: 'ten', pronunciation: '/ˈdjɛtʃi/' }
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
				{ front: 'undici', back: 'eleven', pronunciation: '/ˈunditʃi/' },
				{ front: 'quindici', back: 'fifteen', pronunciation: '/ˈkwinditʃi/' },
				{ front: 'venti', back: 'twenty', pronunciation: '/ˈventi/' },
				{ front: 'trenta', back: 'thirty', pronunciation: '/ˈtrenta/' },
				{ front: 'cinquanta', back: 'fifty', pronunciation: '/tʃinkˈkwanta/' },
				{ front: 'cento', back: 'one hundred', pronunciation: '/ˈtʃɛnto/' }
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
				{ front: 'Che ore sono?', back: 'What time is it?', pronunciation: '/ke ˈɔre ˈsono/' },
				{ front: 'È l\'una', back: 'It is one o\'clock', pronunciation: '/ɛ ˈluna/' },
				{ front: 'Sono le due', back: 'It is two o\'clock', pronunciation: '/ˈsono le ˈdue/' },
				{ front: 'Mezzogiorno', back: 'Noon', pronunciation: '/mɛddzoˈdʒorno/' },
				{ front: 'Mezzanotte', back: 'Midnight', pronunciation: '/mɛdddzaˈnɔtte/' }
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
				{ front: 'Fame', back: 'Hunger', pronunciation: '/ˈfame/' },
				{ front: 'Sete', back: 'Thirst', pronunciation: '/ˈsete/' },
				{ front: 'Delizioso', back: 'Delicious', pronunciation: '/deliˈtsjoso/' },
				{ front: 'Piccante', back: 'Spicy', pronunciation: '/pikˈkante/' },
				{ front: 'Dolce', back: 'Sweet', pronunciation: '/ˈdoltʃe/' }
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
				{ front: 'mela', back: 'apple', pronunciation: '/ˈmɛla/' },
				{ front: 'banana', back: 'banana', pronunciation: '/baˈnana/' },
				{ front: 'arancia', back: 'orange', pronunciation: '/aˈrantʃa/' },
				{ front: 'pomodoro', back: 'tomato', pronunciation: '/pomoˈdɔro/' },
				{ front: 'insalata', back: 'lettuce/salad', pronunciation: '/insaˈlata/' },
				{ front: 'carota', back: 'carrot', pronunciation: '/kaˈrɔta/' }
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
				{ front: 'Vorrei...', back: 'I would like...', pronunciation: '/vorˈrɛi/' },
				{ front: 'Il conto', back: 'The bill/check', pronunciation: '/il ˈkonto/' },
				{ front: 'Il menu', back: 'The menu', pronunciation: '/il meˈnu/' },
				{ front: 'Acqua', back: 'Water', pronunciation: '/ˈakkwa/' },
				{ front: 'Vino', back: 'Wine', pronunciation: '/ˈvino/' }
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
				{ front: 'Caffè', back: 'Coffee', pronunciation: '/kafˈfɛ/' },
				{ front: 'Tè', back: 'Tea', pronunciation: '/tɛ/' },
				{ front: 'Latte', back: 'Milk', pronunciation: '/ˈlatte/' },
				{ front: 'Gelato', back: 'Ice cream', pronunciation: '/dʒeˈlato/' },
				{ front: 'Tiramisù', back: 'Tiramisu', pronunciation: '/tiramiˈsu/' }
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
		'6-3': 'verbs-past'
	};
	
	// If unit parameter is provided, use general unit content
	if (unitParam) {
		const unitMap = {
			'1': 'greetings-overview',
			'2': 'numbers-overview',
			'3': 'food-overview',
			'4': 'travel-directions',
			'5': 'family-members',
			'6': 'verbs-common'
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
	document.querySelector('.continue-btn').style.display = 'none';
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
		// Wrong match - lose a heart on first wrong match only
		card1.classList.add('wrong');
		card2.classList.add('wrong');
		
		// Lose heart on first mistake in this matching game
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

// Render flashcard
function renderFlashcard(question) {
	const mode = document.querySelector('.flashcard');
	currentCardIndex = 0;
	isFlipped = false;
	
	updateFlashcard(question.cards[0]);
	updateCardCounter(question.cards.length);
	
	// Setup card flip - click on the whole flashcard container
	const flashcardContainer = mode.querySelector('.flashcard');
	const flashcardClickHandler = (e) => {
		// Don't flip if clicking on navigation buttons
		if (e.target.closest('.flashcard-controls')) return;
		
		flashcardContainer.classList.toggle('flipped');
		isFlipped = !isFlipped;
	};
	
	// Remove old listener and add new one
	flashcardContainer.onclick = flashcardClickHandler;
	
	// Setup navigation with proper event handlers
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
	
	// For flashcards, change check button to "Continue" since no checking needed
	const checkBtn = document.querySelector('.check-btn');
	checkBtn.textContent = 'Continue';
	checkBtn.disabled = false;
	checkBtn.style.display = 'block';
}

// Update flashcard content
function updateFlashcard(card) {
	const mode = document.querySelector('.flashcard');
	const flashcardEl = mode.querySelector('.flashcard');
	
	// Reset flip state
	flashcardEl.classList.remove('flipped');
	isFlipped = false;
	
	// Update content
	mode.querySelector('.flashcard-front .word').textContent = card.front;
	mode.querySelector('.flashcard-back .word').textContent = card.back;
	mode.querySelector('.flashcard-back .pronunciation').textContent = card.pronunciation;
}

// Navigate flashcards
function navigateCard(direction) {
	const question = currentLessonData[currentQuestionIndex];
	if (!question || question.type !== 'flashcard') return;
	
	const cards = question.cards;
	currentCardIndex = (currentCardIndex + direction + cards.length) % cards.length;
	updateFlashcard(cards[currentCardIndex]);
	updateCardCounter(cards.length);
}

// Update card counter
function updateCardCounter(total) {
	document.querySelector('.current-card').textContent = currentCardIndex + 1;
	document.querySelector('.total-cards').textContent = total;
}

// Render multiple choice
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

// Select choice answer
function selectChoice(index, btn) {
	document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
	btn.classList.add('selected');
	selectedAnswer = index;
	document.querySelector('.check-btn').disabled = false;
}

// Check answer
function checkAnswer() {
	const question = currentLessonData[currentQuestionIndex];
	let isCorrect = false;
	
	if (question.type === 'flashcard') {
		// Flashcards just continue directly (no feedback needed)
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

// Show feedback
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
		
		// Show correct answer
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
	
	// Switch buttons
	document.querySelector('.check-btn').style.display = 'none';
	document.querySelector('.continue-btn').style.display = 'block';
}

// Lose a heart (disabled - no hearts system)
function loseHeart() {
	// Hearts system disabled
	return;
}

// Continue to next question
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

// Update progress bar
function updateProgressBar() {
	const progress = ((currentQuestionIndex + 1) / currentLessonData.length) * 100;
	document.querySelector('.progress-fill').style.width = progress + '%';
}

// Update question counter
function updateQuestionCounter() {
	document.querySelector('.current-question').textContent = currentQuestionIndex + 1;
	document.querySelector('.total-questions').textContent = currentLessonData.length;
}

// Show completion modal
function showCompletion() {
	const modal = document.querySelector('.completion-modal');
	const accuracy = Math.round((correctAnswers / currentLessonData.length) * 100);
	
	modal.querySelector('.completion-stats .stat:first-child .stat-value').textContent = 
		`${correctAnswers}/${currentLessonData.length}`;
	modal.querySelector('.completion-stats .stat:last-child .stat-value').textContent = 
		`${accuracy}%`;
	
	modal.style.display = 'flex';
}

// Add TTS button dynamically below instruction
function addTTSButton(question) {
	// Remove any existing TTS button
	const existingBtn = document.getElementById('tts-btn');
	if (existingBtn) {
		existingBtn.remove();
	}
	
	// Find the visible game mode and its instruction
	const visibleMode = document.querySelector('.game-mode[style*="display: block"], .game-mode[style*="display: flex"]');
	if (!visibleMode) return;
	
	const instruction = visibleMode.querySelector('.instruction');
	if (!instruction) return;
	
	// Create TTS button
	const ttsBtn = document.createElement('button');
	ttsBtn.className = 'tts-btn';
	ttsBtn.id = 'tts-btn';
	ttsBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Listen';
	ttsBtn.onclick = speakItalian;
	
	// Insert after instruction
	instruction.insertAdjacentElement('afterend', ttsBtn);
}

// Text-to-Speech function
function speakItalian() {
	const question = currentLessonData[currentQuestionIndex];
	let textToSpeak = '';
	
	// Extract Italian text based on question type (without revealing answers)
	if (question.type === 'fill-blank') {
		// Speak the sentence with the blank marker instead of the answer
		textToSpeak = question.sentence.replace('<blank>', 'blank');
	} else if (question.type === 'multiple-choice') {
		// Extract Italian words from the question
		const italianMatch = question.question.match(/"([^"]+)"/);
		if (italianMatch) {
			textToSpeak = italianMatch[1];
		}
	} else if (question.type === 'flashcard') {
		// Speak the current flashcard front text
		if (question.cards && question.cards[currentCardIndex]) {
			textToSpeak = question.cards[currentCardIndex].front;
		}
	} else if (question.type === 'matching') {
		// Speak all Italian words in the pairs
		if (question.pairs && question.pairs.length > 0) {
			textToSpeak = question.pairs.map(pair => pair.italian).join(', ');
		}
	}
	
	if (textToSpeak) {
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.lang = 'it-IT'; // Set language to Italian
		utterance.rate = 0.8; // Slightly slower for learning
		utterance.pitch = 1;
		
		const ttsBtn = document.getElementById('tts-btn');
		if (ttsBtn) {
			ttsBtn.classList.add('speaking');
			
			utterance.onend = () => {
				ttsBtn.classList.remove('speaking');
			};
		}
		
		window.speechSynthesis.cancel(); // Cancel any ongoing speech
		window.speechSynthesis.speak(utterance);
	}
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
	initLesson();
	
	document.querySelector('.check-btn').addEventListener('click', checkAnswer);
	document.querySelector('.continue-btn').addEventListener('click', continueLesson);
});
