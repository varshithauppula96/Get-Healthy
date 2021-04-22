const USERS_URL = "http://localhost:5000/api/users";
export const findAllUsers = () =>
    fetch(USERS_URL)
        .then(response => response.json())


export const deleteUser = (userId) =>
    fetch(`${USERS_URL}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
export const findUserById = (userId) =>
    fetch(`${USERS_URL}/${userId}`)
        .then(response => response.json())
export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
export const updateUser = (userId,user) =>
    fetch(`${USERS_URL}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllUsers: findAllUsers,
    deleteUser: deleteUser,
    createUser,
    updateUser,
    findUserById
}
export default api;




