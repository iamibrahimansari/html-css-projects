const projects = [
    {
        id: 1,
        name: 'Static Tech Blog',
        desc: 'This is a static tech blog where you can find various programming problems which are implemented in C programming language. Either you can try by yourself or if you are not able to do it then you can see the solution.',
        picture: '/images/static-tech-blog.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Git', 'Github', 'Vite', 'Yarn'],
        code: 'https://github.com/iamibrahimansari/static-tech-blog',
        live: 'https://iamibrahimansari.github.io/static-tech-blog/'
    },
    {
        id: 2,
        name: 'Apparel Landing Page',
        desc: 'This is a landing page of a brand called Apparel built by only html and css and this is one of the assignemnt given by The 10x Academy.',
        picture: '/images/apparel-landing-page.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xacademy.apparel',
        live: 'https://iamibrahimansari.github.io/10xacademy.apparel/'
    },
    {
        id: 3,
        name: 'The 10x Academy: Assignment 5',
        desc: 'This is asignment no 5 which is given by The 10x academy team. In this assignment my job was display 3 kinds of things. First one is table, second one is image, third one is video and the last one is audio.',
        picture: '/images/assignment5.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.Assignment5',
        live: 'https://iamibrahimansari.github.io/10xAcademy.Assignment5/'
    },
    {
        id: 4,
        name: 'The 10x Academy: Assignment 6',
        desc: 'This is asignment no 6 which is given by The 10x academy team. In this assignment my job was create a details page on my favorite movie and that is The matrix resurrections.',
        picture: '/images/assignment6.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.Assignment6',
        live: 'https://iamibrahimansari.github.io/10xAcademy.Assignment6/'
    },
    {
        id: 5,
        name: 'The 10x Academy: Assignment 7',
        desc: 'This is asignment no 7 which is given by The 10x academy team. In this assignment my job was display 4 sections as two rows and two columns like grid which must be fit in 100vh webpage.',
        picture: '/images/assignment7.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.Assignment7',
        live: 'https://iamibrahimansari.github.io/10xAcademy.Assignment7/'
    },
    {
        id: 6,
        name: 'The 10x Academy: Assignment 8',
        desc: 'This is asignment no 8 which is given by The 10x academy team. In this assignment my job was create a mcq question card which must have a question then 2 different options in which one will be right and another will be wrong and at last explanation.',
        picture: '/images/assignment8.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.Assignment8',
        live: 'https://iamibrahimansari.github.io/10xAcademy.Assignment8/'
    },
    {
        id: 7,
        name: 'Basic Portfolio',
        desc: 'This is a basic portfolio which has developer image, name, linkedin link, key skills and the projects done by the developer to show the clients or companies.',
        picture: '/images/basic-portfolio.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.html-css-2.Assignment2.portfolio',
        live: 'https://iamibrahimansari.github.io/10xAcademy.html-css-2.Assignment2.portfolio/'
    },
    {
        id: 8,
        name: 'Block Inline',
        desc: 'This project is experimental project on block and inline elements in html where you can clearly see that the difference between block and inline elements',
        picture: '/images/block-inline.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.html-css-2.Assignment4.block-inline',
        live: 'https://iamibrahimansari.github.io/10xAcademy.html-css-2.Assignment4.block-inline/'
    },
    {
        id: 9,
        name: 'Dogs',
        desc: 'This projects shows what types of dogs are avilable in the world and every kind of dogs are link to their specific pages so that you can read about those kind of dogs breifly.',
        picture: '/images/dogs.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.html-css2.Assignment7',
        live: 'https://iamibrahimansari.github.io/10xAcademy.html-css2.Assignment7/'
    },
    {
        id: 10,
        name: 'FreeCodeCamp: Portfolio',
        desc: 'This is one of the certification project of FreeCodeCamp Responsive Web Design program. I tried hard to match all the expectation of FreeCodeCamp portfolio design to earn the Responsive Web Design certificate.',
        picture: '/images/fcc-portfolio.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/portfolio',
        live: 'https://iamibrahimansari.github.io/portfolio/'
    },
    {
        id: 11,
        name: 'Fitness: Subscription Card',
        desc: 'This is subscription card where you can see how the subscription card or page looks like and why you should subscribe, this is also mentioned on the card.',
        picture: '/images/fitness.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.html-css-ex.Assignment1.fitness',
        live: 'https://iamibrahimansari.github.io/10xAcademy.html-css-ex.Assignment1.fitness/'
    },
    {
        id: 12,
        name: 'Myntra Size Chart',
        desc: 'This is a table which displays the size chart of product of a very good ecommerce company called Myntra so that user can decide which size of product should be buy.',
        picture: '/images/myntra-size-chart.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.html-css-2.Assignment3.Myntra-Size-Chart',
        live: 'https://iamibrahimansari.github.io/10xAcademy.html-css-2.Assignment3.Myntra-Size-Chart/'
    },
    {
        id: 13,
        name: 'List of Questions',
        desc: 'In this very simple project, there are 3 questions list out on the card but important things is questions on the card must be look beautiful and elegent.',
        picture: '/images/questions-list.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.html-css-2.Assignment1.list-of-q',
        live: 'https://iamibrahimansari.github.io/10xAcademy.html-css-2.Assignment1.list-of-q/'
    },
    {
        id: 14,
        name: 'Semantic Navbar Audios',
        desc: 'This project shows two things. First one is navbar which must be create by using semantic elements and the second one is three audios list out vertically.',
        picture: '/images/semantic-navbar-audios.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/10xAcademy.Test2.semantic-navbar-audios',
        live: 'https://iamibrahimansari.github.io/10xAcademy.Test2.semantic-navbar-audios/'
    },
    {
        id: 15,
        name: 'FreeCodeCamp: Survey Form',
        desc: 'This is one of the certification project of FreeCodeCamp Responsive Web Design program. This is survey form where you can see so many different kind of inputs in order to take the user opinion to make survey genuine and relaistic.',
        picture: '/images/survey-form.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/fcc-survey-form',
        live: 'https://iamibrahimansari.github.io/fcc-survey-form/'
    },
    {
        id: 16,
        name: 'FreeCodeCamp: Tech Docs',
        desc: 'This is one of the certification project of FreeCodeCamp Responsive Web Design program. This project shows the technical document specifically programs by using different programming languages.',
        picture: '/images/tech-docs.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/tech-docs',
        live: 'https://iamibrahimansari.github.io/tech-docs/'
    },
    {
        id: 17,
        name: 'FreeCodeCamp: Tribute Page',
        desc: 'This is one of the certification project of FreeCodeCamp Responsive Web Design program. This is tribute page and I\'m tributing Missile Man of India who is none other than Dr. Abdul Kalam Sir who is one of the biggest personality not just in India but in the world.',
        picture: '/images/tribute-to-missileman.png',
        techs: ['HTML', 'CSS', 'VSCode', 'Github'],
        code: 'https://github.com/iamibrahimansari/tribute-to-missileman',
        live: 'https://iamibrahimansari.github.io/tribute-to-missileman/'
    }
];

export default projects;