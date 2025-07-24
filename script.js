console.log("Hello from JavaScript!");

function displayQuiz(){
    const questions = [
        // QUESTION 1 //
        {
            question: "You arrive at Floof Port to meet your travel companion. Who is it?",
            choices: [
                "A cheeky corgi with too much energy",
                "A calm, sleepy cat that loves cuddles",
                "A squeaky guinea pig in a pouch",
                "I dont have one yet but Im looking to adopt",
                "I came alone but love being around pets!"],
            weights: [
                {experienceScore: +2, mindsetScore: +1 }, // Weight for 1st choice
                {experienceScore: +1, mindsetScore: +3 }, // Weight for 2nd choice
                {experienceScore: +0, mindsetScore: +2 }, // Weight for 3rd choice
                {experienceScore: +0, mindsetScore: +0 }, // Weight for 4th choice
                {experienceScore: +0, mindsetScore: +3 }, // Weight for 5th choice
                ]
        },
        // QUESTION 2 //
        {
            question: "You and your companion are off to the Floof Market. What’s the first thing you buy?",
            choices: [
                "Sparkly treats and snacks",
                "A waterproof adventure jacket",
                "A premium brush and shampoo set",
                "A potion that says “Just In Case...” ",
                "A journal to record your memories"],
            weights: [
                {protectionScore: +0, mindsetScore: +1 }, // Weight for 1st choice
                {protectionScore: +1, mindsetScore: +0 }, // Weight for 2nd choice
                {protectionScore: +1, mindsetScore: +2 }, // Weight for 3rd choice
                {protectionScore: +2, mindsetScore: +2 }, // Weight for 4th choice
                {protectionScore: +0, mindsetScore: +3 }, // Weight for 5th choice
                ]
        },
        // QUESTION 3 //
        {
            question: "Your pet suddenly starts sneezing sparkles! What do you do?",
            choices: [
                "Take them to the village vet, pronto!",
                "Call your Floof Friends for advice",
                "Google “sparkle sneezing”",
                "Wait a bit and see... it might pass"],
            weights: [
                {protectionScore: +2, experienceScore: +2 }, // Weight for 1st choice
                {protectionScore: +1, experienceScore: +1 }, // Weight for 2nd choice
                {protectionScore: +1, experienceScore: +0 }, // Weight for 3rd choice
                {protectionScore: +0, experienceScore: +0 }, // Weight for 4th choice
                ]
        },
        // QUESTION 4 //
        {
            question: "You meet the Floof Fortune Teller. She offers you a crystal in exchange for a secret. Which do you pick?",
            choices: [
                "Health Crystal (Heals unexpected injuries)",
                "Comfort Crystal (Keeps them calm)",
                "Protection Crystal (For worst-case events)",
                "Luck Crystal (Random perks and treats!)"],
            weights: [
                {protectionScore: +2, mindsetScore: +0 }, // Weight for 1st choice
                {protectionScore: +1, mindsetScore: +3 }, // Weight for 2nd choice
                {protectionScore: +2, mindsetScore: +2 }, // Weight for 3rd choice
                {protectionScore: +0, mindsetScore: +1 }, // Weight for 4th choice
                ]
        },
        // QUESTION 5 //
        {
            question: "Your travel buddy wants to join the Floof Olympics. What’s your training budget?",
            choices: [
                "$5–10: Light jogs, minimal gear",
                "$10–20: Decent snacks and vet checks",
                "$20–40: Full-on grooming, training & vet care",
                "$50+: My floof deserves the world"],
            weights: [
                {protectionScore: +0, budgetScore: +0 }, // Weight for 1st choice
                {protectionScore: +1, budgetScore: +1 }, // Weight for 2nd choice
                {protectionScore: +2, budgetScore: +2 }, // Weight for 3rd choice
                {protectionScore: +2, budgetScore: +2 }, // Weight for 4th choice
                ]
        },
        // QUESTION 6 //
        {
            question: "A stranger says they can charm-proof your pet for a year. Who must they be for you to trust them?",
            choices: [
                "A big name in FloofLand I’ve heard of",
                "Recommended by other pawrents",
                "They show me a clear, magical list of benefits",
                "I test them with a small spell first"],
            weights: [
                {protectionScore: +0, experienceScore: +1 }, // Weight for 1st choice
                {protectionScore: +1, experienceScore: +2 }, // Weight for 2nd choice
                {protectionScore: +2, experienceScore: +2 }, // Weight for 3rd choice
                {protectionScore: +1, experienceScore: +0 }, // Weight for 4th choice
                ]
        },
        // QUESTION 7 //
        {
            question: "If your pet could talk, how would they describe you?",
            choices: [
                "“Overprotective but I love it!”",
                "“We chill, we vibe.”",
                "“They research everything before deciding.”",
                "“A little clueless but trying their best.”"],
            weights: [
                {protectionScore: +2, experienceScore: +2 }, // Weight for 1st choice
                {protectionScore: +0, experienceScore: +1 }, // Weight for 2nd choice
                {protectionScore: +2, experienceScore: +2 }, // Weight for 3rd choice
                {protectionScore: +1, experienceScore: +0 }, // Weight for 4th choice
                ]
        },
        // QUESTION 8 //
        {
            question: "A storm is coming. You only have time to save one item:",
            choices: [
                "My pet’s health scrolls",
                "Their favourite toy",
                "My emergency bag",
                "A selfie album of us"],
            weights: [
                {protectionScore: +2, mindsetScore: +2 }, // Weight for 1st choice
                {protectionScore: +1, mindsetScore: +1 }, // Weight for 2nd choice
                {protectionScore: +2, mindsetScore: +0 }, // Weight for 3rd choice
                {protectionScore: +0, mindsetScore: +3 }, // Weight for 4th choice
                ]
        },
        // QUESTION 9 //
        {
            question: "You meet a talking bird offering free care tips in exchange for contact. Do you...",
            choices: [
                "Say yes and give your scroll (contact)",
                "Ask what’s in it for me first",
                "Politely decline",
                "Give a fake scroll just to see"],
            weights: [
                {contactScore: +2}, // Weight for 1st choice
                {contactScore: +0}, // Weight for 2nd choice
                {contactScore: +2}, // Weight for 3rd choice
                {contactScore: +1}, // Weight for 4th choice
                ]
        },
        // QUESTION 10 //
        {
            question: "At the end of the journey, what would make your pet happiest?",
            choices: [
                "Knowing I’ve planned for anything",
                "Being spoiled with spa days",
                "Having me around always",
                "A safe, peaceful home"],
            weights: [
                {protectionScore: +2, mindsetScore: +2 }, // Weight for 1st choice
                {protectionScore: +1, mindsetScore: +3 }, // Weight for 2nd choice
                {protectionScore: +0, mindsetScore: +3 }, // Weight for 3rd choice
                {protectionScore: +1, mindsetScore: +1 }, // Weight for 4th choice
                ]
        },
    ]

    // variables for scores //
    let currentQuestionIndex = 0;
    let protectionScore = 0;    // low, medium, high            | weights +0,1,2
    let budgetScore = 0;        // low, medium, high            | weights +0,1,2
    let experienceScore = 0;    // new, moderate, experienced   | weights +0,1,2
    let mindsetScore = 0;       // practical, playful, legacy, emotional    | weights +0,1,2,3
    let contactScore =0;        // yes, maybe, no               | weights +0,1,2

    ////////////////////////////
    // display question image //
    ////////////////////////////
    function displayQuestionImage(questionIndex){
        const imageURLs = [
            "./images/1_FloofPort.png",
            "./images/2_Floof Market_1.png",
            "./images/3_sneezing sparkles.png",
            "./images/4_Floof Fortune Teller.png",
            "./images/5_Olympics_1.png",
            "./images/6.png",
            "./images/7_pettalk.png",
            "./images/8_storm.png",
            "./images/9_scrollBird.png",
            "./images/10_rainbow.png",];
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = imageURLs[questionIndex];
    }

    ///////////////////////////////
    // Event - begin quiz button //
    ///////////////////////////////

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
    });

    ////////////////////////////////////////////////////////
    // Function to display the current question & choices // - copied, not fully checked
    ////////////////////////////////////////////////////////
     function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const progressImageElement = document.getElementById('question-progress-image');
        const choiceContainers = document.getElementById('choices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);
        //updateProgressBar();

        displayQuestionImage(currentQuestionIndex);

        currentQuestion.choices.forEach((choice, index) => {
            // Buttons for choices //
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
    }


    //////////////////////////////////
    // Function to get progress bar //
    //////////////////////////////////
    function getQuestionProgressImage(questionIndex) {
        const progressImageURLs = [
            "./images/progress_0.png",
            "./images/progress_10.png",
            "./images/progress_20.png",
            "./images/progress_30.png",
            "./images/progress_40.png",
            "./images/progress_50.png",
            "./images/progress_60.png",
            "./images/progress_70.png",
            "./images/progress_80.png",
            "./images/progress_90.png",
            "./images/progress_100.png",
        ];
        return progressImageURLs[questionIndex] || "";
    }

    // TO DO: update inside showQuestion() or displayCurrentQuestion() - not used
    function updateProgressBar() {
        const progress = ((currentQuestion) / questions.length) * 100;
        document.getElementById("progress-bar").style.width = progress +"%";
        document.getElementById("progress-text").innerText = Math.round(progress) + "%";
    }

    /////////////////////////////////////
    // Function to handle choice click // - copied, not fully checked
    /////////////////////////////////////
    function handleChoiceClick(choiceIndex) {
        // Update scores based on user response
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

            //Update scores based on weight of selected choice
            if (selectedChoiceWeight.hasOwnProperty('protectionScore')) {
                protectionScore += selectedChoiceWeight.protectionScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('budgetScore')) {
                budgetScore += selectedChoiceWeight.budgetScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('experienceScore')) {
                experienceScore += selectedChoiceWeight.experienceScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('mindsetScore')) {
                mindsetScore += selectedChoiceWeight.mindsetScore;
            }
            if (selectedChoiceWeight.hasOwnProperty('contactScore')) {
                contactScore += selectedChoiceWeight.contactScore;
            }

        //Move to the next question
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayCurrentQuestion();
        } else {
            calculateAndDisplayResult();
        }
    }

    ////////////////////////////////////////////
    // Function to calculate & display result //
    ////////////////////////////////////////////
    function calculateAndDisplayResult(){
        let resultImage = "";

        // Example logic based on scoring model
        if (mindsetScore >= 4) {
            if (experienceScore >= 2) {
                resultImage = "6.png"; // The Experienced Emotional Guardian
            } else {
                resultImage = "6.png"; // The Loving Beginner
            }
        } else if (protectionScore >= 2) {
            resultImage = "6.png"; // The Practical Protector
        } else if (experienceScore >= 2) {
            resultImage = "6.png"; // The Confident Caretaker
        } else {
            resultImage = "6.png"; // The Thoughtful Explorer
        }

        // Inject image into result section
        const resultImageDiv = document.getElementById("result-image");
        resultImageDiv.innerHTML = `<img src="./images/${resultImage}" alt="Your Persona Result" style="max-width: 100%;">`;

        // Hide the quiz page, show the results page
        document.getElementById("quiz-page").style.display = "none";
        document.getElementById("results").style.display = "block";
    }

    function getResultImageUrl(resultScores){
        alert("result image under construction");

    }

    /////////////////////////////////////////////////////
    // Event - display the 1st qn when the quiz starts //
    /////////////////////////////////////////////////////
    displayCurrentQuestion();
    document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
            choiceContainers.forEach((container) => {
                const choices = container.querySelectorAll('button');
                choices.forEach((choice, choiceIndex) => {
                    choice.addEventListener('click', () => {
                        handleChoiceClick(choiceIndex);
                    });
                });
            });
    });

}



// Start the quiz
displayQuiz();
