try {
    alert('start of the try blocl');

    someVariable;

    alert('end of the try blocl');
} catch(err) {
    alert('catch is ignored of no errors');
}

alert('....execution continues');

function myThrow() {
    let message = document.getElementById("message");
    message.innerHTML ="";
    let x = document.getElementById("demo").value;
    
    try {
        if(x == "") throw "please input a number";
        if(x < 10) throw "your number is too low";
        if(x > 25) throw "your number is too high";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}