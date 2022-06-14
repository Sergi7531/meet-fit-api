# Welcome to MeetFitApi!

### Current endpoints:

- <input type="checkbox" enabled checked> [GET /api/users/](http:localhost:8081/api/users/)
    - Returns a list of all users.
    - Optional query parameters:
        - `username`: Returns users where username match with the provided.
        - `limit`: Number of users to return (NOT DONE YET, will be defaulted to 50).
- <input type="checkbox" enabled checked> [POST /api/users/](http:localhost:8081/api/users/)
    - Creates a new user.
    - Post request body:
        - `username`: Username of the new user.
        - `password`: Password of the new user.
        - `email`: Email of the new user.
        - Optional fields: 
        - `active`: Whether the new user is active or not.
- <input type="checkbox" enabled checked> [PUT /api/users/](http:localhost:8081/api/users/)
- <input type="checkbox" enabled checked> [DELETE /api/users/](http:localhost:8081/api/users/)


- [GET /api/users/findById/:{id}](http:localhost:8081/api/users/findById/1)
    - Returns a user with the provided Path variable {`id`}.



