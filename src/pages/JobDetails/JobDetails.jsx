import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company, applicationDeadline } = useLoaderData();

  return (
    <div className="m-10">
      <h2 className="text-3xl">{title}</h2>
      <h2>{company}</h2>
      <h2>Deadline: {applicationDeadline} </h2>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary mt-2">Apply Now !</button>
      </Link>
    </div>
  );
};

export default JobDetails;
