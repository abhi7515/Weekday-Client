import {React, useState, useEffect} from "react";
import {requestJobs} from "app/redux/actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import RenderDashboard from "core/components/RenderDashboard/RenderDashboard";
import { updateFilteredJobs } from "app/redux/actions/dashboardActions";

const Dashboard = () => {

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    roles: [],
    locations: [],
    experience: null,
    salaryRange: null,
    companyName: "",
  });
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
    handleFilter();
  }, [filters]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getJobs.getDashboardJobsLoading, page]);

  useEffect(() => {
    dispatch(requestJobs(10, 0)); // Initial fetch
  }
  ,[]);

  const handleFilter = () => {
    setLoading(true);
  
    if (getJobs.getDashboardJobsData) {
      const filteredJobs = getJobs.getDashboardJobsData.filter((job) => {
        if (filters.roles.length  && !filters.roles.some((role) => role.value.toLowerCase() === job.jobRole.toLowerCase())) {
          return false;
        }
        if (filters.locations.length  && !filters.locations.some((location) => job.location.toLowerCase().includes(location.value.toLowerCase()))) {
          return false;
        }
        if (filters.experience !== null && (job.minExp > filters.experience || job.maxExp < filters.experience)) {
          return false;
        }
        if (filters.salaryRange !== null && (job.minJdSalary > filters.salaryRange || job.maxJdSalary < filters.salaryRange)) {
          return false;
        }
        if (filters.companyName !== "" && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) {
          return false;
        }
        return true;
      });
      // Dispatch action to update filtered jobs in Redux state
      dispatch(updateFilteredJobs(filteredJobs));
      setLoading(false);
    }
  };

  const handleRoleFilter = (selectedOptions) => {
    setFilters({ ...filters, roles: selectedOptions });
  };

  const handleLocationFilter = (selectedOptions) => {
    setFilters({ ...filters, locations: selectedOptions });
  };

  const handleExperienceFilter = (selectedOption) => {
    setFilters({ ...filters, experience: selectedOption ? parseInt(selectedOption.value) : null });
  };

  const handleSalaryRangeFilter = (selectedOption) => {
    setFilters({ ...filters, salaryRange: selectedOption ? parseInt(selectedOption.value) : null });
  };

  const handleCompanyNameFilter = (event) => {
    setFilters({ ...filters, companyName: event.target.value });
  };

  return (
    <div>
      {/* <h1>WeekDay Dashboard</h1> */}
      <RenderDashboard 
        data={getJobs?.filteredJobs.length?getJobs?.filteredJobs:getJobs?.getDashboardJobsData}
        loading={loading}
        setLoading={setLoading}
        filters={filters}
        setFilters={setFilters}
        handleFilter={handleFilter}
        handleRoleFilter={handleRoleFilter}
        handleLocationFilter={handleLocationFilter}
        handleExperienceFilter={handleExperienceFilter}
        handleSalaryRangeFilter={handleSalaryRangeFilter}
        handleCompanyNameFilter={handleCompanyNameFilter}
          /> 
      {/* <RenderDashboard data={getJobs?.getDashboardJobsData}  /> */}
      {getJobs.getDashboardJobsLoading && <div>Loading...</div>}
      {getJobs.getDashboardJobsFailure && <div>Failed to fetch data.</div>}
    </div>
  );
};

//Dummy Component RenderDashboard to render UI to keep business logic seperate

export default Dashboard;