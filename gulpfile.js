var gulp=require("gulp"),
	webserver=require("gulp-webserver"),
	livereload=require("gulp-livereload"),
	sass = require('gulp-ruby-sass'),
	uglify=require("gulp-uglify"),
	imagemin=require("gulp-imagemin");


// 注册任务：
gulp.task("webserver",function(){
	gulp.src('dist')
	.pipe(webserver({
		livereload:true,
		open:true
	}));
});
// html任务：
gulp.task("html",function(){
	return gulp.src("src/**/*.html")
	.pipe(gulp.dest("dist"));
	//指明源文件路径并输出到发布环境
});

// sass任务：
gulp.task('sass',function(){
	return sass('src/css/**/*.scss',{style:'compact'})//简洁格式的css
	.on('error',function(err){
		console.log('编译sass出错%s',err.message);
	})//指明文件路径  /**/监听目录下所有的.html文件
    .pipe(gulp.dest('dist/css'));//输出路径
})

// script压缩任务：
gulp.task("myjs",function(){
	return gulp.src("src/js/**/*.js")
		.pipe(uglify({preserveComment:"some"})) //压缩并保留注释
		.pipe(gulp.dest("dist/js"))
})
//压缩图片
gulp.task("image",function(){
	return gulp.src("src/img/**/*.{png,jpg,gif,svg}")
		.pipe(imagemin({progressive:true,
		svgoPlugins:[{removeViewBox:false}],
		})) //无损压缩
		.pipe(gulp.dest("dist/img"))
})

// 监听任务：
gulp.task("watch",function(){
	gulp.watch("src/**/*.html",["html"]);//监听根目录下所有的html
	// 监听 scss
	gulp.watch('src/css/**/*.scss', ['sass']);
	// 监听 images
	gulp.watch('src/img/**/*.{png,jpg,gif,svg}', ['image']);
	// 监听 js
	gulp.watch('src/js/*.js', ['myjs']);
});

//默认执行任务：
gulp.task("default",['sass',"webserver","html","myjs","image","watch"]);