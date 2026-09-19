/* JavaScript for Currency and Form Handling */
const priceInputs = document.querySelectorAll('.food-price-input');
priceInputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        let value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            // Display formatted value, assuming you have a way to display it
            console.log(value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }));
        }
    });
});

document.querySelector('#add-dish-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Dish added (functionality needs backend connection)');
});
/* JavaScript Code */
function openNav() {
  document.querySelector(".sidebar").style.width = "150px";
}

function closeNav() {
  document.querySelector(.sidebar").style.width = "0";
}
