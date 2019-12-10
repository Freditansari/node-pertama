const express = require('express'); //==> beri tahu node js perlu express
const app = express(); // ==> start express
const port = process.env.PORT || 3000; //==> deklarasi port yang di buka 3000 atau dideklarasi dari environment variable

app.set('view engine', 'ejs');

const patient =[{ //==> deklarasi array object patient
    name: 'Fredy', 
    age: 36,
    address:'Jl. Maju mundur no.20',
    city: 'Jakarta',

},
{
    name: 'Joseph', 
    age: 40,
    address:'Jl. Maju mundur no.18',
    city: 'Jakarta',

},

]

app.get('/patients', (req, res)=>{ //==> deklarasi rest-api end-point patients
    res.send(patient); //=> kembalikan array object patient
})

app.get('/', (req, res) => { //==> deklarasi rest-api / (root)
    res.send('Hello World!'); //==> kembalikan string hello world
});

app.get('/hello-world', (req, res) => {

    res.render('index');
    
});

app.listen(port, () => { //==> suruh node js untuk mendengarkan port akses sesuai variable port
    console.log(`hello world app rest-api runs on http://localhost:${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.