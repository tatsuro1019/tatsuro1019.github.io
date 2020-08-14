let radioValue = 'order';
let getRadioValue = function (r_value) {
    radioValue = r_value;
    if (r_value !== 'order') {
        document.getElementById('ordernum').removeAttribute('required');
        document.getElementById('ordernum').style.display = 'none';
    } else {
        document.getElementById('ordernum').style.display = '';
        document.getElementById('ordernum').setAttribute('required', '');
    }
}

window.addEventListener('load', function () {
    let mbutton = document.getElementById('mainbutton');
    mbutton.style.backgroundColor = '#191970';
    mbutton.className += 'active';

    let form = document.getElementById('contact-form');
    let postalcondition1 = /[a-zA-Z][0-9][a-zA-Z] [0-9][a-zA-Z][0-9]/;
    let postalcondition2 = /[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]/;

    form.onsubmit = function () {
        let postalcode = document.getElementById('postalcode').value;
        let errorpara = document.getElementById('error-para');
        let email = document.getElementById('emailaddr').value;

        let emailpattern = /[a-zA-Z0-9]+\@.+\..+/;
        let displayError = false;
        let returnVal = true;

        errorpara.innerHTML = '';

        if (!(postalcode.match(postalcondition1) || postalcode.match(postalcondition2))) {
            errorpara.innerHTML += 'Error! Invalid Postal Code';
            displayError = true;
            returnVal = false;
        }

        if (!(email.match(emailpattern))) {
            if (errorpara.innerHTML != '') {
                errorpara.innerHTML += '<br><br>';
            }
            errorpara.innerHTML += 'Error! Invalid Email';
            displayError = true;
            returnVal = false;
        }

        if (displayError) {
            errorpara.style.display = 'block';
        } else {
            errorpara.style.display = 'none';
        }

        if (!returnVal) {
            form.reset();
            document.getElementById('ordernum').style.display = '';
            document.getElementById('ordernum').setAttribute('required', '');
            radioValue = 'order';
        }
        return returnVal;
    }

});