export const projectData = [
  {
    id: 1,
    name: "AstronoME",
    description:
      "AstronoME is a web app designed to provide users with a comprehensive dashboard of information to enhance their stargazing experiences. While many features require a valid account, the landing page offers a glimpse of Incoming Asteroid data, a Daily image from NASA, and a welcoming message prompting users to sign up or log in. Upon registering, users can access weather and moon phase data specific to their location and become part of the AstronoME community through a dedicated forum for stargazers.",
    fullDescription: [
      "AstronoME is a MERN application using GraphQL and Apollo Server to adeptly handle data retrieval and manipulation. I was part of a collaborative effort involving five developers. My primary contributions centered around orchestrating the fetching and rendering of NASA API data on the dashboard and the integration of Cloudinary to facilitate image uploads, enhancing user engagement by allowing them to share their starry nights.",
      "Leveraging the useEffect React hook, I orchestrated asynchronous data fetching from two APIs, employing the useState hook to manage state variables based on the API responses. The JSX code featured conditional rendering, utilizing a ternary operator to dynamically display either cards of the fetched data or user-friendly messages.",
      "One of our stretch goals was the integration of image uploading within the post functionality. Excited for the oppurtunity to learn something new, I dedicated myself to researching and implementing Cloudinary. This involved utilizing a client-side widget for file selection and upload. Upon receiving the Cloudinary response containing the URL string, I stored it as a property in the MongoDB database's Blog Post model. Subsequently, when rendering posts, we showcased the stored Cloudinary images using the associated URLs.",
      "In addition to these major tasks, I actively contributed to bug fixes, implemented smaller features, and enhanced UI/UX, collaborating closely with my teammates. Our team's iterative development process spanned 10 days, encompassing concept creation, planning, development, testing, and presentation. Through persistent teamwork, we overcame challenges and learned to navigate obstacles together, capitalizing on each other's strengths.",
    ],
    image: "/images/AstronoME1.gif",
    projectLink: "https://astronome-10022023-9058067b996b.herokuapp.com/",
    repoLink: "https://github.com/Zgibbs58/astronoME",
    technologies: ["React", "MongoDB", "Mongoose", "Express", "Node", "GraphQL", "Apollo Server", "Cloudinary", "Tailwind CSS", "Heroku"],
  },
  {
    id: 2,
    name: "Maintenance Manatee",
    description:
      "Keeping track of your car's maintenance can be a headache. So put on cruise control and let the Maintenance Manatee keep track of it for you! Create a profile for your vehicle(s) and add posts describing the work you've had done including the cost, date, and any other important details. Join the Maintenance Manatee and spend more time in the fast lane!",
    fullDescription: [
      "Maintenance Manatee is a user-friendly, full-stack web application designed to simplify the task of tracking vehicle maintenance. We worked on a team of four developers, utilizing the MVC paradigm to create a RESTful API with CRUD functionality. My primary contributions centered around the implementation of the Handlebars templating engine, the design and styling of the UI, and collaborating with teammates to ensure client side and server side code functioned in harmony.",
      "Leveraging the Handlebars templating engine, I created dynamic HTML pages, utilizing conditional rendering to display the user's vehicle information in forms and pages. Additionally, I implemented custom helper functions to format dates and sort maintenance post dates in ascending order.",
      "I was responsible for most of the design and styling of the UI, utilizing Tailwind CSS to create a clean, intuitive interface. Which included a responsive design, ensuring the application is accessible on a variety of devices.",
      "Throughout the development process we utilized Git branches to ensure our code was well organized and to minimize the risk of merge conflicts. We were faced with merge conflicts on a few occasions, but we were able to resolve them through effective communication and collaboration.",
    ],
    image: "/images/MaintenanceManatee2.gif",
    projectLink: "https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/",
    repoLink: "https://github.com/Zgibbs58/maintenance-manatee",
    technologies: ["Express", "Node", "MySQL2", "Sequelize", "Handlebars", "Tailwind CSS", "Heroku"],
  },
  {
    id: 3,
    name: "Book Search Engine",
    description:
      "The Book Search Engine is a full-stack web application that allows users to search for books and save them to their profile. Users can create an account, login, search for books, save books, view their saved books, and delete them from their profile.",
    fullDescription: [
      "This application was originally built using a RESTful API, and I refactored it to use GraphQL. I created the GraphQL queries and mutations, as well as the Apollo Server. I also implemented the Apollo Provider to connect the client-side application to the server-side API.",
      "I utilized the useQuery and useMutation hooks to orchestrate asynchronous data fetching from the GraphQL API. The useState hook was used to manage state variables based on the API responses. The JSX code featured conditional rendering, utilizing a ternary operator to dynamically display either cards of the fetched data or user-friendly messages.",
    ],
    image: "/images/BookSearchEngine.gif",
    projectLink: "https://shrouded-beach-51381-8a380f4bede0.herokuapp.com/",
    repoLink: "https://github.com/Zgibbs58/Book-Search-Engine-Refactor",
    technologies: ["React", "MongoDB", "Mongoose", "Express", "Node", "GraphQL", "Apollo Server", "Bootstrap", "Heroku"],
  },
  {
    id: 4,
    name: "Mofield Brothers",
    description:
      "This is a small business website for a local construction company. The application features a gallery of projects, a group of cards listing their services, a contact form, and a section with information about the company.",
    fullDescription: [
      "This is a website designed to showcase the work of a local construction company. They were looking for a simple, clean website that would allow them to display their work and provide a way for potential customers to contact them. I worked closely with the client to ensure the website met their needs and expectations.",
      "This was an earlier project of mine when I was first learning web development. I utilized HTML, CSS, and JavaScript to create the website. I used the Bootstrap framework in conjunction with custom CSS to create a responsive design, ensuring the website is accessible on a variety of devices.",
      "I also implemented the contact form, utilizing the formsubmit API to send emails to the company's email address.",
    ],
    image: "/images/MofieldBrothers.gif",
    projectLink: "https://mofieldbrothers.com/",
    repoLink: "https://github.com/Zgibbs58/Mofield-Brothers-Construction",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
