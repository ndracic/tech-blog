const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#user-email-signin').value.trim();
    const password = document.querySelector('#user-password-signin').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/')
      } else {
        alert(response.statusText)
      }
    }
  };
  
  document.querySelector('#signin-form').addEventListener('submit', loginFormHandler);