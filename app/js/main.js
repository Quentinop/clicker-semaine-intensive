$(document).ready(function(){


  $(".burger_Animate").on("click", function(){

    $(".menu").toggleClass("open");
    $(".burger_Animate").toggleClass("open");
    $(this).toggleClass("is-active");
  });
  
});

// List of keyCodes & letters
/*var keyboard = 
{
	0 : {
		"name": 'a',
		"code": '65'
	},
	1 : {
		"name": 'b',
		"code": '66'
	},
	2 : {
		"name": 'c',
		"code": '67'
	},
	3 : {
		"name": 'd',
		"code": '68'
	},
	4 : {
		"name": 'e',
		"code": '69'
	},
	5 : {
		"name": 'f',
		"code": '70'
	},
	6 : {
		"name": 'g',
		"code": '71'
	},
	7 : {
		"name": 'h',
		"code": '72'
	},
	8 : {
		"name": 'i',
		"code": '73'
	},
	9 : {
		"name": 'j',
		"code": '74'
	},
	10 : {
		"name": 'k',
		"code": '75'
	},
	11 : {
		"name": 'l',
		"code": '76'
	},
	12 : {
		"name": 'm',
		"code": '77'
	},
	13 : {
		"name": 'n',
		"code": '78'
	},
	14 : {
		"name": 'o',
		"code": '79'
	},
	15 : {
		"name": 'p',
		"code": '80'
	},
	16 : {
		"name": 'q',
		"code": '81'
	},
	17 : {
		"name": 'r',
		"code": '82'
	},
	18 : {
		"name": 's',
		"code": '83'
	},
	19 : {
		"name": 't',
		"code": '84'
	},
	20 : {
		"name": 'u',
		"code": '85'
	},
	21 : {
		"name": 'v',
		"code": '86'
	},
	22 : {
		"name": 'w',
		"code": '87'
	},
	23 : {
		"name": 'x',
		"code": '88'
	},
	24 : {
		"name": 'y',
		"code": '89'
	},
	25 : {
		"name": 'z',
		"code": '90'
	}
} 

// add .pressed on the right key on keydown
document.addEventListener('keydown', function(e) {

	for(var i = 0; i < 26; i++){

		if(e.keyCode == keyboard[i].code){
			var letter = (keyboard[i].name);
			var letter_touch = document.querySelector('.' + letter);
			letter_touch.className += ' pressed';
		}

	}

});

// remove .pressed on the right key on keyup
document.addEventListener('keyup', function(e) {

	for(var i = 0; i < 26; i++){

		if(e.keyCode == keyboard[i].code){
			var letter = (keyboard[i].name);
			var letter_touch = document.querySelector('.' + letter);
			letter_touch.className = letter;
		}

	}

});
*/
// different sample of code to generate random projects
var	js   = ['console.clear();\n'+ // js1
			'var scene, camera, renderer, orbit, light;\n'+
			'let renderCalls = [];\n\n'+
			'scene = new THREE.Scene();\n'+
			'scene.fog = new THREE.Fog(0x242426, 20, 600);\n\n'+
			'camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 600 );\n' +
			'camera.position.z = 90;\n\n', // js1 end
			'var mouse = { x: 0, y: 0 };\n' + // js2
			'var current;\n' +
			'function y_rect_movement(){\n\n'+
			'document.addEventListener( "mouseup", function( event ){\n\n'+
			'mouse.x = event.clientX;\n'+
			'mouse.y = event.clientY;\n\n'+
			'for(var i = 0; i < y_rect.length; i++){\n\n'+
			'if(y_rect[i].x < mouse.x && mouse.x < y_rect[i].x_limit && y_rect[i].y < mouse.y && mouse.y < y_rect[i].y + y_rect[i].height/2){\n'+
			'current = y_rect[i];\n'+
			'y_rect[i].y -= 100;\n'+
			'y_rect[i].y_limit -= 100;\n '+
			'check_y_board_collision();\n'+
			'check_collision();\n'+
			'} else if (y_rect[i].x < mouse.x && mouse.x < y_rect[i].x_limit && y_rect[i].y + y_rect[i].height/2 < mouse.y && mouse.y < y_rect[i].y_limit){\n'+
			'current = y_rect[i];\n'+
			'y_rect[i].y += 100;\n'+
			'y_rect[i].y_limit += 100;\n'+ 
			'check_y_board_collision();\n'+
			'check_collision();\n'+
			'}\n'+
			'}\n'+
			'});\n'+
			'}\n'], // js2 end
		css  = ['*{\n'+ // css1
    				'margin: 0px;\n'+
    				'padding: 0px;\n'+
						'}\n\n'+
						'html, body {\n'+
		    		'font-family: Helvetica,Arial;\n'+
		    		'font-size:14px;\n'+
		    		'overflow: hidden;\n'+
		    		'position: relative;\n'+
						'}\n\n'+
						'.background {\n'+
		    		'display: none;\n'+
		    		'position:absolute;\n'+
		    		'height:1000px;\n'+
		    		'width:100%;\n'+
		    		'background-color: rgba(255, 255, 255, 0.5);\n'+
						'}\n\n'+
						'h1{\n'+
		    		'position:absolute;\n'+
		    		'top:50%;\n'+
		    		'left:50%;\n'+
		    		'font-family: "Bowlby One", cursive;\n'+
		    		'transform:translateX(-50%);\n'+
						'}\n\n'+
						'.icone{\n'+
		    		'position:absolute;\n'+
		    		'top:15%;\n'+
		    		'left:50%;\n'+
		    		'width:210px;\n'+
		    		'height:auto;\n'+
		    		'transform:translateX(-60%);\n'+
						'}\n\n'+
						'.button {\n'+
		    		'position:absolute;\n'+
		    		'top:60%;\n'+
		    		'left:50%;\n'+
		    		'transform:translateX(-50%);\n'+
		    		'padding:20px 20px;\n'+
		    		'font-size:24px;\n'+
		    		'text-align:center;\n'+
		    		'cursor:pointer;\n'+
		    		'outline:none;\n'+
		    		'color:#fff;\n'+
		    		'background-color:#F73E2D;\n'+
		    		'border:none;\n'+
		    		'border-radius:15px;\n'+
		    		'box-shadow:0 9px #999;\n'+
						'}', // css1 end
						'body {\n'+ // css2
						'background: #000;\n'+
						'font-family: Arial, Helvetica, sans-serif;\n'+
						'font-size: 14px;\n'+
						'overflow: hidden;\n'+
						'}\n\n'+
						'.bg{\n'+
						'position: absolute;\n'+
						'top: 0px;\n'+
						'left: 0px;\n'+
						'width: 100%;\n'+
						'height: 1080px;\n'+
						'background-color: #000;\n'+
						'height: 10000px;\n'+
						'animation-name: bg;\n'+
						'animation-duration: 12s;\n'+
						'animation-delay: 4s;\n'+
						'animation-fill-mode: forwards;\n'+
						'}\n\n'+
						'@keyframes bg{\n'+
						'0%   {transform: translateY(0px);}\n'+
						'20%  {background-color: #08293d; transform: translateY(-1500px);}\n'+
						'60%  {background-color: #89f3ff; transform: translateY(-7500px);}\n'+
						'100% {background-color: #89f3ff; transform: translateY(-9000px);}\n'+
						'}', // css2 end
						'body {\n'+ // css3
		    		'background: #eee;\n'+
		    		'font-family: Arial, Helvetica, sans-serif;\n'+
		    		'font-size: 14px;\n'+
		    		'margin: 0 auto;\n'+
						'}\n\n'+
						'.animation-test{\n'+
		    		'animation-name: test;\n'+
		    		'animation-duration: 5s;\n'+
		    		'animation-direction: alternate;\n'+
		    		'animation-iteration-count: infinite;\n'+
		    		'width: 80px;\n'+
		    		'height: 80px;\n'+
		    		'position: relative;\n'+
		    		'top: 400px;\n'+
		    		'left: 700px;\n'+
		    		'background-color: forestgreen;\n'+
		    		'padding-top: 80px;\n'+
		    		'padding-left: 25px;\n'+
    				'font-size: 24px;\n'+
						'}\n\n'+
						'.animation-test:after{\n'+
     				'content:"test";\n'+
						'}'], // css3 end
		html = ['<!DOCTYPE html>\n'+ // html1
						'<html lang="fr">\n'+
						'<head>\n'+
						'<meta charset="UTF-8">\n'+
						'<title>Document</title>\n'+
						'<link rel="stylesheet" href="style.css"> \n'+
						'</head>\n'+
						'<body>\n\n'+
						'<header>\n'+
						'<nav>\n\n'+
						'<div class="nav-logo">\n'+
						'<div class="container">\n'+
						'<img src="images/shape2.png">\n'+
						'<p>g</p>\n'+
						'<h1>Good Inc.</h1>\n'+
						'</div>\n'+
						'</div>\n'+
						'<div class="nav-items">\n'+
						'<div class="container">\n'+
						'<ul>\n'+
						'<li><a href="#"><img src="images/mappin.png" alt=""></a></li>\n'+
						'<li><a href="#">Portfolio</a></li>\n'+
						'<li><a href="#">Services</a></li>\n'+
						'<li><a href="#">Staff</a></li>\n'+
						'<li><a href="#">Articles</a></li>\n'+
						'<li><a href="#">Contact</a></li>\n'+
						'</ul>\n'+
						'</div>\n'+
						'</div>\n\n'+
						'</nav>\n'+
						'</header>\n\n'+
						'<script src="script.js"></script>\n'+
						'</body>\n'+
						'</html>', // html1 end
						'<!DOCTYPE html>\n'+ // html2
						'<html lang="fr">\n'+
						'<head>\n'+
						'<meta charset="UTF-8">\n'+
						'<title>Document</title>\n'+
						'<link rel="stylesheet" href="style.css"> \n'+
						'</head>\n'+
						'<body>\n\n'+
						'<section class="container">\n\n'+
						'<div class="top-section-img">\n'+
						'<img src="images/layer4.png" alt="">\n'+
						'</div>\n\n'+
						'<div class="top-section-text">\n'+
						'<h2>Housework can\'t kill you, but why take a chance ?</h2>\n'+
						'<p>\n'+
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatem obcaecati, at praesentium sunt. Id, optio consequatur fugiat itaque nihil quibusdam repellendus mollitia assumenda placeat debitis reiciendis? Vero corporis, iure.\n'+
						'</p>\n'+
						'<div class="top-section-text-date">\n'+
						'<img src="images/clock.png" alt="">\n'+
						'<span>14th April 2003</span>\n'+
						'</div>\n'+
						'</div>\n'+
						'<div class="clearBoth"></div>\n'+
						'<div class="articles">\n'+
						'<div class="article article-1">\n'+
						'<img src="images/Layer6.jpg" alt="">\n'+
						'<h3>Taste & Sounds from Thailand</h3>\n'+
						'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquam dolorum, placeat magnam repudiandae, ratione quidem omnis at earum dolores consequuntur molestias, corrupti animi, maxime quae veritatis ipsam voluptas incidunt!</p>\n'+
						'<a href="">READ MORE</a>\n'+
						'</div>\n'+
						'<div class="article article-2">\n'+
						'<img src="images/Layer8.jpg" alt="">\n'+
						'<h3>BlazRobar.com is awesome for PSD</h3>\n'+
						'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eum iure veritatis doloremque incidunt placeat, quo totam alias dolor, facilis culpa! Maxime iste ratione libero placeat debitis, illo eaque ab.</p>\n'+
						'<a href="">READ MORE</a>\n'+
						'</div>\n'+
						'<div class="article article-3">\n'+
						'<img src="images/Layer7.jpg" alt="">\n'+
						'<h3>Nice Looking Mountains Ah?</h3>\n'+
						'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aut voluptate, illo laudantium at iure mollitia in.</p>\n'+
						'<a href="">READ MORE</a>\n'+
						'</div>\n'+
						'</div>\n'+
						'<script src="script.js"></script>\n'+
						'</body>\n'+
						'</html>', // html2 end
						'<!DOCTYPE html>\n'+ // html3
						'<html lang="fr">\n'+
						'<head>\n'+
						'<meta charset="UTF-8">\n'+
						'<title>Document</title>\n'+
						'<link rel="stylesheet" href="style.css"> \n'+
						'</head>\n'+
						'<body>\n\n'+
						'<div class="background">\n\n'+
            '<img class="icone" src="images/win_icone.png">\n'+
            '<h1> CONGRATULATION </h1>\n'+
            '<button class="button">Replay</button>\n\n'+
	        	'</div>\n'+
	        	'<canvas></canvas>\n\n'+
						'<script src="script.js"></script>\n'+
						'</body>\n'+
						'</html>']; // html3 end


