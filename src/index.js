import $ from 'jquery';
import './index.css';
import api from './modules/api';
import store from './modules/store';
import shoppingList from './modules/shopping-list';

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

