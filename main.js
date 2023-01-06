import './style.css'
import {App} from './src/todos/app';
import second from '/src/store/todo.store';
import todoStore from './src/store/todo.store';

todoStore.initStore();



App('#app');