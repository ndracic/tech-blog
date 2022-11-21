

const loginFormHandler = async function (event) {
      event.preventDefault();
  
    const email = document.querySelector("#email-signin");
    const password = document.querySelector("#password-signin");
  
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: email.value,
        password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        document.location.replace("/");
      })
      .catch((err) => console.log(err));
    };
    
  document.querySelector('#signin-form').addEventListener('submit', loginFormHandler);