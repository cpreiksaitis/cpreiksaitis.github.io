document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
      const toggleAnswer = question.querySelector('.toggle-answer');
      const answerContainer = question.querySelector('.answer-container');
  
      toggleAnswer.addEventListener('click', function() {
        answerContainer.classList.toggle('hidden');
        toggleAnswer.classList.toggle('active');
      });
    });
  });