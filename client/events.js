
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
Template.login.events({
	'click #login':function(evt,tmpl){
		evt.preventDefault();
		var userName=tmpl.find('.login-username').value;
		var passWord=tmpl.find('.login-password').value;
		Meteor.loginWithPassword(userName,passWord);
		Router.go('/myproject');
	}
});
Template.register.events({
	'click #register':function(evt,tmpl){
		evt.preventDefault();
		var userName=tmpl.find('.username').value;
		var passWord=tmpl.find('.password').value;
		var emailVar=tmpl.find('.email').value;
		Accounts.createUser({
			username:userName,
			email:emailVar,
			password:passWord
		});
		Router.go('/myproject');
	}
});
Template.post.events({
	'click #removec':function(evt,tmpl){
			evt.preventDefault();
			var id=tmpl.data._id;
	 Comments.remove({_id:id});
	},
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
	},
	'click #logout':function(evt){
		evt.preventDefault();
		Meteor.logout();
	}
	
});
Template.addform.events({
	 'change .img': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        //Images.findOne({},{date:1}).original.name
        Session.set('imageId',fileObj._id);
      });
      Session.set('adding_interest',true);
    });

  },

	'click .save':function(evt,tmpl){
		var description = tmpl.find('.description').value;
		var name = tmpl.find('.name').value;
		
		var date=new Date();
		var cat = tmpl.find('.selectCat').value;
		var hashie=tmpl.find('.hash').value;
		
		var id=Session.get('imageId');
		var img=Images.findOne(id).original.name;
		//images-tkmoadixa96vtZ8xy-blah
		var temp='images-'+id+'-'+img;
		Articles.insert({
			description:description,
			name:name,
			//imgname:temp,
			imgid:id,
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
