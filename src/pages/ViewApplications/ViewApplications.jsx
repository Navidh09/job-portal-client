import React from "react";
import { useLoaderData } from "react-router";

const ViewApplications = () => {
  const applications = useLoaderData();
  console.log(applications.length);
  return (
    <div>
      <h2 className="text-3xl">
        Applications For This Job:{applications.length}
      </h2>
    </div>
  );
};

export default ViewApplications;
