const setupServer = require('./setup-server');
const app = setupServer();

const Card = require('./models/Card');

app.get('/cards', (req, res) => {
  Card.find()
    .sort({ createDate: 'desc' })
    .then((cards) => res.json(cards))
    .catch((err) => res.json(err));
});

app.post('/cards', (req, res) => {
  Card.create(req.body)
    .then((card) => {
      res.status(201).json(card);
      console.log('Successful User Update: create Card');
    })
    .catch((err) => res.status(500).json(err));
});

app.patch('/cards/:id', (req, res) => {
  Card.findByIdAndUpdate(req.body._id, req.body, { new: true }) //das neue Element soll zurück gegeben werden
    .then((data) => {
      res.json(data);
      console.log('Successful User Update: patch Card');
    })
    .catch((err) => res.json({ errors: [err] }));
});

app.delete('/cards/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json(data);
      console.log('Successful User Update: delete Card!');
    })
    .catch((err) => res.json({ errors: [err] }));
});
