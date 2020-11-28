const express = require('express');
const app = express();


const mockUserData = [
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/users', function(request, response){
    response.json({
        success: true,
        message: 'succesfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(request, response){
    console.log(request.params.id);
    response.json({
        success: true,
        message: 'Got one user. Period.',
        users: request.params.id
    })
})

app.listen(8000, function(){
    console.log("Server is running!");
});