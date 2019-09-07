const fetch = require('node-fetch');

function getTatooineResidents(){

    const url= 'https://swapi.co/api/planets/1/'

    const promise = fetch(url)

    return promise.then((retrieveInfoPlanets1)=>{

        return retrieveInfoPlanets1.json()

   }).then(retrieveInfoResidents => {

        return retrieveInfoResidents.residents
    
   }).catch((error)=>{ 
        
        return error
   })

}

function promiseMeAString(stringPromised){

    const maybe = new Promise((resolve, reject)=>{
    
        if(stringPromised){
    
            resolve('You kept the Promise!')

        }else {
    
            reject('You have failed me!')
        }
    
    
    })

    return maybe
    
}

module.exports = {getTatooineResidents, promiseMeAString}