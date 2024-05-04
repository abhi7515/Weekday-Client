import * as types from "../actionTypes";

const initialState = {
  getDashboardJobsLoading: false,
  getDashboardJobsFailure: false,
  getDashboardJobsSuccess: false,
  getDashboardJobsError: [],
  getDashboardJobsData: {},
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DASHBOARD_JOBS_SUCCESS: {
      return {
        ...state,
        getDashboardJobsLoading: false,
        getDashboardJobsFailure: false,
        getDashboardJobsSuccess: true,
        getDashboardJobsData: action.data,
      };
    }
    case types.GET_DASHBOARD_JOBS_FAILURE: {
      return {
        ...state,
        getDashboardJobsError: action.data,
        getDashboardJobsLoading: false,
        getDashboardJobsFailure: true,
        getDashboardJobsSuccess: false,
      };
    }

    default:
      return { ...state };
  }
};

export default DashboardReducer;
