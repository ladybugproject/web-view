const $ = (name, home=document) => home.querySelector(name);
const $$ = (name, home=document) => home.querySelectorAll(name);

export {
  $, $$
}