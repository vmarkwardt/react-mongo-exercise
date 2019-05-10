const setupServer = require('./setup-server');
const app = setupServer();

const Card = require('./models/Card');

app.get('/cards', (req, res) => {
  Card.find()
    .then((cards) => res.json(cards))
    .catch((err) => res.json(err));
});

app.post('/cards', (req, res) => {
  Card.create(req.body)
    .then((card) => res.status(201).json(card))
    .catch((err) => res.status(500).json(err));
  console.log('Successful User Update');
});
