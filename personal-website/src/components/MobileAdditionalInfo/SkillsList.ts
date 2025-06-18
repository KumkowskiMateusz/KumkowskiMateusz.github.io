type SkillItem = {
  text: string;
  imageUrl: string;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

const lightbulbUrl = "https://img.icons8.com/color/48/idea.png";

const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { text: "HTML5", imageUrl: "https://img.icons8.com/color/48/html-5--v1.png" },
      { text: "CSS3", imageUrl: "https://img.icons8.com/color/48/css3.png" },
      { text: "Javascript", imageUrl: "https://img.icons8.com/color/48/javascript--v1.png" },
      { text: "Typescript", imageUrl: "https://img.icons8.com/color/48/typescript.png" },
      { text: "Java", imageUrl: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
      { text: "Python", imageUrl: "https://img.icons8.com/color/48/python--v1.png" },
      { text: "C#", imageUrl: "https://img.icons8.com/color/48/c-sharp-logo.png" },
      { text: "C", imageUrl: "https://img.icons8.com/color/48/c-programming.png" },
      { text: "PHP", imageUrl: "https://img.icons8.com/officel/48/php-logo.png" },
      { text: "SQL", imageUrl: "https://img.icons8.com/color/96/sql.png" },
      { text: "Bash", imageUrl: "https://img.icons8.com/color/96/bash.png" },
    ],
  },
  {
    title: "Libraries/Frameworks",
    items: [
      { text: "React", imageUrl: "https://img.icons8.com/color/48/react-native.png" },
      { text: "Spring", imageUrl: "https://img.icons8.com/color/48/spring-logo.png" },
      { text: "Spring Boot", imageUrl: "https://img.icons8.com/color/48/spring-logo.png" },
      { text: "Spring Web", imageUrl: "https://img.icons8.com/color/48/spring-logo.png" },
      { text: "Spring Data", imageUrl: "https://img.icons8.com/color/48/spring-logo.png" },
      { text: "Node.js", imageUrl: "https://img.icons8.com/color/48/nodejs.png" },
      { text: "Express.js", imageUrl: "https://img.icons8.com/color/96/express-js.png" },
      { text: "Flask", imageUrl: "https://img.icons8.com/color/96/flask.png" },
      { text: "Apache Kafka", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Apache_Kafka_logo.svg" },
      { text: "JUnit", imageUrl: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { text: "Visual Studio Code", imageUrl: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
      { text: "IntelliJ", imageUrl: "https://img.icons8.com/color/48/intellij-idea.png" },
      { text: "PostMan", imageUrl: "https://img.icons8.com/dusk/48/postman-api.png" },
      { text: "Postgres", imageUrl: "https://img.icons8.com/color/48/postgreesql.png" },
      { text: "Git", imageUrl: "https://img.icons8.com/color/48/git.png" },
      { text: "GitHub", imageUrl: "https://img.icons8.com/ios-filled/96/ffffff/github.png" },
      { text: "Jenkins", imageUrl: "https://img.icons8.com/color/48/jenkins.png" },
      { text: "Docker", imageUrl: "https://img.icons8.com/color/48/docker.png" },
      { text: "Kubernetes", imageUrl: "https://img.icons8.com/color/48/kubernetes.png" },
      { text: "Amazon Web Services", imageUrl: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { text: "Google Cloud Platform", imageUrl: "https://img.icons8.com/color/48/google-cloud-platform.png" },
      { text: "Linux", imageUrl: "https://img.icons8.com/color/48/linux.png" },
      { text: "Trello", imageUrl: "https://img.icons8.com/color/48/trello.png" },
      { text: "Jira", imageUrl: "https://img.icons8.com/color/48/jira.png" },
      { text: "Figma", imageUrl: "https://img.icons8.com/color/48/figma--v1.png" },
    ],
  },
  {
    title: "Concepts",
    items: [
      { text: "Agile Methodologies", imageUrl: lightbulbUrl },
      { text: "Waterfall Methodologies", imageUrl: lightbulbUrl },
      { text: "RESTful APIs", imageUrl: lightbulbUrl },
      { text: "CRUDful", imageUrl: lightbulbUrl },
      { text: "SOLID concepts", imageUrl: lightbulbUrl },
      { text: "Object Oriented Programming", imageUrl: lightbulbUrl },
      { text: "Normalization", imageUrl: lightbulbUrl },
      { text: "ATOMIC", imageUrl: lightbulbUrl },
      { text: "CI/CD", imageUrl: lightbulbUrl },
      { text: "Microservices", imageUrl: lightbulbUrl },
      { text: "Event Driven Architecture", imageUrl: lightbulbUrl },
      { text: "Design Patterns", imageUrl: lightbulbUrl },
      { text: "Data Structures", imageUrl: lightbulbUrl },
    ],
  },
];

export default skills;
