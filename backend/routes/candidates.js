const router = require('express').Router();
let Candidate = require('../models/candidate.model');

router.route('/').get((req, res) => {
  Candidate.find().then(candidates => res.json(candidates))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/agr').get((req, res) => {
  // Candidate.find()
  Candidate.aggregate([{ $match: { jobs: 'Developer'}}])
   .then(candidates => res.json(candidates))
    .catch(err => res.status(400).json('Error: ' + err));
});


 


router.route('/add').post((req, res) => {
  // const fullname = req.body.username;
  // const description = req.body.description;
  // const duration = Number(req.body.duration);
  // const date = Date.parse(req.body.date);
  
//destructuring in javascript
// console.log(req.body);
// const { fullname,email,mobile,jobs } = req.body;
// console.log(fullname+email+mobile+jobs)
  const fullname = req.body.fullname;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const jobs = req.body.jobs;
  const updatedby = '';

//Create Instance
  const newCandidate = new Candidate({
    fullname,
    email,
    mobile,
    jobs,
    updatedby,
  });

  newCandidate.save()
  .then(() => res.json('A Candidate added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Candidate.findById(req.params.id)
    .then(candidate => res.json(candidate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Candidate.findByIdAndDelete(req.params.id)
    .then(() => res.json('candidate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Candidate.findById(req.params.id)
    .then(candidate => {
      candidate.fullname = req.body.fullname;
      candidate.email = req.body.email;
      candidate.mobile = Number(req.body.mobile);
      candidate.jobs = req.body.jobs;
      candidate.updatedby=req.body.updatedby;  
      candidate.others=req.body.others;   
      candidate.save()
        .then(() => res.json('candidate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;