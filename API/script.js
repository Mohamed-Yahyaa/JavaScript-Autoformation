
fetch('https://api.openweathermap.org/data/2.5/weather?q=tangier&appid=98ae09bec9b30e091f3f5bf753d3ab2a')




.then (function(reponse){
    return reponse.json()
})

.then(function(data){
    console.log(data)
})