fetch('http://localhost:8080/api/v1/users')
.then(response => response.json())
.then(response => console.log(response))


fetch('http://localhost:8080/api/v1/addresses')
.then(response => response.json())
.then(response => console.log(response))

fetch('http://localhost:8080/api/v1/items')
.then(response => response.json())
.then(response => console.log(response))

fetch('http://localhost:8080/api/v1/orders')
.then(response => response.json())
.then(response => console.log(response))
