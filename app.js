const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')))


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto${port}`));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});

app.get("/register", (req, res) => {
    
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
});

app.get("/login", (req, res) => {
    
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
})
