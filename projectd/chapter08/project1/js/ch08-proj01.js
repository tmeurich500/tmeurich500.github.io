const tax_rate = prompt('Enter tax rate (e.g. 0.10)');
const shipping_threshold = prompt('Enter shipping threshold (e.g. 1000)');

const tableBody = document.querySelector("tbody");
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

// Insert totals
document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
document.getElementById("shipping").textContent = `$${shipping.toFixed(2)}`;
document.getElementById("grandtotal").textContent = `$${grandTotal.toFixed(2)}`;
