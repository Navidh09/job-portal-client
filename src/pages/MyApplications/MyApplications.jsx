import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return <div>My Application: {jobs.length}</div>;
};

export default MyApplications;
