
const cover = document.querySelector('.cover')
const btn = document.querySelector('button');
const btnPregunta = document.querySelector('.pregunta')
const btnRespuesta = document.querySelector('.respuesta')
const divQuestion = document.querySelector('.question')
const divAnswer = document.querySelector('.answer')
// const odpowiedz = document.querySelector('.odpowiedz')
const points = document.querySelector('.points')
const pointRed = document.querySelector('.left')
const pointGreen = document.querySelector('.right')



const showAllAnswers = document.querySelector('.buttonShowAll')
const questions = [

    '1.1. How companies can help developers to lauch on multiple platforms ?',
    '1.2. For who is addressed Permormance Module?',
    '1.3. What ingredient has every training session?',
    '1.4. How trainer explain topics in training session?',
    '1.5. What try to aim trainers in training moduls?',
    '1.6. What trainers do to help participants during on-site exercises?',

    '1.7. What is the biggest selling point of Zoom?',



    '1.8. If everybody starts talking over each other it can get really chaotic. On Slack  attendees can ask question and discussion takes place in threads. Why this solution is so good?',

    '1.9. Why separate messages accompany each exercise and aredefined some emoji reactions?',
    '1.10. What try to aim trainers in training modulus?',
    "1.11. What is Material Design?",
    "1.12. Where is used MD?",
    "1.13. What factor influence a large crowd to use MD?",
    "1.14. What is React Native Paper?",
    "1.15. Does the React Native Paper library is developed?",


    "2.1. About what generaly discus developers during RN video sessions?",
    "2.2. Why reduce of code debt by sharing selected features accross the platforms is a challenge?",
    "2.3. Where they have been doing brownfield developments?",
    "2.4. Why one must pay attention to integration between RN and Native.",
    "2.5. Why navigation is the subject of discussions?",
    "2.6. What is RN Navigation?",
    "2.7. What is wrapped in a consistent API?",
    "2.8. Does it good to go with RNavigation for alle the new projects?",
    "2.9. What else matter the choosing a library?",
    "2.10. Wht testing is so important?",
    "2.11. Count testing approaches.",
    "2.12. Describes unit tests. ",
    "2.13. Describe unit and integration tests downside. ",
    "2.14. That is the beauty of React regerding rendering?",
    "2.15. Why our JS and React code can hit bugs despite full unit and integratino test coverage? ",
    "2.16. Why we need end-to-end-tests ?",
    "2.17. What would you recommend for unit and integration tests of RN components?",
    "2.18. What you recommend for integration tests?",
    "2.19. Does RN can download a proprietary code?",
    "2.20.  How to stay up to date with React Native releases?",
    "2.21. Does we help achieve business goeals? In that form?",
    "2.22. What is the way of knowledge sharing?",
    "2.23. What is the way of organize a hackathon during lockdown?",
    "2.24. How long lasted hackaton?",
    "2.25. How to prepare a remote hackathon?",
    "2.26. Was it good opportunity for participants to lear? (in Hackathon. What they do to save time?",
    "2.27. What they had to find to conduct hackathon?",
    "2.28. What was the way to stay connected during hackathon? ",
    "2.29. What is screen sharing session? ",
    "2.30. As an orginiser of hackathon what is pro tip?",
    "2.31. Was a hackathon successfull?"






        `
    https://devszczepaniak.pl/web-developer-pytania-rekrutacyjne-cz-1/
    "http://net-informations.com/js/iq/unerror.htm
    https://www.toptal.com/javascript/interview-questions#form
    http://net-informations.com/js/default.htm
    https://www.guru99.com/javascript-interview-questions-answers.html",`

]

