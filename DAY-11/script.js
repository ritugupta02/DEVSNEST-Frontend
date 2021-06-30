const quest = [
    {
        ques: "Q.1: Which is the biggest planet in our solar system?",
        a: "Jupiter",
        b: "Earth",
        c: "Neptune",
        d: "Sun",
        ans: "1"
    },
    {
        ques: "Q.2: What is the chemical symbol for the element oxygen?",
        a: "Oxy",
        b: "C",
        c: "O",
        d: "None",
        ans: "3"
    },
    {
        ques: "Q.3: What is the hardest known natural material?",
        a: "Gold",
        b: "Iron",
        c: "Diamonds",
        d: "Platinum",
        ans: "3"
    },
    {
        ques: "Q.4: What is the unit of current?",
        a: "Ohm",
        b: "Volt",
        c: "Farad",
        d: "Ampere",
        ans: "4"
    },
    {
        ques: "Q.5: Which cell organelle is called as powerhouse of cell?",
        a: "Chloroplast",
        b: "Mitochondria",
        c: "Nucleus",
        d: "Ribosomes",
        ans: "2"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const submit = document.querySelector(".btn1")
const answer = document.querySelectorAll(".answer");
const cscore = document.querySelector(".Dscore");

var score = 0;

var k = 0;
const loadQ = () => {
    question.innerHTML = quest[k].ques;
    option1.innerHTML = quest[k].a;
    option2.innerHTML = quest[k].b;
    option3.innerHTML = quest[k].c;
    option4.innerHTML = quest[k].d;
}
loadQ();

const getans = () => {
    let a;
    answer.forEach((cvalue) => {
        if (cvalue.checked) {
            a = cvalue.id;
        }
    })
    return a;
}

const removechecked = () => {
    answer.forEach((cvalue) => cvalue.checked = false);
}


submit.addEventListener('click', () => {
    const ans = getans();
    console.log(ans);

    if (ans === quest[k].ans) {
        score++;
        cscore.innerHTML = score;
    }
    k++;
    removechecked();
    if (k < quest.length) {

        loadQ();
    }
    else {
        setTimeout(() => {
            alert(`You Score : ${score}`)
            location.reload();
        }, 600)


    }

});