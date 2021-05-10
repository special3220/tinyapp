const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs")


const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get('/urls/:urlId', (req, res)=> {
  console.log(req.params.id)
  let shortURL = req.params.urlId;
  let longURL = urlDatabase[shortURL];
  console.log(shortURL, longURL)
  const templateVars = {shortURL, longURL}
  console.log(templateVars);
  res.render("urls_show", templateVars)
})

app.get('/urls', (req, res)=> {
  const templateVars = {urls: urlDatabase}
  res.render("urls_index", templateVars)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/urls.json', (req, res) => {
  res.json(urlDatabase);
})

app.get("/hello", (req, res) => {
  const a = 1;
  res.send(`a equals = ${a}`)
});

app.get("/fetch", (req, res) => {
  res.send(`a equals = ${a}`)
});

app.listen(PORT, () => {
  console.log(`Server is Listening to http://localhost:${PORT}`)
})