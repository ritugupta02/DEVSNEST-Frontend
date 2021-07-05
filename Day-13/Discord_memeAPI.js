

const btn = document.querySelector('button');


async function getlink() {
    const res = await fetch('https://meme-api.herokuapp.com/gimme')
    const data = await res.json()
    return data;
    //   .then(res => res.json())
    // .then(data => console.log(data.url))


}

btn.addEventListener('click', async () => {
    let response = getlink();
    let user = await response;
    console.log(user.url);
    fetch('https://discordapp.com/api/webhooks/861502088335720468/LH0qeW19uoBRBX3_HYhbBEZfMjRTA09lweNe56OW3rXNQyewcBKU7pOXFyNwfIzhc95z', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, *_correctit/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: user.url })
    })
})