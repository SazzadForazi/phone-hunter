document.getElementById("search-btn").addEventListener("click", ClickBtn);
function ClickBtn() {
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value;
    searchInput.value = '';

    if (searchValue == '') {
        const error = document.getElementById('error');
        return error.innerText = "Please try to valid Input";

    }
    else {

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`


        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => showallMobile(data.data));
    }
    error.textContent = '';


}

showallMobile = (items) => {
    const searchResult = document.getElementById('mobilecard');
    searchResult.textContent = '';
    for (const item of items.slice(0, 20)) {
        // console.log(item);
        const newDiv = document.createElement("div");
        newDiv.classList.add('col-sm-4');
        newDiv.innerHTML = `
     
     <div class="card mt-4 style="height:30rem">
               <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body"style="width:400px mb-5">
                <h5 class="card-title">Brand: ${item.brand}</h5>
                <h5 class="card-title">Mobile: ${item.phone_name}</h5>
             
         </div>
         <button onclick="loadMealDetails('${item.slug}')"class="btn btn-primary">More Information</button>
     </div>

        `;
        // console.log(item.slug);
        searchResult.appendChild(newDiv)
    }
}

const loadMealDetails = id => {

    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showdetails(data.data))
}

const showdetails = item => {

    // console.log(item);
    const details = document.getElementById('showdetails');
    const div = document.createElement('div');

    div.classList.add('card')
    details.textContent = '';
    div.innerHTML = `
    <img class="card-img-top" src="${item.image}"alt="Card image cap">
        <div class="card-body">
        <p class="card-text">Brand: ${item.brand}</p>
            <p class="card-text">ReleaseDate: ${item.releaseDate}</p>
            <p class="card-text">DisplaySize: ${item.mainFeatures.displaySize}</p>
            <p class="card-text">Memory: ${item.mainFeatures.memory}</p>
            <p class="card-text">ChipSet: ${item.mainFeatures.chipSet}</p>
            <p class="card-text">Sensors: ${item.mainFeatures.sensors}</p>
        </div>
    `;

    details.appendChild(div)

}
