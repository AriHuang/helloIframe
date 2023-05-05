const express = require('express')
const app = express()

// serve static assets from the public directory
app.use(express.static('public'))

// define the route for the home page
app.get('/', function(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Class</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <style>
        /* limit the size of the logo */
        img.logo {
          max-width: 100px;
          max-height: 100px;
        }
      </style>
    </head>
    <body>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My Website</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="quiz-tab">Quiz</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-3">
            <img src="logo.png" alt="Logo" class="img-fluid logo">
            <div class="list-group mt-3">
              <a href="#" class="list-group-item list-group-item-action active">Home</a>
              <a href="#" class="list-group-item list-group-item-action" id="quiz-link">Quiz</a>
              <a href="#" class="list-group-item list-group-item-action">Contact</a>
            </div>
          </div>
          <div class="col-md-9">
            <h1>Your website</h1>
            <p>This is your website!</p>
            <div id="quiz-embed" style="display: none;">
              <iframe src="https://www.grouplrn.com/groupsBuildIn/whUh3jMB3RfSTrBeSgxws4" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper-base.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <script>
              // when the quiz link is clicked, show the quiz embed
        $('#quiz-link').on('click', function(event) {
          event.preventDefault()
          $('#quiz-embed').show()
        })
      </script>
    </body>
    </html>
  `)
})

// start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000')
})
