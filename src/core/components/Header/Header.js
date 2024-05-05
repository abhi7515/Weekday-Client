import React from "react";
import "./Header.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";

const Header = ({ data }) => {

    const getJobs = useSelector((state) => state.getjobs);
    console.log(getJobs?.getDashboardJobsData);
    const animatedComponents = makeAnimated();
    const defaultRoles = [
        { value: 'Backend', label: 'Backend' },
        { value: 'Frontend', label: 'Frontend' },
        { value: 'FullStack', label: 'FullStack' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ];
      const location = [
        { value: 'Chennai', label: 'Chennai' },
        { value: 'Remote', label: 'Remote' },
        { value: 'Hybrid', label: 'Hybrid' },
        { value: 'delhi', label: 'delhi' },
        { value: 'mumbai', label: 'mumbai' },
        { value: 'Bengaluru', label: 'Bengaluru' }
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
      
      
  const handleFilter = () => {

      }

  const handleRoleFilter = () => {

  }

  const handleNumberofEmployeeFilter = () => {

  }

  const workStyleFilter = () => {
    
  }

  const minimumBasePayFilter = () => {

  }
  
  const companyFilter = () => {

  }

  return (
    <div class="container">
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[defaultRoles[4]]}
            isMulti
            options={defaultRoles}
            label={"Role"}
            placeholder={"Role"}
            />

        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={""}
            isMulti
            options={location}
            label={"Location"}
            placeholder={"Location"}
            />
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={""}
            //isMulti
            options={experience}
            placeholder={"Experience"}
            />  
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={""}
            //isMulti
            options={salaryRange}
            placeholder={"Minimum Base Pay Salary"}
            />  
        
        <TextField  id="outlined-basic" label="Company Name" variant="outlined" />  
    </div>
  );
};

export default Header;
