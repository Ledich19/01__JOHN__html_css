import replace from 'gulp-replace'; // поис и замена
import plumber from "gulp-plumber" // обработка ошибок
import notify from "gulp-notify" //сообщения (подсказки)
import browserSync from 'browser-sync';

export const plugins = {
  browserSync: browserSync,
  replace: replace,
  plumber: plumber,
  notify: notify,
}