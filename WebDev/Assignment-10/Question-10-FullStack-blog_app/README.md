## Backend for the Blog web application.

## PORT = 8080

## Endpoints: (All endpoints are same as asked, only the "Get all blogs of specific user" is different)

### Register:  /user/register  
    method: POST

### Login:  /user/login
    method: POST

### Add Blog:  /blog/add
    method: POST
    Header: Authorization: Bearer ${token}

### Get all Blogs:  /blog
    method: GET

### Delete Blog by Id:  /blog/:id
    method: DELETE
    Header: Authorization: Bearer ${token}

### Update Blog by Id: /blog/:id
    method: PATCH
    Header: Authorization: Bearer ${token}

### Get Specific Blog by Id: /blog/:id
    method: GET
    Header: Authorization: Bearer ${token}

### Get Blogs of specific User: /blog/myblog/:authodId
    method: GET
    Header: Authorization: Bearer ${token}
