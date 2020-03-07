const express = require('express')
const app = express();
// const port = 2020


app.use('/public',express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("pages/index");
});

app.get('/about', function(req, res) {
    res.render('pages/about', {
        about : "halaman tentang",
        content: `saya dan kamu`
    });
});

app.get('/contact', function(req, res) {
    res.render('pages/contact', {
        name: 'Rifky Hartanto',
        Phonenumber: '083895092803'
    })
})

app.get('/Profile', function(req, res) {
    res.render('pages/Profile', {
        nama: 'Rifky Hartanto',
        kelas: 'x - rpl',
        sekolah: 'smk jakarta pusat 1'
    })
})


app.listen (2020,() => {
    console.log('Express running in port 2020')
});