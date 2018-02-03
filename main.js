@font-face 
{
    font-family: fontey;
    src: url(Courgette-Regular.ttf);
}

body::-webkit-scrollbar 
{
  width: 0.7em;
  transition: ease-in-out 0.2s;
}

body::-webkit-scrollbar-thumb :hover{
  width: 0.7em;
}

 
body::-webkit-scrollbar-track 
{
  background-color:rgba(100, 100, 100, 0.45);
}
 
body::-webkit-scrollbar-thumb 
{
  background-color: #555;
  border-radius: 20vw;
}

body
{
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
  padding-bottom: 15vw;
  background: linear-gradient(135deg,#69a1b8,#5d96ad);
  font-family: calibri;
  /*transition: ease-in-out 0.2s;*/
}

a{
  text-decoration: none;
}

ul {
  list-style-type: none !important;
    border-radius: 0.3vw;
    margin-left: 2vw;
    padding: 1vw;
}

#circular{
    background: linear-gradient(135deg,#80b7cd,#5d96ad);
    margin-top: 5vw;
    box-shadow: 0vw 0.1vw 1vw 0vw rgba(80, 80, 80, 0.4);
    width: 40vw;
    height: 31vw;
    border: 0.1vw solid #f5f5f5;
    border-radius: 1vw;
}


nav
{
  height: auto;
  padding-top: 2vw;
}

nav #hey1
{
    font-weight: 100;
    height: 12vw;
    margin: 0;
    vertical-align: middle;
    cursor: pointer;
    /*transition: all 0.2s ease-in-out;*/
    border-radius: 500vw;
}

nav #hey2
{
    height: 4.5vw;
    margin: 0;
    vertical-align: middle;
    cursor: pointer;
    /*transition: all 0.2s ease-in-out;*/
}



div#main-input{
    margin-top: 2vw;
    padding-bottom: 11vw;

}

#main-input #search-main{
  outline: none;
    width: 35vw;
    height: 5vw;
    border: 0.2vw solid whitesmoke;
    /* background-color: rgba(227, 222, 222, 0.24); */
    color: #78acc1;
    font-size: 2.8vw;
    border-radius: 5vw;
    /*transition: inherit;*/
    padding-left: 2vw;
    padding-right: 5vw;
    background: whitesmoke;
}

#main-input #search-main::-webkit-input-placeholder {
  color: #78adc1;
  font-size: 2vw;
}

#main-input #search-main::-webkit-search-cancel-button {
  display: none;
}

div#main-input svg{
    position: absolute;
    color: white;
    fill: #78adc1;
    height: 3.5vw;
    background: whitesmoke;
    width: 3.5vw;
    right: 33.3vw;
    top: 26vw;
    border-radius: 5vw;
    padding: 0.2vw;
    cursor: pointer;
    /*transition: inherit;*/
}

div#main-input svg:hover{
  fill: snow;
  background:#78adc1;
}

 #feeds{
    width: 95vw;
    margin-left: 2vw;
 }

  #feeds p{
  width: auto;
  height: auto;
  background-color: transparent;
  border-radius: 0.5vw;
  border: 0.2vw solid whitesmoke;
  color: whitesmoke;
  padding:1vw;
  float: left;
  margin-left: 3vw;
  font-weight: 320;
  cursor: pointer;
  /*transition: ease-in-out 0.2s;*/
 }

 #feeds p:hover{
  background-color: whitesmoke;
  color: #777;
 }

p:empty { 

  display: none !important;

 }

 tr:empty { 

  display: none !important;

 }

  td:empty { 

  display: none !important;

 }

.infobox tbody tr th[colspan] {

    padding-top: 0.6vw;
    /* margin-left: -1vw; */
    /* margin-top: 1vw; */
    margin-bottom: 0.2vw;
    padding: 1vw;
    /* border-radius: 50vw; */
    padding-bottom: 0.8vw;
    /* font-weight: 100 !important; */
    color: #313131 !important;
    width: 25vw;
    text-align: center !important;
    display: inline-block; }

 tbody tr th[colspan] a {
    color: whitesmoke !important;
 }

article
{
    width: 80vw;
    /* background: #f3f3f3; */
    padding: 0;
    text-align: center;
    height: auto;
    margin-bottom: -2vw;
    display: none;
    overflow: hidden;
    display: none;
    align-items: center;
    justify-content: center;
}

#boundry{
  margin-top: 3vw;
  width: 100vw;
  /*transition: 0.3s cubic-bezier(1, -0.05, 0.05, 0.43);*/
}

article div span
{
  color: white;
  font-style: italic;
  text-shadow: 0.04vw 0.04vw 0.04vw rgba(25, 25, 25, 0.6);
  -webkit-font-smoothing: antialiased;

}

#smartAns{
    display: none;
    padding: 1vw;
    width: 85vw;
    font-weight: 600;
    font-size: 2.5vw;
    color: whitesmoke;
    border-radius: 0.5vw;
    background: rgba(61, 107, 125, 0.53);
    margin-bottom: 1vw;

}




