const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type': "black",
        'origin': 'Yo mommas house' ,
        'waterTemp': '200' ,
        'steepTime': '180', 
        'caffeineLevel': true,
        'flavor': 'delicious'
    },

    'matcha': {
        'type': "green",
        'origin': 'Yo mommas house' ,
        'waterTemp': '200' ,
        'steepTime': '180', 
        'caffeineLevel': false,
        'flavor': 'delicious'
    },

    'unknown':{
        'type': "unknown",
        'origin': 'unknown' ,
        'waterTemp': '0' ,
        'steepTime': '0', 
        'caffeineLevel': false,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]) {
        response.json(tea[teaName])
    } else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}. Better go catch it!`)
})
