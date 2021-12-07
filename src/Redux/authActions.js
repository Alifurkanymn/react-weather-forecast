import * as Constants from './Constans'

export const getTempatures = () =>({
    type: Constants.GET_TEMP,
    payload: {
        weatherList: {
            weatherTemp: weather.main.temp,
        }
    }

})