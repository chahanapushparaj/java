
function bookTicket() {

    let movie = document.getElementById("movie");
    let time = document.getElementById("time").value;
    let quantity = Number(document.getElementById("quantity").value);
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    if (movie.value === "" || time === "" || quantity < 1 || email.trim() === "") {
        result.innerHTML = "Please fill all the details!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        result.innerHTML = "Please enter a valid email!";
        return;
    }

    let price = Number(movie.value);
    let total = price * quantity;
    let movieName = movie.options[movie.selectedIndex].text;

    result.innerHTML =
        "<h3>Booking Successful!</h3>" +
        "Movie: " + movieName + "<br>" +
        "Ticket Price: ₹" + price + "<br>" +
        "Show Time: " + time + "<br>" +
        "Number of Tickets: " + quantity + "<br>" +
        "Email: " + email + "<br>" +
        "<h3>Total Amount: ₹" + total + "</h3>";
}
