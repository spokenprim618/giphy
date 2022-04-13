let customApiUrl = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";

$(".search-button").click(function() {
    fetch(customApiUrl)
        .then(function(response) {
             return response.json();
        })

        .then(function(data) {
          return $("#img").attr('src', data.data[0].url);

        });

});