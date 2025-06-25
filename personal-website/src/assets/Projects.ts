import MainWebPage from './project-images/MainWebPage.jpg';
import ColorfulImage from './project-images/Colorful.jpg';
import LTCHotelCreation from './project-images/LTCHotelCreation.jpg';
import LTCHotelListingsPage from './project-images/LTCHotelListingsPage.jpg';
import LTCRoomsPage from './project-images/LTCRoomsPage.jpg';
import LTCUpdateInfo from './project-images/LTCUpdateInfo.jpg';
import LTCUserReg from './project-images/LTCUserReg.jpg';
import LTCRoomCreation from './project-images/LTCRoomCreation.jpg';
const LTCStartImage = "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";
const DuckImage = "https://www.whitestone-gallery.com/cdn/shop/articles/Articles_florentijn-hofman-doubleducks-hongkong_00_1280x.jpg?v=1686294155";
const BlankImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Blank.png/800px-Blank.png";
const TableTopImage = "https://wallpapers.com/images/hd/a-grand-display-of-classic-board-games-zy33sczjk086euci.jpg";


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
    "H2" : "data:image/png;base64,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",
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
        "repo": "https://github.com/KumkowskiMateusz/KumkowskiMateusz.github.io",
        "link": "https://kumkowskimateusz.github.io/",
        "image": ColorfulImage,
        "date": "2025-06-23",
        "images": [
            MainWebPage
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
    },
    {
        "name": "Banky Ducky",
        "description": `This is a full stack web application that allows users to manage their bank accounts and transactions. It is built using Java, Spring Boot, React, and PostgreSQL. The application features a user-friendly interface for viewing account balances, making transactions, and managing account settings. It also includes an admin panel for managing user accounts and transactions. The backend is built with Spring Boot, providing RESTful APIs for the frontend to interact with. The database is managed using PostgreSQL, ensuring data integrity and security.<br/>
        This project was created as part of my studies at the University of Warsaw in the course "Programming in Java". I was responsible for the entire project from start to finish, including the design, implementation, and deployment. I learned a lot about full stack development and gained valuable experience in building web applications.<br/>`,
        "tags": ["Fullstack Website", "Java", "React"],
        "date": "2024-12-01",
        "repo": "https://github.com/241209-JavaReactAWS/Ritik-Mat-Project1/tree/connectingEndpoints",
        "link": "",
        "image": DuckImage,
        "images": [
            BlankImage
        ],
        "state": "Completed",
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
                        "text": "H2 Database",
                        "imageUrl": technologyImageMap["H2"]
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
                        "text": 'Maven',
                        'imageUrl': technologyImageMap['Maven']
                    }
                ]
            }
        ]
    },
    {
        name : "ScribbleMaps",
        description : `This is a full stack web application that allows users to create and share maps. It is built using Java, Spring Boot, React, and PostgreSQL. The application features a user-friendly interface for creating maps, adding markers, and sharing maps with others. It also includes an admin panel for managing user accounts and maps. The backend is built with Spring Boot, providing RESTful APIs for the frontend to interact with. The database is managed using PostgreSQL, ensuring data integrity and security.<br/>
        This project was created as part of my studies at the University of Warsaw in the course "Programming in Java". I was responsible for the entire project from start to finish, including the design, implementation, and deployment. I learned a lot about full stack development and gained valuable experience in building web applications.<br/>`,
        tags : ["Fullstack Website", "Java", "React"],
        date : "0000-00-00",
        repo : "",
        link : "",
        image : TableTopImage,
        images : [
            BlankImage
        ],
        state : "not started",
        technologies : []
    }
    


]

export default projects ;