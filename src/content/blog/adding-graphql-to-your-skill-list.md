---
title: "Adding GraphQL to Your Skill List"
date: "2020-11-10"
tagLine: "Query exactly what you need, nothing more"
description: "GraphQL solves the over-fetching and under-fetching problems of REST by letting clients request exactly the data shape they need. Here's how to get started."
---

# Adding GraphQL to Your Skill List

REST APIs have served the web well, but they come with a predictable set of frustrations: endpoints that return too much data, multiple round trips to assemble a view, and versioning headaches as clients evolve. GraphQL addresses all three. Understanding it—even if you're primarily a frontend developer—opens up a new way of thinking about data fetching.

## What GraphQL Is

GraphQL is a query language for APIs and a runtime for executing those queries. It was developed at Facebook to serve their mobile clients, which needed efficient, flexible data access over constrained networks.

The key idea: the client defines the shape of the response. The server exposes a schema that describes what's available, and the client queries exactly what it needs.

## The Schema

A GraphQL server is built around a strongly-typed schema written in SDL (Schema Definition Language):

```graphql
type Author {
  id: ID!
  name: String!
  bio: String
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  body: String!
  publishedAt: String!
  author: Author!
}

type Query {
  posts: [Post!]!
  post(id: ID!): Post
  author(id: ID!): Author
}
```

The `!` means non-nullable. `[Post!]!` means the field always returns a non-null list of non-null posts.

## Queries

A query is a read operation. The client specifies exactly which fields it wants:

```graphql
query {
  posts {
    title
    publishedAt
    author {
      name
    }
  }
}
```

The response mirrors the query shape:

```json
{
  "data": {
    "posts": [
      {
        "title": "Introduction to GraphQL",
        "publishedAt": "2020-10-01",
        "author": { "name": "Peter Tumulty" }
      }
    ]
  }
}
```

Notice the `bio` field from `Author` isn't in the response—because the client didn't ask for it. This is the over-fetching fix.

## Variables

Hard-coded values in queries are impractical. Variables make queries reusable:

```graphql
query GetPost($id: ID!) {
  post(id: $id) {
    title
    body
    author {
      name
    }
  }
}
```

Send variables alongside the query:

```json
{ "id": "abc123" }
```

## Mutations

Mutations are write operations—create, update, delete:

```graphql
mutation CreatePost($title: String!, $body: String!) {
  createPost(title: $title, body: $body) {
    id
    title
  }
}
```

The response lets you refetch relevant data in the same round trip.

## Fetching Without a Library

You don't need Apollo or urql to use GraphQL. It's just HTTP POST with JSON:

```js
async function fetchGraphQL(query, variables = {}) {
  const response = await fetch("https://api.example.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
```

For simple use cases, this is all you need.

## Resolvers

On the server side, each field in the schema has a resolver function—a function that returns the field's data. If you're building a GraphQL server (with Apollo Server, for example), your resolvers connect schema fields to your database or other services.

```js
const resolvers = {
  Query: {
    posts: () => db.posts.findAll(),
    post: (_, { id }) => db.posts.findById(id),
  },
  Post: {
    author: (post) => db.authors.findById(post.authorId),
  },
};
```

## When GraphQL Shines

GraphQL is especially valuable when:

- **Multiple clients need different shapes** — a mobile app needs less data than a web dashboard
- **The data graph is deeply nested** — GraphQL collapses multiple REST round trips into one query
- **Rapid frontend iteration** — frontend developers can evolve their queries without backend changes

For a simple CRUD API with a single client, REST is often simpler. GraphQL's value compounds as complexity grows.

Adding GraphQL to your skill set means you can work comfortably with APIs like GitHub, Shopify, and Contentful, build efficient data layers for React apps, and understand the design tradeoffs between REST and graph-based APIs.
