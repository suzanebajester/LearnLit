let score = 0;
let questionCount = 0;

const verbBox = document.getElementById("verb-box");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreSpan = document.getElementById("score");
const feedback = document.getElementById("feedback");
let currentID = null;

async function loadQuestion() {
    const res = await fetch("/api/question");
    const data = await res.json();

    currentID = data.id;
    verbBox.textContent = data.lt;
    optionsDiv.innerHTML = "";
    feedback.textContent = "";

    data.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option;

        btn.onclick = async () => {
            const answerRes = await fetch("/api/answer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: currentID, answer: option }),
            });
            const answer = await answerRes.json();

            // disable all buttons
            Array.from(optionsDiv.children).forEach((b) => (b.disabled = true));

            if (answer.correct) {
                btn.classList.add("correct");
                score++;
                scoreSpan.textContent = score;
                feedback.textContent = "✅ Well done!";
            } else {
                btn.classList.add("wrong");
                feedback.textContent = `❌ Try again! Correct: ${answer.correct}`;

                // highlight the correct answer
                Array.from(optionsDiv.children).forEach((b) => {
                    if (b.textContent === answer.correct) {
                        b.classList.add("correct");
                    }
                });
            }

            // show Next button
            nextBtn.style.display = "inline-block";
        };

        optionsDiv.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", loadQuestion);

loadQuestion();





