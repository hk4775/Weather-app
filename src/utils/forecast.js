const request = require('request')
const forecast = (latitude, longitude, callback) => {

    const url =  'http://api.weatherstack.com/current?access_key=c4c656117e406a5e382e268810796dab&query='+latitude+','+longitude
    request({ url, json: true}, (error, { body}) => {
        if(error){
            callback('Unable to connect to forecast services!', undefined)
        } else if(body.current === 0){
            callback('Unable to connect to forecast services!', undefined)
        }else{
            callback(undefined, 
                'It is currently ' + body.current.weather_descriptions + ' and temperature is ' +body.current.temperature + ' degrees out.')
            }
 
    })
 }

 module.exports = forecast