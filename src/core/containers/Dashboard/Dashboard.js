import {React, useState, useEffect} from "react";
import {requestJobs} from "app/redux/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import RenderDashboard from "core/components/RenderDashboard/RenderDashboard";

const Dashboard = () => {

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const getJobs = useSelector((state) => state.getjobs);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !getJobs.getDashboardJobsLoading) {
      setPage((prevPage) => prevPage + 1);
      dispatch(requestJobs(10, page * 10)); // Increment offset for next page
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getJobs.getDashboardJobsLoading, page]);

  useEffect(() => {
    dispatch(requestJobs(10, 0)); // Initial fetch
  }
  ,[]);

  return (
    <div>
      {/* <h1>WeekDay Dashboard</h1> */}
      <RenderDashboard data={getJobs?.filteredJobs.length?getJobs?.filteredJobs:getJobs?.getDashboardJobsData}  /> 
      {/* <RenderDashboard data={getJobs?.getDashboardJobsData}  /> */}
      {getJobs.getDashboardJobsLoading && <div>Loading...</div>}
      {getJobs.getDashboardJobsFailure && <div>Failed to fetch data.</div>}
    </div>
  );
};

//Dummy Component RenderDashboard to render UI to keep business logic seperate

export default Dashboard;