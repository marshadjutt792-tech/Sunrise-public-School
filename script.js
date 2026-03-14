const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



/* FILTER COURSES */

const filterButtons = document.querySelectorAll(".filter-buttons button");
const courses = document.querySelectorAll(".course");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        courses.forEach(course => {

            if (filter === "all" || course.classList.contains(filter))
                course.style.display = "block";
            else
                course.style.display = "none";

        });

    });

});



/* TEACHER MODAL */

const teacherCards = document.querySelectorAll(".teacher-card");
const modal = document.getElementById("teacherModal");
const teacherName = document.getElementById("teacherName");
const teacherInfo = document.getElementById("teacherInfo");
const closeModal = document.getElementById("closeModal");

teacherCards.forEach(card => {

    card.addEventListener("click", () => {

        teacherName.textContent = card.dataset.name;
        teacherInfo.textContent = card.dataset.info;

        modal.style.display = "flex";

    });

});

closeModal.onclick = () => modal.style.display = "none";



/* GALLERY LIGHTBOX */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});



/* FAQ ACCORDION */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        answer.style.display =
            answer.style.display === "block" ? "none" : "block";

    });

});



/* FORM VALIDATION */

const form = document.getElementById("admissionForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if (name === "" || email === "" || age === "") {

        message.textContent = "Please fill all fields";
        message.style.color = "red";

        return;
    }

    if (age < 5) {

        message.textContent = "Age must be above 5";
        message.style.color = "red";

        return;
    }

    message.textContent = "Application submitted!";
    message.style.color = "green";

    form.reset();

});
const contactForm = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        status.textContent = "Please fill all fields.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Message sent successfully!";
    status.style.color = "green";

    contactForm.reset();

});