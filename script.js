const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");

    const height = question.nextElementSibling.scrollHeight;
    if (question.classList.contains("active")) {
      question.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      question.nextElementSibling.style.maxHeight = "0px";
    }
  });
});
