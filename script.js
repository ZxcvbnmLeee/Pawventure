console.log("Script loaded!");

// Wait for page to load before running
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, starting quiz...");

  // Replace with your Google Apps Script Web App URL (from Version 1)
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx7S_mgrfSwg8p9DpTTB-79F0PWGtZMnfjDUbNTirkotqfMNooz6qmTpVnFuyjR-1Am/exec";

  // Complete questions array from Version 2
  const questions = [
    // QUESTION 1 //
    {
      question:
        "You arrive at Floof Port to meet your travel companion. Who is it?",
      choices: [
        "A cheeky corgi with too much energy",
        "A calm, sleepy cat that loves cuddles",
        "A squeaky guinea pig in a pouch",
        "I dont have one yet but Im looking to adopt",
      ],
      weights: [
        { experienceScore: +2, mindsetScore: +1 }, // Weight for 1st choice
        { experienceScore: +1, mindsetScore: +3 }, // Weight for 2nd choice
        { experienceScore: +0, mindsetScore: +2 }, // Weight for 3rd choice
        { experienceScore: +0, mindsetScore: +0 }, // Weight for 4th choice
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
        "A journal to record your memories",
      ],
      weights: [
        { protectionScore: +0, mindsetScore: +1 }, // Weight for 1st choice
        { protectionScore: +1, mindsetScore: +0 }, // Weight for 2nd choice
        { protectionScore: +1, mindsetScore: +2 }, // Weight for 3rd choice
        { protectionScore: +0, mindsetScore: +3 }, // Weight for 4th choice
      ],
    },
    // QUESTION 3 //
    {
      question: "Your pet suddenly starts sneezing sparkles! What do you do?",
      choices: [
        "Take them to the village vet, pronto!",
        "Call your Floof Friends for advice",
        "Google 'sparkle sneezing'",
        "Wait a bit and see... it might pass",
      ],
      weights: [
        { protectionScore: +2, experienceScore: +2 }, // Weight for 1st choice
        { protectionScore: +1, experienceScore: +1 }, // Weight for 2nd choice
        { protectionScore: +1, experienceScore: +0 }, // Weight for 3rd choice
        { protectionScore: +0, experienceScore: +0 }, // Weight for 4th choice
      ],
    },
    // QUESTION 4 //
    {
      question:
        "You meet the Floof Fortune Teller. She offers you a crystal in exchange for a secret. Which do you pick?",
      choices: [
        "Health Crystal (Heals unexpected injuries)",
        "Comfort Crystal (Keeps them calm)",
        "Protection Crystal (For worst-case events)",
        "Luck Crystal (Random perks and treats!)",
      ],
      weights: [
        { protectionScore: +2, mindsetScore: +0 }, // Weight for 1st choice
        { protectionScore: +1, mindsetScore: +3 }, // Weight for 2nd choice
        { protectionScore: +2, mindsetScore: +2 }, // Weight for 3rd choice
        { protectionScore: +0, mindsetScore: +1 }, // Weight for 4th choice
      ],
    },
    // QUESTION 5 //
    {
      question:
        "Your travel buddy wants to join the Floof Olympics. What's your training budget?",
      choices: [
        "$5–10: Light jogs, minimal gear",
        "$10–20: Decent snacks and vet checks",
        "$20–40: Full-on grooming, training & vet care",
        "$50+: My floof deserves the world",
      ],
      weights: [
        { protectionScore: +0, budgetScore: +0 }, // Weight for 1st choice
        { protectionScore: +1, budgetScore: +1 }, // Weight for 2nd choice
        { protectionScore: +2, budgetScore: +2 }, // Weight for 3rd choice
        { protectionScore: +2, budgetScore: +2 }, // Weight for 4th choice
      ],
    },
    // QUESTION 6 //
    {
      question:
        "A stranger says they can charm-proof your pet for a year. Who must they be for you to trust them?",
      choices: [
        "A big name in FloofLand I've heard of",
        "Recommended by other pawrents",
        "They show me a clear, magical list of benefits",
        "I test them with a small spell first",
      ],
      weights: [
        { protectionScore: +0, experienceScore: +1 }, // Weight for 1st choice
        { protectionScore: +1, experienceScore: +2 }, // Weight for 2nd choice
        { protectionScore: +2, experienceScore: +2 }, // Weight for 3rd choice
        { protectionScore: +1, experienceScore: +0 }, // Weight for 4th choice
      ],
    },
    // QUESTION 7 //
    {
      question: "If your pet could talk, how would they describe you?",
      choices: [
        "'Overprotective but I love it!'",
        "'We chill, we vibe.'",
        "'They research everything before deciding.'",
        "'A little clueless but trying their best.'",
      ],
      weights: [
        { protectionScore: +2, experienceScore: +2 }, // Weight for 1st choice
        { protectionScore: +0, experienceScore: +1 }, // Weight for 2nd choice
        { protectionScore: +2, experienceScore: +2 }, // Weight for 3rd choice
        { protectionScore: +1, experienceScore: +0 }, // Weight for 4th choice
      ],
    },
    // QUESTION 8 //
    {
      question: "A storm is coming. You only have time to save one item:",
      choices: [
        "My pet's health scrolls",
        "Their favourite toy",
        "My emergency bag",
        "A selfie album of us",
      ],
      weights: [
        { protectionScore: +2, mindsetScore: +2 }, // Weight for 1st choice
        { protectionScore: +1, mindsetScore: +1 }, // Weight for 2nd choice
        { protectionScore: +2, mindsetScore: +0 }, // Weight for 3rd choice
        { protectionScore: +0, mindsetScore: +3 }, // Weight for 4th choice
      ],
    },
    // QUESTION 9 //
    {
      question:
        "You meet a talking bird offering free care tips in exchange for contact. Do you...",
      choices: [
        "Say yes and give your scroll (contact)",
        "Ask what's in it for me first",
        "Politely decline",
        "Give a fake scroll just to see",
      ],
      weights: [
        { contactScore: +2 }, // Weight for 1st choice
        { contactScore: +0 }, // Weight for 2nd choice
        { contactScore: +2 }, // Weight for 3rd choice
        { contactScore: +1 }, // Weight for 4th choice
      ],
    },
    // QUESTION 10 //
    {
      question: "At the end of the journey, what would make your pet happiest?",
      choices: [
        "Knowing I've planned for anything",
        "Being spoiled with spa days",
        "Having me around always",
        "A safe, peaceful home",
      ],
      weights: [
        { protectionScore: +2, mindsetScore: +2 }, // Weight for 1st choice
        { protectionScore: +1, mindsetScore: +3 }, // Weight for 2nd choice
        { protectionScore: +0, mindsetScore: +3 }, // Weight for 3rd choice
        { protectionScore: +1, mindsetScore: +1 }, // Weight for 4th choice
      ],
    },
  ];

  // Variables for scores
  let currentQuestionIndex = 0;
  let protectionScore = 0;
  let budgetScore = 0;
  let experienceScore = 0;
  let mindsetScore = 0;
  let contactScore = 0;
  let resultType = "";
  let resultImage = "";

  // Display question image (from Version 2)
  function displayQuestionImage(questionIndex) {
    const imageURLs = [
      "./images/1_FloofPort.png",
      "./images/2_floofmarket.png",
      "./images/3_sneezing.png",
      "./images/4_fortuneteller.png",
      "./images/5_sportsday.png",
      "./images/6_charmproof.png",
      "./images/7_talkingpet.png",
      "./images/8_storm.png",
      "./images/9_talkingbird.png",
      "./images/10_end.png",
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

  // Check if we're on the quiz page and start the quiz
  if (document.getElementById("quiz-page")) {
    console.log("On quiz page, starting quiz immediately");
    displayCurrentQuestion();
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

  // Show contact page after quiz completion (from Version 1)
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

  // Calculate result using Version 2's logic
  function calculateResult() {
    console.log("Calculating result...");
    console.log("Scores:", {
      protectionScore,
      budgetScore,
      experienceScore,
      mindsetScore,
      contactScore,
    });

    // Scoring system from Version 2
    if (protectionScore >= 10 && experienceScore >= 5) {
      resultImage = "./images/R1.png";
      resultType = "Prepared Pawrent";
    } else if (experienceScore <= 3 && mindsetScore >= 3 && contactScore >= 1) {
      resultImage = "./images/R2.png";
      resultType = "Curious Newbie";
    } else if (budgetScore >= 2 && mindsetScore >= 3 && contactScore >= 2) {
      resultImage = "./images/R3.png";
      resultType = "Spoil-Me Specialist";
    } else if (mindsetScore >= 6 && protectionScore <= 6) {
      resultImage = "./images/R4.png";
      resultType = "Zen Guardian";
    } else if (
      protectionScore >= 6 &&
      experienceScore >= 3 &&
      mindsetScore <= 4
    ) {
      resultImage = "./images/R5.png";
      resultType = "Analyzer";
    } else if (
      protectionScore >= 6 &&
      experienceScore >= 4 &&
      mindsetScore >= 5
    ) {
      resultImage = "./images/R6.png";
      resultType = "Legacy Protector";
    } else if (budgetScore <= 1 && contactScore <= 1) {
      resultImage = "./images/R7.png";
      resultType = "Budget Boss";
    } else if (
      mindsetScore >= 7 &&
      protectionScore <= 6 &&
      experienceScore <= 4
    ) {
      resultImage = "./images/R8.png";
      resultType = "Memory Maker";
    } else {
      resultImage = "./images/R9.png";
      resultType = "Bubble Closeter";
    }
  }

  // Show results page
  function showResults() {
    console.log("Showing results page...");

    // Send quiz results to Google Sheets (for skipped contact form)
    sendQuizResults();

    // Hide contact page, show result page
    const contactPage = document.getElementById("contact-page");
    const resultPage = document.getElementById("result-page");

    if (contactPage) contactPage.style.display = "none";
    if (resultPage) resultPage.style.display = "block";

    // Display result image and type
    const resultImageDiv = document.getElementById("result-image");
    const resultTypeDiv = document.getElementById("result-type");

    if (resultImageDiv) {
      resultImageDiv.innerHTML = `<img src="${resultImage}" class="cover-image" alt="Your Persona Result">`;
    }
    if (resultTypeDiv) {
      resultTypeDiv.textContent = resultType;
    }
  }

  // Send quiz results to Google Sheets (for users who skip contact form)
  function sendQuizResults() {
    console.log("Sending quiz results to Google Sheets...");

    // Create a hidden form to submit to Google Apps Script
    const hiddenForm = document.createElement("form");
    hiddenForm.method = "POST";
    hiddenForm.action = GOOGLE_SCRIPT_URL;
    hiddenForm.target = "hidden_iframe_results";
    hiddenForm.style.display = "none";

    // Create hidden iframe to receive the response
    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe_results";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Add form fields - include a flag to indicate this is quiz results only
    const fields = {
      resultType: resultType,
      protectionScore: protectionScore,
      budgetScore: budgetScore,
      experienceScore: experienceScore,
      mindsetScore: mindsetScore,
      contactScore: contactScore,
      submissionType: "quiz_results_only", // Flag to indicate this goes to results sheet
      timestamp: new Date().toISOString(),
      interestedInInsurance: "false",
    };

    for (const key in fields) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = fields[key];
      hiddenForm.appendChild(input);
    }

    // Submit the form
    document.body.appendChild(hiddenForm);
    hiddenForm.submit();

    // Clean up after a short delay
    setTimeout(function () {
      document.body.removeChild(hiddenForm);
      document.body.removeChild(iframe);
    }, 1000);
  }

  // Make showResults function globally available for the skip button
  window.showResults = showResults;

  // Setup contact form submission from Version 1
  function setupContactForm() {
    const form = document.getElementById("insurance-form");
    const messageDiv = document.getElementById("form-message");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById("user-name").value;
        const email = document.getElementById("user-email").value;
        const phone = document.getElementById("user-phone").value;
        const petType = document.getElementById("pet-type").value;

        // Show loading message
        messageDiv.innerHTML = "Sending your information... 🐾";
        messageDiv.className = "";

        // Disable submit button
        const submitBtn = document.getElementById("submit-contact");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        // Create a hidden form to submit to Google Apps Script
        const hiddenForm = document.createElement("form");
        hiddenForm.method = "POST";
        hiddenForm.action = GOOGLE_SCRIPT_URL;
        hiddenForm.target = "hidden_iframe";
        hiddenForm.style.display = "none";

        // Create hidden iframe to receive the response
        const iframe = document.createElement("iframe");
        iframe.name = "hidden_iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);

        // Add form fields - include a flag to indicate this goes to contact sheet
        const fields = {
          name: name,
          email: email,
          phone: phone,
          petType: petType,
          resultType: resultType,
          protectionScore: protectionScore,
          budgetScore: budgetScore,
          experienceScore: experienceScore,
          mindsetScore: mindsetScore,
          contactScore: contactScore,
          submissionType: "contact_form", // Flag to indicate this goes to contact sheet
          timestamp: new Date().toISOString(),
          interestedInInsurance: "true",
        };

        for (const key in fields) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = fields[key];
          hiddenForm.appendChild(input);
        }

        // Submit the form
        document.body.appendChild(hiddenForm);
        hiddenForm.submit();

        // Clean up after a short delay
        setTimeout(function () {
          document.body.removeChild(hiddenForm);
          document.body.removeChild(iframe);
        }, 1000);

        // Show success message
        messageDiv.innerHTML =
          "Thank you! We'll contact you soon about pet insurance! 🎉";
        messageDiv.className = "success";

        // Wait 2 seconds then show results
        setTimeout(function () {
          showResults();
        }, 2000);
      });
    }
  }
});

// Share Quiz functionality from Version 2
document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".share-button");
  console.log("Share button: ", shareButton);

  if (shareButton) {
    shareButton.addEventListener("click", function () {
      const shareData = {
        title: "Pawventure Quiz",
        text: "I just found out what kind of pet guardian I am! 🐾 Try it too!",
        url: window.location.href,
      };

      if (navigator.share) {
        navigator
          .share(shareData)
          .then(() => console.log("Share successful"))
          .catch((error) => console.log("Sharing failed", error));
      } else {
        // Fallback: copy link to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert("Link copied to clipboard! Share it with your friends 🐶🐱");
        });
      }
    });
  }
});
