// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  } else {
    reject("Rejected!");
  }
});

promise.then((responce) => console.log(responce));

// #2) Run the above promise and make it console.log "success"

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

//* IDK

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch((err) => console.log("Oooops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/people/3",
  "https://swapi.dev/api/people/4",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0].name);
    console.log(results[1].name);
    console.log(results[2].name);
    console.log(results[3].name);
  })
  .catch((e) => console.log(e.message));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
