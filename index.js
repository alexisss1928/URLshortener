//const myUrl = "https://www.codementor.io/projects/web/link-shortener-website-brqjanf6zq/discussion";
const submitButton = document.querySelector('#submitButton')
const copyButton = document.querySelector('#copy')
const clearButton = document.querySelector('#clear')
new ClipboardJS('#copy');


/******************************
****Bitly API Call function****
******************************/

async function start() {
  const longUrl = document.querySelector('#longUrl').value
  const regex = new RegExp(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/, "gi");

if (regex.test(longUrl)) {
  try {
    const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: "8bbf4a6343503b1baa2c608fbf915e0ed05fb013",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: longUrl,
        domain: "bit.ly",
        group_guid: "Bl4ggQIc0du",
      }),
    });
    shrink()
    const data = await response.json();
    document.querySelector('#longUrl').value = data.link;
  } catch (error) {
    console.log(error);
  }
} else {
  document.querySelector('#longUrl').value = 'Al parecer la direccion esta mal escrita'
  shrinkFail()
}
}


/******************************
*******Animation shrink********
******************************/

function shrink(){
  document.querySelector('.head').classList.add("shrinkButtonHead");

  setTimeout(function(){
    document.querySelector('.head').classList.remove("shrinkButtonHead")
}, 1000)
}


/******************************
*****Animation shrink fail*****
******************************/

function shrinkFail(){
  document.querySelector('.face__mouth').classList.add("shrinkFailMouth");
  document.querySelector('.face__tongue').classList.add("shrinkFailTongue");
  
  setTimeout(function(){
    document.querySelector('.face__mouth').classList.remove("shrinkFailMouth")
    document.querySelector('.face__tongue').classList.remove("shrinkFailTongue");
}, 1000)
}


/******************************
******Shrink URL button********
******************************/

submitButton.addEventListener('click', start)


/******************************
******Clear URL button*********
******************************/

clearButton.addEventListener('click', ()=>{
  document.querySelector('#longUrl').value = '';
  document.querySelector('.face').classList.add("clearButtonFace");
  document.querySelector('.face__mouth').classList.add("clearButtonMouth");
  document.querySelector('.head').classList.add("clearButtonHead");

  setTimeout(function(){ 
    document.querySelector('.face').classList.remove("clearButtonFace")
    document.querySelector('.face__mouth').classList.remove("clearButtonMouth")
    document.querySelector('.head').classList.remove("clearButtonHead")
}, 1000)
})


/******************************
********Copy URL button********
******************************/

copyButton.addEventListener('click', ()=>{
  document.querySelector('.head').classList.add("copyButton");
  document.querySelector('.head__2').classList.add("copyButton__2");

  setTimeout(function(){
    document.querySelector('.head').classList.remove("copyButton")
    document.querySelector('.head__2').classList.remove("copyButton__2");
}, 1000)
})