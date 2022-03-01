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
    for (const item of items) {
        console.log(item);
        const newDiv = document.createElement("div");
        newDiv.classList.add('col-sm-4');
        newDiv.innerHTML = `
     
        <div class="card mt-4 style="height:30rem">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body"style="width:400px mb-5">
            <h5 class="card-title">Brand: ${item.brand}</h5>
                <h5 class="card-title">Mobile :${item.phone_name}</h5>
                <p class="card-text">${item.slug}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        
    </div>

        `;
        searchResult.appendChild(newDiv)
    }
}