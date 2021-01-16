const apiUrl = 'http://127.0.0.1:5000';

export default {
  getData() {
    return fetch(apiUrl + '/api/v1/verification-profile/get-data')
      .then(response => response.json())
  },

  verify(data) {
    return fetch(apiUrl + '/api/v1/verification-profile/verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  },

  reject(data) {
    return fetch(apiUrl + '/api/v1/verification-profile/cancel-verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  },

  blockAccount(data) {
    return fetch(apiUrl + '/api/v1/verification-profile/ban-acc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  },

  blockDevice(data) {
    return fetch(apiUrl + '/api/v1/verification-profile/ban-dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
}
