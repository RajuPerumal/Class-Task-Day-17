var res =fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>func(data1))

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

function func(data1) {
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div")
        col.className = "col-lg-4";

        var { name, capital, region, latlng, cca2, flags } = data1[i];
        console.log(name, capital, region, latlng, cca2, flags);
        col.innerHTML = `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem; min-height: 23rem;">
                <div class="card-header text-center "><h5>${name.common}</h5></div>
                <div class="card-body text-center">
                <div style="text-align: center;">
                <img src="${flags.png}" alt="Flag of ${name.common}" style="width: 200px; height: 100px; object-fit: cover;">
            </div>
                  
                    <p class="card-text">Capital: ${capital ? capital[0] : "N/A"}</p>
                    <p class="card-text">Region: ${region}</p>
                    <p class="card-text">Country Code: ${cca2}</p>
                    <p class="card-text">Lat/Lng: ${latlng.join(', ')}</p>
                    
                </div>
            </div>
        `;
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
}