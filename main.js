formSubmit()

function formSubmit() {
    const formContainer = document.getElementById('container');

    //
    // sections
    //
    const fullNameSection = document.getElementById('full-name-sec');
    const addressSection = document.getElementById('address-sec');
    const phoneSection = document.getElementById('phone-sec');
    const emailSection = document.getElementById('email-sec');
    const awarenessSection = document.getElementById('dropdown-sec');

    //
    // inputs
    //
    // name and surname
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');

    // address
    const streetAddr = document.getElementById('street-addr');
    const streetAddr2 = document.getElementById('street-addr2');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const postalCode = document.getElementById('postal');

    // phone
    const phone = document.getElementById('phone');

    // email
    const email = document.getElementById('email');

    // dropdown
    const awareness = document.getElementById('dropdown');
    const awarenessOtherInput = document.getElementById('other-input');
    const awarenessOther = document.getElementById('other');

    //
    // required hints
    //
    const nameSurnameRequired = document.getElementById('name-surname-req')
    const addressRequired = document.getElementById('address-req')
    const phoneRequired = document.getElementById('phone-req')
    const dropDownRequired = document.getElementById('dropdown-req')
    const awarenessOtherRequired = document.getElementById('other-req')

    // email validation
    const emailValidation = document.getElementById('email-valid')

    // submit button
    const submitButton = document.getElementById('submit-btn');

    submitButton.addEventListener('click', () => {
        event.preventDefault();
        let hasPassedName = false;
        if (name.value === "" || surname.value === "") {
            name.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            fullNameSection.style.backgroundColor = '#FFEDED'
            name.style.borderColor = '#F23A3C'
            surname.style.borderColor = '#F23A3C'
            nameSurnameRequired.style.display = 'unset'
        } else hasPassedName = true;

        let hasPassedAddress = false;
        if (streetAddr.value === "" || city.value === "" || state.value === "" || postalCode.value === "") {
            streetAddr.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            addressSection.style.backgroundColor = '#FFEDED'
            streetAddr.style.borderColor = '#F23A3C'
            city.style.borderColor = '#F23A3C'
            state.style.borderColor = '#F23A3C'
            postalCode.style.borderColor = '#F23A3C'
            addressRequired.style.display = 'unset'
        } else hasPassedAddress = true;

        let hasPassedPhone = false;
        if (phone.value === "") {
            phone.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            phoneSection.style.backgroundColor = '#FFEDED'
            phone.style.borderColor = '#F23A3C'
            phoneRequired.style.display = 'unset'
        } else hasPassedPhone = true;

        let isEmailValid = false;
        if (!isValidEmail(email.value) && email.value !== "") {
            email.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            emailSection.style.backgroundColor = '#FFEDED'
            email.style.borderColor = '#F23A3C'
            emailValidation.style.display = 'unset'
        } else isEmailValid = true;

        let hesSelectedAwareness = false;
        if (awareness.value === "Please Select") {
            awareness.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            awarenessSection.style.backgroundColor = '#FFEDED'
            awareness.style.borderColor = '#F23A3C'
            dropDownRequired.style.display = 'unset'
        } else if (awareness.value === "Other (Please specify...)") {
            awareness.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            awarenessOther.style.display = 'block'
            awarenessOther.style.backgroundColor = '#FFEDED'
            awarenessOtherInput.style.borderColor = '#F23A3C'
            awarenessOtherRequired.style.display = 'unset'
        } else hesSelectedAwareness = true;

        const rows = document.querySelectorAll("table tbody tr");

        const data = Array.from(rows).map(row => {
            const cells = row.querySelectorAll("td input");
            return {
                fullName: cells[0].value.trim(),
                address: cells[1].value.trim(),
                contactNumber: cells[2].value.trim()
            };
        });

        if (hasPassedAddress && hasPassedName && hasPassedPhone && isEmailValid && hesSelectedAwareness) {
            showAlertImage()
            console.log(data);
        }
    })

    awareness.addEventListener("change", (event) => {
        console.log("Selected value:", event.target.value);
        const selectedValue = event.target.value;
        console.log(selectedValue);
        if (selectedValue === "Other (Please specify...)") {
            awarenessOther.style.display = 'block'
            awarenessOther.style.backgroundColor = '#ffffff'
            awarenessOtherInput.style.borderColor = '#C3CAD8'
            awarenessOtherRequired.style.display = 'none'
        } else {
            awarenessOther.style.display = 'none'
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlertImage() {
    const alert = document.getElementById("alert");
    const img = document.getElementById("alertImage");
    img.style.display = "block";
    alert.style.display = "block";
}