div#about_Section{
  height: 0vw;
  width:0.01vw;
  overflow: hidden;
  /*transition: all 0.3s ease-in-out 0s;*/
  border-radius: 100%;
  background-color: #fff;
}


div#about_Section hr{
  background-color: #fff;
  height: 0.25vw;
  width: 40vw;
  outline: none;
  border:none;
  display: block !important;
  border-radius: 1vw; 
}

div#about_Section #rule{
  margin-top: 3.5vw;
}



div#about_Section #logo{
  float: left;
  height: 6.3vw;
  width: 6.5vw;
  border:0.4vw solid whitesmoke;
  margin-bottom: 1.5vw;
  margin-left: 33vw;
  cursor:default;
  margin-top: 2.5vw;
  border-radius: 1vw;
}

div#about_Section #logo img{
height: 6vw;
}





div#about_Section #heylle_info{
  margin-top: 3.2vw;
  margin-left: 15vw;
  color: whitesmoke;
  font-size:1.5vw;
  text-align: center;
  width: 30%;
  font-family:sans-serif; 
  font-weight: 700;
}

div#guys{
  margin-top:2.5vw;
  height:auto;
  width: 50vw;
  text-align: center;
  font-family:sans-serif; 
  font-size: 2.2vw;
}

div#guys a{
  position: relative;
  color: whitesmoke;
  text-decoration: none;
}



div#arnav{
  margin-left:7.5vw;
  float: left;
  width: 5vw
  z-index: -55;
  padding-right: 5vw;
  border-right:0.2vw solid #fff;

}


div#saurav{
  margin-right:7.5vw;
  float: right;
  width: 5vw
  z-index: -55;

}

div#guys a:before{
  content: "";
  position: absolute;
  width: 100%;
  height: 0.2vw;
  bottom: 0;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

div#guys a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

div#menu
{
  position:absolute;
  left:2vw;
  bottom:1.2vw;
  height:auto;
  width:5vw;
  border-radius: 2vw;
  color:whitesmoke;
  background-color: #999;
  padding-top: 0;
  font-weight: bold;
  font-size: 3.5vw;
  z-index: 100;
  line-height: 0.3;
  padding-top:0.1vw;
  padding-left: 0.2vw;
  padding-right: 0.2vw;
  padding-bottom:1.5vw;
  cursor:pointer; 
  text-align: center;
  transition: 0.01s ease-out;
}


div#home-bar #dots:hover ul {
    height: 10vw;
    box-shadow: 0 0.2vw 4px 0.1vw rgba(0, 0, 0, 0.47);
}

div#home-bar #dots ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    vertical-align: center;
    position: fixed;
    bottom: 6vw;
    height: 0vw;
    overflow: hidden;
    background-color: whitesmoke;
    width: 10vw;
    left: 3vw;
    transition: inherit;
    padding: 0;
    border-radius: 1vw;
    transition: inherit;
    
}

div#home-bar #dots ul li {
    vertical-align: middle;
    text-align: center;
    margin: 0;
    padding-top:1vw;
    padding-bottom: 1vw;
    transition: inherit;
}

div#home-bar #dots ul li:hover a{
  color: #389cc3;
}

div#home-bar #dots ul li a
{
    color: #555;
    text-decoration: none;
    font-size: 1.5vw;
    font-weight: 100;
    font-family: fontey;
    transition: all 0.1s ease-in;
    cursor: pointer;
    display: block;
    padding: 0.5vw;
}


div#home-bar
{
  position: fixed;
  bottom: 2vw;
  height: 3vw;
  background-color:transparent;
  width: 100vw;
  color: whitesmoke;
  transition: 0.2s ease-in-out;
}

#menuimg{
    height: 3vw;
    /* margin-bottom: 5vw; */
    border-radius: 500vw;
    box-shadow: 0 0 1vw 0.1vw rgba(0, 0, 0, 0.3);
}

div#home-bar #dots{
  line-height: 0.01vw;
  padding-left: 0.6vw;
  font-size: 5vw;
  margin-left:5vw;
  float: left;
  cursor: pointer;
  padding-bottom: 5vw;
  transition: 0.3s ease-in-out;
}



div#home-bar span{
  line-height: 2.5vw;
  float: right;
  font-size: 2vw;
  margin-right:3vw;
  font-family: fontey;
}

div#ResultIcon{
  display: inline-block; 
  background-color: #55b3d8;
  height: 5vw;
  width: 5vw;
}

#wikipedia{
    height: 0vw;
    width: 0vw;
    background: #a6c7d5;
    border-radius: 0.5vw;

    overflow: hidden;
    margin-bottom: 3vw;

}

div#RichWIki{
    height: auto;
    display: none;
}

span#infobox .mw-parser-output{
  display: none;
}

span#infobox{
    width: 36.1vw;
    display: inline-block;
    /* background: #dfdfdf; */
    margin-left: -0.1vw;
    height: 14vw;
    margin-top: -0.7vw;
    margin-bottom: -0.6vw;
    /* border-bottom: 1.5vw solid #dfdfdf; */
    overflow: hidden;
    color: #444 !important;
}

