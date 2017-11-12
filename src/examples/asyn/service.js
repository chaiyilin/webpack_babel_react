import transform from './utils'

const API = '/api/Movies';
export default function fetchMovies() {
    let url = `${API}`
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return transform(data)
        })
        .catch((error) => console.log('Oops! . There Is A Problem'))
}