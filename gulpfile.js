import gulp from 'gulp';
import {
  path
} from './gulp/config/path.js';
import { plugins } from './gulp/config/plagins.js';



global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

import { reset } from './gulp/tascs/reset.js';
import { copy } from './gulp/tascs/copy.js';
import { html } from './gulp/tascs/html.js';

function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);





// Static server
// gulp.task('server', function () {
//   browserSync.init({
//     server: {
//       baseDir: "dist"
//     }
//   });
//   gulp.watch('src/*.html').on('change', browserSync.reload)
// });

// gulp.task('styles', function () {
//   return gulp.src("src/scss/*.+(scss|sass)")
//     .pipe(sass({
//       outputStyle: 'compressed'
//     }).on('error', sass.logError))
//     .pipe(rename({
//       prefix: "",
//       suffix: ".min",
//     }))
//     .pipe(autoprefixer({
//       cascade: false
//     }))
//     .pipe(cleanCSS({
//       compatibility: 'ie8'
//     }))
//     .pipe(gulp.dest('dist/css'))
//     .pipe(browserSync.stream())
// });

// gulp.task('watch', function () {
//   gulp.watch('src/sass/*.(scss|sass|css)', gulp.parallel('styles'))
//   gulp.watch('src/*.html').on('change', gulp.parallel('html'))
// })

// gulp.task('html', function () {
//   return gulp.src('src/*.html')
//     .pipe(htmlmin({
//       collapseWhitespace: true
//     }))
//     .pipe(gulp.dest('dist/'));
// })

// gulp.task('scripts', function () {
//   return gulp.src('src/js/**/*.js')
//     .pipe(gulp.dest('dist/js'));
// })

// gulp.task('fonts', function () {
//   return gulp.src('src/fonts/**/*')
//     .pipe(gulp.dest('dist/fonts'));
// })

// gulp.task('icons', function () {
//   return gulp.src('src/icons/**/*')
//     .pipe(gulp.dest('dist/icons'));
// })

// gulp.task('images', function () {
//   return gulp.src('src/images/**/*')
//     .pipe(gulp.dest('dist/images'));
// })

// gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'fonts', 'icons', 'images', ));