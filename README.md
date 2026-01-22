🚀 GraphQL Server (Apollo + Node.js)

A simple GraphQL server built using Apollo Server and Node.js, using in-memory dummy data instead of a database.
This project is ideal for learning GraphQL fundamentals, schema design, and resolvers.

📌 Features

Apollo Server with standalone setup

GraphQL schema using SDL (typeDefs)

Query resolvers for:

Games

Reviews

Authors

In-memory data (_db.js) instead of a database

Clean project structure

Beginner-friendly GraphQL implementation

🧱 Tech Stack

Node.js

Apollo Server

GraphQL

JavaScript (ES Modules)

📂 Project Structure
graphql-server/
│
├── _db.js          # Dummy in-memory data
├── schema.js       # GraphQL type definitions
├── index.js        # Apollo server setup
├── package.json
├── .gitignore
└── README.md

📜 GraphQL Schema Overview
Game
type Game {
  id: ID!
  title: String!
  platform: [String!]!
}

Review
type Review {
  id: ID!
  rating: Int!
  containt: String!
}

Author
type Author {
  id: ID!
  name: String!
  verified: Boolean!
}

Query (Entry Point)
type Query {
  reviews: [Review]
  games: [Game]
  authors: [Author]
}


🔹 ! means the field is required (non-null)
🔹 Query is the entry point of every GraphQL API

📦 Dummy Data (_db.js)

The project uses in-memory arrays instead of a database:

games

authors

reviews

This allows fast prototyping and learning without database complexity.

▶️ How to Run the Project
1️⃣ Install Dependencies
npm install

2️⃣ Start the Server
node index.js


(or)

nodemon index.js

🌐 Server URL

Once running, the server will be available at:

http://localhost:4000


Apollo Sandbox will open automatically in the browser.

🔍 Example Queries
Get All Games
query {
  games {
    id
    title
    platform
  }
}

Get All Authors
query {
  authors {
    name
    verified
  }
}

Get All Reviews
query {
  reviews {
    rating
    containt
  }
}
