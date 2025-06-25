import MainWebPage from './project-images/MainWebPage.jpg';
import ColorfulImage from './project-images/Colorful.jpg';
import LTCHotelCreation from './project-images/LTCHotelCreation.jpg';
import LTCHotelListingsPage from './project-images/LTCHotelListingsPage.jpg';
import LTCRoomsPage from './project-images/LTCRoomsPage.jpg';
import LTCUpdateInfo from './project-images/LTCUpdateInfo.jpg';
import LTCUserReg from './project-images/LTCUserReg.jpg';
import LTCRoomCreation from './project-images/LTCRoomCreation.jpg';
const LTCStartImage = "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";



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

type TechnologyImageMap = Record<string, string>;

const technologyImageMap: TechnologyImageMap = {
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Sass": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "Framer Motion": "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    "Object Oriented Programming": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Static Typing": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Responsive Design": "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub": "https://img.icons8.com/ios-filled/96/ffffff/github.png",
    "Vercel": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    "Visual Studio Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Github Pages": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "Axios": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEX///9aKeSsk/GafO7Ov/fVyfhjNOWGYutuQ+f29P5kNuVfMOT49v7s5vyul/LYzPm4o/Pk2/txR+eCXerGtvZ7VOlqPebb0PmKZ+zy7v3m3vt1TeipkPGObezRxPjg1vq2oPPDsfW/rPWlivB+WOqgg+/v6/2Vdu6Tcu28qPShhvCNa+zYLVCSAAAEsElEQVR4nO2Y2bqrIAyFpbWtHayd593aeTjv/35HTVBRiP3O2Zfrv2lFBFYIIeB5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8BotWgi9WiVoZoVl6otKd+7tTY+frxXscn4/bbwbqeX3/0N70np/J1PJyNFAJA7GB0Syto5ZG4TbICjfuzw5yq955M1TMcixXTYnmKmd1r2l505uL2MaOemyXy3pZUeA25kd1pTbXS1VmJjuF198ok15FChlb7eVmfKp1LkpaVCJ4T1sUclBVXiNpBPNafdWyjFCpjqzkSrVyKxxrykzOkShk1KuPS+1DZ33vaam/KFfIG/yRhbBFZn16CrvZ491V+5MYRhLyYxmX5KdHXWWwXOqFZSzZadGKYI6U7aqs91Zvqlx3rmQh7JdqNU6m+HGaBPzcc33Awilwhsd7GqGO5QrtQshHFuKtqdok/X8n6zi0T9NxSUJO3OU1L4m5JHZ80S36ztge1Lz8fptN0y1zm6641rw8vq2TrYf+He31/KxRSQj787v8EXuOfRCPvOucnRG0xtl736/odfBkR+Zg7Aj97DaCEJ5bc4GxmeyNhtLLlMzvZxyDZ01CRntyZPoRdsLUvoKQDxmkYnzaJxyDYM87OKLBOXt70eZo2JKS6ewWS0rHr38QEljN26F27etur7vtXWw7V7a3rjydpzhjRnmAGlu6852Q0DHiQJvVQlx0rPav98N8S74ap38PzYPzinpK2AmbhUTUQq2cQsDV8oWn433Ozej/lRYNMhehsNC2N1Lvzb0TfiGEYl5QK6et4GlvMdybStSqmDqa4gM9ZBFp2JxO/4IQ8s/6u8yu6uVqc7KqSMmjDaVP7G60RzUm03pL/h/X4uhb2zFukmulnCuJI2cZtMAr89Wgo1jsQ/HQJArZUgvVGMnFsTyAa3leyLvedR2VhLJGOfwKB5Gm8EvuXl0MPB7hwElML/nJhJxrZhPiSgMzeEMMuqVWRCHKfoomnx6aQx5R9G04F7EWjmEB92VjLXxPKcpwyjm1sKC0EGU9Lk1tRuMDjytPqoyLZmGY/rWdbJQQNJKwkXsfpWiupNEQYlVL8Un1SslBXLKxhZO6G65M3pXeCbBVXq0cTvkfjqb0PpYF3j/UjvMIo4UM7Wtux1bbaztv9XHCtUaTgQ/vRXzZDvI5pS+7JZtQSq/3lRoPChe37KHP1yquzJ+FrFyhbaEdYD7pdDqLtj70uXZkjtiDP3EUeuH6wvcW13zUxmGKT0uOwVEMX/GETS3XKjUhS+fsGrlTgTPUWG4eUna5lxuBgyfcnrVR6q0i/byQKpMQXzqpLerDUj1XRI/sOtIAbhzANbSCrAGQ+42LEo4ydufxG29lvFMt/Et7elCtnHDr64NIYV+Cw6olGLEnGcJpuu37oq+6jRvb6G4May6n3rF5nZewSSfccQniOvrx2t4bvsJXptZDjL9v1JGwvussafhsPNR5YfxTpCdBu/le+TcImy4yNOtOSvRt9fB4nowni0g6nQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8BV/AUYKMsUYRcdFAAAAAElFTkSuQmCC",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "Chart.js": "https://www.chartjs.org/media/logo-title.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "Spring Data JPA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "Spring Security": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    "IntelliJ IDEA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Maven": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    "AWS S3": "https://img.icons8.com/color/48/amazon-web-services.png",
    "AWS EC2": "https://img.icons8.com/color/48/amazon-web-services.png",
    "AWS RDS": "https://img.icons8.com/color/48/amazon-web-services.png",
    "Default": "https://img.icons8.com/color/48/idea.png"
};

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
                        "imageUrl": technologyImageMap["HTML"]
                    },
                    {
                        "text": "CSS",
                        "imageUrl": technologyImageMap["CSS"]
                    },
                    {
                        "text": "JavaScript",
                        "imageUrl": technologyImageMap["JavaScript"]
                    },
                    {
                        "text": "React",
                        "imageUrl": technologyImageMap["React"]
                    },
                    {
                        "text": "TypeScript",
                        "imageUrl": technologyImageMap["TypeScript"]
                    },
                    {
                        "text": "Sass",
                        "imageUrl": technologyImageMap["Sass"]
                    },
                    {
                        "text": "Framer Motion",
                        "imageUrl": technologyImageMap["Framer Motion"]
                    }
                ]
            },
            {
                "title": "Concepts",
                "items": [
                    {
                        "text": "Object Oriented Programming",
                        "imageUrl": technologyImageMap["Default"]
                    },
                    {
                        "text": "Static Typing",
                        "imageUrl": technologyImageMap["Default"]
                    },
                    {
                        "text": "Responsive Design",
                        "imageUrl": technologyImageMap["Default"]
                    }
                ]
            },
            {
                "title": "Tools",
                "items": [
                    {
                        "text": "Git",
                        "imageUrl": technologyImageMap["Git"]
                    },
                    {
                        "text": "GitHub",
                        "imageUrl": technologyImageMap["GitHub"]
                    },
                    {
                        "text": "Vercel",
                        "imageUrl": technologyImageMap["Vercel"]
                    },
                    {
                        "text": "Visual Studio Code",
                        "imageUrl": technologyImageMap["Visual Studio Code"]
                    },
                    {
                        "text": "Github Pages",
                        "imageUrl": technologyImageMap["Github Pages"]
                    }
                ]
            }
        ],
        "repo": "https://github.com/KumkowskiMateusz/KumkowskiMateusz.github.io",
        "link": "https://kumkowskimateusz.github.io/",
        "image": ColorfulImage,
        "date": "2025-06-23",
        "images": [
            MainWebPage
        ],
        "state": "completed"
    },

    {
        "name": "Luxury Travel Concierge",
        "description": `This is a full stack web application that allows users to book luxury hotels and rooms. It is built using Java, Spring Boot, React, and PostgreSQL. The application features a user-friendly interface for searching and booking hotels, managing reservations, and viewing hotel details. It also includes an admin panel for managing hotel listings, room availability, and user accounts. The backend is built with Spring Boot, providing RESTful APIs for the frontend to interact with. The database is managed using PostgreSQL, ensuring data integrity and security.<br/>
        This project was created as part of my studies at the University of Warsaw in the course "Programming in Java". I was responsible for the entire project from start to finish, including the design, implementation, and deployment. I learned a lot about full stack development and gained valuable experience in building web applications.<br/>`,
        "tags": ["Fullstack Website", "Java", "React"],
        "date": "2025-01-14",
        "repo": "https://github.com/241209-JavaReactAWS/Luxury_Travel_Concierge",
        "link": "",
        "image": LTCStartImage,
        "images": [
            LTCHotelCreation,
            LTCHotelListingsPage,
            LTCRoomsPage,
            LTCUpdateInfo,
            LTCUserReg,
            LTCRoomCreation
        ],
        "state": "completed",
        "technologies": [
            {
                "title": "Frontend",
                "items": [
                    {
                        "text": "HTML",
                        "imageUrl": technologyImageMap["HTML"]
                    },
                    {
                        "text": "CSS",
                        "imageUrl": technologyImageMap["CSS"]
                    },
                    {
                        "text": "JavaScript",
                        "imageUrl": technologyImageMap["JavaScript"]
                    },
                    {
                        "text": "React",
                        "imageUrl": technologyImageMap["React"]
                    },
                    {
                        "text": "TypeScript",
                        "imageUrl": technologyImageMap["TypeScript"]
                    },
                    {
                        "text": "Axios",
                        "imageUrl": technologyImageMap["Axios"]
                    },
                    {
                        "text": "Bootstrap",
                        "imageUrl": technologyImageMap["Bootstrap"]
                    },
                    {
                        "text": "Chart.js",
                        "imageUrl": technologyImageMap["Chart.js"]
                    }
                ]
            },
            {
                "title": "Backend",
                "items": [
                    {
                        "text": "Java",
                        "imageUrl": technologyImageMap["Java"]
                    },
                    {
                        "text": "Spring Boot",
                        "imageUrl": technologyImageMap["Spring Boot"]
                    },
                    {
                        "text": "Spring Data JPA",
                        "imageUrl": technologyImageMap["Spring Data JPA"]
                    },
                    {
                        "text": "Spring Security",
                        "imageUrl": technologyImageMap["Spring Security"]
                    },
                    {
                        "text": "PostgreSQL",
                        "imageUrl": technologyImageMap["PostgreSQL"]
                    }
                ]
            },
            {
                "title": "Tools",
                "items": [
                    {
                        "text": "Git",
                        "imageUrl": technologyImageMap["Git"]
                    },
                    {
                        "text": "GitHub",
                        "imageUrl": technologyImageMap["GitHub"]
                    },
                    {
                        "text": "Postman",
                        "imageUrl": technologyImageMap["Postman"]
                    },
                    {
                        "text": "Visual Studio Code",
                        "imageUrl": technologyImageMap["Visual Studio Code"]
                    },
                    {
                        "text": "IntelliJ IDEA",
                        "imageUrl": technologyImageMap["IntelliJ IDEA"]
                    },
                    {
                        "text": "Docker",
                        "imageUrl": technologyImageMap["Docker"]
                    },
                    {
                        "text": "Maven",
                        "imageUrl": technologyImageMap["Maven"]
                    },
                    {
                        "text": "Vite",
                        "imageUrl": technologyImageMap["Vite"]
                    },
                    {
                        "text": "AWS S3",
                        "imageUrl": technologyImageMap["AWS S3"]
                    },
                    {
                        "text": "AWS EC2",
                        "imageUrl": technologyImageMap["AWS EC2"]
                    },
                    {
                        "text": "AWS RDS",
                        "imageUrl": technologyImageMap["AWS RDS"]
                    }
                ]
            }

        ]
    }
]

export default projects ;