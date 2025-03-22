const menuItem1 = document.querySelector(".item-1")
const menuItem2 = document.querySelector(".item-2")
const menuItem3 = document.querySelector(".item-3")
let subtitle = document.querySelector("#subtitle")
let containerDescription = document.querySelector("#container-description")

const projects = [
    {
        "title": "Cache Server",
        "description": "A cache server made in Java for study purposes.",
        "url": "/projects/cache_server.html",
        "article": true
    },
    {
        "title": "News Headlines Bot",
        "description": "A simple Telegram bot using Python and NewsAPI.",
        "url": "https://github.com/boubeejul/news-headlines-bot",
        "article": false
    },
    {
        "title": "Solar System",
        "description": "A solar system made with OpenGL for Introduction to Computer Graphics class.",
        "url": "https://github.com/boubeejul/solar-system-opengl",
        "article": false
    },
    {
        "title": "Pong",
        "description": "Pong game made with raylib and C++.",
        "url": "https://github.com/boubeejul/pong",
        "article": false
    },
    {
        "title": "My Star Wars Marathon",
        "description": "An application to manage Star Wars Marathons, made with React, Java and Spring.",
        "url": "https://github.com/boubeejul/mystarwarsmarathon",
        "article": false
    },
    {
        "title": "Eldritch Cards",
        "description": "A trading cards store made with React, Java and Spring",
        "url": "https://github.com/boubeejul/trabalho-final-react",
        "article": false
    },
    {
        "title": "Simple Notepad",
        "description": "A simples notepad page using HTML, CSS and Javascript",
        "url": "https://github.com/boubeejul/simple-notepad",
        "article": false
    }
]

menu1ChangeContent = () => {
    subtitle.innerHTML = `I love learning new things and<br/>making little projects in my free time.`

    containerDescription.innerHTML = `
        <p>I'm a Information and Communication Technology student with <b>experience in software development and cloud infrastructure, 
        acquired in large and high-impact projects</b>. I've had the opportunity to work with multidisciplinary 
        teams with a strong focus on <marked>innovation</marked> and <marked>collaboration.</marked></p>

      <p>My interests include <marked>software development, automation, cloud, video games</marked> and <marked>music.</marked></p>
      `
}

menu2ChangeContent = () => {
    subtitle.innerHTML = `Some of my personal projects`
    containerDescription.innerHTML = `<div id="container-project"></div>`

    let containerProject = document.querySelector("#container-project")


    for (let i in projects) {
        containerProject.innerHTML += `
            <a href="${projects[i].url}" target="_blank">
                <div class="container-project-box">
                    <div class="container-project-title">
                        ${!projects[i].article ? `<img src="./assets/github-mark-white.svg" class="icon_projects"/>` : "📄"}
                        ${projects[i].title}
                    </div>
                </div>
            </a>
        `
    }
}

menu3ChangeContent = () => {
    subtitle.innerHTML = `Links`
    containerDescription.innerHTML = `<div id="container-project"></div>`

    let containerProject = document.querySelector("#container-project")

    containerProject.innerHTML = `
        <a href="https://github.com/boubeejul/" target="_blank"><img src="./assets/github-mark-white.svg" class="icon_links"/></a>
        <a href="https://www.linkedin.com/in/juliana-cardozo/" target="_blank"><img src="./assets/linkedin.svg" class="icon_links"/></a>
    `
}

menuItem1.onclick = function() {
    menu1ChangeContent()
}

menuItem2.onclick = function() {
    menu2ChangeContent()
}

menuItem3.onclick = function() {
    menu3ChangeContent()
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case '1':
            menu1ChangeContent()
            break
        case '2':
            menu2ChangeContent()
            break
        case '3':
            menu3ChangeContent()
    }

})
