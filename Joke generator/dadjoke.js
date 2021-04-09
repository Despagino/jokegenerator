const list = document.querySelector('#list');
const btn = document.querySelector('#btn')

const addnewJoke = async () => {
    let jokeText = await dadJokes()
    const newP = document.createElement('p')
    newP.append(jokeText)
    list.append(newP)
}

const dadJokes = async () => {
    const config = { headers: { accept: 'application/json', } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
}

btn.addEventListener('click', addnewJoke)


