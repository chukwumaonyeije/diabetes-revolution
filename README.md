# Diabetes Revolution 2026

> A fun, image-driven quiz app for learning about Gestational Diabetes

**Created by Dr. Onyeije, MFM Specialist**

## 🎯 Overview

Diabetes Revolution 2026 is an educational web application that helps pregnant women and their families understand gestational diabetes mellitus (GDM) through interactive, bite-sized quizzes. The app transforms complex medical concepts into simple, memorable learning experiences with:

- 🖼️ Visual, image-rich content
- ❓ Multiple-choice quizzes with immediate feedback
- 📚 Clear explanations written by an MFM specialist
- 🎮 Quest-based progression system
- 📱 Mobile-first responsive design

## ✨ Features

### Current Features (MVP)
- ✅ Interactive quiz engine with progress tracking
- ✅ Immediate feedback and detailed explanations
- ✅ Score tracking and results visualization
- ✅ Mobile-responsive design with Tailwind CSS
- ✅ Static site generation for fast loading
- ✅ Local storage for progress persistence
- ✅ Medical disclaimer and clinical accuracy

### Quiz Categories
- **Basics:** Introduction to GDM
- **Diagnosis:** How GDM is detected
- **Monitoring:** Blood sugar tracking
- **Treatment:** Management approaches
- **Nutrition:** Diet and meal planning
- **Complications:** Risks and prevention
- **Postpartum:** After delivery care

## 🛠️ Technology Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** Azure Static Web Apps
- **Build:** Static export (no server required)

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chukwumaonyeije/diabetes-revolution.git
   cd diabetes-revolution
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

The static site will be exported to the `/out` directory.

## 📁 Project Structure

```
diabetes-revolution/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── quiz/[id]/           # Dynamic quiz routes
│       └── page.tsx
├── components/               # React components
│   ├── quiz/                # Quiz-related components
│   │   ├── QuizContainer.tsx
│   │   ├── QuizQuestion.tsx
│   │   └── QuizResults.tsx
│   ├── quest/               # Quest system (future)
│   └── ui/                  # Reusable UI components
├── data/                    # Quiz content
│   └── quizzes/
│       ├── gdm-basics.ts    # Sample quiz
│       └── index.ts         # Quiz exports
├── lib/                     # Utility functions
│   └── quiz-utils.ts        # Quiz logic and scoring
├── types/                   # TypeScript type definitions
│   └── quiz.ts              # Quiz-related types
├── public/                  # Static assets
├── .github/                 # GitHub Actions workflows
└── hugo-backup/             # Original Hugo files (backup)
```

## 📝 Adding New Quizzes

1. **Create a new quiz file:**
   ```typescript
   // data/quizzes/my-new-quiz.ts
   import { Quiz } from '@/types/quiz';

   export const myNewQuiz: Quiz = {
     id: 'unique-quiz-id',
     title: 'Quiz Title',
     description: 'Quiz description',
     category: 'basics',
     difficulty: 'beginner',
     estimatedMinutes: 5,
     questions: [
       {
         id: 'q1',
         question: 'Your question here?',
         options: [
           { id: 'a', text: 'Option A' },
           { id: 'b', text: 'Option B' },
           { id: 'c', text: 'Option C' },
           { id: 'd', text: 'Option D' },
         ],
         correctAnswer: 'a',
         explanation: 'Detailed explanation here...',
         tags: ['tag1', 'tag2'],
       },
       // Add more questions...
     ],
   };
   ```

2. **Export the quiz:**
   ```typescript
   // data/quizzes/index.ts
   import { myNewQuiz } from './my-new-quiz';

   export const quizzes: Quiz[] = [
     gdmBasicsQuiz,
     myNewQuiz, // Add your quiz here
   ];
   ```

3. **Add to static params:**
   ```typescript
   // app/quiz/[id]/page.tsx
   export async function generateStaticParams() {
     return [
       { id: 'gdm-basics-101' },
       { id: 'unique-quiz-id' }, // Add your quiz ID
     ];
   }
   ```

## 🎨 Customization

### Styling

The app uses Tailwind CSS. Customize the theme in `tailwind.config.ts` and global styles in `app/globals.css`.

### Content

All quiz content is stored in TypeScript files under `data/quizzes/`. This allows for:
- Type safety
- Easy version control
- Content validation
- IDE autocomplete

## 🚢 Deployment

### Azure Static Web Apps (Current)

The app automatically deploys to Azure Static Web Apps when pushed to the `main` branch via GitHub Actions.

**Workflow:** `.github/workflows/azure-static-web-apps-lively-plant-049e20f0f.yml`

### Alternative Deployment Options

**Vercel:**
```bash
npm install -g vercel
vercel
```

**GitHub Pages:**
```bash
npm run build
# Deploy the /out directory to gh-pages branch
```

**Netlify:**
```bash
# Connect GitHub repo to Netlify
# Build command: npm run build
# Publish directory: out
```

## 📱 Mobile Support

The app is built mobile-first with responsive breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## ♿ Accessibility

- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🔐 Privacy & Data

- No personal health information (PHI) is collected
- Quiz progress stored locally in browser (localStorage)
- No external tracking or analytics
- No user accounts required

## ⚕️ Medical Disclaimer

This app is for **educational purposes only** and is not intended as medical advice. Always consult with qualified healthcare professionals for diagnosis and treatment of diabetes or any other medical condition.

Content is aligned with **ACOG/SMFM guidelines** and reviewed by MFM specialists.

## 🤝 Contributing

Contributions are welcome! Areas for improvement:

- Additional quiz content
- New quiz categories
- Quest system implementation
- Image and diagram creation
- Translation support
- Accessibility enhancements

## 📄 License

[Specify your license - e.g., MIT, Creative Commons]

## 👨‍⚕️ About the Author

**Dr. Onyeije** - Maternal-Fetal Medicine Specialist

Dedicated to improving maternal and fetal health through education and evidence-based care.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Developed with assistance from [Claude Code](https://claude.ai)
- Content aligned with ACOG/SMFM clinical guidelines

## 📞 Support

For questions or feedback:
- Open an issue on GitHub
- Email: [Your contact email]
- Website: [Your website]

---

**Built with ❤️ for pregnant women and families**

*Last Updated: November 2024*
