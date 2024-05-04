import Api from "app/httpRequests/api";
import Constants from "app/httpRequests/constants";
import config from "app/httpRequests/config";
import * as types from "../actionTypes";

export const requestJobs = (limit, offset) => (dispatch) => {
    dispatch({ type: types.GET_DASHBOARD_JOBS_LOADING });
  // Api Class can directly be used from here making access to get, put, post, delete methods easier
  const requestBody = JSON.stringify({
      "limit": limit,
      "offset": offset
     });     
      Api.post(
        Constants.exportProductionBaseURL() + config.endpoint.jobsData,// base url of environment  + backend specific endpoint
        {
          "Content-Type": "application/json", // headers
        },
        "",   // Query Params
        requestBody   //Request Payload
      ).then(
    (response) => {
      dispatch({
        type: types.GET_DASHBOARD_JOBS_SUCCESS,
        data: response?.jdList,
      });
      //console.log(response);
    },
    (error) => {
      dispatch({ type: types.GET_DASHBOARD_JOBS_FAILURE, error });
      //console.log(error);
    }
  );
};