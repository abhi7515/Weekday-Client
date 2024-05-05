import React, { useState, useEffect } from "react";
import "./Header.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { updateFilteredJobs } from "app/redux/actions/dashboardActions";


const Header = ({ data }) => {
  const dispatch = useDispatch();
  const getJobs = useSelector((state) => state.getjobs);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    roles: [],
    locations: [],
    experience: null,
    salaryRange: null,
    companyName: "",
  });
  const animatedComponents = makeAnimated();

  const defaultRoles = [
    { value: 'backend', label: 'backend' },
    { value: 'frontend', label: 'frontend' },
    { value: 'FullStack', label: 'FullStack' },
    { value: 'marketing', label: 'marketing' },
    { value: 'android', label: 'android' },
    { value: 'TechLead', label: 'TechLead' }
  ];
  const location = [
    { value: 'chennai', label: 'chennai' },
    { value: 'remote', label: 'remote' },
    { value: 'hybrid', label: 'hybrid' },
    { value: 'delhi ncr', label: 'delhi ncr' },
    { value: 'mumbai', label: 'mumbai' },
    { value: 'Bengaluru', label: 'bengaluru' }
  ];
  const experience = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];
  const salaryRange = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
    { value: '90', label: '90' },
    { value: '100', label: '100' },

  ];

  useEffect(() => {
    handleFilter();
  }, [filters]);

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
     console.log("filters array result",filteredJobs)
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
    <div className="header-container">
    {console.log("filters",filters)}
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        options={defaultRoles}
        onChange={handleRoleFilter}
        placeholder={"Role"}
      />
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        options={location}
        onChange={handleLocationFilter}
        placeholder={"Location"}
      />
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={null}
        options={experience}
        onChange={handleExperienceFilter}
        placeholder={"Experience"}
      />
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={null}
        options={salaryRange}
        onChange={handleSalaryRangeFilter}
        placeholder={"Minimum Base Pay Salary"}
      />
      <TextField
        id="outlined-basic"
        label="Company Name"
        variant="outlined"
        onChange={handleCompanyNameFilter}
      />
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default Header;