span#infobox tr{
    transition: 0.3s ease-in-out;
    display: block;
    padding-left: 1vw;
    /* margin-top: 0.1vw; */
    margin-left: -0.1vw;
    border-radius: 0.2vw;
    width: 34vw;
    margin: 0.5vw;
    /* background: yellowgreen; */
    background: #e0e0e0;
    /* border: 0.1vw solid hsl(0, 0%, 76%); */
    color: #333;
}

  
span#infobox a{
  color: #333 !important;
  transition: 0.3s ease-in-out;
}

span#infobox sup{
  display: none;
}

#output-R #moveM{
    display: inline-block;
    font-size: 1.2vw;
    padding-right: 1vw;
    width: 34vw;
    height: 14vw;
    float: left;
    margin-left: 1vw;
    overflow: hidden;
    line-height: 1.75vw;
}

span#infobox ul{
  margin:0;
  padding:0;
}

span#infobox ul li{
float: left;
margin-left: 0.5vw;
}

span#infobox br{
  display: none;
}

span#infobox span{
  padding-left: 0.5vw ;
  padding-right: 0.5vw;
}

span#infobox tr td{
  background: transparent !important;
  width: 28vw;
  font-weight: 400;
}

span#infobox .image ,span#infobox .mbox-image,span#infobox .mbox-text{
  display: none;
}

span#infobox td[colspan],span#infobox th[colspan]{
  display: none !important;
}

p#output-R medium{
    font-size: 1.5vw;
}

div#RichWIki p#output-R
{
padding-top: 0.5vw; */
    font-size: 1.2vw;
    line-height: 1.6vw;
    color: #444 !important;
     background-color: hsla(0,0%,92%,1);
    /* padding-bottom: 2vw; */
    cursor: pointer;
    border-radius: 0.2vw;
    box-shadow: 0vw 0.2vw 0.5vw rgba(0, 0, 0, 0.5);
    /*transition: 0.3s ease-in-out;*/
    /* margin-bottom: 2vw; */
    width: 87vw;
    /* float: left; */
    height: auto;
    overflow: hidden;
    /* padding-right: 1vw; */
    /* padding-left: 1vw; */
    text-align: justify;
    font-weight: 100;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0.5vw;

}

div#RichWIki p#output-R:hover{
  color: #222 !important;
  background-color: hsla(0,0%,100%,1);
  box-shadow: 0vw 1vw 2vw 2px rgba(0, 0, 0, 0.31);
}

div#RichWIki p#output-R:hover span#infobox{
  color: whitesmoke !important;
}

div#RichWIki p#output-R:hover span#infobox tr{
  background-color: hsla(0,0%,95%,1);
  color: #333;
}

div#RichWIki p#output-R:hover span#infobox a{
  color: #333 !important;
}






article p#output-p
{
    color: #444;
    background-color: rgba(220, 28, 28, 0);
    font-size: 0.75vw;
    padding-bottom: 0.2vw;
    cursor: pointer;
    border-radius: 0.3vw;
    /* box-shadow: 0vw 0.2vw 0.4vw rgba(0, 0, 0, 0.3); */
    /*transition: 0.3s ease-in-out;*/
    margin-bottom: 1.3vw;
    width: 4.5vw;
    float: left;
    margin-left: 3vw;
    margin-right: 3vw;
    height: auto;
    overflow: hidden;
    line-height: 1.1vw;
    font-weight: 100;
    padding-right: 0.5vw;
    text-align: center;
    padding-top: 0.3vw;
}

article p#output-p:hover{

    color: #e6e5e5 !important;
    background-color: hsl(0, 1%, 22%);
}

article p#output-p:hover #resultIa{

border-radius: 0;
}

article p#output-p:hover #resultI{

border-radius: 0;

}

  #play{
    position: absolute;
    z-index: 1;
    height: 4vw;
    top: 2vw;
    transition: ease-in-out 0.2s;
    left: 6vw;
  }

  #player{
  display: none;
  padding: 0.5vw;
    position: absolute;
    top: 6vw;
    left: 18vw;
    z-index: 11;
    height: 36vw;
    background: snow;
    border-radius: 0.3vw;
    width: 64vw;
  }

  #player::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }

  #player iframe{
    width: 64vw;
      height: 36vw;
      border-radius: 1vw;
  }

    .images{
    width: 15vw;
    height: 8vw;
    display: block;
    object-fit: cover;
    border-radius: 1vw;
    overflow: hidden;
  }

  #Videos{
    margin-top: 1.5vw;
    display: table-caption;
    float: right;
    margin-right: 23vw;
    width: 5vw;
  }

  #sites{
    margin-left: 7vw;
    width: 55vw;
    box-shadow: 0 0.1vw 20vw #55555578;
  }


  .container {
    transition: ease-in-out 0.3s;
    /* background-color: #333; */
    /*width: 20vw;*/
    /*height: 10vw;*/
    /* border-radius: 0.5vw; */
    position: relative;
    display: block;
    cursor: pointer;
    margin-left: 3vw;
    /* margin-bottom: 1vw; */
    border: 0.5px solid #fff;
    float: left;
    overflow: hidden;
    box-shadow: 0vw 0.2vw 0.2vw rgba(0, 0, 0, 0.5);
  }

  .container:hover{
        box-shadow: 0vw 1vw 2vw 2px rgba(0, 0, 0, 0.62);

  }

    .container:hover::before{
      background-color: transparent;

  }

   .container:hover #play{
    top: -45vw;
    left: -55vw;
    height: 150vw;
    width: 150vw;
   }

  .container::before {
    border-radius: 0;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* border-radius: 100vw; */
    width: 100%;
    background-color: rgba(38, 38, 38, 0.43);
  }




