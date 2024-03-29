// export const BASE_URL = 'https://auth.nomoreparties.co';
// export const BASE_URL = 'http://localhost:3000';
export const BASE_URL = 'https://logowaz25back.nomoredomainsmonster.ru';


function onResponce(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`)
}

export const register = ({password, email}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({password, email})
  })
  .then(res => onResponce(res));
}

export const authorize = ({password, email}) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({password, email })
    })
    .then(res => onResponce(res));
    
  };

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    })
      .then(res => onResponce(res))
      .then(data => data);
  };