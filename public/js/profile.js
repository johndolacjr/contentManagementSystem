let name; 
let needed_funding;
let description;
let id;

const newFormHandler = async (event) => {
  event.preventDefault();

  name = document.querySelector('#project-name').value.trim();
  needed_funding = document.querySelector('#project-funding').value.trim();
  description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Create comment failed, it did');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Delete comment failed, it did');
    }
  }
};

const submitUpdateHandler = async (event) => {
  event.preventDefault();

  name = document.querySelector('#project-name').value.trim();
  needed_funding = document.querySelector('#project-funding').value.trim();
  description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Update comment failed, it did');
    }
  }
};




// Need to figure out why the fetch isnt working. 








const getUpdateValues = async (event) => {
  id = event.target.getAttribute('data-id');
  const response = await fetch(`/api/projects/${id}`, {
    method: 'GET',
    body: JSON.stringify({ name, needed_funding, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
    if (response.ok) {
      name.value=response.name,
      needed_funding.value=response.needed_funding,
      description.value=response.description
    };
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#delete')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#update')
  .addEventListener('click', getUpdateValues);
