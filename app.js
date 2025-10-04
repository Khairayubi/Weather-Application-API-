// fetch('http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no')
fetch('http://api.weatherapi.com/v1/current.json?key=9b05f55551e14d4fbaa151508250701&q=canada&aqi=no')

.then(res =>{
    return res.json()
})
.then(res=>{
    console.log(res);
    
})
.catch(err =>{
    console.log(err);
    
})