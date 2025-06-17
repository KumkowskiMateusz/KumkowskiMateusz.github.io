
type SkillItem = {
  text: string;
  imageUrl: string;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { text: "HTML5", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "CSS3", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Javascript", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Typescript", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Java", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Python", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "C#", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "C", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "PHP", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "SQL", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Bash", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
    ],
  },
  {
    title: "Libraries/Frameworks",
    items: [
      { text: "React", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Spring", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Spring Boot", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Spring Web", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Spring Data", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Node.js", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Express.js", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Flask", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Apache Kafka", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "JUnit", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { text: "Visual Studio Code", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "IntelliJ", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "PostMan", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Postgres", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "English", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "English", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Git", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "GitHub", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Jenkins", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Docker", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Kubernetes", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Amazon Web Services", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Google Cloud Platform", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Linux", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Trello", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Jira", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Figma", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Postgres", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
    ],
  },
  {
    title: "Concepts",
    items: [
      { text: "Agile Methodologies", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Waterfall Methodologies", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "RESTful APIs", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "CRUDful", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "SOLID concepts", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Object Oriented Programming", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Normalization", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "ATOMIC", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "CI/CD", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Microservices", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Event Driven Architecture", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Design Patterns", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
      { text: "Data Structures", imageUrl: "https://cdn-icons-png.flaticon.com/512/197/197484.png" },
    ],
  },
];




export default skills;