const answers = [

    // "1.1. They always strive to empower developers and companies to launch on multiple platforms at the same time. Usually, we achieve that by joining a client’s team offering our expertise and advice. Another way of empowering our clients are React Native training sessions with our developers. ",

    // '1.2. If any have particular problems with software or want the deeper dive into React Native, the Performance module should meet his needs. In that module, are discussed usual bottlenecks and show how to avoid and debug them',

    // '1.3. Each of training is designed with interactivity in mind. We don’t want to give you a lecture while showing some slides for 6 or 8 hours, it’s pointless. Usually, attendees will get a base training app to work on.',

    // '1.4. During our training, we do explain the topics beforehand, but then the attendees spend most of the time working on the exercises. If somebody needs help, our trainers are always available to explain things in more details. Also, we offer some form of “cheats” if somebody gets stuck and needs a little inspiration.',

    // '1.5. They aim to accommodate different skill levels in  training modules. They are pre-prepared, but  trainers try to get a feel for the group during exercises and adjust on the go. ',

    // '1.6. During on-site training, trainers circle around the room while attendees work on exercises trying to help whenever they spot somebody is having issues and can always raise their hand and ask a question. In fact, all the participants can benefit from this because sometimes it prompts a quick public discussion or extra explanation on our side. It’s a small thing, but they do know how knowledge sharing and discussion is important in the whole learning process. ',

    // '1.7. The biggest selling point that Zoom is convincing are the breakout rooms. As mentioned, on-site there is possibility  to approach the attendee and offer help. But with everything online, thet need some replacement for that and that’s where breakout rooms come in. ',

    // '1.8.It allows attendees to upvote questions they think are good or they also wondered about them. It’s not crucial, but it allows us to see which topics raise questions, so we can explain something again. ',

    // '1.9. Attendees have a way to show whether they are still working, waiting, or got completely lost. This is very useful information , as trainers know how much time is still needed to complete the task and how to plan the next ones around that. ',

    // '1.10. It wasn’t easy to realign  training methods so that they are able to be conducted  remotely. Shoud have been found new tools and  hard  thinking about howone can replicate usual actions. I think everything is on the right track.. ',
    // "1.11. Material Design (MD) is a design system introduced by Google. The main assumption is to provide a simple, consistent, and also legible graphic style ensuring the highest quality experience.",
    // "1.12. Is used in the the apps created by Google such as Gmail, Google Drive, or Google Fit, but in general, it’s a global styling guideline.It’s growing in popularity, thanks to its simplicity and usability and nowadays is used not only on mobile applications but also more frequently on websites.",
    // "1.13. One of the factors that influence a large crowd of fans is undoubtedly the official documentation. It clearly presents the specifications of components, the main assumptions of the style, primarily based on mobile applications which can be translated into websites as well.",
    // "1.14. React Native Paper is a UI component library, arose as a result of a passion for React Native and Material Design. It allows building beautiful interfaces on Mobile and Web with high-quality cross-platform components. It is responsive, fast, and works reliably no matter the platform. ",
    // "1.15. The library is constantly maintained and developed. Currently, it contains about 30 customizable and production-ready components, which can be really helpful in the product creation process.",


    // "2.1. During an hour-long video session, they cover a variety of different topics, from best practices to unobvious applications of React Native. They  share them in a blog post, in case they are relevant to your business as well.",
    // "2.2. Unfortunately, such integration is a challenge on its own as it requires your team to be experts in both React Native and native language at the same time. As a result, the Internet is full of stories of React Native being sunset due to its negative impact on the application performance or developers’ efficiency.",
    // "2.3. At Callstack, we have been doing brownfield developments for a few years already. Based on that experience, we are working on a brand new product that lets you integrate React Native into any platform in one click.",
    // "2.4. You must pay attention to the integration between React Native and Native and how they communicate. Always try  run your ideas by the native developers to make sure of the performance. If possible, try to decouple both realms – while putting everything into a single folder is easiest and fastest, it increases the overall complexity. When in doubt, reach out to us. Before our library is ready to use, we’re happy to share some ideas.",
    // "2.5. Navigation is the subject of discussions on almost all the panels and Q&A that I have a pleasure to be part of. The reason for that is simple – there are a lot of them. They all pursue the holy grail of navigating – native animations and user experience, combined with flexibility and expressiveness of JavaScript.",
    // "2.6. React Native Navigation is a wrapper around native navigation primitives. React Native application communicates with them in an imperative way, instructing the native view controllers about what to present next. The benefits are fully native animations and interoperability with different parts of your app  Downsides? Less flexibility and non-standard syntax.",
    // "2.7. React Navigation is composed of many different parts, some implemented in pure JavaScript and some implemented natively, but wrapped in a consistent API. As a result, it is trivial to compose and build complex view hierarchies and customize your screens.",
    // "2.8. For all the new projects, you should be good to go with React Navigation in most of the cases. It is a feature-rich and flexible navigation solution that lets you build applications with both native and JavaScript-driven animations. It is also about to ship with first-class web support, making it much easier to share code between React and React Native.",
    // "2.9. In addition to the features, documentation, and community matter a lot when choosing a library. React Navigation is a well-maintained Open Source library that receives a lot of contributions from the developers that use it every day.",
    // "2.10. Testing is an important part of making sure that what we release to production works the way we programmed it to be. There are many established ways one can test their JavaScript apps. Although JS is usually run in a browser environment, with React Native there’s nothing preventing us from making it power our mobile apps. ",
    // "2.11. Various testing approaches can be usually broken down into the following categories: unit, integration, and end-to-end tests. Each having its own set of benefits, drawbacks, and scope of use.",
    // "2.12. This group describes small test cases that are focused on ensuring single units (hence the name) of your application work on their own. They’re fast to run, well-scoped, and are best when testing crazy edge cases of our leaf components or business logic.",
    // "2.13. Once we have our units tested, we need to make sure that they behave well together in a system that happens to be our app. We want to test how they integrate with each other. Integration testing in React Native apps is usually about testing bigger components consisting of smaller ones. We can let React render them into the memory and then assert on the output.",
    // "2.14. Unit and integration tests are only testing JavaScript code in a fake Node.js environment. However, the beauty of React is that it doesn’t care about where it’s rendered. Using custom renderers, we can render React to DOM, iOS, Android, or into the memory of a Node.js environment. Just like our tests do. And because the majority of our React Native apps code is written in JavaScript, it covers most of our testing use cases.",
    // "2.15. Even with a full unit and integration test coverage of our JS and React code we can still hit bugs. The ones that come from an integration with a real environment or from a lacking quality of our mocks. For example, mobile devices can have different operating systems, and each of them, a different version. They may have different permissions or networking setup, rendering our app unusable even though our JS is perfectly fine.",
    // "2.16. They make your app run on real devices and assert on that, similar to how your users would use it. With a small suite of E2E tests, as we call them in short, we’re able to eliminate most of the uncertainty on the edge of React and the platform it renders to. Beware that these tests are slow, expensive to run, and tend to fail for reasons unrelated to your code changes. In a healthy codebase should be a cherry on top of your testing suite.",
    // "2.17. For unit and integration tests of React Native components, our preferred choice is our own React Native Testing Library. It is a collection of utilities that help you write clean and high-quality tests that are resilient to code refactors. They also prevent you from common pitfalls by restricting what you can interact with when testing.",
    // "2.18. For integration tests, we recommend setting up Detox, which is an Open Source library created and maintained by Wix, bringing you the end to end testing experience at minimal latency.",
    // "2.19. It is possible for a React Native application to download a proprietary code that is hosted on the Internet and inject it dynamically into the application. This functionality is not supported by default inside React Native and its bundler Metro. However, it can be achieved by using Haul – our Open Source library",
    // "2.20.React Native is an Open Source library that lives under the Facebook organization on Github. It is a mirror of the code that is hosted internally at Facebook as a part of their mono-repository architecture. As a result, Facebook developers run React Native straight from the source. On top of that, React Native is published to the npm registry for those that want to consume it like any other JavaScript package.This process is done by the volunteers and tracked in real - time on Github, in its dedicated repository. ",
    // "2.21. At Callstack, our focus is to help your business achieve its goals by empowering your React and React Native development teams. We hope that the insights given not only answer your questions, but actually inspire you to build a mobile app with React Native. If you have any questions or challenges around React or React Native, don’t hesitate to get in touch. We are eager to take a closer look at your existing architecture and help you move forward.",


    "2.22. At callstack they value the idea of knowledge sharing. There are many ways of doing so, but one particular thet like most is by organizing hackathons. This term is associated with long development sessions for teams from all around the globe, where the end goal is a product that solves a problem defined at the beginning of the event.",
    "2.23. During a lockdown, the number of ways you can organize a hackathon is decreased to one – fully remote.This was the first time thet’ve done it this way, so thet wanted to make sure that every participant did not feel the difference. Our knowledge - sharing hackathon was a bit different than the “traditional” version described and instead of working on one problem, we decided to take a closer look at our Open Source Projects and fix some bugs, etc.",

    "2.24. The hackathon lasted around 3 hours and was organized internally with our developers as participants. The cool thing was that our new joiners took part in the event. It was a great opportunity for them to gain their first experience in contributing to Open Source.",

    "2.25. How to prepare a remote hackathon? While organizing  remote hackathon, we had to face a number o new challenges and find out solutions to make this event as productive as it could be. Mostly, they were related to the communication between participants and setting up the agenda.",

    "2.26.  It was a good opportunity for participants to learn how to “give back to the community” if they hadn’t had a chance before. To save time finding issues to work on, we’ve used React Native OSS board, which they introduced some time ago. Having such a list greatly helped people find what there were interested in and get started right away, so make sure to prepare one upfront.",
    "2.27. They wouldn’t be able to conduct a remote hackathon without some necessary tools. they had to find out the best possible solutions to manage such elements as communication between participants and monitoring what everyone is working on or need help with.",

    "2.28. Since the hackathon was fully remote, we had to stay connected. The most popular way for that is to use chat software, such as Discord or Slack. The next thing(and tool) we strongly recommend you to create is an issue board(using software such as Trello).It makes it more “visible” on what everyone’s working on or need help with. Remember: Whatever tool you use, make sure that all participants have access to it beforehand",

    "2.29. Once you have selected the task to work on, you’re ready to go, but you’re not limited to work just by yourself. What best worked for some of us was screen sharing session – one person was streaming code, while others were brainstorming on ideas to implement. ",
    "2.30. Pro tip: As an organizer, you don’t want people to get stuck and get stripped of all the fun. Make sure you engage with people and make sure they reach out (or stay connected with) others that can help them – for example, ask if anyone needs help from time to time.",

    "3.31. The hackathon was fruitful! Thet received positive feedback regarding the event from participants. Some of them were removing legacy context API or fixing API bugs in React Native core, some were contributing to community packages making sure that example app in react-native is runnable."





]
const generateQuestion = () => {
    const questionIndex = Math.floor(Math.random() * questions.length)
    divQuestion.textContent = questions[questionIndex]
    divAnswer.textContent = "";
    const question = questions[questionIndex]


    const match = question.substr(0, 4)
    const answer = answers.filter(ans => ans.substr(0, 4) === match)
    divQuestion.textContent = question


    btnRespuesta.classList.remove('addOpacity')
    divQuestion.classList.remove('addOpacity')



    const showAnswer = () => {
        // let questionIndex =Math.floor(Math.random()*questions.length)
        divAnswer.textContent = answer;
        btnRespuesta.classList.add('addOpacity')
        divQuestion.classList.add('addOpacity')
        // var word = "Someword";
        // console.log(word[0] === word[0].toUpperCase());
        console.log("ihihi");

    }
    if (btnRespuesta.addEventListener('click', showAnswer));




    const index = Math.random()
    sessionStorage.setItem(index, JSON.stringify(question))
    const tablicaPytan = JSON.parse(sessionStorage.getItem(index))
    console.log([tablicaPytan])

    // const getUnique = (items, value) => {
    //     return [...new Set(items.map(item => item[value]))]
    // }

    showAllAnswers.addEventListener('click', () => {
        const pageWithAnswers = document.createElement('div')
        // let pytankaaa = getUnique(tablicaPytan, tablicaPytan.substr(0,4));

        pageWithAnswers.innerHTML = tablicaPytan

        cover.appendChild(pageWithAnswers)
        cover.style.opacity = "1";
        cover.style.zIndex = "5";
        pageWithAnswers.classList.add('showAllAnswers')
        console.log('its working')
    })
    cover.addEventListener('click', () => {
        cover.style.opacity = "-1";
        cover.style.zIndex = "-5";
        sessionStorage.clear()
        window.location.reload()


    })


}

