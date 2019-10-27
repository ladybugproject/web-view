const API_SERVER = 'http://15.164.225.87:3000';

const recommendation = () =>
  fetch(`${API_SERVER}/playing/recommendation`, {
    'Content-Type': 'application/json',
  })
    .then(resp => resp.json())
    .then(resp => resp[1].result)
    .catch(console.error)
;

const APIClient = {
  playing: {
    recommendation,
  }
};

export default APIClient;
// const recommendations = await fetch(`${API_SERVER}/playing/recommendation`, {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// }).then(resp => resp.json())
//   .then(resp => resp[1].result)
//   .catch((e) => {
//     console.error(e.message);
//   });