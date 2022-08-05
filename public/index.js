//Links

const Links = document.querySelectorAll('.Link');

Links.forEach(Link => {
    Link.addEventListener('click', () => {
        Links.forEach(ele => ele.classList.remove('active'));
        Link.classList.add('active');
    })
})

// query contact
const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const contact_number = document.querySelector('.contact-number');
const select_your_insurance_policy = document.querySelector('.select-policy');
const policy_number = document.querySelector('.policy-number');
const Enter_Your_Query_Here = document.querySelector('.message');

contactBtn.addEventListener('click', () => {
    if(firstName.value.length && lastName.value.length && email.value.length && contact_number.value.length && select_your_insurance_policy.value.length && policy_number.value.length && Enter_Your_Query_Here.value.length){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                contactNumber: contact_number.value,
                SelectPolicy: select_your_insurance_policy.value,
                PolicyNumber: policy_number.value,
                Query: Enter_Your_Query_Here.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data);
        })
    }
})