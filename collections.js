Articles = new Meteor.Collection('articles');
Likes = new Meteor.Collection('likes');
Categories = new Meteor.Collection('categories');
Comments=new Meteor.Collection('comments');
Articles.initEasySearch('hashtag');
Shopdata = new Meteor.Collection('shopdata');
Pins=new Meteor.Collection('pins');
Pinboard=new Meteor.Collection('pinboard');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "/home/mifta/Downloads/gitkollage/public/pics"})]
});

