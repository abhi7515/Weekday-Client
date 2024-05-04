import {React, useState, useEffect} from "react";
import {requestJobs} from "app/redux/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const Dashboard = () => {

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const getJobs = useSelector((state) => state.getjobs);

  useEffect(() => {
     dispatch(requestJobs());
  }
  ,[]);

  return (
    <div>
      {console.log(getJobs.getDashboardJobsData)}
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default Dashboard;