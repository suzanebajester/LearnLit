# LearnLit – Learn Lithuanian Verbs
## LearnLit is a small interactive quiz to help users learn Lithuanian vocabulary and their English translations.

## Features
- Randomized questions from a verbs list
- Multiple choice answers
- Score tracking
- Immediate feedback for correct/incorrect answers

## Versions
- **Static Version (GitHub Pages)**  
  - Fully frontend, no backend required.  
  - Questions and answers are stored in the frontend.  
  - [View it here] https://suzanebajester.github.io/LearnLit/

- **Full Stack Version (Server + Backend)**  
  - Backend serves questions dynamically from a JSON file.  
  - Users cannot see answers in the frontend source.  
  - [Try it here] https://render.com/

## Installation (Full Backend Version)
git clone https://github.com/suzanebajester/LearnLit.git
cd LearnLit/Backend
npm install
node server.js
Then open your browser at http://localhost:3000.

## Usage (Static Version)
Navigate to the GitHub Pages link of the repository
The quiz runs entirely in the browser

## Limitations
Static version: all questions and answers are in front-end code; users could inspect them
Backend version: requires server to run; cannot be hosted purely on GitHub Pages

## Technologies
HTML, CSS, JavaScript
Node.js, Express (backend version)
