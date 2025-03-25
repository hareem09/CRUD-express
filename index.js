//requiring the module express
const express=require('express')
const app=express()
//initialing port
const port=5000
//doing this so that express can understand json data
app.use(express.json())

//storing data
let books=[{
  id:1,
  title:'The Alchemist',
  author:'Paulo Coelho',
  year:1988
},{
  id:2,
  title:'The Silent Patient',
  author:'Alex Michaelides',
  year:2019
}]

//Http methods
//fetching books
app.get('/books',(req,res)=>{
  res.json(books )
})

//using id as params to fetch data according to it
app.get('/books/:id',(req,res)=>{
   const book=books.find((book)=>book.id==req.params.id)
   if(!book)
   return res.status(404).json({message:"Book is not found"})
   res.json(book)
})

//adding new book 
app.post('/addbook',(req,res)=>{
  //destructuring is used
  const {title,author,year}=req.body
  if(!title||!author||!year)
    return res.status(400).json({message:"please enter the details"})
  const newBook = { id: books.length + 1, title, author, year };
   books.push(newBook)
  res.json(books)
})

//updating the data
app.put('/updatebook/:id',(req,res)=>{
    const book=books.find((book)=>book.id==req.params.id)
    if(!book)
      return res.status(404).json({message:"Book not found"})
    book.id=req.body.id
    book.title=req.body.title
    book.author=req.body.author
    book.year=req.body.year
    res.json(books)
})

app.delete('/deletebook/:id',(req,res)=>{
  //id that is not matched will be remain as it is, and that is left is deleted
    books=books.filter((book)=>book.id!=req.params.id)
    res.json(books)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  
  
