Articles = new Meteor.Collection('articles');
Likes = new Meteor.Collection('likes');
Categories = new Meteor.Collection('categories');
Comments=new Meteor.Collection('comments');
Articles.initEasySearch('hashtag');
Shopdata = new Meteor.Collection('shopdata');
Pins=new Meteor.Collection('pins');
Pinboard=new Meteor.Collection('pinboard');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/imageStuff"})]
});
Tempimg = new FS.Collection("tempimg", {
  stores: [new FS.Store.FileSystem("tempimg", {path: "~/upLoads"})]
});
///home/mifta/Downloads/Polaroid-master/public/uploads

