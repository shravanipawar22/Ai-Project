export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced'
export type Category = 'Finance' | 'Education' | 'Healthcare' | 'Productivity' | 'Chatbots'
export type BuildType = 'Dashboard / Analyzer' | 'AI Assistant' | 'Automation' | 'Web App' | 'Creative Tool'

export type Project = {
  id: string
  title: string
  description: string
  category: Category
  difficulty: SkillLevel
  buildType: BuildType
  techStack: string[]
  roadmap: string[]
  why: string
}

export const skillOptions: { value: SkillLevel; label: string; description: string }[] = [
  { value: 'Beginner', label: 'Beginner', description: "I'm new to AI and want a simple starting point." },
  { value: 'Intermediate', label: 'Intermediate', description: 'I know the basics and want to build something useful.' },
  { value: 'Advanced', label: 'Advanced', description: "I've worked with AI tools and want a more challenging project." },
]

export const categories: Category[] = ['Finance', 'Education', 'Healthcare', 'Productivity', 'Chatbots']
export const buildTypes: BuildType[] = ['Dashboard / Analyzer', 'AI Assistant', 'Automation', 'Web App', 'Creative Tool']

const r = ['Map the key screens and sample inputs', 'Build the core interface with realistic sample data', 'Add the AI prompt or rule-based logic', 'Test with 2–3 examples and share the result']

