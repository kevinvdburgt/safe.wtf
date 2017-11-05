import 'babel-polyfill';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import knex from 'knex';
import bodyParser from 'body-parser';
import routes from './app/routes';
import knexconfig from './config/knex';

const port = process.env.PORT || 7000;

const app = express();

// Check for database migrations on startup and execute them
knex(knexconfig).migrate.latest();

// Setup serving static files
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'uploads')));

// Setup pug as the templating engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', 'resources', 'view'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Setup morgan for logging HTTP requests
app.use(morgan('tiny'));

// Load the app routes
app.use(routes);

// Process 404 pages
app.use((req, res) => res.status(404).render('page/error/404'));

// Process 500 pages
app.use((err, req, res, next) => res.status(500).render('page/error/500', {err}));

// Start listening
app.listen(port, () => {
  console.log(`Started listening on port ${port}`);
});
