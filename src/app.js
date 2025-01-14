const path = require('path')
const express = require('express')
const hbs =require('hbs')


const app = express()
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path .join(__dirname,'../templates/partials')

//Setup handlebars engine and views loaction
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use (express.static(publicDirectoryPath))

app.get('',(req,res) =>{
    res.render('index',{
        title:'ExpressApp',
        name: 'Mycode '
    })
})
app.get('/about',(req,res) =>{
    res.render('about',{
        title:'About Me',
        name: 'Mycode'
    })
})
app.get('/help',(req, res) => {
    res.render('help',{
      helpText:'This is some helpful text.',
        title:'Help',
        name:'Mycode'

    })

})

app.listen(3000, () =>{
    console.log('Server is up on port 3000.')

})
app.get('/ExpressApp',(req,res)=>{
    res.send({
        forecast:'It is snowing',
        location :'Philadelphia'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Bishal Chandra',
        errorMessage:'Help article not found.'

    })

})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Bishal Chandra',
        errorMessage:'Page not found.'
    })
})