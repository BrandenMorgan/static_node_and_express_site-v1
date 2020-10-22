custome styles

style.css
line 2
h1,h2,h3,h4,h5,p{
  font-family: 'Michroma', sans-serif; 
}
layout.pug 
    link(href="https://fonts.googleapis.com/css2?family=Michroma&family=Poiret+One&display=swap" rel="stylesheet")

line 6
h5{
    font-family: 'Merriweather', serif;
    letter-spacing: 1.3px;
    -webkit-text-transform: uppercase;
    text-transform: uppercase;
  }

line 71
.portfolio-me a{
    font-family: 'Merriweather', serif;
    font-weight: 600;
    color: #555;
    font-size: 13px;
    letter-spacing: 1.3px;
    -webkit-text-transform: uppercase;
    text-transform: uppercase;
}

line 96 
.portfolio-breadcrumb a{
  font-family: 'Merriweather', serif;
   font-weight: 600;
   font-size: 13px;
   letter-spacing: 2.5px;
   -webkit-text-transform: uppercase;
   text-transform: uppercase;
 }

 line 30 
 img {
 transition: box-shadow .3s; 
}

img:hover {
  box-shadow: 0 0 10px 5px black;
}

line 2 
body {
  background-image: linear-gradient(180deg, white, black);
}

line 3
.portfolio-intro {
  background-color: #121213;
  
}

line 130 
.portfolio-index{
  background-image: url('../images/code.jpg');
  margin: 0;
  padding: 10px 50px;
}

line 19 
h6{
    font-family: 'Merriweather', serif;
    color: white;
    letter-spacing: 1.3px;
    -webkit-text-transform: uppercase;
    text-transform: uppercase;
    font-weight: 600;
}