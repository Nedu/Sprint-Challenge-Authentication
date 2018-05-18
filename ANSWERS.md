<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware is a function that is used to extend functionality of an existing function.

Sessions contains client specific data that is going to persist across requests.

Bcrypt is a key derivation function that adds extra time when hashing passwords in order to slow down the production of hashes and minimize rainbow attacks. 

JWT stands for JSON Web Tokens. It is a token issued by the server that the client persists locally usually in localstorage. Here the server offloads the handling of state to the client.

2.  What does bcrypt do in order to prevent attacks?

Bcrypt prevents attacks by slowing down the production of hashes by adding rounds. For production, a round of 10 and above is recommended.

3.  What are the three parts of the JSON Web Token?

The header, payload and signature.