article a#anchor
{
  font-size: 1vw;
}

img#loading
{
  position: absolute;
  width: 15%;
  top: 15vw;
  left:42.5%;
}

div#get-more-button
{
  width: 27vw;
  height: 4.5vw;
  line-height: 4.5vw;
  vertical-align: middle;
  color: #fff;
  font-size: 3.2vw;
  margin-top: -2vw;
  margin-bottom: 2vw;
  cursor: pointer;
  border-radius: 0 0 4vw 4vw;
  background-color: #2d5d6f;
  font-weight: 800;
  transition: all 0.2s ease-in;
}

div#get-more-button:hover
{
  width: 30vw;
}

div#know-more-popup
{
  width: 75vw;
  height: auto !important;
  top: 3vw;
  left: 12vw;
  display: none;
  position: absolute;
  z-index: 99999999999999;
}

.wikitable{
  all: none !important;
}

div#know-more-popup #portal
{
    height: 5vw;
    width: 49vw;
    border-radius: 0 0 2vw 2vw;
    background-color: #55b3d8;
    text-decoration: none;
    color: whitesmoke;
    margin-bottom: 5vw;
    font-size: 3vw;

}

div#know-more-popup #portal a
{

    text-decoration: none;
    color: whitesmoke;
    display: block;
    padding-top: 0.5vw;
}

div#backcover
{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  display: none;
  top: 0;
  background-color: rgba(45,45,45,0.85);
  left: 0;
  cursor: pointer;
}

div#know-more-popup p
{
    width: 35vw;
    padding-left: 2vw;
}

h5#know-more-title
{
    color: #444;
    font-size: 4vw;
    margin: 0;
    padding: 0;
    margin-top: 2vw;
    width: 55vw;
    height: auto;
    background-color: snow;
    border-radius: 5vw 5vw 0 0;
    color: #333;
    padding-top: 1vw;
}

div#know-more-detail
{
    background-color: snow;
    color: #333;
    font-size: 1.2vw;
    font-weight: 300;
    width: 70vw;
    text-align: justify;
    border-radius:0.5vw;
    padding: 2vw;
    overflow: hidden;
}


div#know-more-news
{
    background-color: snow;
    color: #333;
    font-size: 1.5vw;
    font-weight: 300;
    width: 60vw;
    text-align: justify;
    border-radius: 0.5vw;
    padding: 2vw;
    overflow: hidden;
}

div#know-more-detail a
{
    text-decoration: none;
    color: #000;
    font-weight: 500;
    cursor: pointer;
    padding-left:0.5vw;
    padding-right:0.5vw;
    display: inline-block;
}

div#know-more-detail a:hover
{
    border-radius: 50vw;
    background-color: #008d9e;
    color: whitesmoke;
    transition: 0.2s ease-in-out;

}

div#know-more-detail a.image:hover
{
    background-color: transparent;


}

div#know-more-detail sup , hr
{
display: none;
}

div#know-more-detail .infobox
{
    border: none !important;
    width: 25vw !important;
    /* padding: 0 !important; */
    border-spacing: 0.4vw !important;
    background: #85c0d8 !important;
    float: left;
    border-radius: 0.5vw;
    margin-right: 3vw;
    margin-bottom: 5vw;
    padding: 1vw;
}

div#know-more-detail table{
    border: none !important;
    width: 65vw !important;
    margin-left: 4vw;
    /* padding: 0 !important; */
    border-spacing: 0.4vw !important;
    background: #85c0d8 !important;
    /* float: left; */
    border-radius: 0.5vw;
    margin-right: 3vw;
    padding: 1vw;
}

div#know-more-detail table table{
  display: none;
}



#References,#External_links, #toc,#See_also,#Further_reading,.refbegin,#Monographs,#Notes,#Footnotes,.metadata,.noprint {
  display: none;
}

#div[role=navigation]{
  display: none;
}

.mw-headline{
  margin-left: 2vw;
}

.navbox{
  display: none;
}

.mw-editsection{
  display: none;
}

div#know-more-detail  .infobox tbody{
  font-size: 1.2vw;
  font-weight: 100;
}

audio{
  width: 24vw !important;
}

div#know-more-detail table tbody{
  font-size: 0.9vw;
  font-weight: 100;
}

