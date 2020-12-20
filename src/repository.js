import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function getPosts() {
    return axios.get(`/api/post/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthors() {
    return axios.get(`/api/author/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getArticleFromUrl(link) {
    return axios.get(`/api/post/search/${link}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getAuthorById(id) {
    return axios.get(`/api/author/search/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthorByName(name) {
    return axios.get(`/api/author/search/name/${name}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthorByUrl(url) {
    return axios.get(`/api/author/search/url/${url}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthorStories(name) {
    return axios.get(`/api/author/search/posts/${name}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getAllCategories() {
    return axios.get(`/api/category/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function createCategory(data) {
    return axios.post(`/api/category/create`, {
        name: data.name,
        slug: data.type,
        parent: data.parent
    })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}
export function updateCategory(data, id) {
    return axios.post(`/api/category/update/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function getCategories() {
    return axios.get(`/api/category/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getCategoryByName(name) {
    return axios.get(`/api/category/search/name/${name}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function deletePost(id) {
    return axios.post(`/api/post/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function deleteAuthor(id) {
    return axios.post(`/api/author/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function deleteCategory(id) {
    return axios.post(`/api/category/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function createPost(data) {
    return axios.post(`/api/post/create`,
        {
            title: data.title,
            body: data.body,
            publish_date: data.publish_date,
            category: data.category,
            author: data.author,
            description: data.description,
            photo_url: data.photo_url,
            slug: data.slug
        })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}
export function createAuthor(data) {
    return axios.post(`/api/author/create`,
        {
            name: data.name,
            slug: data.slug,
            staff_bio: data.staff_bio,
            long_bio: data.long_bio,
            facebook_url: data.facebook_url,
            twitter_username: data.twitter_username,
            instagram_username: data.instagram_username,
            email: data.email,
            photo_url: data.photo_url
        })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function updatePost(data, id) {
    return axios.post(`/api/post/update/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}
export function updateAuthor(data, id) {
    return axios.post(`/api/author/update/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function uploadAuthorImage(formData) {
    axios.post( `/api/author/upload/photo`,  formData
    ).then(function(){

    })
    .catch(function(){ console.log('FAILURE!!'); });
}

// export function uploadArticleImages(formData) {
//     // axios.post( `${BASE_URL}/api/post/upload/images`, formData
//     // ).then(function(){ console.log('SUCCESS!!');
//     // }).catch(function(){ console.log('FAILURE!!'); });
// }
