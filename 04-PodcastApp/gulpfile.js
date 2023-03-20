const { src, dest, watch, series } = require('gulp');
//Compilar CSS
const sass = require('gulp-sass')(require('sass'));
//Imagenes

const imagemin = require('gulp-imagemin');

function css(done) {
    //Identificar el archivo princiapl
    src('src/scss/app.scss')
        .pipe(sass()) //Compilar SASS
        .pipe(dest('build/css')) //Exportar 

    done();
}

function dev() {
    watch('src/scss/**/*.scss', css);
}

function imagenes(done) {
    src('src/img/**/*').pipe(imagemin({ optimizationLevel: 3 })).pipe(dest('build/img'))
    done();
}



exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev);