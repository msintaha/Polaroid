
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

Template.post.events({
	'click #cmnt':function(evt,tmpl){
		evt.preventDefault();
		var comment=tmpl.find('.please').value;
		var date=new Date();
		Comments.insert({
			comm:comment,
			poster:Meteor.user().username,
			timestamp:date.toLocaleDateString()+' at '+date.toLocaleTimeString(),
			article:tmpl.data._id
		});
		Session.set('updated',new Date());
	}
});

Template.nav.events({
	'click .addInterest':function(evt,tmpl){
		evt.preventDefault();
		Session.set('adding_interest',true);
	},
	'click #search':function(evt,tmpl){
		var hash=tmpl.find('.hash').value;
		return Articles.find( { hashtag: hash} );
	}
	
});
Template.addform.events({
	 'change .img': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
      Session.set('adding_interest',true);
    });

  },

	'click .save':function(evt,tmpl){
		var description = tmpl.find('.description').value;
		var name = tmpl.find('.name').value;
		var url = tmpl.find('.url').value;
		var date=new Date();
		var cat = tmpl.find('.selectCat').value;
		var hashie=tmpl.find('.hash').value;
		//var img=file.name;
		
		Articles.insert({
			description:description,
			name:name,
			src:url,
			hashtag:hashie,
			time:date.toLocaleDateString()+' at '+date.toLocaleTimeString(),
			author:Meteor.userId(),
			userEmail:Meteor.user().username,
			category:cat,
			//image:img	
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
