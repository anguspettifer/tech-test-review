module.exports = (app) => {

  const request = require("request");

  const options = { method: 'POST',
    url: 'http://api.ft.com/content/search/v1',
    headers:
     { 'Cache-Control': 'no-cache',
       'Content-Type': 'application/json',
       'X-Api-Key': '59cbaf20e3e06d3565778e7b222bef626a1744baa0d6e318798d127e' },
    body:
     { queryString: 'sections:"Energy"',
       resultContext: { aspects: [ 'title', 'lifecycle', 'location', 'summary', 'editorial' ] } },
    json: true };

  app.get('/articles', (req, res) => {
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.status(200).send(body);
    })
  });

  app.post('/searchrequest', (req, res) => {
    const sections = 'sections:' + req.body.search
    options.body.queryString = sections
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      res.status(200).send(body);
    })

  })

};
