const notifications = document.querySelector(".notifications");
const users = document.querySelectorAll(".user");
let score = document.querySelector(".score");
const unread = document.querySelectorAll(".unread");
const markAll = document.querySelector(".mark__all");

score.textContent = unread.length;

users.forEach((user) => {
  user.addEventListener("click", (e) => {
    e.preventDefault();
    user.classList.remove("unread");

    const newUnread = document.querySelectorAll(".unread");
    score.textContent = newUnread.length;
  });
});

markAll.addEventListener("click", (e) => {
  e.preventDefault();
  unread.forEach((unrea) => {
    unrea.classList.remove("unread");
    newUnread = document.querySelectorAll(".unread");
    score.textContent = newUnread.length;
  });
});
