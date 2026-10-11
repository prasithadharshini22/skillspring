#  SkillSpring

**A beginner-friendly career guidance platform that helps students explore career paths based on their interests, identify essential skills, and follow personalised 4-week learning roadmaps using free educational resources.**

Hackathon theme: **Education & Employability**

🔗 **Live product:** https://prasithadharshini22.github.io/skillspring/
💻 **Source code:** https://github.com/prasithadharshini22/skillspring

## The problem
Many school and college students feel confused about their career choices. They may not know which career suits them, which skills to learn, where to find free resources, or how to start without expensive counselling.

## Who it helps
- School and college students who are unsure about their future career
- Beginners who need a clear learning path
- Students who cannot afford career guidance
- Students with limited access to career counselling

## Features
- **Career-interest quiz:** 8 short questions about interests and working style
- **Top 3 career matches:** each with a match percentage and the reasons behind it
- **Skill check:** tick the skills you already have and see what to focus on first
- **Personalisation:** choose study hours per week (2, 5 or 10) and your device (phone or computer)
- **4-week roadmap:** weekly tasks with links to free learning resources
- **Progress tracking:** tick tasks, see a progress bar, and come back later
- **Parent/teacher plan:** a one-page summary you can print or save as PDF
- **Mobile-friendly design**

Careers covered: UI/UX Design, Web Development, Data Analytics, AI & Machine Learning, and Teaching/Community Support.

## Technologies used
- HTML, CSS and vanilla JavaScript
- Browser localStorage (to save progress on the device)
- Browser print function (to save the plan as PDF)
- GitHub Pages (free hosting)

## How the recommendations work
SkillSpring uses **simple rule-based scoring**. Each quiz answer adds points to one or more careers, and the careers with the highest scores are shown. **It does not use a trained AI model, an API key or a backend.**

## Run it on your computer
1. Download or clone this repository.
2. Open `index.html` in any web browser.

No installation is needed.

## Files
- `index.html`: page structure
- `style.css`: design and mobile layout
- `script.js`: quiz, recommendations, roadmaps, progress and saving

## Limitations
- Recommendations are rule-based and are **not professional career counselling**.
- Skill readiness is self-assessed.
- Progress is saved only in the same browser on the same device. There is no login or cloud sync.
- Content covers five career paths and is in English only.
- Resource links go to third-party websites and may change over time.
- Impact has not yet been measured with real students.

## Future improvements
- Test with real students and teachers, and improve the questions
- Add more careers and regional languages (for example Hindi and Tamil)
- Add an offline-friendly version
- Add an AI study assistant using an LLM with retrieval over curated free resources (this needs a backend and an API key, and it is **not built yet**)
- Optional accounts, cloud sync and a teacher dashboard

## Demo
Demo video: *(add your video link here, or delete this line)*

## Author
Built by Prasitha Dharshini as a solo participant in the Social Impact Hackathon 2026.
