const { request } = require('express');
const express = require('express');
const app = express();
const bodyParser = request('body-parser');


app.use(bodyParser.json());


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

app.post('/login', function(request, response){
    const username = request.body.username;
    const password = request.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";
    
    if (username === mockUsername && password === mockPassword){
        response.json({
            success: true,
            message: 'password and username match',
            token: 'encrypted token goes here'
        })
    } else {
        response.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen(8000, function(){
    console.log("Server is running!");
});