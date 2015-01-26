Template.pinterest.helpers({
articles: function(){
  var userId = Meteor.userId();
  return Articles.find({} ,{transform: function (doc ){
    doc.isAuthor = doc.author === userId; 
    return doc;
  }});
},
adding_interest: function(){ 
	return Session.get('adding_interest');
},

numlikes: function(){
	return Likes.find({article:this._id}).count();
},

updated :function(){
	return Session.get('updated');
}


});

Template.entertainment.helpers({
ent: function(){
  var userId = Meteor.userId();
  return Articles.find({category:'Entertainment'} ,{transform: function (doc ){
    doc.isAuthor = doc.author === userId; 
    return doc;
  }});
},
adding_interest: function(){ 
	return Session.get('adding_interest');
},

numlikes: function(){
	return Likes.find({article:this._id}).count();
},

updated :function(){
	return Session.get('updated');
}

});
Template.business.helpers({
bus: function(){
  var userId = Meteor.userId();
  return Articles.find({category:'Business'} ,{transform: function (doc ){
    doc.isAuthor = doc.author === userId; 
    return doc;
  }});
},
adding_interest: function(){ 
	return Session.get('adding_interest');
},

numlikes: function(){
	return Likes.find({article:this._id}).count();
},

updated :function(){
	return Session.get('updated');
}

});

Template.health.helpers({
hea: function(){
  var userId = Meteor.userId();
  return Articles.find({category:'Health'} ,{transform: function (doc ){
    doc.isAuthor = doc.author === userId; 
    return doc;
  }});
},
adding_interest: function(){ 
	return Session.get('adding_interest');
},

numlikes: function(){
	return Likes.find({article:this._id}).count();
},

updated :function(){
	return Session.get('updated');
}

});

Template.nature.helpers({
nat: function(){
  var userId = Meteor.userId();
  return Articles.find({category:'Nature'} ,{transform: function (doc ){
    doc.isAuthor = doc.author === userId; 
    return doc;
  }});
},
adding_interest: function(){ 
	return Session.get('adding_interest');
},

numlikes: function(){
	return Likes.find({article:this._id}).count();
},

updated :function(){
	return Session.get('updated');
}

});

Template.travel.helpers({
tra: function(){
  var userId = Meteor.userId();
  return Articles.find({category:'Travel'} ,{transform: function (doc ){
    doc.isAuthor = doc.author === userId; 
    return doc;
  }});
},
adding_interest: function(){ 
	return Session.get('adding_interest');
},

numlikes: function(){
	return Likes.find({article:this._id}).count();
},

updated :function(){
	return Session.get('updated');
}

});

Template.technology.helpers({
tech: function(){
  var userId = Meteor.userId();
  return Articles.find({category:'Technology'} ,{transform: function (doc ){
    doc.isAuthor = doc.author === userId; 
    return doc;
  }});
},
adding_interest: function(){ 
	return Session.get('adding_interest');
},

numlikes: function(){
	return Likes.find({article:this._id}).count();
},

updated :function(){
	return Session.get('updated');
}

});

Template.nav.helpers({
	Cat:function(){
		 return Categories.find({});
	}
});

Template.article.helpers({
	numlikes: function(){
	return Likes.find({article:this._id}).count();
},


likethis :function(){
	var curUserlike = Likes.findOne({muser:Meteor.userId(),article:this._id});
	if(curUserlike){
	return "You Like This";
    }
    else{
    	return "Give a thumbs up!";
    }
},
articleList: function(){
	Articles.find({catName:Session.get('category')});
}

});


Template.pinterest.rendered = function(){
// 	setTimeout(function(){
// 		masonize(function(){
// 		}
// 		);
		
// 	},1000)
// 	$('.search-query input').focus();

// 	function masonize(callback){
// 	var $container = $('#gutter-opt-demo3');
// 	// initialize
// 	$container.masonry({
// 	  itemSelector: '.item',
// 	  gutter:20
// 	});
// 	var msnry = $container.data('masonry');
// 	if(callback){callback()};
// }
// function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }	
}




