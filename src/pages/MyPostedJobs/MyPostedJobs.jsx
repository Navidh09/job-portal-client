import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  return (
    <div>
      <h2>My Posted Jobs</h2>
      <div className="overflow rounded-box border border-base-content/5 bg-base-100">
        <table className="table w-5/6 mx-auto my-10">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Deadline Date</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link">View Applications</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
