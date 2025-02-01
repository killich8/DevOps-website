import {
  javascript,
  git,
  docker,
  capgemini,
  bordeaux,
  tum,
  lorraine,
  python,
  aws,
  azure,
  gcp,
  cardio,
  camp_party,
  BMW,
  jenkins,
  terraform,
  ansible,
  kubernetes,
  bash,
  grafana,
  prometheus
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    
   
  },

];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "bash",
    icon: bash,
  },
  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "terraform",
    icon: terraform,
  },
  {
    name: "ansible",
    icon: ansible,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "gcp",
    icon: gcp,
  },
  {
    name: "grafana",
    icon: grafana,
  },

];

const experiences = [
  {
    title: "DevOps/MLOps Engineer",
    company_name: "BMW Group, Munich-Germany",
    icon: BMW,
    iconBg: "#1A3156",
    date: "2023 - 2024",
    points: [
      "Project Objective: Improve the accuracy of road object detection in specific scenarios by integrating synthetic data, with a focus on underrepresented classes such as cyclists, without modifying the model architecture.",
      "CI/CD Workflow Automation: Implement CI/CD pipelines with GitLab to automate data generation and model training.",
      "Infrastructure Management: Use Terraform and Ansible to provision and configure scalable and reproducible cloud environments (AWS).",
      "Containerization and Orchestration: Containerize applications with Docker and Kubernetes.",
      "Performance Monitoring: Integrate Prometheus and Grafana to monitor the model's performance in real-time and optimize deployments.",
    ],
  },
  {
    title: "MLOps/AI Engineer",
    company_name: "Capgemini, Strasbourg-France",
    icon: capgemini,
    iconBg: "#ffffff",
    date: " 04/2023 - 09/2023",
    points: [
      "Development of an AI algorithm for 3D organ segmentation on medical images in a pre-diagnostic context.",
      "Implementation of a 3D Unet model using PyTorch and Monai, enhanced by the integration of Transformers (+20% on the DICE metric).",
      "Automated deployment of models on a cloud environment via CI/CD pipelines, with the development of a results testing interface using FastAPI.",
      "Writing and presenting an internal scientific paper detailing the results and methodologies applied.",
      
    ],
  },
  
];

const educations = [
  {
    title: "Master in Images and data sciences",
    company_name: "University of Bordeaux, France",
    icon: bordeaux,
    iconBg: "#ffffff",
    date: "2023 -  2024",
    points: [
      
    ],
  },
  {
    title: "Erasmus+ Exchange Program",
    company_name: "The Technical University of Munich (TUM), Munich-Germany",
    icon: tum,
    iconBg: "#ffffff",
    date: "2023 - 2024",
    points: [
      "Master in DevOps and cloud computing"
    ],
  },
  {
    title: "Master in Probability and applied statistics",
    company_name: "University of Lorraine, Metz-France",
    icon: lorraine,
    iconBg: "#ffffff",
    date: "2021 - 2023",
    points: [
      
    ],
  },
  {
    title: "License in applied mathematics",
    company_name: "University of Lorraine, Metz-France",
    icon: lorraine,
    iconBg: "#ffffff",
    date: "2020 - 2021",
    points: [
     
    ],
  },
];

const projects = [ 
  {
    name: "Cardiovascular Disease",
    description:
      " Complete End to End Machine Learning Project With MLFLOW,DVC And Deployment on AWS",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "MLflow",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "violet-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
    image: cardio,
    source_code_link: "https://github.com/killich8/End-to-End-Cardiovascular-Disease",
  },
 
];


const articles = [ 
  {
    name: "Erasmus+",
    description:
      " Tips for Making the Most of Your Erasmus+ Experience at The Technical University of Munich",
    tags: [
      {
        name: "Erasmus",
        color: "blue-text-gradient",
      },
      {
        name: "Education",
        color: "green-text-gradient",
      },
      {
        name: "Lifestyle",
        color: "pink-text-gradient",
      },
      
      {
        name: "Munich",
        color: "orange-text-gradient",
      },
    ],
    image: camp_party,
    source_code_link: "https://medium.com/@youness.killich",
  },




];

export { services, technologies, experiences,educations, projects, articles };
