const catDes = process.argv.slice(2);
const request = require("request");
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${catDes}`,
  function(error, response, body) {
    const data = JSON.parse(body);
    // console.log(error);
    if (response.statusCode !== 200) {
      throw new Error(`${catDes} not found`);
    }
    if (response.statusCode === 200 && undefined) {
      console.log(response.statusCode);
      throw new Error("no relevant data found");
    }
    // if (request.responseJSON === 201) {
    //     throw new Error('${catDes} not found');
    //   }
    // console.error(`error:${catDes} not found`, error);
    // console.log("statusCode:", response && response.statusCode);
    // //   console.log('body:', body);
    //   console.log("typeof body",typeof(body))
    console.log(data[0].description);
    // console.log(typeof data);
  }
);
