Meteor.startup(function(){

if(Categories.find().count() === 0){
       Categories.insert({catgry:'Travel'});
      Categories.insert({catgry:'Technology'});
         Categories.insert({catgry:'Entertainment'});
         Categories.insert({catgry:'Business'});
         Categories.insert({catgry:'Nature'});
        Categories.insert({catgry:'Health'}); 
	Categories.insert({catgry:'Food'}); 
}
    
});
Meteor.methods({
		'removeArticles':function(){
			Articles.remove({});
		},
		'removeLike':function(){
			Likes.remove({_id:id});
		},
    'removeArticle': function(id){
       Articles.remove({_id:id});
    },
    'removePins': function(){
      Pins.remove({});
    },
    'removePinboard': function(id){
      Pinboard.remove({_id:id});
    }  
 
	});


