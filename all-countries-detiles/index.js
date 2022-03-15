const backgroudChange=(colorId)=>{
    console.log(colorId)
    if(colorId==='white'){
        document.body.style.backgroundColor='white'
        document.getElementById('drak').style.display='block'
        document.getElementById('white').style.display='none'
    }
    else if(colorId === 'black'){
        document.body.style.backgroundColor='black'
        document.getElementById('drak').style.display='none'
        document.getElementById('white').style.display='block'
    }
}


/************************************************* card section************************************************ */


const getAllDataFromServer= ()=>{


    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data =>allCard(data))
    
    }
const allCard =(countries)=>{
console.log(countries[0])
const addCard =document.getElementById('add-card')
countries.map(country =>{
const timezones =country.timezones[0]
const {name,capital,flag,region,subregion,population,area}=country
const div = document.createElement('div')
div.classList.add('col-md-4')

div.innerHTML=`
<div class="card h-100 shadow-lg">
<img src="${flag}" class="card-img-top h-100"  alt="...">
<div class="card-body">
  <h5 class="card-title">${name}</h5>
  <p class="card-text"> capital :${capital} </p>
  <p class="card-text"> region :${region} </p>
  <p class="card-text"> subregion :${subregion} </p>
  <p class="card-text"> area :${area} </p>
  <p class="card-text"> Population :${population} </p>
  <p class="card-text"> Time Zone:${timezones} </p>
</div>
</div>
`
addCard.appendChild(div)
    
})

   
   
   
}







// const getSingleDataFromServer=(countries)=>{

// countries.map(country =>{

    
    
//     console.log(country.name)


// })
// }
getAllDataFromServer()
// allCard()