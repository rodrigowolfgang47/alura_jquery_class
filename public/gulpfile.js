import { task, src, dest, watch, series } from 'gulp';
var sass = require('gulp-sass')(require('sass'));
import concat from 'gulp-concat';

task('compilar', function(){
  return src(['*.sass', 'sass/*.sass'])
  .pipe(sass().on('error', function(err){
    console.log(err)
  }))
  .pipe(concat('style.css'))
  .pipe(dest('css'))
});

task('monitorar', function(){
  watch(['*.sass', 'sass/*.sass'], series('compilar'));
});

task('default', series('monitorar'));