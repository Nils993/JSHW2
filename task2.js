// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const btn = document.querySelector(".button");
btn.addEventListener("click", addReview);

function addReview() {
  const review = document.querySelector(".reviewText");
  const reviewText = review.value;
  if (reviewText.length < 50 || reviewText.length > 500) {
    throw new Error("Review must be between 50 and 500 symbols");
  }
  const reviewContainer = document.querySelector(".container");
  const reviewContent = document.createElement("p");
  reviewContent.innerHTML = reviewText;

  reviewContainer.appendChild(reviewContent);
  review.value = "";
}
