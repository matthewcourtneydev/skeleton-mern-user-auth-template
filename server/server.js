const express = require('express');
const app = express();
const port = 6060;

app.get('/api', (req, res) => {
    res.json({"myArray": [1, 2, 3, 4]})
})
 
app.listen(port, () => {
    console.log(`Sever is now running on PORT: ${port}`)
})