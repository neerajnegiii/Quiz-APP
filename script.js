const quizData = [
  {
    question: "What is the capital of Uttarakhand?",
    a: "Nainital",
    b: "Dehradun",
    c: "Haridwar",
    d: "Mussoorie",
    correct: "b",
  },
  {
    question: "Which river is considered the lifeline of Uttarakhand?",
    a: "Ganga",
    b: "Yamuna",
    c: "Bhagirathi",
    d: "Alaknanda",
    correct: "a",
  },
  {
    question: "Which is the largest district in Uttarakhand by area?",
    a: "Chamoli",
    b: "Uttarkashi",
    c: "Pithoragarh",
    d: "Nainital",
    correct: "b",
  },
  {
    question: "Which hill station in Uttarakhand is known as the 'Queen of the Hills'?",
    a: "Mussoorie",
    b: "Nainital",
    c: "Ranikhet",
    d: "Almora",
    correct: "a",
  },
  {
    question: "In which year was Uttarakhand formed as a separate state?",
    a: "1999",
    b: "2000",
    c: "2001",
    d: "2002",
    correct: "b",
  },
  {
    question: "Which pilgrimage site in Uttarakhand is part of the Char Dham Yatra?",
    a: "Badrinath",
    b: "Kedarnath",
    c: "Gangotri",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Which famous national park in Uttarakhand is known for its tigers?",
    a: "Rajaji National Park",
    b: "Corbett National Park",
    c: "Nanda Devi National Park",
    d: "Valley of Flowers National Park",
    correct: "b",
  },
  {
    question: "Which city in Uttarakhand is famous for the Kumbh Mela?",
    a: "Rishikesh",
    b: "Haridwar",
    c: "Dehradun",
    d: "Nainital",
    correct: "b",
  },
  {
    question: "Which famous dam is located on the Bhagirathi River in Uttarakhand?",
    a: "Tehri Dam",
    b: "Ramganga Dam",
    c: "Hirakud Dam",
    d: "Bhakra Dam",
    correct: "a",
  },
  {
    question: "Which temple in Uttarakhand is dedicated to Lord Shiva and is one of the twelve Jyotirlingas?",
    a: "Neelkanth Mahadev Temple",
    b: "Kashi Vishwanath Temple",
    c: "Kedarnath Temple",
    d: "Pashupatinath Temple",
    correct: "c",
  },
  {
    question: "Which country won the 2018 FIFA World Cup?",
    a: "Brazil",
    b: "Germany",
    c: "France",
    d: "Argentina",
    correct: "c",
  },
  {
    question: "What is the national sport of India?",
    a: "Cricket",
    b: "Hockey",
    c: "Kabaddi",
    d: "Football",
    correct: "b",
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    a: "Virat Kohli",
    b: "Brian Lara",
    c: "Sachin Tendulkar",
    d: "Ricky Ponting",
    correct: "c",
  },
  {
    question: "Which game is associated with the term 'Love'?",
    a: "Tennis",
    b: "Badminton",
    c: "Squash",
    d: "Table Tennis",
    correct: "a",
  },
  {
    question: "Which country is the birthplace of the Olympic Games?",
    a: "China",
    b: "Greece",
    c: "Italy",
    d: "USA",
    correct: "b",
  },
  {
    question: "What is the length of a cricket pitch?",
    a: "20 yards",
    b: "22 yards",
    c: "24 yards",
    d: "26 yards",
    correct: "b",
  },
  {
    question: "Which Indian athlete is known as the 'Flying Sikh'?",
    a: "Milkha Singh",
    b: "PT Usha",
    c: "Anju Bobby George",
    d: "Sushil Kumar",
    correct: "a",
  },
  {
    question: "Which country won the 2019 Cricket World Cup?",
    a: "India",
    b: "New Zealand",
    c: "Australia",
    d: "England",
    correct: "d",
  },
  {
    question: "Which is the oldest tennis tournament in the world?",
    a: "US Open",
    b: "French Open",
    c: "Wimbledon",
    d: "Australian Open",
    correct: "c",
  },
  {
    question: "Who won the first ever T20 World Cup in 2007?",
    a: "Australia",
    b: "India",
    c: "South Africa",
    d: "Pakistan",
    correct: "b",
  },
  {
    question: "What is the chemical symbol for water?",
    a: "O2",
    b: "H2O",
    c: "CO2",
    d: "H2",
    correct: "b",
  },
  {
    question: "What is the speed of light?",
    a: "3 × 10^8 m/s",
    b: "3 × 10^6 m/s",
    c: "3 × 10^4 m/s",
    d: "3 × 10^10 m/s",
    correct: "a",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b",
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    a: "Oxygen",
    b: "Nitrogen",
    c: "Carbon Dioxide",
    d: "Helium",
    correct: "b",
  },
  {
    question: "What is the boiling point of water?",
    a: "50°C",
    b: "75°C",
    c: "100°C",
    d: "120°C",
    correct: "c",
  },
  {
    question: "Who proposed the theory of relativity?",
    a: "Isaac Newton",
    b: "Albert Einstein",
    c: "Galileo Galilei",
    d: "Niels Bohr",
    correct: "b",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    a: "Gold",
    b: "Iron",
    c: "Diamond",
    d: "Silver",
    correct: "c",
  },
  {
    question: "Which organ is primarily responsible for pumping blood in the human body?",
    a: "Brain",
    b: "Heart",
    c: "Liver",
    d: "Kidney",
    correct: "b",
  },
  {
    question: "Which element has the atomic number 1?",
    a: "Oxygen",
    b: "Helium",
    c: "Hydrogen",
    d: "Carbon",
    correct: "c",
  },
  {
    question: "Which planet is known for having a ring system?",
    a: "Mars",
    b: "Jupiter",
    c: "Saturn",
    d: "Venus",
    correct: "c",
  },
  {
    question: "Who is the current Prime Minister of India?",
    a: "Narendra Modi",
    b: "Rahul Gandhi",
    c: "Amit Shah",
    d: "Manmohan Singh",
    correct: "a",
  },
  {
    question: "Which country won the 2024 Cricket T20 World Cup?",
    a: "India",
    b: "Australia",
    c: "England",
    d: "New Zealand",
    correct: "a",
  }
  ];
  


  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });