# Express-Rest-API-Example

Example steps of creating a REST API with Express

# 1. Setup necessary packages

In the terminal, write:

```
    git init
    npm init
    npm i express
    npm i -g nodemon
```

Create index.js and create a data folder we will use for example with the files users.js and posts.js.

## data/users.js:

```
// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "users" data will be simple information about
// the application's user base.
const users = [
  {
    id: 1,
    name: "Carey",
    username: "cyare23",
    email: "cy23@example.com",
  },
  {
    id: 2,
    name: "Mikoto",
    username: "Miiko",
    email: "mikoto_u@example.com",
  },
  {
    id: 3,
    name: "Ronald",
    username: "RonRonRon",
    email: "mronald@example.com",
  },
];

module.exports = users;

```

## data/posts.js:

```
// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "posts" data will include information about
// social media posts that the users make.
const posts = [
  {
    id: 1,
    userId: 1,
    title: "est et quae odit qui non",
    content:
      "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
  },
  {
    id: 2,
    userId: 1,
    title: "quasi id et eos tenetur aut quo autem",
    content:
      "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
  },
  {
    id: 3,
    userId: 1,
    title: "delectus ullam et corporis nulla voluptas sequi",
    content:
      "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum",
  },
  {
    id: 4,
    userId: 2,
    title: "iusto eius quod necessitatibus culpa ea",
    content:
      "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores",
  },
  {
    id: 5,
    userId: 2,
    title: "a quo magni similique perferendis",
    content:
      "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
  },
  {
    id: 6,
    userId: 2,
    title: "ullam ut quidem id aut vel consequuntur",
    content:
      "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
  },
  {
    id: 7,
    userId: 3,
    title: "doloremque illum aliquid sunt",
    content:
      "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
  },
  {
    id: 8,
    userId: 3,
    title: "qui explicabo molestiae dolorem",
    content:
      "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
  },
  {
    id: 9,
    userId: 3,
    title: "magnam ut rerum iure",
    content:
      "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis",
  },
];

module.exports = posts;


```

## index.js

```
const express = require("express");
const app = express();
const port = 3000;

// Importing the data from our fake database files.
const users = require("./data/users");
const posts = require("./data/posts");

app.get("/", (req, res) => {
  res.send("Work in progress!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
```

Start server by typing this in terminal:

```
nodemon index.js
```

# 2. Build some routes

## index.js update

```
const express = require("express");
const app = express();
const port = 3000;

// Importing the data from our fake database files.
const users = require("./data/users");
const posts = require("./data/posts");

// Creating a GET route for the entire users database.
// This would be impractical in larger data sets.
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Creating a simple GET route for individual users,
// using a route parameter for the unique id.
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
});

// Creating a GET route for the entire posts database.
// This would be impractical in larger data sets.
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Creating a simple GET route for individual posts,
// using a route parameter for the unique id.
app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id == req.params.id);
  if (post) res.json(post);
});

app.get("/", (req, res) => {
  res.send("Work in progress!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

```
