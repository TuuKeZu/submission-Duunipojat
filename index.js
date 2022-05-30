document.addEventListener('DOMContentLoaded', () => {
    Initialize();
});

const Initialize = () => {
    console.log('ready');

    const home = document.getElementById('home');
    const services = document.getElementById('services');
    const prices = document.getElementById('prices');
    const feedback = document.getElementById('feedback');
    const contact = document.getElementById('contact');

    document.getElementById('home-btn').addEventListener('click', () => {
        home.scrollIntoView({ behavior: "smooth", block: "center" });
        console.log("home")
    });

    document.getElementById('services-btn').addEventListener('click', () => {
        services.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById('prices-btn').addEventListener('click', () => {
        prices.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById('about-btn').addEventListener('click', () => {
        document.location = './about.html';
    });
    /*
    document.getElementById('feedback-btn').addEventListener('click', () => {
        feedback.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    */
    document.getElementById('contact-btn').addEventListener('click', () => {
        contact.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}