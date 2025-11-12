// Lesson data structure
const lessonData = {
	greetings: [
		{
			type: 'multiple-choice',
			question: 'What does "Ciao" mean?',
			options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ciao! Come <blank> chiami?',
			translation: 'Hello! What is your name?',
			options: ['ti', 'mi', 'si', 'vi'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'Ciao', back: 'Hello', pronunciation: '/ˈtʃaʊ/' },
				{ front: 'Grazie', back: 'Thank you', pronunciation: '/ˈɡrɑːtsie/' },
				{ front: 'Per favore', back: 'Please', pronunciation: '/per faˈvore/' },
				{ front: 'Arrivederci', back: 'Goodbye', pronunciation: '/arːiveˈdertʃi/' },
				{ front: 'Buongiorno', back: 'Good morning', pronunciation: '/bwonˈdʒorno/' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'Ciao', english: 'Hello' },
				{ italian: 'Grazie', english: 'Thank you' },
				{ italian: 'Arrivederci', english: 'Goodbye' },
				{ italian: 'Per favore', english: 'Please' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "Thank you" in Italian?',
			options: ['Ciao', 'Grazie', 'Prego', 'Scusa'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Buongiorno! <blank> stai?',
			translation: 'Good morning! How are you?',
			options: ['Come', 'Quando', 'Dove', 'Perché'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "Arrivederci" mean?',
			options: ['Hello', 'Please', 'Goodbye', 'Thank you'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: '<blank> mille!',
			translation: 'Thanks a lot!',
			options: ['Grazie', 'Ciao', 'Prego', 'Scusa'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "Good morning" in Italian?',
			options: ['Buonasera', 'Buonanotte', 'Buongiorno', 'Ciao'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Mi <blank> Marco.',
			translation: 'My name is Marco.',
			options: ['chiamo', 'sono', 'stai', 'vai'],
			correct: 0
		}
	],
	numbers: [
		{
			type: 'multiple-choice',
			question: 'What is "uno" in English?',
			options: ['Two', 'One', 'Three', 'Zero'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ho <blank> anni.',
			translation: 'I am twenty years old.',
			options: ['venti', 'dieci', 'trenta', 'cinque'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'uno', back: 'one', pronunciation: '/ˈuno/' },
				{ front: 'due', back: 'two', pronunciation: '/ˈdue/' },
				{ front: 'tre', back: 'three', pronunciation: '/tre/' },
				{ front: 'quattro', back: 'four', pronunciation: '/ˈkwattro/' },
				{ front: 'cinque', back: 'five', pronunciation: '/ˈtʃinkwe/' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'sei', english: 'six' },
				{ italian: 'sette', english: 'seven' },
				{ italian: 'otto', english: 'eight' },
				{ italian: 'nove', english: 'nine' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'What is "dieci" in English?',
			options: ['Eight', 'Nine', 'Ten', 'Eleven'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Costa <blank> euro.',
			translation: 'It costs ten euros.',
			options: ['dieci', 'cento', 'mille', 'zero'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "100" in Italian?',
			options: ['Mille', 'Cento', 'Cinquanta', 'Venti'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Sono le <blank>.',
			translation: 'It is three o\'clock.',
			options: ['tre', 'sei', 'nove', 'dodici'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What is "cinquanta" in English?',
			options: ['Five', 'Fifteen', 'Fifty', 'Five hundred'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Ci sono <blank> studenti.',
			translation: 'There are twenty students.',
			options: ['venti', 'trenta', 'quaranta', 'cinquanta'],
			correct: 0
		}
	],
	food: [
		{
			type: 'multiple-choice',
			question: 'What does "pizza" mean?',
			options: ['Pasta', 'Pizza', 'Bread', 'Cheese'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Vorrei una <blank>, per favore.',
			translation: 'I would like a pizza, please.',
			options: ['pizza', 'pasta', 'acqua', 'caffè'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'pasta', back: 'pasta', pronunciation: '/ˈpasta/' },
				{ front: 'pane', back: 'bread', pronunciation: '/ˈpane/' },
				{ front: 'vino', back: 'wine', pronunciation: '/ˈvino/' },
				{ front: 'acqua', back: 'water', pronunciation: '/ˈakkwa/' },
				{ front: 'caffè', back: 'coffee', pronunciation: '/kafˈfɛ/' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'formaggio', english: 'cheese' },
				{ italian: 'pomodoro', english: 'tomato' },
				{ italian: 'gelato', english: 'ice cream' },
				{ italian: 'dolce', english: 'dessert' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "water" in Italian?',
			options: ['Vino', 'Latte', 'Acqua', 'Succo'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Prendo un <blank>.',
			translation: 'I\'ll have a coffee.',
			options: ['caffè', 'tè', 'latte', 'succo'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "gelato" mean?',
			options: ['Cake', 'Ice cream', 'Cookie', 'Chocolate'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Mi piace la <blank> italiana.',
			translation: 'I like Italian pasta.',
			options: ['pasta', 'pizza', 'carne', 'pesce'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "bread" in Italian?',
			options: ['Pane', 'Pasta', 'Riso', 'Carne'],
			correct: 0
		},
		{
			type: 'fill-blank',
			sentence: 'Buon <blank>!',
			translation: 'Enjoy your meal!',
			options: ['appetito', 'giorno', 'compleanno', 'viaggio'],
			correct: 0
		}
	],
	travel: [
		{
			type: 'multiple-choice',
			question: 'What does "aeroporto" mean?',
			options: ['Train station', 'Airport', 'Bus stop', 'Taxi'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Dov\'è la <blank>?',
			translation: 'Where is the station?',
			options: ['stazione', 'piazza', 'strada', 'casa'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'treno', back: 'train', pronunciation: '/ˈtreno/' },
				{ front: 'autobus', back: 'bus', pronunciation: '/ˈautobus/' },
				{ front: 'taxi', back: 'taxi', pronunciation: '/ˈtaksi/' },
				{ front: 'biglietto', back: 'ticket', pronunciation: '/biʎˈʎetto/' },
				{ front: 'stazione', back: 'station', pronunciation: '/statˈtsjone/' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'hotel', english: 'hotel' },
				{ italian: 'museo', english: 'museum' },
				{ italian: 'spiaggia', english: 'beach' },
				{ italian: 'centro', english: 'center' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "train" in Italian?',
			options: ['Autobus', 'Treno', 'Metro', 'Taxi'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Un <blank> per Roma, per favore.',
			translation: 'One ticket to Rome, please.',
			options: ['biglietto', 'treno', 'passaporto', 'hotel'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "spiaggia" mean?',
			options: ['Mountain', 'Beach', 'River', 'Lake'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Vado in <blank>.',
			translation: 'I\'m going to the hotel.',
			options: ['hotel', 'museo', 'chiesa', 'ristorante'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "ticket" in Italian?',
			options: ['Passaporto', 'Valigia', 'Biglietto', 'Mappa'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Il <blank> parte alle dieci.',
			translation: 'The train leaves at ten.',
			options: ['treno', 'autobus', 'aereo', 'taxi'],
			correct: 0
		}
	],
	family: [
		{
			type: 'multiple-choice',
			question: 'What does "famiglia" mean?',
			options: ['Friend', 'Family', 'Father', 'Mother'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Mia <blank> si chiama Maria.',
			translation: 'My mother is called Maria.',
			options: ['madre', 'sorella', 'nonna', 'zia'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'padre', back: 'father', pronunciation: '/ˈpadre/' },
				{ front: 'madre', back: 'mother', pronunciation: '/ˈmadre/' },
				{ front: 'fratello', back: 'brother', pronunciation: '/fraˈtɛllo/' },
				{ front: 'sorella', back: 'sister', pronunciation: '/soˈrɛlla/' },
				{ front: 'figlio', back: 'son', pronunciation: '/ˈfiʎʎo/' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'nonno', english: 'grandfather' },
				{ italian: 'nonna', english: 'grandmother' },
				{ italian: 'zio', english: 'uncle' },
				{ italian: 'zia', english: 'aunt' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "brother" in Italian?',
			options: ['Padre', 'Fratello', 'Figlio', 'Cugino'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Ho una <blank>.',
			translation: 'I have a sister.',
			options: ['sorella', 'madre', 'figlia', 'zia'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "nonno" mean?',
			options: ['Uncle', 'Father', 'Grandfather', 'Son'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Mio <blank> ha dieci anni.',
			translation: 'My son is ten years old.',
			options: ['figlio', 'fratello', 'padre', 'nipote'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "daughter" in Italian?',
			options: ['Sorella', 'Madre', 'Figlia', 'Nipote'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'La mia <blank> è grande.',
			translation: 'My family is big.',
			options: ['famiglia', 'casa', 'città', 'scuola'],
			correct: 0
		}
	],
	shopping: [
		{
			type: 'multiple-choice',
			question: 'What does "negozio" mean?',
			options: ['Market', 'Shop', 'Mall', 'Street'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Quanto <blank>?',
			translation: 'How much does it cost?',
			options: ['costa', 'compro', 'vendo', 'pago'],
			correct: 0
		},
		{
			type: 'flashcard',
			cards: [
				{ front: 'soldi', back: 'money', pronunciation: '/ˈsoldi/' },
				{ front: 'prezzo', back: 'price', pronunciation: '/ˈprɛttso/' },
				{ front: 'comprare', back: 'to buy', pronunciation: '/komˈprare/' },
				{ front: 'vendere', back: 'to sell', pronunciation: '/ˈvɛndere/' },
				{ front: 'sconto', back: 'discount', pronunciation: '/ˈskonto/' }
			]
		},
		{
			type: 'matching',
			pairs: [
				{ italian: 'mercato', english: 'market' },
				{ italian: 'carta', english: 'card' },
				{ italian: 'contanti', english: 'cash' },
				{ italian: 'borsa', english: 'bag' }
			]
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "price" in Italian?',
			options: ['Soldi', 'Prezzo', 'Costo', 'Pagamento'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Posso pagare con la <blank>?',
			translation: 'Can I pay with card?',
			options: ['carta', 'borsa', 'tasca', 'mano'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'What does "sconto" mean?',
			options: ['Receipt', 'Discount', 'Tax', 'Change'],
			correct: 1
		},
		{
			type: 'fill-blank',
			sentence: 'Vado al <blank>.',
			translation: 'I\'m going to the market.',
			options: ['mercato', 'negozio', 'centro', 'museo'],
			correct: 0
		},
		{
			type: 'multiple-choice',
			question: 'How do you say "to buy" in Italian?',
			options: ['Vendere', 'Pagare', 'Comprare', 'Costare'],
			correct: 2
		},
		{
			type: 'fill-blank',
			sentence: 'Ho bisogno di <blank>.',
			translation: 'I need money.',
			options: ['soldi', 'tempo', 'aiuto', 'acqua'],
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
	const moduleNumber = urlParams.get('module') || '1';
	
	// Map module numbers to lesson data keys
	const moduleMap = {
		'1': 'greetings',
		'2': 'numbers',
		'3': 'food',
		'4': 'travel',
		'5': 'family',
		'6': 'shopping'
	};
	
	currentModuleId = moduleMap[moduleNumber] || 'greetings';
	currentLessonData = lessonData[currentModuleId] || lessonData.greetings;
	
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

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
	initLesson();
	
	document.querySelector('.check-btn').addEventListener('click', checkAnswer);
	document.querySelector('.continue-btn').addEventListener('click', continueLesson);
});
