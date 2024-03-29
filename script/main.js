const change = () => {
    const inr = parseInt(document.getElementById('inr').value);
    const usd = parseFloat(inr * 0.0121);

    console.log(usd);
    document.getElementById('res').innerHTML = inr + " converted to USD is " + usd;
}