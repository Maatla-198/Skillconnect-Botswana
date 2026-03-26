// PAY NOW FUNCTION (Commission Simulation)
function payNow(service, price){
    let commission = price * 0.10;
    let providerAmount = price - commission;

    alert(
        "Service: " + service +
        "\nPrice: P" + price +
        "\nPlatform Commission (10%): P" + commission +
        "\nProvider Receives: P" + providerAmount
    );
}

// BOOKING FUNCTION
function bookService(service){
    alert("You have successfully booked: " + service);
}

// REVIEW FUNCTION
function leaveReview(service){
    let review = prompt("Leave a review for " + service + ":");
    if(review){
        alert("Thank you for your review!");
    }
}




let selectedUser = "customer";

// SELECT USER TYPE
function selectUser(type) {
    selectedUser = type;

    document.getElementById("providerFields").style.display =
        type === "provider" ? "block" : "none";

    document.getElementById("info").innerText =
        type === "provider"
        ? "Register as a service provider (P30 fee required)"
        : "Register to find services.";

    // button styles
    document.getElementById("customerBtn").classList.toggle("active", type === "customer");
    document.getElementById("providerBtn").classList.toggle("active", type === "provider");
}

// HANDLE REGISTRATION
function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (selectedUser === "provider") {
        const skill = document.getElementById("skill").value;
        const price = document.getElementById("price").value;

        if (!skill || !price) {
            alert("Please fill in all provider details");
            return;
        }

        // 🔥 PAYMENT SIMULATION
        let confirmPay = confirm("To register as a provider, you must pay P30. Continue?");

        if (confirmPay) {
            alert("Payment successful ✅\nYou are now registered as a Service Provider!");
        } else {
            alert("Registration cancelled ❌");
            return;
        }

    } else {
        alert("Registered successfully as a Customer ✅");
    }

    // CLEAR FORM
    document.querySelector("form").reset();
}





let selectedSkill = "";

function openModal(skill){
    selectedSkill = skill;
    document.getElementById("modalSkill").innerText = skill;
    document.getElementById("skillModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("skillModal").style.display = "none";
}

function chooseOption(type){
    if(type === "service"){
        // go to booking page
        window.location.href = "booking.html?skill=" + selectedSkill;
    } else {
        alert("Learning feature coming soon for " + selectedSkill);
    }
}





// Get skill from URL
const params = new URLSearchParams(window.location.search);
const skill = params.get("skill");

if(skill && document.getElementById("selectedSkill")){
    document.getElementById("selectedSkill").innerText = "Service: " + skill;
}

// Calculate commission
const priceInput = document.getElementById("price");

if(priceInput){
    priceInput.addEventListener("input", function(){
        let price = parseFloat(priceInput.value) || 0;

        let commission = price * 0.1; // 10%
        let total = price + commission;

        document.getElementById("total").innerText =
            "Total to Pay (including platform fee): BWP " + total.toFixed(2);
    });
}

// Submit booking
function processBooking(e){
    e.preventDefault();

    alert("Booking successful! Payment received. Provider will contact you.");

}


















