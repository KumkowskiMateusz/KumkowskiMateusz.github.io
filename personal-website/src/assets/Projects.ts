import MainWebPage from './project-images/MainWebPage.jpg';


interface TechnologyItem {
  text: string;
  imageUrl: string;
}

interface TechnologySection {
  title: string;
  items: TechnologyItem[];
}

interface ProjectProps {
  name: string;
  description: string;
  technologies: TechnologySection[];
  tags: string[];
  date: string;
  repo: string;
  link: string;
  image: string;
  images: string[];
  state: string;
}

//TOADD
// https://github.com/KumkowskiMateusz/Mat-Project1
// https://github.com/KumkowskiMateusz/BankyDucky-pep-spring-project
// https://github.com/241209-JavaReactAWS/Luxury_Travel_Concierge

const projects: ProjectProps[] = [
    {
        "name": "Portfolio Website",
        "description": `This is a frontend only website using React, Typescript, CSS, and Framer Motion. It is designed to showcase my skills, projects, and experiences in a visually appealing and interactive manner. The website features a clean and modern design, with smooth animations and transitions to enhance user experience. It is fully responsive, ensuring optimal viewing across various devices. The portfolio includes sections for about me, projects, skills, and contact information, allowing visitors to easily navigate and learn more about my professional background.<br/>
        Throughout this entire project I attempted to create components in the most reusable manner possible, so that I can easily add new projects and skills in the future. I also focused on optimizing performance and accessibility to ensure a seamless experience for all users. However as time went on, I created multiple different iterations removing old concepts that I did not enjoy and replacing them with newer concepts. <br/> Overall the end product I feel was very good, and I am proud of it. <br/> `,
        "tags": ["Web Development", "Typescript", "React"],
        "technologies": [
            {
                "title": "Frontend",
                "items": [
                    {
                        "text": "HTML",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    },
                    {
                        "text": "CSS",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    },
                    {
                        "text": "JavaScript",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    },
                    {
                        "text": "React",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    },
                    {
                        "text": "TypeScript",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    },
                    {
                        "text": "Sass",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    },
                    {
                        "text": "Framer Motion",
                        "imageUrl": "data:image/png;base64,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"
                    }
                ]
            },
            {
                "title": "Concepts",
                "items": [
                    {
                        "text": "Object Oriented Programming",
                        "imageUrl": "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                    },
                    {
                        "text": "Static Typing",
                        "imageUrl": "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                    },
                    {
                        "text": "Responsive Design",
                        "imageUrl": "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                    }
                ]
            },
            {
                "title": "Tools",
                "items": [
                    {
                        "text": "Git",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    },
                    {
                        "text": "GitHub",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    },
                    {
                        "text": "Vercel",
                        "imageUrl": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
                    },
                    {
                        "text": "Visual Studio Code",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    },
                    {
                        "text": "Github Pages",
                        "imageUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
                    }
                ]
            }
        ],
        "repo": "https://github.com/KumkowskiMateusz/KumkowskiMateusz.github.io",
        "link": "https://kumkowskimateusz.github.io/",
        "image": MainWebPage,
        "date": "2025-06-23",
        "images": [
            MainWebPage
        ],
        "state": "completed"
    }
]

export default projects ;