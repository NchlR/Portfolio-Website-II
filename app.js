function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');

    emailjs
    .sendForm(
        'service_ngkzynp',
        'template_5phd2lf',
        event.target,
        'h8ooOzyl9xkdyyQ2N'
    ).then(()=> {
        loading.classList.remove('modal__overlay--visible');
        success.classList.add('modal__overlay--visible');
    }).catch (() => { 
        loading.classList.remove('modal__overlay--visible');
        alert(
            "The email service is temporarily unavailable. Please contact me directly at nico051701@outlook.com"
        )
    })
}

function toggleModal() {
    document.body.classList.add("modal--open");
}


