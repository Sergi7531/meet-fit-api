# Welcome to MeetFitApi!

### Current endpoints:

- [GET /api/users/](http:localhost:8081/api/users/)
    - Returns a list of all users.
    - Optional query parameters:
        - `username`: Returns users where username match with the provided.
        - `limit`: Number of users to return (NOT DONE YET, will be defaulted to 50).
- [POST /api/users/](http:localhost:8081/api/users/)
    - Creates a new user.
    - Post request body:
        - `username`: Username of the new user.
        - `password`: Password of the new user.
        - `email`: Email of the new user.
        - Optional fields: 
        - `active`: Whether the new user is active or not.
- [PUT /api/users/](http:localhost:8081/api/users/)
- [DELETE /api/users/](http:localhost:8081/api/users/)


- [GET /api/users/findById/:{id}](http:localhost:8081/api/users/findById/1)
    - Returns a user with the provided Path variable {`id`}.






## Things to achieve sooner or later:

<pre>
<input type="checkbox" enabled checked> User register<br/>
<input type="checkbox" enabled checking> User adding<br/>
<input type="checkbox" disabled checking> User updating<br/>
<pre>
<input type="checkbox" enabled checking> User <br/>
<input type="checkbox" enabled checking> User <br/>
</pre>
<input type="checkbox" disabled checking> User deleting<br/>
</pre>