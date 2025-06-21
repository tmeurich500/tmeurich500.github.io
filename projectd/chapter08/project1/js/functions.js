/* define your functions here */

function calculateSubtotal(cart) {
    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.product.price * item.quantity;
    }
    return subtotal;
}

function calculateTax(subtotal, taxRate) {
    return subtotal * parseFloat(taxRate);
}

function calculateShipping(subtotal, threshold) {
    return subtotal > parseFloat(threshold) ? 0 : 40;
}

function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}
