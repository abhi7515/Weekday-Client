import {React, useState, useEffect} from "react";
import {requestJobs} from "app/redux/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

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
      {console.log(getJobs.getDashboardJobsData,getJobs)}
      <h1>Welcome to the Dashboard</h1>
      {getJobs.getDashboardJobsData.map((item, index) => (
        <div style={{ height: "200px" }} key={index}>
          {item?.jdUid}
        </div>
      ))}
      {getJobs.getDashboardJobsLoading && <div>Loading...</div>}
      {getJobs.getDashboardJobsFailure && <div>Failed to fetch data.</div>}
    </div>
  );
};

export default Dashboard;