function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
}

module.exports = fetchData;