table[role=presentation]{
  display: none;
}

.thumb ,.right{
  display: inline-block;
  float: right;
}

.mw-parser-output{
  width: 70vw;
}

abbr {
  text-decoration: none;
}


/*div#know-more-detail table tbody tr td div{
display: none;
}*/

div#know-more-detail table tbody tbody{
display: none;
}

.summary, caption.fn.org{
  padding-top: 1vw;
}


div#know-more-detail .infobox .image img , .newsImg{
    margin-left: 4.5vw;
}

.thumbinner{
    margin: 1vw !important;
    padding: 1vw !important;
    /* width: auto !important; */
    background-color: #85bfd8;
    /* padding: 1vw; */
    border-radius: 0.5vw;
}

I really like to do that but the thing is I co

.thumbinner a{ 
padding: 0 !important;
}

.gallery{
  display: inline-flex;
}

.newsImg{
    margin-left: -2vw;
    margin-right: 2vw;
    object-fit: cover;
    width: 30vw;
    float: left;
    margin-top: -2vw;
}

div#know-more-detail p,  ol, pre
{
    display: block;
    width: 68vw;
}

div#know-more-detail .infobox ul
{
    padding:0 !important;
    margin:0 !important;
    width: auto !important;
}


div#know-more-news p, ol, pre
{
    padding:0 !important;
    margin:0 !important;
    display: block;
   /* width: 60vw;
    padding-left: 0.5vw;*/
}

.infobox tr
{
    margin-left: 0 !important;
    display: inline-block;
    width: 25vw;
    border-bottom: 0.05vw solid #333;
}

tr
{
    width: 45vw;
}


div#know-more-popup span#closeExtra
{
  color: #fff;
  font-size: 10vw;
  float: right;
  position: absolute;
  right: 5vw;
  top: 0vw;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease-in;
}



div#sorry-text
{
  color: #fff;
  font-size: 4.4vw;
}


div#know-more-popup button
{
    display: block;
    background-color: rgba(12, 12, 12, 0.24);
    text-align: center;
    width: 5.5vw;
    height: 5.5vw;
    vertical-align: middle;
    line-height: 4vw;
    border-radius: 50%;
    color: snow;
    cursor: pointer;
    transition: all 0.25s ease-in;
    font-size: 4vw;
    border: 0.2vw solid snow;
}

button#closeExtra2
{
  position: fixed;
  top: 3vw;
  right: 4vw;
  padding: 0;
}



div#action-buttons button
{
  margin-top: 2vw;
}


div#RichWIki p#output-R #resultIa{
    transition: ease-in-out 0.2s;
    height: 15vw;
    width: 15vw;
    overflow: hidden;
    object-fit: cover;
    border-radius: 0;
    background: radial-gradient(circle, #3f3f3f, #373737, #1a2e29);
    /* margin-bottom: 0.5vw; */
    float: left;
    margin-top: -0.5vw; */
}

div#RichWIki p#output-R #resultI{
  transition: ease-in-out 0.2s;
    color: #f3f3f3;
    display: inline-block;
    background: radial-gradient(circle, #3f3f3f, #373737, #1a2e29);
    font-size: 8vw;
    height: 15vw;
    width: 22vw;
    line-height: 14vw;
    margin-bottom: 0.5vw;
    margin-right: 1vw;
    margin-left: -1vw;
    text-align: center;
}




article p#output-p #resultIa{
    transition: 0.3s ease-in-out;
    margin-bottom: 0.5vw;
    height: 5vw;
    float: left;
    width: 5vw;
    overflow: hidden;
    object-fit: cover;
    margin-right: 0.5vw;
    border-radius: 100vw;
    margin-top: -0.3vw;
    background: radial-gradient(circle, #3f3f3f, #373737, #1a2e29);
}

article p#output-p #resultI{
    transition: 0.3s ease-in-out;
    margin-bottom: 0.5vw;
    color: #f3f3f3;
    display: inline-block;
    background: radial-gradient(circle, #3f3f3f, #373737, #1a2e29);
    font-size: 4vw;
    height: 5vw;
    /* float: left; */
    width: 5vw;
    text-align: center;
    line-height: 5vw;
    margin-bottom: 0.5vw;
    margin-right: 0.5vw;
    margin-top: -0.3vw;
    border-radius: 50vw;
}

.hatnote , .reference, .NavHead ,.references , .mw-redirect,  {
  font-size: 0 !important;
  display: none !important;
}

ol.references{
  font-size: 0 !important;
  display: none !important;
}

div.hatnote{
  font-size: 0 !important;
  display: none !important;
}

img[alt=Decrease] , [alt=Increase] , [alt=Steady] , .noviewer   {
  width: auto !important;
  display: inherit;
  margin-left: 0 !important;
}

.infobox tr td {
  border: none !important;
  padding: 0 !important;
  background: transparent;
}

tr td {
    padding: 0 !important;
    border-radius: 0.3vw;
    background: #9ccfe6;
    border: 0.11vw solid rgba(99, 129, 143, 0);
}