var nb               = 50,  // projects nb
		projects         = {},  // projects storage
		base_price       = 200, // price per project
		base_renown      = 50, // price per project
		required_click   = 60,  // required click to achieve project
		selected_project = {},  // current project storage
		task_counter     = 0;

// generate projects
function generate_projects(n){

	for(var i = 1; i < n+1; i++){

		// pick random code for each language
		var random_js   = Math.ceil(Math.random()*js.length-1),
				random_css  = Math.ceil(Math.random()*css.length-1),
				random_html = Math.ceil(Math.random()*html.length-1);

		if(Math.round(Math.random()*3 >= 2)){
			
			projects[i] = {'css'   : css[random_css],
					   			  'html'  : html[random_html],
					   			  'done'  : false};

		} else {

			// Build the projects object
			projects[i] = {'js'    : js[random_js],
						   			 'css'   : css[random_css],
						   			 'html'  : html[random_html],
						   			 'done'  : false};
		}

		// add dynamic difficulty and reward
		if(i % 3 == 0 && i != 0){
			projects[i].click  = required_click *2;
			projects[i].money  = base_price * 2;	
			projects[i].renown = base_renown * 2;	
		}else if(i < 3){
			projects[i].click = required_click;
			projects[i].money = base_price;
			projects[i].renown = base_renown;	
		} else if(i <8){
			projects[i].click = Math.round(required_click * 1.1);
			projects[i].money = Math.round(base_price * 1.1);
			projects[i].renown = base_renown;	
		} else {
			projects[i].click = Math.round(required_click * 1.2);
			projects[i].money = Math.round(base_price * 1.1);
			projects[i].renown = base_renown;	
		}

		for(var key in projects[i]){
			
			task_counter++;

		}

		projects[i].task = task_counter-4;
		task_counter = 0;

		console.log(projects);
/*
		// create div for each project
		var project = document.createElement('div');

		// print all project on the page
		project.innerHTML = 'project' + (i);
		document.body.appendChild(project);*/
	}
}

