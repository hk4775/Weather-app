 const request = require('request')
 const geocode = (address, callback) => {

    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaGthdGthbSIsImEiOiJja2MyaDQ3OGgwMGFwMnJsOGt5ZTJlOWt0In0.mgRC_edkfhXf5e0M-IVTYQ'
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to connect to location services!', undefined)
        }else{
            callback(undefined, {
             latitude: response.body.features[0].center[1],
             longitude: response.body.features[0].center[0],
             location: response.body.features[0].place_name
                                
            })
 
        }
 
    })
 }

 module.exports = geocode