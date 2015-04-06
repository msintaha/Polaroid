Router.route('/', function () {
  this.render('home');
 
});

Router.map(function(){
    this.route('myproject', {path: '/myproject'});
	this.route('entertainment', {path: '/entertainment'});
this.route('profile', {path: '/profile'});
	 this.route('business', {path: '/business'});
	  this.route('travel', {path: '/travel'});
	   this.route('health', {path: '/health'});
	    this.route('nature', {path: '/nature'});
	     this.route('technology', {path: '/technology'});
 this.route('food', {path: '/food'});
	     this.route('search', {path: '/search'});
	      this.route('login', {path: '/login'});
	       this.route('register', {path: '/register'});
	this.route('/article/:_id', function () {
  this.render('post', {
    data: function () {
      return Articles.findOne({_id: this.params._id});
    }
  });
});
 
	
});

