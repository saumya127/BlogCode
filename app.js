const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});


app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog Page', blogs: sampleBlogs });
});


app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});


app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Signup' });
});

// Sample Blog Data
const sampleBlogs = [
    { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { title: 'Second Blog Post', content: 'This is the content of the second blog post.' }
];

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
