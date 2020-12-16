const axios = require('axios');

// Promise

axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(dataPost => dataPost.data)
  .then(function (response) {
    // handle success
    response.forEach(element => {
        console.log("Id :", element.id)
        console.log("Title :", element.title)
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

// Async Await
async function getUser(){
    try {
        const dataUser = await axios.get("https://jsonplaceholder.typicode.com/users")
        dataUser.data.forEach(element => {
            console.log("Email :", element.email)
            console.log("Id :", element.id)
            console.log("Name :", element.name)
        });
    } catch(err) {
        console.error(err);
    }
}

getUser();