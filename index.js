function orderSubmit() {
    
    // Store Variables
    let spa = document.getElementById("spa").value;
    let cae = document.getElementById("cae").value;
    let mar = document.getElementById("mar").value;
    let alf = document.getElementById("alf").value;

    let orderSummary = "";

    // System to check whether user has added item to cart
    if (spa > 0){
        // the ` (backtick) is use to bring the values of our var, into the string
         orderSummary += `🍝 Spaghetti Marinara: ${spa}\n`;
    }

    if (cae > 0){
         orderSummary += `🥗 Caesar Salad: ${cae}\n`;
    }

    if (mar > 0){ 
        orderSummary += `🍕 Margherita Pizza: ${mar}\n`;
    }

    if (alf > 0){ 
        orderSummary += `🍤 Alfredo Shrimp Pasta: ${alf}\n`;
    }

    // If there is no strings in the summary, then no items have been selected
    if (orderSummary == "") {
        alert("No items selected");
    } else {
        alert("Order Sent! 🎉\n\nYou ordered:\n" + orderSummary);
    }
}