export const projects: Project[] = [
  { id: 'FIN-B1', title: 'Smart Budget Dashboard', description: 'Turn everyday spending into a clear, friendly view of where your money goes.', category: 'Finance', difficulty: 'Beginner', buildType: 'Dashboard / Analyzer', techStack: ['React', 'Charts', 'Prompt design'], roadmap: ['0–10 min Map income, spending and savings cards', '10–30 min Build a dashboard with sample transactions', '30–50 min Add category insights and a budget coach prompt', '50–60 min Test with a week of expenses and polish the share view'], why: 'It matches your interest in finance and your love of seeing patterns visually.' },
  { id: 'FIN-B2', title: 'Personal Finance AI Coach', description: 'Create a friendly assistant that explains spending choices in plain language.', category: 'Finance', difficulty: 'Beginner', buildType: 'AI Assistant', techStack: ['React', 'Prompt design', 'Local state'], roadmap: r, why: 'You picked finance and an assistant — this is a practical first conversation experience.' },
  { id: 'FIN-B3', title: 'Expense Sensei', description: 'Build a tiny automation that sorts expenses and suggests a next action.', category: 'Finance', difficulty: 'Beginner', buildType: 'Automation', techStack: ['JavaScript', 'Rules', 'CSV sample'], roadmap: r, why: 'A quick win for finance + automation: useful logic without heavy infrastructure.' },
  { id: 'FIN-I1', title: 'Receipt Insight Tool', description: 'Extract useful spending insights from pasted receipt text.', category: 'Finance', difficulty: 'Intermediate', buildType: 'Web App', techStack: ['React', 'JSON', 'Prompt design'], roadmap: r, why: 'A useful web app that stretches your basics with structured information.' },
  { id: 'EDU-B1', title: 'Study Buddy AI', description: 'Make a study companion that turns a topic into a simple plan and practice questions.', category: 'Education', difficulty: 'Beginner', buildType: 'AI Assistant', techStack: ['React', 'Prompt design', 'Local state'], roadmap: ['0–10 min Pick a subject and define the buddy tone', '10–30 min Build topic input and study-plan cards', '30–50 min Add question generation and hints', '50–60 min Try a topic, fix the prompt and share'], why: 'It turns your education interest into something a student could use today.' },
  { id: 'EDU-B2', title: 'Quiz Generator', description: 'Turn a short lesson or pasted notes into a quick interactive quiz.', category: 'Education', difficulty: 'Beginner', buildType: 'Web App', techStack: ['React', 'TypeScript', 'Prompt design'], roadmap: r, why: 'Great for a first build: clear input, clear output and an easy moment of delight.' },
  { id: 'EDU-I1', title: 'Lecture Notes Summarizer', description: 'Help students find the key ideas, terms and follow-up questions in their notes.', category: 'Education', difficulty: 'Intermediate', buildType: 'Automation', techStack: ['React', 'Text parsing', 'Prompt design'], roadmap: r, why: 'A useful automation that makes long notes feel much easier to revise.' },
  { id: 'HLT-B1', title: 'Health FAQ Assistant', description: 'Organize trustworthy general health questions into a calm, easy-to-navigate helper.', category: 'Healthcare', difficulty: 'Beginner', buildType: 'AI Assistant', techStack: ['React', 'Prompt design', 'Content cards'], roadmap: r, why: 'You get to practice helpful assistant design while keeping the scope focused and safe.' },
  { id: 'HLT-B2', title: 'Wellness Habit Tracker', description: 'Build a simple tracker that turns daily check-ins into encouraging patterns.', category: 'Healthcare', difficulty: 'Beginner', buildType: 'Dashboard / Analyzer', techStack: ['React', 'Charts', 'Local state'], roadmap: r, why: 'A visual, approachable project for turning small data into useful encouragement.' },
  { id: 'HLT-I1', title: 'Medicine Information Organizer', description: 'Create a structured way to save general medicine information and questions for a clinician.', category: 'Healthcare', difficulty: 'Intermediate', buildType: 'Web App', techStack: ['React', 'Forms', 'JSON'], roadmap: r, why: 'A focused organizer with real-world value and a manageable first version.' },
  { id: 'PRO-B1', title: 'Meeting Notes Assistant', description: 'Turn messy meeting notes into decisions, owners and next steps.', category: 'Productivity', difficulty: 'Beginner', buildType: 'Automation', techStack: ['React', 'Prompt design', 'Text parsing'], roadmap: r, why: 'The fastest route from a simple input to a result people immediately understand.' },
  { id: 'PRO-B2', title: 'Smart Task Prioritizer', description: 'Help someone decide what to do next using urgency, effort and impact.', category: 'Productivity', difficulty: 'Beginner', buildType: 'Dashboard / Analyzer', techStack: ['React', 'Rules', 'Cards'], roadmap: r, why: 'Your dashboard choice turns a daily productivity problem into a visual decision tool.' },
  { id: 'PRO-I1', title: 'Email Reply Assistant', description: 'Suggest a clear, friendly reply from a few notes and a chosen tone.', category: 'Productivity', difficulty: 'Intermediate', buildType: 'AI Assistant', techStack: ['React', 'Prompt design', 'UI states'], roadmap: r, why: 'A small assistant with a clear before-and-after payoff.' },
  { id: 'BOT-B1', title: 'College Helpdesk Bot', description: 'Answer common student questions about clubs, events and campus services.', category: 'Chatbots', difficulty: 'Beginner', buildType: 'AI Assistant', techStack: ['React', 'Prompt design', 'FAQ data'], roadmap: r, why: 'You can build something students already want: quick answers without a complex backend.' },
  { id: 'BOT-B2', title: 'Interview Practice Buddy', description: 'Practice answers with a friendly coach that asks one question at a time.', category: 'Chatbots', difficulty: 'Beginner', buildType: 'Web App', techStack: ['React', 'Prompt design', 'Local state'], roadmap: r, why: 'A practical, portfolio-ready chat experience with a clear audience.' },
  { id: 'BOT-I1', title: 'Campus FAQ Assistant', description: 'Create a searchable FAQ experience for a department, fest or student community.', category: 'Chatbots', difficulty: 'Intermediate', buildType: 'Dashboard / Analyzer', techStack: ['React', 'Search', 'JSON'], roadmap: r, why: 'A slightly deeper chatbot project that still stays grounded in useful content.' },
]

const difficultyScore: Record<SkillLevel, number> = { Beginner: 1, Intermediate: 2, Advanced: 3 }

export function recommendProjects(profile: { skill: SkillLevel; category: Category; buildType: BuildType }) {
  return projects
    .map((project, index) => ({ project, score: (project.category === profile.category ? 100 : 0) + (project.buildType === profile.buildType ? 45 : 0) + Math.max(0, 22 - Math.abs(difficultyScore[project.difficulty] - difficultyScore[profile.skill]) * 10) + (index % 7) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ project }) => project)
}

export const WORKSHOP_REGISTRATION_URL = ''
