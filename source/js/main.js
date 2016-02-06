$(document).ready(function() {
  var newsItemsAPI = "http://www.freecodecamp.com/news/hot"
  newsArticles(newsItemsAPI);
  
  function newsArticles(newsItemsAPI) {
    $.get(newsItemsAPI, function(newsItem){
      var newsImage = newsItem[0].image;
      var newsLink = newsItem[0].link;
      var newsTitle = newsItem[0].headline;
      var newsPoster = newsItem[0].author.username;
      var newsPostedDate = newsItem[0].timePosted;
      var newsUpvotes = newsItem[0].rank;
      var newsAuthorPic = newsItem[0].author.picture;
      console.log(newsImage + " " + newsLink + " " + newsTitle + " " + newsPoster + " " + newsPostedDate + " " + newsUpvotes + " " + newsAuthorPic)
    });
  }
});

///Make the whole card a link!!!!!!!!!!!!!!!