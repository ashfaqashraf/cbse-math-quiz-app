# cbse-math-quiz-app

A simple daily math quiz app for CBSE Class 4. Students get 5 questions each day—mostly MCQs, some descriptive—with a star reward for scoring 4 or more. Good for Olympiad practice!

## How to use
1. Open the app.
2. Answer 5 questions (multiple choice and descriptive).
3. Click Submit to see your score and earn a star for high scores.
4. Try again daily for new questions and more rewards!

## Deploy on GitHub Pages
This app uses React. To deploy:

1. Clone repo: `git clone https://github.com/ashfaqashraf/cbse-math-quiz-app.git`
2. Install dependencies: `npm install`
3. Build for production: `npm run build`
4. Deploy the build folder to GitHub Pages (set `homepage` in package.json for best results).
   - Recommended: use [gh-pages](https://www.npmjs.com/package/gh-pages) npm package:
   ```sh
   npm install --save gh-pages
   npm run build
   npm run deploy
   ```
5. Or upload `/build` contents to your pages branch.

## File structure
- `src/App.js` — main quiz app code
- `src/questions.js` — questions pool
- `src/index.js` — React entry point

---
Made for CBSE Class 4 Math daily challenge.
