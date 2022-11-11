let list = document.querySelector(".list");

async function getData() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let user_details = await data.json();
    user_details.forEach((element) => {
      console.log(element);
      list.innerHTML += `
                <li>${JSON.stringify(element)}</li> <br>
            `
    });
  } catch (err) {
    console.log(`error${err}`);
  }
}

getData();



