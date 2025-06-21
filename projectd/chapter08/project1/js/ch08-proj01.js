
window.onload = function() {
    document.querySelector("button").addEventListener("click", calculateCart);
};

function calculateCart() {
    const tax_rate = parseFloat(document.getElementById("taxRate").value);
    const shipping_threshold = parseFloat(document.getElementById("shipThreshold").value);

    const tableBody = document.getElementById("cart-body");
    let html = "";

    for (let item of cart) {
        const { title, filename, price } = item.product;
        const quantity = item.quantity;
        const amount = price * quantity;

        html += `
            <tr>
                <td><img src="images/${filename}"></td>
                <td>${title}</td>
                <td>${quantity}</td>
                <td>$${price.toFixed(2)}</td>
                <td>$${amount.toFixed(2)}</td>
            </tr>
        `;
    }

    tableBody.innerHTML = html;

    const subtotal = calculateSubtotal(cart);
    const tax = calculateTax(subtotal, tax_rate);
    const shipping = calculateShipping(subtotal, shipping_threshold);
    const grandTotal = calculateGrandTotal(subtotal, tax, shipping);

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
    document.getElementById("shipping").textContent = `$${shipping.toFixed(2)}`;
    document.getElementById("grandtotal").textContent = `$${grandTotal.toFixed(2)}`;
}
