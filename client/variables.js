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
},
images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  },
  numComms:function(){
    return Comments.find({article:this._id}).count();
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
},
images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
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

Template.food.helpers({
food: function(){
  var userId = Meteor.userId();
  return Articles.find({category:'Food'} ,{transform: function (doc ){
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

Template.addform.helpers({
  Cat:function(){
     return Categories.find({});
  }
});
Template.article.helpers({
  numlikes: function(){
  return Likes.find({article:this._id}).count();
},
 numComms:function(){
    return Comments.find({article:this._id}).count();
  },
images: function () {
 
    return Images.find({});
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
},
userLikes :function(){
  var curUserlike = Likes.findOne({muser:Meteor.userId(),article:this._id});
   var userId = Meteor.userId();

  if(curUserlike){
   return true;
    } 
}
});

Template.post.helpers({
  numlikes: function(){
  return Likes.find({article:this._id}).count();
},
adding_interest: function(){ 
  return Session.get('adding_interest');
},


comments:function(){
  return Comments.find({article:this._id});
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
  Posts.find({catName:Session.get('category')});
},
userLikes :function(){
  var curUserlike = Likes.findOne({muser:Meteor.userId(),article:this._id});
   var userId = Meteor.userId();

  if(curUserlike){
   return true;
    } 
},
sourceLink: function(){
  return "http://localhost:3000/article/"+this._id;
}
});

Template.profile.helpers({
articles: function(){
  var userId = Meteor.userId();
  return Articles.find({author:userId} ,{transform: function (doc ){
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
},
 
userName:function(){
  return Meteor.user().username ;
}
});







