console.log("Script loaded!");

// Wait for page to load before running
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, starting quiz...");

  const questions = [
    // QUESTION 1 //
    {
      question:
        "You arrive at Floof Port to meet your travel companion. Who is it?",
      choices: [
        "A cheeky corgi with too much energy",
        "A calm, sleepy cat that loves cuddles",
        "I dont have one yet but Im looking to adopt",
        "I came alone but love being around pets!",
      ],
      weights: [
        { experienceScore: +2, mindsetScore: +1 },
        { experienceScore: +1, mindsetScore: +3 },
        { experienceScore: +0, mindsetScore: +0 },
        { experienceScore: +0, mindsetScore: +3 },
      ],
    },
    // QUESTION 2 //
    {
      question:
        "You and your companion are off to the Floof Market. What's the first thing you buy?",
      choices: [
        "Sparkly treats and snacks",
        "A waterproof adventure jacket",
        "A premium brush and shampoo set",
        "A potion that says 'Just In Case...'",
      ],
      weights: [
        { protectionScore: +0, mindsetScore: +1 },
        { protectionScore: +1, mindsetScore: +0 },
        { protectionScore: +1, mindsetScore: +2 },
        { protectionScore: +2, mindsetScore: +2 },
      ],
    },
    // Add your other 8 questions here...
  ];

  // variables for scores
  let currentQuestionIndex = 0;
  let protectionScore = 0;
  let budgetScore = 0;
  let experienceScore = 0;
  let mindsetScore = 0;
  let contactScore = 0;

  // Display question image
  function displayQuestionImage(questionIndex) {
    const imageURLs = [
      "6.png",
      "6.png",
      "6.png",
      "6.png",
      "6.png",
      "6.png",
      "6.png",
      "6.png",
      "6.png",
      "6.png",
    ];
    const questionImageElement = document.getElementById("question-image");
    if (questionImageElement) {
      questionImageElement.src = imageURLs[questionIndex];
    }
  }

  // Update progress bar
  function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    if (progressBar) {
      progressBar.style.width = progress + "%";
    }
    if (progressText) {
      progressText.innerText = Math.round(progress) + "%";
    }
  }

  // Display current question and choices
  function displayCurrentQuestion() {
    console.log("Displaying question", currentQuestionIndex);

    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const choiceContainers = document.getElementById("choices");

    if (!questionElement || !choiceContainers) {
      console.error("Could not find question or choices elements!");
      return;
    }

    // Clear previous choices
    choiceContainers.innerHTML = "";

    // Set question text
    questionElement.textContent = currentQuestion.question;

    // Update progress
    updateProgressBar();

    // Display question image
    displayQuestionImage(currentQuestionIndex);

    // Create choice buttons
    currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choice-button");
      button.addEventListener("click", () => handleChoiceClick(index));
      choiceContainers.appendChild(button);
    });

    console.log(
      "Question displayed, buttons created:",
      choiceContainers.children.length
    );
  }

  // Handle choice click
  function handleChoiceClick(choiceIndex) {
    console.log("Choice clicked:", choiceIndex);

    // Update scores based on user response
    const currentQuestion = questions[currentQuestionIndex];
    const selectedChoiceWeight = currentQuestion.weights[choiceIndex];

    // Update scores
    if (selectedChoiceWeight.hasOwnProperty("protectionScore")) {
      protectionScore += selectedChoiceWeight.protectionScore;
    }
    if (selectedChoiceWeight.hasOwnProperty("budgetScore")) {
      budgetScore += selectedChoiceWeight.budgetScore;
    }
    if (selectedChoiceWeight.hasOwnProperty("experienceScore")) {
      experienceScore += selectedChoiceWeight.experienceScore;
    }
    if (selectedChoiceWeight.hasOwnProperty("mindsetScore")) {
      mindsetScore += selectedChoiceWeight.mindsetScore;
    }
    if (selectedChoiceWeight.hasOwnProperty("contactScore")) {
      contactScore += selectedChoiceWeight.contactScore;
    }

    // Move to next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayCurrentQuestion();
    } else {
      calculateAndDisplayResult();
    }
  }

  // Calculate and display result
  function calculateAndDisplayResult() {
    console.log("Quiz completed!");
    console.log("Scores:", {
      protectionScore,
      budgetScore,
      experienceScore,
      mindsetScore,
      contactScore,
    });

    // Hide quiz page, show result page
    const quizPage = document.getElementById("quiz-page");
    const resultPage = document.getElementById("result-page");

    if (quizPage) quizPage.style.display = "none";
    if (resultPage) resultPage.style.display = "block";

    // Determine which result image to show based on scores
    let resultImage = "";

    // Logic to determine personality based on highest scores
    if (mindsetScore >= 4) {
      if (experienceScore >= 2) {
        resultImage = "GreenBackground.png"; // The Experienced Emotional Guardian
      } else {
        resultImage = "GreenBackground.png"; // The Loving Beginner
      }
    } else if (protectionScore >= 2) {
      resultImage = "GreenBackground.png"; // The Practical Protector
    } else if (experienceScore >= 2) {
      resultImage = "GreenBackground.png"; // The Confident Caretaker
    } else {
      resultImage = "GreenBackground.png"; // The Thoughtful Explorer
    }

    // Display result image
    const resultContent = document.getElementById("result-content");
    if (resultContent) {
      resultContent.innerHTML = `
        <img src="${resultImage}" class="cover-image" alt="Your Result" />
      `;
    }
  }

  // Start the quiz automatically when page loads
  console.log("Starting first question...");
  displayCurrentQuestion();
});
