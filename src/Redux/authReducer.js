const weatherTemp = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TEMP":
        return {
          ...state,
          weatherList: [action.payload, ...state.weatherList]
        };
  
      default:
        return state;
    }
  };