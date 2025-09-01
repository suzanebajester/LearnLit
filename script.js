let score = 0;
const verbBox = document.getElementById("verb-box");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreSpan = document.getElementById("score");
const feedback = document.getElementById("feedback");

let currentQuestion = null;

// Nosso "banco de dados" local
const verbs = [
  { "lt": "Aš buvau", "en": "I was" },
  { "lt": "Aš esu", "en": "I am" },
  { "lt": "Aš būsiu", "en": "I will be" },
  { "lt": "Aš turėjau", "en": "I had" },
  { "lt": "Aš turiu", "en": "I have" },
  { "lt": "Aš turėsiu", "en": "I will have" },
  { "lt": "Aš ėjau", "en": "I went" },
  { "lt": "Aš einu", "en": "I go / I am going" },
  { "lt": "Aš eisiu", "en": "I will go" },
  { "lt": "Aš dariau", "en": "I did" },
  { "lt": "Aš darau", "en": "I do / I am doing" },
  { "lt": "Aš darysiu", "en": "I will do" },
  { "lt": "Aš mačiau", "en": "I saw" },
  { "lt": "Aš matau", "en": "I see" },
  { "lt": "Aš matysiu", "en": "I will see" },
  { "lt": "Aš sakiau", "en": "I said" },
  { "lt": "Aš sakau", "en": "I say / I am saying" },
  { "lt": "Aš sakysiu", "en": "I will say" },
  { "lt": "Aš žinojau", "en": "I knew" },
  { "lt": "Aš žinau", "en": "I know" },
  { "lt": "Aš žinosiu", "en": "I will know" },
  { "lt": "Aš norėjau", "en": "I wanted" },
  { "lt": "Aš noriu", "en": "I want" },
  { "lt": "Aš norėsiu", "en": "I will want" },
  { "lt": "Aš galėjau", "en": "I could" },
  { "lt": "Aš galiu", "en": "I can" },
  { "lt": "Aš galėsiu", "en": "I will be able" },
  { "lt": "Aš valgiau", "en": "I ate" },
  { "lt": "Aš valgau", "en": "I eat / I am eating" },
  { "lt": "Aš valgysiu", "en": "I will eat" },
  { "lt": "Aš gėriau", "en": "I drank" },
  { "lt": "Aš geriu", "en": "I drink / I am drinking" },
  { "lt": "Aš gersiu", "en": "I will drink" },
  { "lt": "Aš rašiau", "en": "I wrote" },
  { "lt": "Aš rašau", "en": "I write / I am writing" },
  { "lt": "Aš rašysiu", "en": "I will write" },
  { "lt": "Aš skaičiau", "en": "I read (past)" },
  { "lt": "Aš skaitau", "en": "I read / I am reading" },
  { "lt": "Aš skaitysiu", "en": "I will read" },
  { "lt": "Aš klausiau", "en": "I listened" },
  { "lt": "Aš klausau", "en": "I listen / I am listening" },
  { "lt": "Aš klausysiu", "en": "I will listen" },
  { "lt": "Aš žaidžiau", "en": "I played" },
  { "lt": "Aš žaidžiu", "en": "I play / I am playing" },
  { "lt": "Aš žaisiu", "en": "I will play" },
  { "lt": "Aš miegojau", "en": "I slept" },
  { "lt": "Aš miegu", "en": "I sleep / I am sleeping" },
  { "lt": "Aš miegosiu", "en": "I will sleep" },
  { "lt": "Aš dirbau", "en": "I worked" },
  { "lt": "Aš dirbu", "en": "I work / I am working" },
  { "lt": "Aš dirbsiu", "en": "I will work" }
]

// Função para embaralhar
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Carregar questão
function loadQuestion() {
  const index = Math.floor(Math.random() * verbs.length);
  const correct = verbs[index];

  let options = [correct.en];
  while (options.length < 4) {
    let r = verbs[Math.floor(Math.random() * verbs.length)].en;
    if (!options.includes(r)) options.push(r);
  }

  currentQuestion = correct;
  verbBox.textContent = correct.lt;
  optionsDiv.innerHTML = "";
  feedback.textContent = "";

  shuffle(options).forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;

    btn.onclick = () => {
      Array.from(optionsDiv.children).forEach((b) => (b.disabled = true));

      if (option === correct.en) {
        btn.classList.add("correct");
        score++;
        scoreSpan.textContent = score;
        feedback.textContent = "✅ Well done!";
      } else {
        btn.classList.add("wrong");
        feedback.textContent = `❌ Try again! Correct: ${correct.en}`;

        Array.from(optionsDiv.children).forEach((b) => {
          if (b.textContent === correct.en) {
            b.classList.add("correct");
          }
        });
      }

      nextBtn.style.display = "inline-block";
    };

    optionsDiv.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", loadQuestion);

loadQuestion();

