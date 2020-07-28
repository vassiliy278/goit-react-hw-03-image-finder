const fetchImgsWithQuery = (queryString, page=0) => {
    return fetch(`https://pixabay.com/api/?key=16604431-86fbec6f82ccbe895fd4f060b&q=${queryString}&image_type=photo&per_page=12&page=${page}`)
    .then(result=>result.json()).then(result=>result.hits)
}

export default {fetchImgsWithQuery}