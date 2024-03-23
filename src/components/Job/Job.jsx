import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-14 w-40" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <IoLocationSharp className="text-2xl" />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiTwotoneDollarCircle className="text-2xl" />
            <p>{salary}</p>
          </div>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
    job: PropTypes.object,
}

export default Job;
