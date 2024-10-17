import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';


const sass = gulpSass(dartSass);

const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images'
    }
};

//SASS
export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}

//Imagens
export function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

//JavaScript
export function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(terser())
        .pipe(gulp.dest(paths.scripts.dest));
}

//Mudanças nos arquivos
export function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
}

//Exportação

export default gulp.series(styles, scripts, images, watch);