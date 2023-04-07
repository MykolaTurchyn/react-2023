const _url = 'https://jsonplaceholder.typicode.com';

const getUsers = () => {
    return fetch(_url + '/users')
        .then(response => response.json())
}

export {getUsers};