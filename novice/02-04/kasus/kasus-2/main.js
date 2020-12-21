async function getUser() 
{
  try {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  data.forEach(element => {
      console.log("ID : " + element.id);
      console.log("Name : " + element.name);
  })
  } 
  catch(error) {
        console.log(error);
  }
}

getUser();