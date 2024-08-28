import express from 'express';
import bd from 'body-parser';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes } from './routes/main.js'; // Ensure this path is correct

const app = express();
const port = 3030;

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body Parser setup --> Middleware
app.use(bd.urlencoded({ extended: true }));

// Public folder setup --> Static Files
app.use('/static', express.static(path.join(__dirname, '..', 'public'))); // Adjust path if `public` is outside `src`

// Routes setup --> Paths
app.use('', routes);

// Handlebars setup --> Template Engine
app.set('view engine', 'hbs');

// Views setup --> Pages
app.set('views', path.join(__dirname, '..', 'views')); // Adjust path to point to the correct location of `views`
hbs.registerPartials(path.join(__dirname, '..', 'views', 'partials')); // Adjust path for partials

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
