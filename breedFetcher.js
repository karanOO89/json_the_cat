const request = require("request");
const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      if (error) {
        return callback(error, null);
      }
      if (response.statusCode !== 200) {
        return callback(error, null);
      }
    
      const data = JSON.parse(body);
      // console.log(data);
      if (data[0]) {
        return callback(null, data[0].description);
      } else {
        return callback(null, "breed not found");
      }
    }
  );
};
module.exports = fetchBreedDescription;
