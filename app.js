const div = document.querySelector(".container");
// fetch('http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no')
const form = document.getElementById("weatherForm");

const names = [""];
form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form refresh
    const city = document.getElementById("city").value;
    document.querySelector("#city").value = ""
    if(!names.includes(city.toLowerCase())){
    names.push(city.toLowerCase());
    
    
    console.log(city + "added")
    }
    
    

    
    fetch(`http://api.weatherapi.com/v1/current.json?key=9b05f55551e14d4fbaa151508250701&q=${names[names.length-1]}&aqi=no`)

        .then(res => {
            return res.json()
        })
        .then(res => {
            console.log(res);
            

            div.innerHTML += `
            <div class="card">
                    <div class="details">
                        <h1>${res.location.name}</h1>
                        <h3>${res.location.region}, <span>${res.location.country}</span></h3>
                        <h2>${res.current.temp_c}</h2>
                        <h4>${res.location.localtime}</h4>
                    </div>
                    <div class="image"><img src="https:${res.current.condition.icon}" alt="">
                        <p>${res.current.condition.text}</p>
                    </div>
        </div>`
        })

        .catch(err => {
            console.log(err);

        })
})
