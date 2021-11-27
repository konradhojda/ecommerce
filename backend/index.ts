import express from 'express';
import data from './data'
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    product ? res.send(product) : res.status(404).send({message: "Product not found."});
})



app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
