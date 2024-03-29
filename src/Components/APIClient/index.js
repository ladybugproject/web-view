import querystring from 'querystring';

const API_SERVER = 'http://15.164.225.87:3000';

const API_CALL_TEMPLATE = (apiPath, options = {}) => (param) => {
  const defaultOptions = {
    'Content-Type': 'application/json',
    'Method': 'GET',
  };

  const opt = Object.assign(defaultOptions, options);

  const path = `${API_SERVER}${apiPath}`;
  const url = param ? `${path}?${querystring.stringify(param)}` : path;

  return fetch(url, opt)
    .then(resp => resp.json())
    .then(resp => resp[1].result)
    ;
};

const APIClient = {
  playing: {
    recommendation: API_CALL_TEMPLATE('/playing/recommendation'),
    now: API_CALL_TEMPLATE('/playing/now'),
  },
  prfinfo: {
    search: API_CALL_TEMPLATE('/prfinfo'),
    detail: ({ prf_id }) => API_CALL_TEMPLATE(`/prfinfo/${prf_id}`)(),
  },
};

export default APIClient;
