export function getSuggestions(query='none') {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', process.env.TRENDS_AUTHORIZATION);
  myHeaders.append('Cookie', process.env.TRENDS_COOKIE);
  myHeaders.append('x-csrf-token', process.env.TRENDS_X_CSRF_TOKEN);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
console.log('first')
  return fetch(
    `https://twitter.com/i/api/1.1/search/typeahead.json?q=${query}&src=search_box&result_type=users`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log('error', error));
}
