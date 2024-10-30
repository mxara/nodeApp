// ---------------------- LIBRARIES ----------------
const express = require('express'); // Импорт библиотеки Express JS
const morgan = require('morgan');
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const postRoutes = require("./routes/post-routes");
const postApiRoutes = require("./routes/api-post-routes")
const contactsRoutes = require("./routes/contacts-routes");

const app = express()
const db = "mongodb+srv://new-user:Pass321@cluster0.ukknj.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"

// ------------------------------ DATABASE -----------------------------

mongoose 
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log("Connected to DB"))
    .catch((error) => console.log(error))

// -------------------------------------------

app.get('/', (req, res) => {
    res.render("index.ejs")
}) // отслеживание главной страницы

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) // пример middlewar 
// middlewar -- это функциф которая выполняеться в промежутке между запросом к серверу и ответом, короче говоря при запускес сервера или переходе
app.use(methodOverride('_method'));

app.use(postRoutes);
app.use(contactsRoutes);
app.use(postApiRoutes);

app.set('view engine', "ejs") // шаблонизатор
app.use(express.urlencoded({ extended: false })) // импорт бодипарсера
app.use(express.static("public"))

app.get('/about', (req, res) => {
    res.render("about")
})


app.post("/check-user", (req, res) => { // после выполнения метода отправки данных, данные переадресовываються
    let username = req.body.username // содержимое из URL адреса мы запрашиваем и ложим в переменую
    if (username == "") {
        return res.redirect("/") // redirect -- переодресовываем информацию на другую страницу
    }
    else {
        return res.redirect('/user/' + username)
    }
});

app.get('/user/:username', (req, res) => {
    let data = {username: req.params.username, hobbies: ["Football", "Skateboard", "Basketball"]} // params -- динамическое значение которое задаеться в URL строке
    res.render("user.ejs", data)
}) // динамическое значение -- назначаем статичный URL адрес а после ставим двоеточее и после него ДИНАМИЧНОЕ значение которое меняеться в зависимости чего либо

const PORT = 3000

// --------------------- SERVER LAUNCHING ----------------------------------------

app.listen(PORT, () => {
    console.log(`server started http://localhost:${PORT}`)
}) // при запускe сервера

// команда запуска сервера в терминале
// node index