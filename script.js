document.getElementById("search-btn").addEventListener("click", ClickBtn);
function ClickBtn() {
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value;
    searchInput.value = '';
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showallMobile(data.data));
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
                <h5 class="card-title">Mobile :${item.phone_name}</h5>
                <p class="card-text">${item.slug}</p>
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
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showdetails(data.data))
}

const showdetails = item => {

    console.log(item);
    const details = document.getElementById('showdetails');
    const div = document.createElement('div');
    details.textContent = '';
    div.classList.add('card')
    div.innerHTML = `
    <img class="card-img-top" src="${item.image}"alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
        </div>
    `;
    details.appendChild(div)
}