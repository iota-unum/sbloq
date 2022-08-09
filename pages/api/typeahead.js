var myHeaders = new Headers();
myHeaders.append('Authorization', process.env.TRENDS_AUTHORIZATION);
myHeaders.append('Cookie', process.env.TRENDS_COOKIE);
myHeaders.append('x-csrf-token', process.env.TRENDS_X_CSRF_TOKEN);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export default async (req, res) => {
  try {
    console.log('prova')
    const response = await fetch(
      `https://twitter.com/i/api/1.1/search/typeahead.json?q=${req.body}&src=search_box&result_type=users`,
      requestOptions
    );

    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
