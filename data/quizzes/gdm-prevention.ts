import { Quiz } from '@/types/quiz';

export const gdmPrevention: Quiz = {
  id: 'gdm-prevention',
  title: 'GDM Prevention Strategies',
  description: 'Evidence-based approaches to preventing gestational diabetes',
  category: 'Prevention',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'What is the most effective preconception intervention to reduce GDM risk?',
      options: [
        'Vitamin supplementation',
        'Achieving healthy weight (BMI <25)',
        'Starting metformin',
        'Avoiding carbohydrates'
      ],
      correctAnswer: 1,
      explanation: 'Achieving a healthy BMI (<25) before pregnancy is the most effective way to reduce GDM risk. Each 1 kg/m² increase in preconception BMI increases GDM risk by approximately 10%.',
      category: 'Preconception',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'Can dietary intervention during pregnancy prevent GDM in high-risk women?',
      options: [
        'No, diet has no effect',
        'Yes, low-GI diet may reduce risk by 25%',
        'Only very restrictive diets work',
        'Diet only matters postpartum'
      ],
      correctAnswer: 1,
      explanation: 'Studies show that low glycemic index diets and Mediterranean-style diets during pregnancy may reduce GDM risk by approximately 25% in high-risk women. However, results are mixed and more research is needed.',
      category: 'Dietary Prevention',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'What role does physical activity play in GDM prevention?',
      options: [
        'No preventive benefit',
        'Reduces risk by 20-50% with regular exercise',
        'Only prevents if started in first trimester',
        'Only high-intensity exercise helps'
      ],
      correctAnswer: 1,
      explanation: 'Regular physical activity before and during pregnancy can reduce GDM risk by 20-50%. Even moderate activities like brisk walking 30 minutes daily provide significant protection.',
      category: 'Exercise',
      difficulty: 'easy'
    },
    {
      id: 'q4',
      question: 'Is there evidence that probiotics can prevent GDM?',
      options: [
        'Strong evidence for prevention',
        'Some promising data but more research needed',
        'No evidence whatsoever',
        'Only in obese women'
      ],
      correctAnswer: 1,
      explanation: 'Some studies suggest certain probiotic strains may improve glucose metabolism and reduce GDM risk, but evidence is still emerging. Probiotics appear safe in pregnancy but are not yet standard preventive care.',
      category: 'Supplements',
      difficulty: 'hard'
    },
    {
      id: 'q5',
      question: 'Should women with previous GDM use metformin between pregnancies?',
      options: [
        'Yes, always recommended',
        'Consider if prediabetic and lifestyle changes insufficient',
        'No, never recommended',
        'Only if diabetic'
      ],
      correctAnswer: 1,
      explanation: 'For women with prediabetes identified postpartum, metformin can be considered if lifestyle modification is insufficient to achieve glucose targets. It reduces progression to diabetes by 30-40% but is less effective than lifestyle intervention.',
      category: 'Pharmacologic Prevention',
      difficulty: 'hard'
    }
  ]
};
