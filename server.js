const express = require('express');
const app = express();
const PORT = 5000; // You can change the port as needed

// Define the route for /helloworld
app.get('/helloworld', (req, res) => {
    res.status(200).json({ message: 'Hello, world! v3' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
