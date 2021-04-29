const USERS_URL = "http://h1n.herokuapp.com/api/users";
const TRAINER_URL ="http://h1n.herokuapp.com/api/users/trainers";

export const findAllUsers = () =>
    fetch(USERS_URL)
        .then(response => response.json())

export const findTrainers =() =>
    fetch(TRAINER_URL).then(response =>response.json())

export const deleteUser = (userId) =>
    fetch(`${USERS_URL}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const findUserById = (userId) =>
    fetch(`${USERS_URL}/${userId}`)
        .then(response => response.json())

export const findTrainerById = (trainerId) =>
    console.log(trainerId)
    // fetch(`${TRAINER_URL}/${trainerId}`)
    //     .then(response => response.json())



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

export const updateTrainer = (trainerId,user) =>
    fetch(`${USERS_URL}/${trainerId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const getTrainees = (trainerId) =>
    fetch(`${USERS_URL}/${trainerId}/trainees`)
        .then(response => response.json())


const updateProfile = (userId,user) => {
    return fetch(`${USERS_URL}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const api = {
    findAllUsers: findAllUsers,
    deleteUser: deleteUser,
    createUser,
    updateUser,
    updateTrainer,
    findUserById,
    findTrainers,
    getTrainees,
    updateProfile,
    findTrainerById
}

export default api;




