$(document).ready(function() {
  var newsItemsAPI = "http://www.freecodecamp.com/news/hot"
  var html = "";
  
  newsArticles(newsItemsAPI);
  
  function newsArticles(newsItemsAPI) {
    $.get(newsItemsAPI, function(newsItem){
      newsItem.forEach(function(newsStory) {
        var newsImage = newsStory.image;
        var newsLink = newsStory.link;
        var newsTitle = newsStory.headline.substring(0, 15)+"...";
        var newsPoster = newsStory.author.username;
        var newsPostedDate = newsStory.timePosted;
        var newsUpvotes = newsStory.rank;
        var newsAuthorPic = newsStory.author.picture;
        
        if (newsImage === "" || newsImage === "/web/imgs/logo.png") {
          newsImage = newsAuthorPic;
        }
        
        newsPostedDate = new Date(newsPostedDate);
        newsPostedDate = newsPostedDate.toDateString();
        //console.log(newsImage + " " + newsLink + " " + newsTitle + " " + newsPoster + " " + newsPostedDate + " " + newsUpvotes + " " + newsAuthorPic)
        console.log(newsImage)
        
        html += '<article class="item">';
        html += '<a href="' + newsLink + '" target="_blank" class="item-link">';
        html += '<img src ="' + newsImage + '" class="item-img">';
        html += '<h2 class="item-title">' + newsTitle + '</h2></a>';
        html += '<p class="post-date">Posted on: ' + newsPostedDate + '</p>';
        html += '<a href="http://www.freecodecamp.com/' + newsPoster + '" class="author-link" target="_blank">';
        html += '<p class="author">By ' + newsPoster + '</p></a>';
        html += '<div class="upvote">';
        html += '<img src="http://lorempixel.com/20/20/" class="upvote-icon">';
        html += '<p class="upvotes">' + newsUpvotes + '</p></div></article>'
        
      });
      // add html to .wrapper class
      $(".wrapper").html(html);
    });
  }
});

///Make the whole card a link!!!!!!!!!!!!!!!