const notifications = document.querySelector(".notifications");
const user = document.querySelectorAll(".user");

let score = 0;
const users = Array.from(user);
console.log(users);

users.forEach((user) => {
  user.addEventListener("click", (e) => {
    e.preventDefault();
    user.classList.toggle("marked");
    score++;
    notifications.innerHTML = score;

    // user.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   e.target.classList.remove("marked");
    //   score--;
    //   notifications.innerHTML = score;
    // });
  });
});
