console.log("console works");

const allTopics = document.querySelectorAll(".topic");
const allImgs = document.querySelectorAll(".img");
const atBox = document.getElementById("illu-box");

// console.log(allTopics)
console.log(allImgs);

allTopics.forEach(topic => {
    topic.addEventListener("click", event => {
        topic.classList.toggle("active");

        const topicAnswer = topic.nextElementSibling;


    })
})