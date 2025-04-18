import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const HotJobsCard = ({ job }) => {
  const {
    title,
    _id,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="flex gap-2 items-center m-2">
        <figure>
          <img className="w-14" src={company_logo} alt="Logos" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-2">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 text-center text-white font-semibold">
          {requirements.map((skills, idx) => (
            <p
              key={idx}
              className="border-1 hover:bg-violet-900 rounded-md p-2 bg-gray-600 shadow-2xl"
            >
              {skills}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center">
          <p className="text-xl font-semibold">
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
