export function emailHandler(){

    const contactForm = document.querySelector('.contact-form');

    emailjs.init('G2e_8M6-EFRJlx2Ha');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('service_tig1kpp', 'template_eiywkfa', templateParams)
            .then((response) => {
                alert('Your message has been sent successfully!');
                contactForm.reset();
            }, (error) => {
                alert('Failed to send your message. Please try again later.');
            });
    });
}