const   express     = require('express'),
        router      = express.Router(),
        db          = require('../models/db'),
        bcrypt      = require('bcryptjs'),
        jwt         = require('jsonwebtoken');

// ==================================================
// USER
// ==================================================
// Create a new user
router.post("/api/users", function (req, res) {
  db.User.create(req.body).then(function (apia) {
    res.json(apia);
  });
});

router.get('/api/user', function (req, res) {
  // console.log(req.user);
  res.json(req.user);
});
  
router.post('/api/user/register', async function (req, res) {
  console.log(req.body);
  req.body.email = req.body.email.toLowerCase();
  //has the password
  const password = await bcrypt.hash(req.body.password, 10);
  //create user in database
  const user = await db.User.create({
    role: req.body.role,
    familID: req.body.familyID,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    country: req.body.country,
    email: req.body.email,
    password: password
  });
  //create cookie for user 
  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });
  console.log("\n\n\n\n\n\n\n\n\n", user);
  res.json(user);
});

router.post('/api/user/login', async function (req, res) {
  const user = await db.User.find({ email: req.body.email });
  if (!user) {
    res.json({message: 'No User found.'});
    return;
  };
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    res.json({message: 'Entered e-mail and password do not match!'});
    return;
  };
  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365
  });
  res.json(user);
});

router.post('/api/user/signout', function(req, res) {
  res.clearCookie('token');
  res.json('User is signed out.');
});




// router.get('/user/:id', (req, res) => {
    
//   User.find({ id: req.params.id })
//     .then((data) => {
//       console.log('User data: ' + data);
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log('User error: ' + err);
//     });

// });

// router.get('/user/:id/workHours', async (req, res) => {
//     try {
//     res.status(200).json(data);
//     } catch (err) {
//       res.status(400).json({
//         message: "Some error occured",
//         err
//       });
//     }
// });

// // SIGNOUT ROUTE
// app.post('/api/user/signout', function(req, res) {
//   res.clearCookie('token');
//   res.json('Signed out.');
// });

// router.get('/user/:id/payment', async (req, res) => {
//     try {
//     res.status(200).json(data);
//     } catch (err) {
//       res.status(400).json({
//         message: "Some error occured",
//         err
//       });
//     }
// });

// router.get('/user/:id/goals', async (req, res) => {
//     try {
//     res.status(200).json(data);
//     } catch (err) {
//       res.status(400).json({
//         message: "Some error occured",
//         err
//       });
//     }
// });

// router.get('/user/:id/notes', async (req, res) => {
//     try {
//     res.status(200).json(data);
//     } catch (err) {
//       res.status(400).json({
//         message: "Some error occured",
//         err
//       });
//     }
// });

// router.get('/user/:id/diary', async (req, res) => {
//     try {
//     res.status(200).json(data);
//     } catch (err) {
//       res.status(400).json({
//         message: "Some error occured",
//         err
//       });
//     }
// });

module.exports = router;