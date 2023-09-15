/*
10. Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle the asynchronous response. The below fetchURLData uses fetch to check the response for a successful status code, and returns a promise containing the JSON sent by the remote server if successful or an error if it failed. (To run this code in a node.js environment, follow the instructions in the comments before the function.)
*/

import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(`Error is ${error.message}`));


// a) Write a new version of this function using async/await

async function fetchURLData2(url) {
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json);
        console.log(response.status)
    } catch (error) {
        console.log(error.message)
    }
}

console.log(fetchURLData2('https://jsonplaceholder.typicode.com/todos/1'))

// b) Test both functions with valid and invalid URLs
/*
Ai's
Success output --->
                    Promise { <pending> }
                    { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
                    200

Failure output ---> 
                    Promise { <pending> }
                    fetch failed

*/

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.

Promise.all([fetchURLData, fetchURLData2]).then(function (values) {
    console.log(values)
})

