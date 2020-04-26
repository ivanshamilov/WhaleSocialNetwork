const API_KEY = 'AIzaSyAe7XP-YP7GTlPUNN7b926lmsQ4kmc9RG0';
const HttpError = require('../util/http-error');


const axios = require('axios');

async function getCoordsForAddress(address){
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);

    const data = response.data;
    console.log(response.data);

    if(!data || data.status === 'ZERO_RESULTS'){
        throw new HttpError('Could not find location for the specified address.', 422);
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;

}

module.exports = getCoordsForAddress;