const description = document.querySelectorAll(".description");
const descriptionName = document.querySelectorAll(".name");



description.forEach(el => {
  el.setAttribute("data-text", el.innerText);
});

descriptionName.forEach(el => {
  el.setAttribute("data-text", el.innerText);
});


document.addEventListener("DOMContentLoaded", () => {
    const fragments = document.querySelector('.fragments');
    if (!fragments) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fragments.classList.add('animate');
                observer.unobserve(fragments); // Чтобы не повторялось
            }
        });
    }, { threshold: 0.3 });

    observer.observe(fragments);
});
