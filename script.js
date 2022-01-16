function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if(principal <= 0){
        window.alert('Enter a positive value');
        document.getElementById('principal').focus();
    }
    else{
        document.getElementById('result').innerText = 'If you deposit ' + principal + 
        ',\n at an interest rate of ' + rate + 
        ',\nYou will receive an amount of ' + interest + 
        ',\nin the year ' + year+ '\n\n';
    }
}
function updateRate(){
    var rateVal = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateVal + '%';
}
        