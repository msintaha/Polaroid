Articles = new Meteor.Collection('articles');
Likes = new Meteor.Collection('likes');
Categories = new Meteor.Collection('categories');
Comments=new Meteor.Collection('comments');
Articles.initEasySearch('hashtag');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/imageStuff"})]
});
///home/mifta/Downloads/Polaroid-master/public/uploads