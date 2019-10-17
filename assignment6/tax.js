formChanged = () => {
    var income = document.getElementById('income').value;
    var savings = document.getElementById('wealth').value;
    console.log(income * savings);
    console.log(income + savings);
    var tax = calcTax(income, savings);
    console.log('tax', tax);
    document.getElementById('taxValue').value = tax;
};

calcTax = (income, savings) => {
    return 0.35 * income + 0.25 * savings;
};