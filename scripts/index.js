const button = document.querySelector('.getButton')
const list = document.querySelector('ul')

const getDataAsyncFn = async () => {
    const getData = async url => {
        const response = await fetch(url)
        const json = await response.json()
        return json
    }

    try {
        const data = await getData('https://jsonplaceholder.typicode.com/photos')
        return data
    } catch (error) {
        console.log(error.message)
    }
}

button.addEventListener('click', async () => {
    let users = await getDataAsyncFn()
    users.forEach(user => {
        console.log(user)
        list.insertAdjacentHTML(
            `beforeend`,
            `<li class="listElement"><img src="${user.url}">${user.title}</li>`
        )
    })
})