 const dogDiv = document.getElementById('dog') 
 const dogButton=document.getElementById('db')
  const newdog =()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response=>Response.json())
    .then(json =>{ 
        dogDiv.innerHTML=`<img src='${json.message}'height=300 width=300/>`})
    }

        dogButton.onclick=()=> newdog()