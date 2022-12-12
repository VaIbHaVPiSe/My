document.addEventListener('DOMContentLoaded', () => {

    // handling contact form

    let cform = document.getElementById('contact-form');
    cform.onsubmit = (e) => {
        document.getElementById('form-send').setAttribute('disabled', 'disabled');
        fetch('https://formspree.io/f/maykorpq', {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value

            }),
            mode: 'no-cors'
        })
        .then(data => {
            console.log(data);
            cform.reset();
            let formButton = document.getElementById('form-send');

            formButton.innerHTML = "Message Sent!";
            triggerConfetti(formButton);
            setTimeout(() => {
                formButton.innerHTML = "Send Message";
                formButton.removeAttribute('disabled');
            }, 4000);
        });
        return false;
    }
})

const triggerConfetti = (button) => {
    // e.preventDefault();
    button.classList.remove('confettis-on');
    // triggering reflow, so that the CSS animation restarts
    void button.offsetWidth;
    button.classList.add('confettis-on');
  }
  
// const confettiElements = document.querySelectorAll('[data-confettis]');
// confettiElements && [...confettiElements].forEach(element => element.addEventListener('click', triggerConfetti(element), false));