import makeNewCard from './app';
import DragDrop from './DnD';

document.addEventListener('DOMContentLoaded', () => {
  const todo = document.querySelector('.todo-list');
  const progress = document.querySelector('.progress-list');
  const done = document.querySelector('.done-list');

  makeNewCard('Test card', todo);
  makeNewCard('Test card', todo);

  makeNewCard('Test card', progress);
  makeNewCard('Test card', progress);

  makeNewCard('Test card', done);
  makeNewCard('Test card', done);

  const allCards = document.querySelectorAll('.list-item');
  const allLists = document.querySelectorAll('.list');

  DragDrop(allCards, allLists);
});
