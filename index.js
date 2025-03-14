function orderSubmit() {
    
    let spa = document.getElementById("spa").value;
    let cae = document.getElementById("cae").value;
    let mar = document.getElementById("mar").value;
    let alf = document.getElementById("alf").value;

    let orderSummary = "";

    if (spa > 0) orderSummary += `🍝 Spaghetti Marinara: ${spa}\n`;
    if (cae > 0) orderSummary += `🥗 Caesar Salad: ${cae}\n`;
    if (mar > 0) orderSummary += `🍕 Margherita Pizza: ${mar}\n`;
    if (alf > 0) orderSummary += `🍤 Alfredo Shrimp Pasta: ${alf}\n`;

    if (orderSummary === "") {
        alert("No items selected");
    } else {
        alert("Order Sent! 🎉\n\nYou ordered:\n" + orderSummary);
    }
}
