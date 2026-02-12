document.addEventListener('DOMContentLoaded', () => {
    const initialPage = document.getElementById('initialPage');
    const happyValentinePage = document.getElementById('happyValentinePage');
    const giftsPage = document.getElementById('giftsPage');
    const quizPage1 = document.getElementById('quizPage1');
    const quizPage2 = document.getElementById('quizPage2');
    const quizPage3 = document.getElementById('quizPage3');
    const quizSuccessPage = document.getElementById('quizSuccessPage');
    const letterPage = document.getElementById('letterPage');
    const photoGalleryPage = document.getElementById('photoGalleryPage');
    const finalGiftPage = document.getElementById('finalGiftPage');

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const seeMyGiftsButton = document.getElementById('seeMyGiftsButton');
    const finallyButton = document.getElementById('finallyButton');

    const gift1 = document.getElementById('gift1');
    const gift2 = document.getElementById('gift2');
    const gift3 = document.getElementById('gift3');

    // Navigation buttons
    const backFromGifts = document.getElementById('backFromGifts');
    const backFromQuiz1 = document.getElementById('backFromQuiz1');
    const backFromQuiz2 = document.getElementById('backFromQuiz2');
    const backFromQuiz3 = document.getElementById('backFromQuiz3');
    const backFromQuizSuccess = document.getElementById('backFromQuizSuccess');
    const backFromLetter = document.getElementById('backFromLetter');
    const backFromGallery = document.getElementById('backFromGallery');
    const backFromFinalGift = document.getElementById('backFromFinalGift');

    let currentQuizPage = 1;
    let quizCompleted = false;
    // Get reference to the background music
const bgMusic = document.getElementById('bgMusic');

// Find your button that navigates to the final page
document.getElementById('finallyButton').addEventListener('click', function() {
    // 1. Hide the previous page and show the final gift page
    document.getElementById('giftsPage').classList.add('hidden');
    document.getElementById('finalGiftPage').classList.remove('hidden');

    // 2. PAUSE THE BACKGROUND MUSIC HERE
    bgMusic.pause(); 
    
    // Optional: Reset time to 0 so it starts from the beginning if played again
    // bgMusic.currentTime = 0; 
});

    // --- Floating Hearts Animation ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.width = Math.random() * 20 + 10 + 'px'; // Size between 10px and 30px
        heart.style.height = heart.style.width;
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duration between 5s and 10s
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, parseFloat(heart.style.animationDuration) * 1000);
    }

    setInterval(createHeart, 300); // Create a new heart every 300ms

    // --- No Button Movement ---
    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        // Ensure button stays within the card boundaries
        const cardRect = noButton.closest('.card').getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newX = Math.random() * (cardRect.width - buttonRect.width);
        let newY = Math.random() * (cardRect.height - buttonRect.height);

        // Prevent it from overlapping with the "YES" button significantly
        const yesButtonRect = yesButton.getBoundingClientRect();
        document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('bgMusic').play();
    // baaki ka code jo screen change karta hai...
});
        const safetyMargin = 50; // pixels to keep clear

        if (
            newX < yesButtonRect.right + safetyMargin - cardRect.left &&
            newX + buttonRect.width > yesButtonRect.left - safetyMargin - cardRect.left &&
            newY < yesButtonRect.bottom + safetyMargin - cardRect.top &&
            newY + buttonRect.height > yesButtonRect.top - safetyMargin - cardRect.top
        ) {
            // If overlap, try moving it further away
            newX = (newX + cardRect.width / 2) % (cardRect.width - buttonRect.width);
            newY = (newY + cardRect.height / 2) % (cardRect.height - buttonRect.height);
        }


        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    noButton.addEventListener('click', () => {
        alert("You can't say no! 😉 Try clicking Yes!");
    });

    // --- Page Navigation ---
    yesButton.addEventListener('click', () => {
        initialPage.classList.add('hidden');
        happyValentinePage.classList.remove('hidden');
    });

    seeMyGiftsButton.addEventListener('click', () => {
        happyValentinePage.classList.add('hidden');
        giftsPage.classList.remove('hidden');
    });

    backFromGifts.addEventListener('click', () => {
        giftsPage.classList.add('hidden');
        happyValentinePage.classList.remove('hidden');
    });

    // Gift 1: Quiz
    gift1.addEventListener('click', () => {
        giftsPage.classList.add('hidden');
        quizPage1.classList.remove('hidden');
        currentQuizPage = 1;
        document.getElementById('quizError1').classList.add('hidden');
        resetQuizButtons(quizPage1);
    });

    // Gift 2: Letter
    gift2.addEventListener('click', () => {
        giftsPage.classList.add('hidden');
        letterPage.classList.remove('hidden');
    });

    // Gift 3: Photo Gallery
    gift3.addEventListener('click', () => {
        giftsPage.classList.add('hidden');
        photoGalleryPage.classList.remove('hidden');
    });

    finallyButton.addEventListener('click', () => {
        if (quizCompleted) {
            giftsPage.classList.add('hidden');
            finalGiftPage.classList.remove('hidden');
        } else {
            alert("You need to complete the quiz first! Try Gift 1 😉");
        }
    });

    // Back Buttons
    backFromLetter.addEventListener('click', () => {
        letterPage.classList.add('hidden');
        giftsPage.classList.remove('hidden');
    });

    backFromGallery.addEventListener('click', () => {
        photoGalleryPage.classList.add('hidden');
        giftsPage.classList.remove('hidden');
    });

    backFromFinalGift.addEventListener('click', () => {
        finalGiftPage.classList.add('hidden');
        giftsPage.classList.remove('hidden');
    });
