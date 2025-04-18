import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    const linkedIn = e.target.linkedIn.value;
    const github = e.target.github.value;
    const resume = e.target.resume.value;

    // console.log(linkedIn, github, resume);
    const jobApplication = {
      job_id: id,
      applicants_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch(`http://localhost:5000/job-applications`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/myApplications");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="card bg-base-100 w-2/6 mx-auto shadow-2xl my-12">
      <form onSubmit={handleSubmitApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary btn-block">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
