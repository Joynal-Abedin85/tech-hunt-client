// import React, { useContext } from "react";
// import { Authcontext } from "../../auth/Authprovider";
// import useaxios from "../../hook/useaxios";
import { useQuery } from "@tanstack/react-query";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Authcontext } from "../auth/Authprovider";
import { useContext } from "react";
import useaxios from "../../hook/useaxios";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistic = () => {
  const { user } = useContext(Authcontext);
  const axiossecure = useaxios();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiossecure.get("/admin-stats");
      return res.data;
    },
  });

  // Chart data configuration
  const chartData = {
    labels: ["Users", "Menu Items"],
    datasets: [
      {
        data: [stats.users || 0, stats.menuitem || 0],
        backgroundColor: ["#4CAF50", "#FFC107"],
        hoverBackgroundColor: ["#4CAF50AA", "#FFC107AA"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-3xl text-center my-5">
        Hi{" "}
        <span className="text-amber-500">
          {user?.displayName ? user.displayName : "Admin"}
        </span>
        , Welcome!
      </h2>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-center mb-4">Site Overview</h3>
          <h2 className="text-center ">click the chart to show length</h2>
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
