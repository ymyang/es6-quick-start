/**
 * Created by yang on 2016/4/9.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('src/**.js')
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['async-to-promises']
        }))
        .pipe(gulp.dest('./build'))
);