pointRed.addEventListener('click', () => {
    const point = document.createElement('div')
    point.classList.add("point")
    point.classList.add('red')
    points.appendChild(point)
})
pointGreen.addEventListener('click', () => {
    const point = document.createElement('div')
    point.classList.add("point")
    point.classList.add('green')
    points.appendChild(point)
})
btnPregunta.addEventListener("click", generateQuestion);
// -----------------generator kodów
// const btn2 = document.querySelector(".generator");
// const section = document.querySelector(".codes")
// btn2.addEventListener("click", ()=>{
//     console.log("dfdf");
//     const divCode = document.createElement('div');
//     section.appendChild(divCode);
//     const text ="dfdfdfsdfs";
//     console.log(text);
// })



// -----------------------------------
function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true


}

console.log(`Ta liczba to  ${isPrime(13)}`)
// _______________________________
function arraySum(array) {
    let tempArr = array.sort((a, b) => {
        return a - b;
    })
    let largest = tempArr.pop();
    console.log(largest)
    let number = 0
    tempArr.forEach(item => (number += item))
    console.log(number)
    return number === largest
    // nie mam odpowiedzi w konsoli czy jest to true czy false



}

array1 = [2, 4, 5, 1, 3, 9, 6, 7]
arraySum(array1)

// ________________
document.addEventListener('auxclick', function () {
    console.log('Hello!');
});
