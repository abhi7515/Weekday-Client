import * as types from "../actionTypes";

const initialState = {
  getDashboardJobsLoading: false,
  getDashboardJobsFailure: false,
  getDashboardJobsSuccess: false,
  getDashboardJobsError: [],
  getDashboardJobsData: [],
  filteredJobs: [],
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DASHBOARD_JOBS_SUCCESS: {
      return {
        ...state,
        getDashboardJobsLoading: false,
        getDashboardJobsFailure: false,
        getDashboardJobsSuccess: true,
        getDashboardJobsData:[...state.getDashboardJobsData, ...action.data],
        filteredJobs:[...state.filteredJobs, ...action.data],
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
    case types.GET_DASHBOARD_JOBS_LOADING: {
        return {
          ...state,
          getDashboardJobsLoading: true,
          getDashboardJobsFailure: false,
          getDashboardJobsSuccess: false,
        };
      }
    case types.UPDATE_FILTERED_JOBS: {
        return {
          ...state,
          filteredJobs: action.filteredJobs, // Update filtered jobs state
        };
      }

    default:
      return { ...state };
  }
};

export default DashboardReducer;
