require ("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


const app = express();
const PORT = 3000;

// kGafAKrEtuMlUVZc
// mongodb+srv://mansikain2002:<password>@cluster0.5pdlhal.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(process.env.DATABASE_URI);

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    year: String,
});

const Book = mongoose.model('Book', bookSchema);
app.use(bodyParser.json());

app.get('/api/books', async(req, res)=> {
    try{
        const allBooks = await Book.find();
        res.status(200).json(allBooks);
    }catch(error){
        res.status(500).json({ error: "Error retrieving books" });
    }
});

app.post('/api/books', async(req, res)=>{

    const newBook = req.body;

    try{
        const existingBook = await Book.findOne({title:newBook.title});
        if(existingBook){
            return res.status(400).json({ error: "Duplicate book entry" });
        }

        const createdBook= await Book.create(newBook);

        res.status(201).json(createdBook);
    } catch(error) {
        res.status(500).json({ error: "Error adding a new book" });
    }
});

app.put('/api/books/:id', async(req, res)=>{
    const bookId = req.params.id;
    const updateBookDetails = req.body;

    try{
        const bookToUpdate =await Book.findById(bookId);

        if(!bookToUpdate){
            return res.status(404).json({ error: "Book not found" });
        }

        Object.assign(bookToUpdate, updateBookDetails);
        const updatedBook=await bookToUpdate.save();

        res.status(200).json(updatedBook);
    } catch (error){
        res.status(500).json({ error: "Error updating book details" });
    }
});


mongoose.connection.once('open', ()=>{
    console.log("Connected to mongoDb!");
    app.listen(PORT, ()=>{
        console.log(`Server on PORT ${PORT}`);
    });
});