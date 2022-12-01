const gulp 		    = require('gulp'),
    plugins		    = require('gulp-load-plugins')(),
    autoprefixer    = require('autoprefixer'),
    cssnano         = require('cssnano'),
    sass            = require('gulp-sass')(require('sass'))
    config          = {
        autoprefixer: {
            enable : true,
            opts: {
                grid: "autoplace"
            }
        },
        sass: {
            minify: true,
            src: 'sass/**/*.{scss,sass}',
            opts: {
                outputStyle: 'expanded',
                sourceMapEmbed: true
            },
            postCssPlugins: [],
            outputName: '',
            dest: 'dist/'
        }
    };

gulp.task('sass', () => {
    if(config.autoprefixer.enable)
        config.sass.postCssPlugins.push(autoprefixer(config.autoprefixer.opts));

    if(config.sass.minify)
        config.sass.postCssPlugins.push(cssnano());

    return gulp.src(config.sass.src)
        .pipe(plugins.sourcemaps.init())
        .pipe(sass(config.sass.opts).on('error', sass.logError))
        .pipe(plugins.postcss(config.sass.postCssPlugins))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.sass.dest));
});

gulp.task('watch', () => {
    gulp.watch(config.sass.src, gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'));