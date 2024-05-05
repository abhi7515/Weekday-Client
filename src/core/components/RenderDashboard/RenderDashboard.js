import React from "react";
import Card from "../Card/Card";
import "./RenderDashboard.css";
import Header from "../Header/Header";

const RenderDashboard = ({
    data,
    loading,
    setLoading,
    filters,
    setFilters,
    handleFilter,
    handleCompanyNameFilter,
    handleLocationFilter,
    handleRoleFilter,
    handleExperienceFilter,
    handleSalaryRangeFilter }) => {
  return (
    <>
    <Header
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
    <div class="container">
      {Array.isArray(data) && data.map((item, index) => (
        <Card data={item}/>
      ))}
    </div>
    </>
  );
};

export default RenderDashboard;