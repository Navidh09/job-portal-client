import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div>
      <h2>Job Details</h2>
    </div>
  );
};

export default JobDetails;
