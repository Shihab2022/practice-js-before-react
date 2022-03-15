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
const allCountry=()=>{
    getAllDataFromServer()   
}

const getAllDataFromServer= ()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data =>allCard(data))
    
    }
const allCard =(countries)=>{
document.getElementById('add-card').innerHTML=''
document.getElementById('single-card').innerHTML=''
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
  <p class="card-text"> Capital :${capital} </p>
  <p class="card-text"> Region :${region} </p>
  <p class="card-text"> Subregion :${subregion} </p>
  <p class="card-text"> Area :${area} </p>
  <p class="card-text"> Population :${population} </p>
  <p class="card-text"> Time Zone:${timezones} </p>
</div>
</div>
`
addCard.appendChild(div)
    
})   
}
getAllDataFromServer() 





/************************************************* search section************************************************ */

 const search =()=>{
const getData =document.getElementById('get-data').value
if(getData){
fetch(`https://restcountries.com/v2/name/${getData}`)
.then(res=>res.json())
.then(data=>singleCountry(data))   
}
else{
 alert('please put your country name')
}
}
const singleCountry =(allData)=>{
    document.getElementById('add-card').innerHTML=''
    document.getElementById('single-card').innerHTML=''
    const singleCard =document.getElementById('single-card')
   allData.forEach(data=>{
       const currencies =data.currencies[0]
       const {code,symbol}= currencies
const {name,nativeName,capital,flag,region,subregion,population,area,independent,demonym}=data
const div = document.createElement('div')
div.innerHTML=`
<img src="${flag}" class="card-img-top" alt="...">
<div class="card-body">
  <h3 class="card-title">Name : ${name}</h3>
  <h5 class="card-title"> Native Name : ${nativeName}</h5>
  <p class="card-text">Currencies : <br> Code: <span>${code}</span> <br>  Symbol : <span>${symbol}</span></p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Capital : ${capital}</li>
  <li class="list-group-item">Region : ${region} </li>
  <li class="list-group-item">Subregion : ${subregion}</li>
  <li class="list-group-item">Area : ${area}</li>
  <li class="list-group-item">Population : ${population}</li>
  <li class="list-group-item">Demonym : ${demonym}</li>
  <li class="list-group-item">Independent : ${independent}</li>
</ul>
`
singleCard.appendChild(div)  
document.getElementById('get-data').value=''
   })
} 


/************************************************* srach by mohdesh ************************************************ */