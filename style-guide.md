// Color 
$primary-color: #ff3d4f;
$white-color: #fff;
$bg-color: #f6f5ff;
$dark-color: #000a2d;
$grey-color: #6e7797;
//Font Family 
 #Relway 300 400 600 800 
//global class
*,
*::after,
*::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body {
    font-size: 100%;
    font-family: relway;
    background-color: $white-color;
}

.container {
    width: 1140px;
    margin: auto;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    display: inline-block;
}

li {
    list-style: none;
}

h1,h2,h3,h4,h5,h6{
    font-family: relwayBold;
}
p,a{
    font-family: relwayThin;
}