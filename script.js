const price = 550;
const category = "Economy"

const allBtn = document.getElementsByClassName("all-btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seat = event.target.parentNode.childNodes[1].innerText;

        const selectedContainer = document.getElementById("seat-cart");
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-around");
        div.classList.add("py-4");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seat;
        p2.innerText = category;
        p3.innerText = price;

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        selectedContainer.appendChild(div);
        updateSeatPrice(price);
    });
}

function getConvertedValue(id) {
    const allSeat = document.getElementById(id).innerText;

    const convertSeat = parseInt(allSeat);
    return convertSeat;

}

function updateSeatPrice(value) {
    const seatPrice = getConvertedValue("total-price");
    const sum = seatPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}








