var gulp = require('gulp'),
sass = require('gulp-sass')(require('sass')),
concat = require('gulp-concat');

gulp.task('compilar', function(){
  return gulp.src(['*.sass', 'sass/*.sass'])
  .pipe(sass().on('error', function(err){
    console.log(err)
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('css'))
});

gulp.task('monitorar', function(){
  gulp.watch(['*.sass', 'sass/*.sass'], gulp.series('compilar'));
});

gulp.task('default', gulp.series('monitorar'));