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

export function getArticleFromUrl(link) {
    return axios.get(`${BASE_URL}/api/post/search/${link}`)
        .then(response => response.data);
}

export function getAuthorById(id) {
    return axios.get(`${BASE_URL}/api/author/search/${id}`)
        .then(response => response.data);
}
export function getAuthorByName(name) {
    return axios.get(`${BASE_URL}/api/author/search/name/${name}`)
        .then(response => response.data);
}
export function getAuthorByUrl(url) {
    return axios.get(`${BASE_URL}/api/author/search/url/${url}`)
        .then(response => response.data);
}
export function getAuthorStories(name) {
    return axios.get(`${BASE_URL}/api/author/search/posts/${name}`)
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
            category: data.category,
            author: data.author,
            description: data.description,
            photo: data.photo,
            permalink: data.permalink
        })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}
export function createAuthor(data) {
    return axios.post(`${BASE_URL}/api/author/create`,
        {
            name: data.name,
            url: data.url,
            staff_bio: data.staff_bio,
            long_bio: data.long_bio,
            social_handle: data.social_handle,
            email: data.email,
            photo: data.photo
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

export function uploadAuthorImage(formData) {
    console.log(formData);
    axios.post( `${BASE_URL}/api/author/upload/photo`,  formData
    ).then(function(){

        console.log('SUCCESS!!');
    })
    .catch(function(){ console.log('FAILURE!!'); });
}

export function uploadArticleImages(formData) {
    axios.post( `${BASE_URL}/api/post/upload/images`, formData
    ).then(function(){ console.log('SUCCESS!!');
    }).catch(function(){ console.log('FAILURE!!'); });
}