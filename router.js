Router.route('/', function () {
  this.render('home');
 
});

Router.map(function(){
    this.route('myproject', {path: '/myproject'});
	this.route('entertainment', {path: '/entertainment'});
	 this.route('business', {path: '/business'});
	  this.route('travel', {path: '/travel'});
	   this.route('health', {path: '/health'});
	    this.route('nature', {path: '/nature'});
	     this.route('technology', {path: '/technology'});

});

