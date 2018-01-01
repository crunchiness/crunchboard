import gulp from 'gulp';
import gulpif from 'gulp-if';
import {log, colors} from 'gulp-util';
import named from 'vinyl-named';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import livereload from 'gulp-livereload';
import args from './lib/args';

gulp.task('scripts', (cb) => {
    return gulp.src('./app/scripts/*.js')
        .pipe(named())
        .pipe(gulpWebpack({
            devtool: args.sourcemaps ? 'inline-source-map' : null,
            watch: args.watch,
            plugins: args.production ? [new webpack.optimize.UglifyJsPlugin()] : [],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: 'eslint-loader',
                        exclude: /node_modules/,
                        enforce: 'pre',
                        query: {
                            configFile: '.eslintrc'
                        }
                    },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    }
                ]
            },
            node: {
                fs: 'empty',
                net: 'empty',
                tls: 'empty'
            }
        }, null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false,
                colors: true,
                cached: false,
                children: false
            }));
        }))
        .pipe(gulp.dest(`dist/${args.vendor}/scripts`))
        .pipe(gulpif(args.watch, livereload()));
});
