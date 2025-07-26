console.log("Script loaded!");

// Wait for page to load before running
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, starting quiz...");

  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwkAT7bcJ4DRQ9Iq9WQxJyVM8EhOG7qQSlxM_r19PT0fnFpqusveR_YfcFlKNIDVrv-/exec';

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
  let resultType = "";
  let resultImage = "";

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
      showContactPage();
    }
  }

  // Show contact page after quiz completion
  function showContactPage() {
    console.log("Quiz completed! Showing contact page...");
    
    // Calculate result type and image for later use
    calculateResult();
    
    // Hide quiz page, show contact page
    const quizPage = document.getElementById("quiz-page");
    const contactPage = document.getElementById("contact-page");

    if (quizPage) quizPage.style.display = "none";
    if (contactPage) contactPage.style.display = "block";

    // Set up form submission handler
    setupContactForm();
  }

  // Calculate result (but don't show yet)
  function calculateResult() {
    console.log("Calculating result...");
    console.log("Scores:", {
      protectionScore,
      budgetScore,
      experienceScore,
      mindsetScore,
      contactScore,
    });

    // Logic to determine personality based on highest scores
    if (mindsetScore >= 4) {
      if (experienceScore >= 2) {
        resultImage = "GreenBackground.png";
        resultType = "The Experienced Emotional Guardian";
      } else {
        resultImage = "GreenBackground.png";
        resultType = "The Loving Beginner";
      }
    } else if (protectionScore >= 2) {
      resultImage = "GreenBackground.png";
      resultType = "The Practical Protector";
    } else if (experienceScore >= 2) {
      resultImage = "GreenBackground.png";
      resultType = "The Confident Caretaker";
    } else {
      resultImage = "GreenBackground.png";
      resultType = "The Thoughtful Explorer";
    }
  }

  // Show results page
  function showResults() {
    console.log("Showing results page...");
    
    // Hide contact page, show result page
    const contactPage = document.getElementById("contact-page");
    const resultPage = document.getElementById("result-page");

    if (contactPage) contactPage.style.display = "none";
    if (resultPage) resultPage.style.display = "block";

    // Display result image and type
    const resultContent = document.getElementById("result-content");
    if (resultContent) {
      resultContent.innerHTML = `
        <img src="${resultImage}" class="cover-image" alt="Your Result" />
        <h2 style="margin-top: 16px;">${resultType}</h2>
      `;
    }
  }

  // Make showResults function globally available for the skip button
  window.showResults = showResults;

// Setup contact form submission - simple method
function setupContactForm() {
  const form = document.getElementById('insurance-form');
  const messageDiv = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('user-name').value;
      const email = document.getElementById('user-email').value;
      const phone = document.getElementById('user-phone').value;
      const petType = document.getElementById('pet-type').value;

      // Show loading message
      messageDiv.innerHTML = "Sending your information... 🐾";
      messageDiv.className = "";
      
      // Disable submit button
      const submitBtn = document.getElementById('submit-contact');
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      // Create a hidden form to submit to Google Apps Script
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = GOOGLE_SCRIPT_URL;
      hiddenForm.target = 'hidden_iframe';
      hiddenForm.style.display = 'none';

      // Create hidden iframe to receive the response
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Add form fields
      const fields = {
        'name': name,
        'email': email,
        'phone': phone,
        'petType': petType,
        'resultType': resultType,
        'protectionScore': protectionScore,
        'budgetScore': budgetScore,
        'experienceScore': experienceScore,
        'mindsetScore': mindsetScore,
        'contactScore': contactScore,
        'interestedInInsurance': 'true'
      };

      for (const key in fields) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        hiddenForm.appendChild(input);
      }

      // Submit the form
      document.body.appendChild(hiddenForm);
      hiddenForm.submit();

      // Clean up after a short delay
      setTimeout(function() {
        document.body.removeChild(hiddenForm);
        document.body.removeChild(iframe);
      }, 1000);

      // Show success message
      messageDiv.innerHTML = "Thank you! We'll contact you soon about pet insurance! 🎉";
      messageDiv.className = "success";
      
      // Wait 2 seconds then show results
      setTimeout(function() {
        showResults();
      }, 2000);
    });
  }
}

  // Start the quiz automatically when page loads
  console.log("Starting first question...");
  displayCurrentQuestion();
});