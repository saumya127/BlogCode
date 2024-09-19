const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index', {sampleBlogs, highlightSection});
});


app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog Page' });
});


app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});


app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Signup' });
});

app.get('/create', (req, res) => {
    res.render('create');
});

// Sample Blog Data
const sampleBlogs = {
    blogs: [
        { image: 'https://i.pinimg.com/564x/80/c1/00/80c1009e693609f617bb29bed0707ed5.jpg', title: 'First Blog Post', content: 'This is the content of the first blog post.' },
        { image: 'https://i.pinimg.com/564x/2c/ab/78/2cab78a8830951815f5f04a433cf4a4d.jpg', title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
        { image: 'https://i.pinimg.com/564x/b9/c3/48/b9c348c5822a243cb039b5da6b56a971.jpg', title: 'Third Blog Post', content: 'This is the content of the third blog post.' }
    ]
};

const highlightSection = {
    image: "https://i.pinimg.com/564x/44/b9/8e/44b98ea0ec307b62e4c6f85385190022.jpg",
    title: "Innovative Solutions",
    description: "Explore our cutting-edge technologies designed to solve real-world problems. From AI-driven platforms to IoT solutions, we are committed to innovation and excellence in every project we undertake."
  };
  



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
