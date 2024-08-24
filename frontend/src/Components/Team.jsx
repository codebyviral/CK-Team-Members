import axios from "axios";
import { useEffect, useState } from "react";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://ck-team-members.onrender.com/api/team/members")
      .then((response) => {
        setMembers(response.data);
        setLoading(false); // Data fetched successfully
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data."); // Set error state
        setLoading(false); // Stop loading
      });
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Meet the Code Kalaakaars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our talented team of developers, designers, and product managers who
            bring your ideas to life.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-t-4 border-indigo-600 border-solid rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-gray-100 h-48 flex justify-center items-center">
                  <div className="text-gray-500 text-6xl">👤</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.Name}</h3>
                  <p className="text-gray-500">{member.Position}</p>
                  <p className="text-gray-500">Mentor: {member.Mentor}</p>
                  <p className="text-gray-500">Department: {member.workType}</p>
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
