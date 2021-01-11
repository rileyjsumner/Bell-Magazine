import axios from 'axios';
const BASE_URL = process.env.API_BASE || 'http://localhost:8088';

export function getPosts() {
  console.log(BASE_URL);
    return axios.get(`${BASE_URL}/api/post/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthors() {
    return axios.get(`${BASE_URL}/api/author/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getArticleFromUrl(link) {
    return axios.get(`${BASE_URL}/api/post/search/${link}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getAuthorById(id) {
    return axios.get(`${BASE_URL}/api/author/search/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthorByName(name) {
    return axios.get(`${BASE_URL}/api/author/search/name/${name}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthorByUrl(url) {
    return axios.get(`${BASE_URL}/api/author/search/url/${url}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}
export function getAuthorStories(name) {
    return axios.get(`${BASE_URL}/api/author/search/posts/${name}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getAllCategories() {
    return axios.get(`${BASE_URL}/api/category/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function createCategory(data) {
    return axios.post(`${BASE_URL}/api/category/create`, {
        name: data.name,
        slug: data.slug,
        parent: data.parent
    })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}
export function updateCategory(data, id) {
    return axios.post(`${BASE_URL}/api/category/update/${id}`, { data })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message));
}

export function getCategories() {
    return axios.get(`${BASE_URL}/api/category/list`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function getCategoryByName(name) {
    return axios.get(`${BASE_URL}/api/category/search/name/${name}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
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

export function deleteCategory(id) {
    return axios.post(`${BASE_URL}/api/category/delete/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err.message));
}

export function createPost(data) {
    return axios.post(`${BASE_URL}/api/post/create`,
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
    return axios.post(`${BASE_URL}/api/author/create`,
        {
            name: data.name,
            slug: data.slug,
            staff_bio: data.staff_bio,
            long_bio: data.long_bio,
            facebook_url: data.facebook_url,
            twitter_username: data.twitter_username,
            instagram_username: data.instagram_username,
            email: data.email,
            photo_url: data.photo_url,
            rank: data.rank,
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
    axios.post( `${BASE_URL}/api/author/upload/photo`,  formData
    ).then(function(){

    })
    .catch(function(){  });
}
export function uploadArticleImage(formData) {
  console.log(formData);
  axios.post( `${BASE_URL}/api/post/upload/photo`,  formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
    }
  ).then(function(){
    console.log("works");
  })
  .catch(function(e){
    console.log("don't work");
  });
}

// export function uploadArticleImages(formData) {
//     // axios.post( `${BASE_URL}/api/post/upload/images`, formData
//     // ).then(function(){ console.log('SUCCESS!!');
//     // }).catch(function(){ console.log('FAILURE!!'); });
// }
