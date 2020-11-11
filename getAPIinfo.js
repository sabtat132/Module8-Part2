fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=war&api-key=iXIkkxPqgdD8VQ5oKtby2rf4i38K3KzG')
.then(response =>{
  return response.json()
  //response is a heirarchy
})
.then(data =>{
  console.log(data.response.docs[2].display_title.main)
  console.log(data.response.docs[2].publication_date)
  //i chose display_title due & publication date to using the movie api
})
.catch(err=>{
  //do something here if an error occurs
})