.hlist{
  width: 10vw;
}


.honorific-prefix {
  display: none;
} 

tr th .nowrap {
}

a < th {
    width: 85vw;
    background-color: #595959 !important;
    text-align: center !important;
    color: whitesmoke;
    padding: 1vw;
    border-radius: 50vw;
}

span #coordinates , .mbox-text-span , .error{
  font-size: 0;
  display: none;
}




td {
  text-align: justify !important;
}
.plainlist{
  line-height: 1.5vw !important;
}

 .NavHead, .vertical-navbox.nowraplinks.vcard.hlist, .vertical-navbox{
  display: none;
}

caption .fn{
    background-color: #55b3d8;
    color: white;
    width: 45vw;
    border-radius: 0.5vw 0.5vw 0 0;
    margin-bottom: 2vw; 
}

.fn div{
  background-color: transparent !important;
}

.tsingle , tbody .tsingle{

  float: none !important;

}

.infobox caption {
    vertical-align: middle;
    padding-top: 1.3vw !important;
    padding-bottom: 1.3vw !important;
    font-size: 2.7vw;
    background-color: #85c0d8 !important;
    color: #515151;
    height: auto;
    font-weight: 500;
    /* width: 49vw; */
    line-height: 3vw !important;
    /* margin-left: -2vw; */
    margin-top: -3.5vw;
    border-radius: 0 0 0.5vw 0.5vw;
    margin-bottom: 2vw;
}

table.infobox {
margin-left: 2vw;
background: transparent !important;
}

table  li {
/* width: 20vw; */
}

.mbox-image{
  display: none;
}

div.thumbcaption {
margin: 0.5vw;
}

table th {
  vertical-align: top;
  text-align: left !important;
  width: 7vw;
  background-color: transparent !important;
  padding:0 !important;
}

.link {
    margin-bottom: 0vw;
    border-left: 1vw solid;
    display: block;
    width: 100%;
    padding: 0.4% 1%;
    color: #505050;
    height: auto;
    text-align: left;
    border-bottom: 0.1vw solid #505050;
    background: white;
    padding-bottom: 1.5vw;
}

.link:hover{
    color: #333;
    background: #229af3;
}

.link p{
      font-size: 1vw;
      margin:0;
}

.link h5{
  margin:0;
  color: #222;
  font-size: 1.7vw;
  padding: 0.3vw 0;
}

.link:hover h5{
  color: black;
}






@media only screen and (max-width: 500px)
{

  body{
      overflow-y: scroll;
  }

  
  .link p {
    font-size: 2.2vw;
     margin: 1vw;
}

#smartAns{
    font-size: 4vw;
    margin-bottom: 5vw;
}

.link h5 {
    margin: 0;
    font-size: 3.5vw;
}

    #Videos{
    /* margin-top: 5vw; */
    display: inline-block;
    float: none;
    margin-left: 12vw;
    margin-right: 0;
    width: 80%;
  }

  #sites {
    margin-left: 3vw;
    width: 100%;
}

  .link{
    margin-bottom: 2vw;
    display: block;
    width: 92%;
    padding: 2%;
    border-radius: 0.5vw;
    color: #000;
    height: auto;
    background: whitesmoke;
}

  .images{
    width: 20vw;
    height: 9vw;
    display: block;
    object-fit: cover;
    /* border-radius: 1vw; */
    overflow: hidden;
  }


  .container {
    transition: ease-in-out 0.3s;
    /* background-color: #333; */
    width: 15vw;
    height: 15vw;
    border-radius: 100vw;
    position: relative;
    display: block;
    cursor: pointer;
    margin-left: 3vw;
    margin-bottom: 1vw;
    border: 0.4vw solid #e7e7e7;
    float: left;
    overflow: hidden;
    box-shadow: 0vw 0.2vw 0.2vw rgba(0, 0, 0, 0.5);
  }

  #play{
    position: absolute;
    z-index: 1;
    height: 6vw;
    top: 5vw;
    transition: ease-in-out 0.2s;
    left: 5vw;
  }

  .thumbinner{
           width: 85vw !important;
    margin-left: 5vw !important;
  }

  .thumb, .right{
    float: none;
  }

  div#know-more-popup {
    width: 96%;
    height: auto !important;
    top: 3vw;
    left: 2%;
    display: none;
    position: absolute;
    z-index: 99999999999999;
}


 button#closeExtra2
{
    position: fixed;
    top: 160vw;
    right: 42vw;
    padding: 0;
}

  div#about_Section hr{
    height: 0.5vw;
    width: 60vw;
  }
  div#about_Section{
    height: 40vw;
  }

  div#about_Section #logo{
    float: none;
    height: 10vw;
    width: 10vw;
    border: 0.85vw solid whitesmoke;
    margin-bottom: 1.5vw;
    line-height: 9.5vw;
    color: whitesmoke;
    padding: 0.7vw;
    font-family: fontey;
    font-size: 9.5vw;
    cursor: default;
    margin-top: 2.5vw;
    border-radius: 2vw;
    margin-left: 0;
  }

  div#about_Section #logo img {
    height: 10vw;
}

  div#about_Section #heylle_info{
    margin-left: 2vw;
    color: whitesmoke;
    font-size: 3.5vw;
    text-align: center;
    width: 70%;
    font-family: sans-serif;
    font-weight: 700;
  }

  div#guys {
    margin-top: 2.5vw;
    height: auto;
    width: 60vw;
    text-align: center;
    font-family: sans-serif;
    font-size: 3.2vw;
}


  article p#output-p
  {
    font-size: 0;
    /* box-shadow: 0vw 1vw 7vw rgba(0, 0, 0, 0.3); */
    width: 15vw;
    height: 20vw;
    margin-left: 2.5vw;
    /* padding-top: 0; */
    border-radius: 2vw;
    line-height: initial;
    text-align: center;
    float: left;
    /* overflow: visible; */
    padding-right: 0;
  }

  div#RichWIki{
    float: none;
    height: auto;
    margin-left: -1.5vw;
  }

  #boundry{
    margin-top: 7vw;
  }

