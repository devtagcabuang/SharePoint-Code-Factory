const resourceBasePath = "https://jsonplaceholder.typicode.com"
let resourcePath = "/users"
let requestObject = {
    method: "GET"
}

$(document).ready(async function(){
    let results = await fetchData();
    displayResults(results);
});

async function fetchData() {
    try {
        const response = await fetch(`${resourceBasePath}${resourcePath}`, requestObject);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
}

function displayResults(results) {
    for (let i = 0; i < results.length; i++) {
        $("#api-results").append(
            `<div>` +
                `<div>Name: ${results[i].name}</div>` +
                `<div>Username: ${results[i].username}</div>` +
                `<div>Email: ${results[i].email}</div>` +
            `</div>`
        );
    }
}