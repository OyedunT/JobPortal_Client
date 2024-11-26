export const url = 'https://jobportal-api-mj29.onrender.com:5000/';

export const post = (endpoint, body, callback) => {
    fetch(`${url}${endpoint}`, {
        method: "POST",
        body,
      })
        .then((res) => res.json())
        .then((result) => {
         callback(result)
        });
}
