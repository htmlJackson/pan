const gulp = require("gulp");
const sass = require("gulp-sass");
const path = require("path");
const plumber = require("gulp-plumber");
const server = require("browser-sync");
const concat = require("gulp-concat");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const csso = require("gulp-csso");
const postcss = require("gulp-postcss");
const svgSprite = require('gulp-svg-sprite');

var svgConfig = {
    shape: {
        dimension: {         // Set maximum dimensions
            maxWidth: 500,
            maxHeight: 500
        },
        spacing: {         // Add padding
            padding: 0
        }
    },
    mode: {
        symbol: {
            dest : '.'
        }
    }
};

gulp.task("sass", function () {
  return gulp.src("./sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task('svg', function (cb) {
  return gulp.src('img/svg/*.svg')
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('sprites'));
});

gulp.task("default", ["sass"], function() {
  server.init({
    server: "."
  });

  gulp.watch("sass/*.scss", ["sass"]);
  gulp.watch("*.html")
  .on("change", server.reload);
});
