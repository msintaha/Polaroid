
Template.article.events({
	'click .like':function(evt,tmpl){
		var curlike = Likes.findOne({muser:Meteor.userId(),article:tmpl.data._id});
		if(!curlike){
			Likes.insert({muser:Meteor.userId(),article:tmpl.data._id});				
		} 
		Session.set('updated',new Date());
	},
	'click .remove':function(evt,tmpl){
			evt.preventDefault();
			var id=tmpl.data._id;
	 Articles.remove({_id:id});
	},
	
});

Template.nav.events({
	'click .addInterest':function(evt,tmpl){
		evt.preventDefault();
		Session.set('adding_interest',true);
	},
	'click .search':function(evt,tmpl){
		var hash=tmpl.data.hashtag;
		Articles.find( { hashtag: hash} );
	}
	
});
Template.addform.events({
	'click .save':function(evt,tmpl){
		var description = tmpl.find('.description').value;
		var name = tmpl.find('.name').value;
		var url = tmpl.find('.url').value;
		
		var date=new Date();
		var cat = tmpl.find('.selectCat').value;
		
		// var playerNameVar = evt.target.author.value;
		//var height = getRandomInt(150,350);
		
		Articles.insert({
			description:description,
			name:name,
			
			src:url,
			time:date.toLocaleDateString()+' at '+date.toLocaleTimeString(),
			author:Meteor.userId(),
			userEmail:Meteor.user().emails[0].address,
			category:cat	
		});
		Session.set('adding_interest',false);
	},
	
	'click .cancel':function(){
		Session.set('adding_interest',false);
	},
	'click .close':function(){
		Session.set('adding_interest',false);
	}
});
