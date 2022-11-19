
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#user-name-signup').value.trim();
    const email = document.querySelector('#user-email-signup').value.trim();
    const password = document.querySelector('#user-password-signup').value.trim();
    console.log('it works')
    if (name && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);