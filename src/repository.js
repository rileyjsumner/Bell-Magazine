import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function getPosts() {
    return axios.get(`${BASE_URL}/api/post/list`)
        .then(response => response.data);
}

export function deletePost(id) {
    return axios.post(`${BASE_URL}/api/post/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function createPost(data) {
    return axios.post(`${BASE_URL}/api/post/create`,
        {
            title: data.title,
            body: data.body
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