div#RichWIki p#output-R
  {
    font-size: 3.8vw;
    box-shadow: 0vw 0.2vw 0.5vw rgba(0, 0, 0, 0.26);
    width: 90vw;
    overflow: hidden;
    float: none;
    height: auto;
    margin-left: 7vw;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 2vw;
    line-height: 4.2vw;
    margin-left: 0;
    text-align: center;
    margin-bottom: 10vw;
    margin-top: 1vw;
    padding-right: 0;
  }

div#RichWIki p#output-R #resultIa
  {
    height: 25vw;
    width: 26vw;
    border-radius: 0vw !important;
    float: none;
    border-radius: 7vw 7vw 0 0;
    box-shadow: 0 0 0 transparent;
  }

  #output-R #moveM{
    width: 68.8% !important;
    text-align: left;
    font-size: 3.2vw !important;
    line-height: 3.9vw !important;
    height: 25vw;
  }

  p#output-R medium {
    font-size: 3.5vw;
    line-height: 5vw;
}

  span#infobox{
    width: 90vw;
    height: auto;
  }

  span#infobox tr{
    width: 87vw;
    font-size: 3vw;
  }

  span#infobox tr td{
    background: transparent !important;
    width: 78vw;
    font-weight: 400;
  }

div#RichWIki p#output-R #resultI
  {
   height: 60vw;
    width: 86vw;
    font-size: 25vw;
    line-height: 35vw;
    float: none;
    margin-top: 0vw;
    border-radius: 7vw 7vw  0 0;
    box-shadow: 0 0 0 transparent;
  }

   article p#output-p #resultIa
  {
    height: 15vw;
    width: 15vw;
    margin-bottom: 2vw;
    /* float: left; */
    /* margin-top: 0vw; */
    /* margin-left: -1vw; */
    /* margin-right: 2.5vw; */
    /* border-radius: 7vw 0 0 7vw; */
    /* box-shadow: 0 0 0 transparent; */
  }

  article p#output-p #resultI
  {
    height: 15vw;
    width: 15vw;
    font-size: 10vw;
    line-height: 15vw;
    margin-bottom: 2vw;
  }



  article #anchor
  {
    font-size: 3vw;
  }

  article
  {

  }

   #feeds p{
    width: 83vw;
    border-radius: 2vw;
    border: 0.6vw solid whitesmoke;
    padding: 2vw;
    font-size: 4.8vw;
 }




div#search-area
{
  position: fixed;
  bottom: 0;
  height: 16vw;
  background-color: #e8e8e8;
  width: 100vw;
}

div#menu-area{
width: 30vw;
font-size: 8vw;
}




div#menu-area ul li a
{
  
  font-size: 5vw;
}







div#about_Section{
}

nav{
  padding-top: 0.5vw;
}

#circular{
      /* height: 100%; */
    height: auto;
    width: 90%;
    position: relative;
    padding-top: 5vw;
    margin-top: 50%;
}

#menuimg{
  height: 10vw;
}

nav #hey1{
    /* position: absolute; */
    /* top: 33vw; */
    /* font-size: 20vw; */
    /* left: 0; */
    height: 25vw;
}

nav #tr-menu{
  display:none;
}

div#home-bar{
  height: 10vw;
}

div#main-input{

}

#main-input #search-main {
    width: 82vw;
    font-size: 5vw;
    /* padding-bottom: 0.5vw; */
    /* padding-left: 2vw; */
    /* padding-right: 10vw; */
    /* transition: inherit; */
    /* border: 0.5vw solid whitesmoke; */
    /* border-radius: 50vw; */
    height: 10vw;
    margin-top: 5vw;
}

.search_main {
  height: 15vw;
}

div#main-input svg{
    top: 44vw;
    right: 7vw;
    /* width: 10vw; */
    /* background: #555; */
    height: 8vw;
    width: 8vw;
}

