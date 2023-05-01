const express = require('express');
//const exphbs = require('express-handlebars');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const path = require('path');
const alert = require('alert'); 
const app = express();
const PORT = process.env.PORT || 8080
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get('', (req, res) => {
    
    res.render('index',{layout:'./layouts/index-layout'})
});
app.get('/assistant', (req, res) => {
    
    res.render('assistant',{layout:'./layouts/assistant-layout'})
});
app.get('/budget', (req, res) => {
    
    res.render('budget',{layout:'./layouts/budget-layout'})
});
app.get('/calender', (req, res) => {
    
    res.render('calender',{layout:'./layouts/calender-layout'})
});
app.get('/cases', (req, res) => {
    
    res.render('cases',{layout:'./layouts/cases-layout'})
});
app.get('/compliance', (req, res) => {
    
    res.render('compliance',{layout:'./layouts/compliance-layout'})
});
app.get('/contracts', (req, res) => {
    
    res.render('contracts',{layout:'./layouts/contracts-layout'})
});
app.get('/lawfir_cases', (req, res) => {
    
    res.render('lawfir_cases',{layout:'./layouts/lawfir-cases-layout'})
});
app.get('/lawfirm_contracts', (req, res) => {
    
    res.render('lawfirm_contracts',{layout:'./layouts/lawfirm-contracts-layout'})
});
app.get('/lawfirm_tasks', (req, res) => {
    
    res.render('lawfirm_tasks',{layout:'./layouts/lawfirm-tasks-layout'})
});
app.get('/lawfirmcontacts', (req, res) => {
    
    res.render('lawfirmcontacts',{layout:'./layouts/lawfirmcontacts-layout'})
});
app.get('/lawfirmnotes', (req, res) => {
    
    res.render('lawfirmnotes',{layout:'./layouts/lawfirmnotes-layout'})
});

app.get('/lawfirms', (req, res) => {
    
    res.render('lawfirms',{layout:'./layouts/lawfirms-layout'})
});
app.get('/lawfirmstatement', (req, res) => {
    
    res.render('lawfirmstatement',{layout:'./layouts/lawfirmstatement-layout'})
});
app.get('/lawfirmview', (req, res) => {
    
    res.render('lawfirmview',{layout:'./layouts/lawfirmview-layout'})
});
app.get('/learn', (req, res) => {
    
    res.render('learn',{layout:'./layouts/learn-layout'})
});
app.get('/resources', (req, res) => {
    
    res.render('resources',{layout:'./layouts/resources-layout'})
});
app.get('/tasks', (req, res) => {
    
    res.render('tasks',{layout:'./layouts/tasks-layout'})
});
app.get('/vendors', (req, res) => {
    
    res.render('vendors',{layout:'./layouts/vendors-layout'})
});
app.listen(PORT, console.log(`Server running on port ${PORT}`));
