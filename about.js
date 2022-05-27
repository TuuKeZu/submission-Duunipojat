document.addEventListener('DOMContentLoaded', () => {
    Initialize();
});

const Initialize = () => {
    console.log('ready');

    document.getElementById('home-btn').addEventListener('click', () => {
        document.location = './index.html#home'
    });

    document.getElementById('services-btn').addEventListener('click', () => {
        document.location = './index.html#services'
    });

    document.getElementById('prices-btn').addEventListener('click', () => {
        document.location = './index.html#prices'
    });

    document.getElementById('feedback-btn').addEventListener('click', () => {
        document.location = './index.html#feedback'
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        document.location = './index.html#contact'
    });
}