# UPSC Desk

A personal UPSC CSE 2027 study site: read topic notes, take 30-question tests, write Mains answers, and follow a 204-day plan. It runs locally with no backend, and your progress is saved in your browser. Use **Download backup** regularly.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## What is in it

- **Today:** the plan's topic for the day, with its Learn, Test and Write steps.
- **Learn:** topic notes with diagrams and openly licensed images from Wikimedia Commons (credited on each image).
- **Practice:** daily, weekly and subject tests. Answers appear only after you submit. Marking is +2 and -0.66.
- **Mains:** write first, then see the model answer and mark yourself against a 10-point guide.
- **Planner:** the 204-day plan, syllabus checklist, issue cards and guide.
- **Progress:** test records, weak concepts and mistake repair.

## Adding content

- Notes: `src/data/notes/nMMDD.ts`
- Questions: `src/data/bank/dMMDD.ts`
- Run `npm run check:bank` to enforce the rules: 30 questions, an 8/14/8 difficulty mix, at least 3 Mains questions, and model answers within the word limit.

PYQ wording is checked against UPSC's official papers. Their answers are marked as reasoned, because UPSC's answer keys for these papers were not found on its site. Predicted questions are labelled as practice and are not from UPSC.
