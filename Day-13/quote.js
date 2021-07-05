const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.addEventListener('click', async () => {
    fetch('https://api.quotable.io/random')

        .then(res => res.json())
        .then(data => para.innerHTML = data.content)
})