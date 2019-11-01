const $ = (name, home = document) => home.querySelector(name);
const $$ = (name, home = document) => home.querySelectorAll(name);

async function fetchUsingMethod(url, { methodType, data }) {
  const response = await fetch(url, {
    method: methodType,
    mode: "cors",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response;
}

export { $, $$, fetchUsingMethod };
