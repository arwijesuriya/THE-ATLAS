let searchButton = document.getElementById("searchButton");
let countryInput = document.getElementById("countryInput");

searchButton.addEventListener("click", () => {
    let countryName = countryInput.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    console.log(finalUrl);
    fetch(finalUrl).then((response) => response.json()).then((data) => {
        resultBox.innerHTML = 
        `
            
            <img src="${data[0].flags.svg}" class="flagImage">
            
            
            <h2>${data[0].name.official}</h2>
            
            
            <div class="countryBox">
                <div class="countryData">
                    <h4>Capital City: </h4>
                    <span>
                        ${data[0].capital[0]}
                    </span>
                </div>
            </div>

            <div class="countryBox">
                <div class="countryData">
                    <h4>Continent: </h4>
                    <span>
                        ${data[0].continents[0]}
                    </span>
                </div>
            </div>

            <div class="countryBox">
                <div class="countryData">
                    <h4>Population: </h4>
                    <span>
                        ${data[0].population}
                    </span>
                </div>
            </div>


            <div class="countryBox">
                <div class="countryData">
                    <h4>Area (sq km): </h4>
                    <span>
                        ${data[0].population}
                    </span>
                </div>
            </div>

            <div class="countryBox">
                <div class="countryData">
                    <h4>Time zone: </h4>
                    <span>
                        ${data[0].timezones}
                    </span>
                </div>
            </div>

            <div class="countryBox">
                <div class="countryData">
                    <h4>Currency: </h4>
                    <span>
                        ${data[0].currencies[Object.keys(data[0].currencies)].name} (${Object.keys(data[0].currencies)[0]})
                    </span>
                </div>
            </div>

            <div class="countryBox">
                <div class="countryData">
                    <h4>Official Language: </h4>
                    <span>
                        ${Object.values(data[0].languages)
                            .toString()
                            .split(",")
                            .join(", ")
                        }
                    </span>
                </div>
            </div>
        `;
    }).catch(() => {
        if (countryName.length == 0) {
            resultBox.innerHTML = `<h3>The input field cannot be empty !</h3>`;
        }
        else {
            resultBox.innerHTML = `<h3>Please enter a valid country name !</h3>`;
        }
    });
});