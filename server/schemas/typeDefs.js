const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Exercise {
        _id: ID
        name: String
        oneRepMax: Integer
        searchName: String
    }
    type User {
        _id: ID
        firstName: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: [Users]
    }

    type Mutation {
        addUser(firstName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
    `

    module.exports = typeDefs; 