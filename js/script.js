$(".search-button").click(function () {
  let input = $(".search-term").val();
  let input2 = $(".desired_amount").val();
  let customApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;
  fetch(customApiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      let randNum = Math.floor(Math.random() * data.data.length);
    
    
    
  return $(".main").html(`<img src="${data.data[randNum].images.original.url}"/>`);
    });
});