var current_project_div,     // current project list on the page
		next_projects_div,       // next project list on the page
		next_projects = [],      // next project storage
		done_project = false,    // true if project has been completes
		waiting_project = false; // is there project in the queue

// choose project
function select_project(n){

	for (var i = 1; i < n; i++) {

		next_projects.push(projects[i]);
		
	}

	selected_project = next_projects[0];

	console.log(selected_project);

}

var x                      = 0,     // html string index
		y                      = 0,     // css string index
		z                      = 0,     // js string index
		money                  = 0,     // earned money
		renown                 = 0,     // earned money
		have_js                = false, // true if have js in the project
		js_done                = false, // true if js has been typed
		css_done               = false, // true if css has been typed
		html_done              = false, // true if html has been typed
		task_counter           = 0,
		click_counter          = 0,
		project_counter        = 0,
		stored_project_counter = 0,
		code                   = document.querySelector('xmp'), // get the code writer
		renown_div             = document.querySelector('.renown'), // get the code writer
		money_div              = document.querySelector('.budget'); // get the code writer
/*		bar                    = document.querySelector('.bar'),
		progress_bar           = document.querySelector('.progress-bar');*/
// execute the project
function project(p){

	document.addEventListener('keyup', function(e) {

		/*var ratio = (click_counter/selected_project.click)*1;
		bar.style.transform = 'scaleX(' + ratio + ')';
		console.log((click_counter/selected_project.click)*1);*/


		// if hrml not done yet
		if(!html_done){

			// launch html task
			html_code(selected_project);
			return;

		}

		// if css not done yet & html done
		if(!css_done && html_done){

			// launch css task
			css_code(selected_project);
			return;

		}

		// if css done & have js but NOT done
		if(css_done && have_js && !js_done){

			// launch js task
			js_code(selected_project);

		} else {

			selected_project.done = true;

		}

		if(selected_project.done == true){ 

			// increment money
			money += selected_project.money;
			money_div.innerHTML = 'budget : ' + money + '$';

			renown += selected_project.renown;
			renown_div.innerHTML = 'renown : ' + renown + '<img src="img/star.png" alt="">';

			// reset the project environment
			click_counter         = 0;
			task_counter          = 0;
			selected_project.done = false;
			css_done = js_done = html_done = false; 

			done_project = true; // set project on done
			
			selected_project = next_projects[project_counter]; // set next project

			project_counter++;

		}
		
	});
}

