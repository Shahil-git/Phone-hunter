const lockPhone = async (searchFild) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchFild}`);
        const data = await res.json();
        const phones = data.data;
        displayPhone(phones);
    } catch (error) {
        console.error('Error fetching phone data:', error);
    }
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = ''; // Clear any existing content

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 w-[364px] h-[500px] p-4 shadow-xl`;
        phoneCard.innerHTML = `
        
            <figure>
                <img src="${phone.image}" alt="${phone.phone_name}" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.brand}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}



const handleSearch = () =>{
 const input_xD = document.getElementById('input_xD')
 const searchFild = input_xD.value
 console.log(searchFild);
 lockPhone(searchFild);
}










// Ensure this line is placed after the HTML elements are loaded
//lockPhone();
