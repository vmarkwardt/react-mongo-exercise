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
    .then((card) => res.status(201).json(card))
    .catch((err) => res.status(500).json(err));
  console.log('Successful User Update: create Card');
});

app.patch('/cards/:id', (req, res) => {
  Card.findByIdAndUpdate(req.body._id, req.body, { new: true }) //das neue Element soll zurück gegeben werden
    .then((data) => res.json(data))
    .catch((err) => res.json({ errors: [err] }));
  console.log('Successful User Update: patch Card');
});

app.delete('/cards/:id', (req, res) => {
  //Card.deleteOne({ _id: req.body._id }
  console.log('id>? ', req.params.id);

  Card.findByIdAndDelete(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ errors: [err] }));

  console.log('Successful User Update: delete Card!');
});