function html_code(p, cb){

	if(x/2 <= p.click/p.task-1){

		code.innerHTML += p.html[x] + p.html[x+1];
		x += 2;
		click_counter++;
		console.log(p.task);
	} else {

		var task_size = p.click/p.task;

		if(x/2 >= task_size-1){

			html_done = true;
			x = 0;
			code.innerHTML = "";
			document.removeEventListener('keyup', this);
			if (cb) cb.call(this);
		}	
	}	
}

function css_code(p){
	
	if(p.js != undefined){

		have_js = true;

	} else {

		have_js = false;

	}

	if(y/2 <= p.click/p.task-1){

		code.innerHTML += p.css[y] + p.css[y+1];
		y += 2;
		click_counter++;

	} else {

		var task_size = p.click/p.task;

		if(y/2 >= task_size-1){

			css_done = true;
			y = 0;
			code.innerHTML = "";
			document.removeEventListener('keyup', this);
			return;
		}
	}
}

function js_code(p){

	if(z/2 <= p.click/p.task-1){

		code.innerHTML += p.js[z] + p.js[z+1];
		z += 2;
		click_counter++;

	} else {

		var task_size = p.click/p.task;

		if(z/2 >= task_size-1){

			js_done = true;
			z = 0;
			code.innerHTML = "";
			document.removeEventListener('keyup', this);
			return;
		}
	}
}

// dev team actions

/*setInterval(function(){team()}, 100)

function team(){

	selected_project.click = selected_project.click/2;
	console.log(selected_project);

	// if project complete
	if(selected_project.done == true){ 

		money += selected_project.money;
		console.log(money);

		// reset the project environment
		selected_project.done == false;
		click_counter = 0;
		css_done = js_done = html_done = false; 

		done_project = true; // set project on done
		
		selected_project = next_projects[project_counter]; // set next project

		project_counter++;

	}

	// if html not done yet
	if(!html_done){

		// launch html task
		html_code(selected_project);
		return;

	}

	// if css not done yet & html done
	if(!css_done && html_done){

		// launch css task
		css_code(selected_project);
		return;

	}

	// if css done & have js but NOT done
	if(css_done && have_js && !js_done){

		// launch js task
		js_code(selected_project);

	} else {

		selected_project.done = true;

	}

}*/

generate_projects(nb);
select_project(nb);
project(selected_project);

