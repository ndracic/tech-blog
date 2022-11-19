const NewPostButton = document.querySelector('.new-post-button');
const postForm = document.querySelector('#post-form');

const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#user-title-post').value.trim();
  const description = document.querySelector('#user-description-post').value;

  if (title && description) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert(response.statusText)
    }
  }
};

NewPostButton.addEventListener('click', function () {
  postForm.classList.remove('hide');
  NewPostButton.classList.add('hide')
})

document.querySelector('#post-form').addEventListener('submit', newPostFormHandler);