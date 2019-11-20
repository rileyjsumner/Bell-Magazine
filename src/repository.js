import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function getPosts() {
    return axios.get(`${BASE_URL}/api/post/list`)
        .then(response => response.data);
}
export function getAuthors() {
    return axios.get(`${BASE_URL}/api/author/list`)
        .then(response => response.data);
}

export function getAuthorById(id) {
    return axios.get(`${BASE_URL}/api/author/${id}`)
        .then(response => response.data);
}
export function getAuthorByName(name) {
    return axios.get(`${BASE_URL}/api/author/search/${name}`)
        .then(response => response.data);
}
export function deletePost(id) {
    return axios.post(`${BASE_URL}/api/post/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function deleteAuthor(id) {
    return axios.post(`${BASE_URL}/api/author/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function createPost(data) {
    return axios.post(`${BASE_URL}/api/post/create`,
        {
            title: data.title,
            body: data.body,
            author: data.author,
            permalink: data.permalink
        })
        .then(response => {
            console.log("then");
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}
export function createAuthor(data) {
    console.log(data);
    return axios.post(`${BASE_URL}/api/author/create`,
        {
            name: data.name
        })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function updatePost(data, id) {
    return axios.post(`${BASE_URL}/api/post/update/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}
export function updateAuthor(data, id) {
    return axios.post(`${BASE_URL}/api/author/update/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}