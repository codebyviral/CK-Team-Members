import axios from "axios";
import { useEffect, useState } from "react";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  useEffect(() => {
    axios
      .get("https://ck-team-members.onrender.com/api/team/members")
      .then((response) => {
        setMembers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  const filterMembers = (department) => {
    setSelectedDepartment(department);
  };

  const filteredMembers =
    selectedDepartment === "All"
      ? members
      : members.filter((member) => member.workType === selectedDepartment);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Meet the Code Kalaakaars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our talented team of developers, designers, and product managers who
            bring your ideas to life.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          {["All", "Web Development", "DSA", "Social", "GD"].map(
            (department) => (
              <button
                key={department}
                className={`mx-2 px-5 py-2 rounded-full border ${
                  selectedDepartment === department
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-900 border-gray-300 hover:bg-indigo-600 hover:text-white"
                } transition-colors duration-300`}
                onClick={() => filterMembers(department)}
              >
                {department}
              </button>
            )
          )}
        </div>

        {error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className={`relative bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
                  member.Position === "Founder"
                    ? "col-span-2 lg:col-span-3 xl:col-span-4"
                    : ""
                }`}
              >
                <div className="bg-gray-100 h-48 flex justify-center items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                    alt="Default avatar"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.Name}</h3>
                  <p className="text-gray-600 mb-1">{member.Position}</p>
                  <p className="text-gray-600 mb-1">Mentor: {member.Mentor}</p>
                  <p className="text-gray-600 mb-4">
                    Department: {member.workType}
                  </p>
                  <div className="flex justify-center space-x-4"></div>
                </div>
                <div className="flex justify-center mb-4">
                  <button className="mx-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-200 text-gray-900 border border-gray-300 hover:bg-indigo-700 hover:text-white transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
