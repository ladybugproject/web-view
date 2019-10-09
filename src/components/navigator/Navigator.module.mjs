import {$} from '../../Utility';

function detailSearchClickHandler() {
  const searchBar = $('.wrap-searchbar');
  if (searchBar.classList.contains('searching')) {
    searchBar.classList.remove('searching');
  }
  else{
    searchBar.classList.add('searching');
  }
}

export {
  detailSearchClickHandler
}