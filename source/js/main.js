$(document).ready(function() {
  
  newsArticles();
  
  function newsArticles() {
    $.get("http://www.freecodecamp.com/news/hot", function(data){
      var newsImage = data[0].image;
      var newsLink = data[0].link;
      var newsTitle = data[0].headline;
      var newsPoster = data[0].author.username;
      var newsPostedDate = data[0].timePosted;
      var newsUpvotes = data[0].rank;
      var newsAuthorPic = data[0].author.picture;
      console.log(newsImage + " " + newsLink + " " + newsTitle + " " + newsPoster + " " + newsPostedDate + " " + newsUpvotes + " " + newsAuthorPic)
    }, 'jsonp');
  }
});