div#home-bar #dots{
  line-height: 2vw;
  font-size: 15vw;
}
div#home-bar #dots:hover ul{
  bottom:10vw;
  width: 30vw;
  height: 30vw;
  

}

div#home-bar #dots ul li a{
  font-size: 5vw;
  padding-top:3vw;
  padding-bottom: 3vw;
}

div#home-bar #dots ul{
}




div#home-bar span{
  font-size: 5vw;
  line-height: 10vw;
}


div#search-container svg
{
  color: white;
  fill: white;
  height: 8vw;
  width: 8vw;
  position: absolute;
  margin-top: 3vw;
  margin-left: 1vw;
}


div#search-area div#search-container
{
  margin-left: 15vw;
  width: 80vw;
  height: 14vw;
  margin-top: 1vw;
}

div#search-area input
{
  border: none;
  outline: none;
  width: 70vw;
  height: 12vw;
  background-color: #9e9e9e;
  margin-top: 1vw;
  padding-left: 10vw;
  color: #fff;
  border-radius: 6vw 0 0 6vw;
  color: white;
  font-size: 5.8vw;
}

div#menu
{
  font-size: 13vw;
  background-color: transparent;
  color: #777;
  line-height: 4vw;
  bottom:4vw;
  left: 4vw;
  text-shadow: 0.05vw 0.05vw 0.05vw rgba(25, 25, 25, 0.6);
}

div#menu:hover
{
  font-size: 13vw;
  background-color: transparent;
  color: #777;

}


button#reset
{
  float: right;
  height: 100%;
  padding: 0;
  margin-top: 1vw;
  width: 10vw;
  height: 12vw;
  font-size: 10vw;
  border-radius: 0 6vw 6vw 0;
}

img#loading
{
  width: 70%;
  top: 35vw;
  left:15%;
}

h5#know-more-title
{
  font-size: 9vw;
  width: 89vw;
}

div#know-more-detail
{
    font-size: 3.5vw;
    width: 100%;
    border-radius: 3vw 3vw 0 0;
    transition: 0.5s ease-in-out;
    padding: 0;
  }

  div#know-more-detail table{
    margin-left: 1.5vw;
    border-radius: 2vw;
  }

.infobox tr{
  width: 100%;
  font-size: 3.5vw;
}

div#know-more-news
{
  font-size: 3.5vw;
  width:89vw;
  border-radius: 3vw;
  transition: 0.5s ease-in-out;
}

div#know-more-detail .image img , .newsImg{
    width: 84vw !important;
    /* margin-left: -10.5vw; */
    object-fit: contain;
    /* height: auto !important; */
}

.newsImg{
    width: 93vw !important;
    margin-left: -2vw;
    height: auto !important;
    float: none;
}

tr{
  width: 75vw;
}

.plainlist{
  line-height: 4vw;
}

caption {
    width: 93vw;
    margin-top: -5.5vw;
    padding-bottom: 5vw;
    height: 5vw;
    font-size: 8vw;
    border-radius: 3vw 3vw 0 0;
}

div#know-more-popup p , h2
{
    width: 84vw;
    padding-left: 2.5vw;
}





div#know-more-detail p,div#know-more-detail h2,div#know-more-detail h3 ,div#know-more-detail h4 ,div#know-more-detail h5 , ul , pre , ol
{
      display: block;
      width: 90vw;
      padding-left: 2.5vw;
}

div#know-more-detail table tbody tr td p {
  width: 65vw;
}

div#know-more-detail table tbody{
  font-size: 3.5vw;
  font-weight: 100;
}

div#know-more-popup #portal
{
    height: 12vw;
    width: 93vw;
    border-radius: 0 0 1vw 1vw;
    background-color: #55b3d8;
    text-decoration: none;
    color: whitesmoke;
    margin-bottom: 25vw;
    font-size: 8vw;
}

div#know-more-popup #portal a
{
}





div#get-more-button
{
  width: 40vw;
  height: 6vw;
  line-height: 6vw;
  vertical-align: middle;
  color: #fff;
  font-size: 5.2vw;
  margin-top: -4vw;
  margin-bottom: 3vw;
  cursor: pointer;
  border-radius: 0 0 4vw 4vw;
  background-color: #2d5d6f;
  transition: all 0.2s ease-in;
}

div#know-more-popup button
{
    width: 12vw;
    height: 12vw;
    line-height: 7vw;
    border-radius: 50%;
    background: #1b1919;
    font-size: 10vw;
    padding: 1vw;
    border: none;
    border: 0.5vw solid whitesmoke;
    color: rgb(255, 250, 250);
    /* box-shadow: 0 0 0.5vw 2vw rgb(255, 193, 6); */
}

.mw-parser-output{
  width: 90%;
}


table th {
  vertical-align: top;
  width: 30vw;

}



div.thumbcaption {
    width: 100%;
    text-align: center;
}

.infobox tbody tr th[colspan] {
    width: 75vw;
    padding-top: 1vw;
    padding-bottom: 1.1vw;
}

.summary, caption.fn.org{
  padding-top:2vw;
  padding-bottom: 4vw;
}


}
