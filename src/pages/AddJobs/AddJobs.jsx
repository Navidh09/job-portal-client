import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const AddJobs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    newJob.description = newJob.description.split("\n");
    console.log(newJob);
    fetch(`http://localhost:5000/jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-violet-700 mt-4 text-center">
        Add Jobs
      </h2>
      <div className="card bg-base-100 w-full mx-auto shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body w-[90vw] mx-auto">
          {/* job title */}
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* company name */}
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">Company</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* location */}
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* job type */}
          <div className="form-control">
            <div>
              <label className="label mb-1">
                <span className="label-text">Job Type</span>
              </label>
            </div>
            <select
              name="jobType"
              defaultValue="Pick a Job Type"
              className="select w-full"
              required
            >
              <option disabled={true}>Pick a Job Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
            </select>
          </div>
          {/* salary range */}
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">Salary Range</span>
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <input
                type="number"
                name="min"
                placeholder="Min"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="input input-bordered w-full"
                required
              />
              <select
                defaultValue="Choose Currency"
                className="select w-full"
                name="currency"
                required
              >
                <option disabled={true}>Choose Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* Job description */}
          <div className="form-control">
            <div>
              <label className="label mb-1">
                <span className="label-text">Job Description</span>
              </label>
            </div>
            <textarea
              className="textarea w-full"
              name="description"
              placeholder="Job description"
              required
            ></textarea>
          </div>
          {/* Responsibilities */}
          <div className="form-control">
            <div>
              <label className="label mb-1">
                <span className="label-text">Responsibilities</span>
              </label>
            </div>
            <textarea
              className="textarea w-full"
              name="responsibilities"
              placeholder="Write responsibilities in each lines"
              required
            ></textarea>
          </div>
          {/* Requirements */}
          <div className="form-control">
            <div>
              <label className="label mb-1">
                <span className="label-text">Requirements</span>
              </label>
            </div>
            <textarea
              className="textarea w-full"
              name="requirements"
              placeholder="Write requirements in each lines"
              required
            ></textarea>
          </div>
          {/* hr email */}
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">HR Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              name="hr_email"
              placeholder="HR-email"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* hr name */}
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR-name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* application deadline */}
          <div className="form-control">
            <label className="label mb-1">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Deadline Date"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* add job button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary btn-block">Add Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
