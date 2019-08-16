const Express=require('express');
var app=new Express();
books=[
    {
        'title':'Turning points',
        'author':'A.P.J.Abdul Kalam',
        'publisher':'HarperCollins',
        'date_of_publication':'8/9/2012',
        'distributor':'HarperCollins',
        'price':225,
        'Description':'Turning points'


    },
    {
        title:"Randamoozham",
        author:"M.T.Vasudevan Nair",
        publisher:"DC Books",
        date_of_publication:"December 1984",
        distributor:"DC Books",
        price:225,
        Description:"Malayalam novel"

    },
    {
        title:"Aarachaar",
        author:"K.R.Meera",
        publisher:"DC Books",
        date_of_publication:"1 November 2012",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    },
    {
        title:"Pathummayude Aadu",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books",
        date_of_publication:"April 1959",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Oru Desathinte Katha",
        author:"S. K. Pottekkatt",
        publisher:"DC Books",
        date_of_publication:"1971",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Oru Sankeerthanam Pole",
        author:"Perumbadavam Sreedharan",
        publisher:"DC Books",
        date_of_publication:"September 1993",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    },
    {
        title:"Naalukettu",
        author:"M. T. Vasudevan Nair",
        publisher:"DC Books",
        date_of_publication:"1958",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Ente Katha",
        author:"Kamala Suraiyya",
        publisher:"DC Books",
        date_of_publication:"1 February 1973",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"Balyakalasakhi",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books",
        date_of_publication:"1944",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    },
    {
        title:"Ini Njan Urangatte",
        author:"P. K. Balakrishnan",
        publisher:"DC Books",
        date_of_publication:"1973",
        distributor:"DC Books",
        price:225,
        Description:"Novel"
    }];
nav=[{
    link:"/books",
    title:"books"

},
{
    
        link:"/author",
        title:"author"
}
];

app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));

app.get('/index',(req,res)=>{
    res.render('index',{nav:nav,title:"Library"});
});
app.get('/books',(req,res)=>{
    res.render('books',{nav:nav,title:"books",books:books});
});
app.get('/readmore/:id',(req,res)=>{

    const x=req.params.id;
    res.render('readmore',{nav:nav,title:"books","books":books[x]});
});


app.listen(3000);