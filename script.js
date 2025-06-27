// Select needed elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const likeBtns = document.querySelectorAll(".fa-heart");
const totalDisplay = document.querySelector(".total");


function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card").forEach(card => {
        const price = parseFloat(card.querySelector(".unit-price").textContent);
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        total += price * quantity;
    });
    totalDisplay.textContent = `${total} $`;
}

// Increase quantity
plusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const quantity = btn.parentElement.querySelector(".quantity");
        quantity.textContent = parseInt(quantity.textContent) + 1;
        updateTotal();
    });
});

// Decrease quantity
minusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const quantity = btn.parentElement.querySelector(".quantity");
        if (parseInt(quantity.textContent) > 0) {
            quantity.textContent = parseInt(quantity.textContent) - 1;
            updateTotal();
        }
    });
});

// Delete item from cart
deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".card-body").remove();
        updateTotal();
    });
});

// Like item (toggle heart color)
likeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");
        btn.style.color = btn.classList.contains("liked") ? "red" : "black";
    });
});