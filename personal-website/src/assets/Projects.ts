import ColorfulImage from './project-images/Colorful.jpg';


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

const projects: ProjectProps[] = [
        {
            "name": "Project 1",
            "description": "Description of Project 1",
            "tags": ["Web Development", "JavaScript", "Node.js"],
            "technologies": [
                {
                    "title": "Frontend",
                    "items": [
                        {
                            "text": "HTML",
                            "imageUrl": "https://example.com/icons/html.png"
                        },
                        {
                            "text": "CSS",
                            "imageUrl": "https://example.com/icons/css.png"
                        },
                        {
                            "text": "JavaScript",
                            "imageUrl": "https://example.com/icons/javascript.png"
                        }
                    ]
                },
                {
                    "title": "Backend",
                    "items": [
                        {
                            "text": "Node.js",
                            "imageUrl": "https://example.com/icons/nodejs.png"
                        },
                        {
                            "text": "Express",
                            "imageUrl": "https://example.com/icons/express.png"
                        }
                    ]
                }
            ],
            "repo": "https://repo1.com/project1",
            "link": "https://example.com/project1",
            "image": ColorfulImage,
            "date": "2023-01-01",
            "images": [
                "https://example.com/project1/image1.jpg",
                "https://example.com/project1/image2.jpg"
            ],
            "state": "completed"
        },
        {
            "name": "Project 2",
            "description": "Description of Project 2",
            "tags": ["Mobile App", "React Native"],
            "technologies": [
                {
                    "title": "Frontend",
                    "items": [
                        {
                            "text": "React Native",
                            "imageUrl": "https://example.com/icons/react-native.png"
                        }
                    ]
                },
                {
                    "title": "Backend",
                    "items": [
                        {
                            "text": "Firebase",
                            "imageUrl": "https://example.com/icons/firebase.png"
                        }
                    ]
                }
            ],
            "repo": "https://repo2.com/project2",
            "link": "https://example.com/project2",
            "image": ColorfulImage,
            "date": "2023-05-15",
            "images": [
                "https://example.com/project2/image1.jpg"
            ],
            "state": "in-progress"
        },
        {
            "name": "Project 3",
            "description": "Description of Project 3",
            "tags": ["Data Science", "Python"],
            "technologies": [
                {
                    "title": "Languages",
                    "items": [
                        {
                            "text": "Python",
                            "imageUrl": "https://example.com/icons/python.png"
                        }
                    ]
                },
                {
                    "title": "Libraries",
                    "items": [
                        {
                            "text": "Pandas",
                            "imageUrl": "https://example.com/icons/pandas.png"
                        },
                        {
                            "text": "NumPy",
                            "imageUrl": "https://example.com/icons/numpy.png"
                        }
                    ]
                }
            ],
            "repo": "https://repo3.com/project3",
            "link": "https://example.com/project3",
            "image": ColorfulImage,
            "date": "2022-11-20",
            "images": [
                "https://example.com/project3/image1.jpg",
                "https://example.com/project3/image2.jpg"
            ],
            "state": "completed"
        },
        {
            "name": "Project 4",
            "description": "Description of Project 4",
            "tags": ["Machine Learning", "TensorFlow"],
            "technologies": [
                {
                    "title": "Frameworks",
                    "items": [
                        {
                            "text": "TensorFlow",
                            "imageUrl": "https://example.com/icons/tensorflow.png"
                        }
                    ]
                },
                {
                    "title": "Languages",
                    "items": [
                        {
                            "text": "Python",
                            "imageUrl": "https://example.com/icons/python.png"
                        }
                    ]
                }
            ],
            "repo": "https://repo4.com/project4",
            "link": "https://example.com/project4",
            "image": ColorfulImage,
            "date": "2024-02-10",
            "images": [
                "https://example.com/project4/image1.jpg"
            ],
            "state": "planned"
        }
    ]

export default projects ;