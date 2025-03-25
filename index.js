const express=require('express')
const app=express()

const port=5000

app.use(express.json())

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

app.get('/books',(req,res)=>{
  res.json(books )
})

app.get('/books/:id',(req,res)=>{
   const book=books.find((book)=>book.id==req.params.id)
   res.json(book)
})

app.post('/addbook',(req,res)=>{
  const {id,title,author,year}=req.body
  const book={
  id:id,
  title:title,
  author:author,
  year:year
  }
   books.push(book)
  res.json(books)
})

app.put('/updatebook/:id',(req,res)=>{
    const book=books.find((book)=>book.id==req.params.id)
    book.id=req.body.id
    book.title=req.body.title
    book.author=req.body.author
    book.year=req.body.year
    res.json(books)
})

app.delete('/deletebook/:id',(req,res)=>{
    books=books.filter((book)=>book.id!=req.params.id)
    res.json(books)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  