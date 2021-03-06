// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      user: req.body.user,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.users.user,
        id: req.users.id,
      });
    }
  });

  app.get("/api/Users/me", (req, res) => {
    console.log("Value of user ", req.user)
    db.User.findOne ({
      where:{
        id:req.user.id
      }
    }).then(function(results){
      res.json(results);
      console.log("the results are ", results)
    })
  });

  app.get("/api/Relaxes", (req, res) => {
    db.Relax.findOne({
      where: {
        id: Math.floor(Math.random() * 10 + 1),
      },
    }).then((result) => {
      res.json(result);
    });
  });

  // app.post("/api/completeWorkout/:userId", (req, res) => {
  //   // console.log("hit!!!!!");
  //   // console.log(req.body);
  //   const { columnToUpdate } = req.body;
  //   console.log("columntoupdate ", columnToUpdate)
  //   db.User.update(
  //     { relax: req.body.relax },
  //     { where: { id: req.params.userId } }
  //   ).then((res) => {
  //     console.log("user updated");
  //   });
  //   res.send("success");
  // });

  app.post("/api/completeWorkout/:userId", (req, res) => {
    const { columnToUpdate } = req.body;
    console.log("columntoupdate ", columnToUpdate)
    db.User.update(
      { [columnToUpdate]: req.body.valueToUpdateWith },
      { where: { id: req.params.userId } }
    ).then((res) => {
      console.log("user updated");
    });
    res.send("success");
  });
};