document.getElementById('backFromFinalGift').addEventListener('click', function() {
    document.getElementById('finalGiftPage').classList.add('hidden');
    document.getElementById('giftsPage').classList.remove('hidden');

    // RESUME THE BACKGROUND MUSIC
    bgMusic.play();
});

// Surprise button click logic
document.getElementById('extraSurpriseBtn').addEventListener('click', function() {
    document.getElementById('finalGiftPage').classList.add('hidden');
    document.getElementById('surprisePage').classList.remove('hidden');
    
    // Agar background music abhi bhi chal raha ho to band kar de
    bgMusic.pause();
    
    // Nayi video ko play karne ke liye
    const surpriseVid = document.getElementById('surpriseVideo');
    surpriseVid.play();
});

// Surprise page se wapas jane ka button
document.getElementById('backFromSurprise').addEventListener('click', function() {
    document.getElementById('surprisePage').classList.add('hidden');
    document.getElementById('finalGiftPage').classList.remove('hidden');
    
    // Surprise video ko stop kar de wapas jate waqt
    document.getElementById('surpriseVideo').pause();
});

    // --- Quiz Logic ---
    function setupQuizPage(quizPageElement, errorElementId, nextPageElement) {
        const quizButtons = quizPageElement.querySelectorAll('.quiz-btn');
        const errorMessage = document.getElementById(errorElementId);

        quizButtons.forEach(button => {
            button.onclick = () => {
                if (button.dataset.correct === 'true') {
                    errorMessage.classList.add('hidden');
                    quizPageElement.classList.add('hidden');
                    if (nextPageElement === quizSuccessPage) {
                        quizSuccessPage.classList.remove('hidden');
                        quizCompleted = true; // Mark quiz as completed
                    } else {
                        nextPageElement.classList.remove('hidden');
                    }
                } else {
                    errorMessage.classList.remove('hidden');
                }
            };
        });
    }

    function resetQuizButtons(quizPageElement) {
        quizPageElement.querySelectorAll('.quiz-btn').forEach(button => {
            button.classList.remove('selected', 'correct', 'incorrect');
        });
    }

    setupQuizPage(quizPage1, 'quizError1', quizPage2);
    setupQuizPage(quizPage2, 'quizError2', quizPage3);
    setupQuizPage(quizPage3, 'quizError3', quizSuccessPage);

    // Back from Quiz pages
    backFromQuiz1.addEventListener('click', () => {
        quizPage1.classList.add('hidden');
        giftsPage.classList.remove('hidden');
    });

    backFromQuiz2.addEventListener('click', () => {
        quizPage2.classList.add('hidden');
        quizPage1.classList.remove('hidden');
    });

    backFromQuiz3.addEventListener('click', () => {
        quizPage3.classList.add('hidden');
        quizPage2.classList.remove('hidden');
    });

    backFromQuizSuccess.addEventListener('click', () => {
        quizSuccessPage.classList.add('hidden');
        giftsPage.classList.remove('hidden');
    });

});