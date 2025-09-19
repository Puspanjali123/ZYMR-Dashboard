import React from "react";
import KPI from "./KPI";
import UsersPerDayChart from "./charts/UsersPerDayChart.jsx";
import AvatarDistributionChart from "./charts/AvatarDistributionChart.jsx";
import SignupTimeChart from "./charts/SignupTimeChart.jsx";
import RecentlyJoined from "./RecentlyJoined";

function Dashboard({ users }) {
  return (
    <div>
      <div className="flex gap-6 m-6">
        <div className="flex-1 bg-white  rounded-xl p-4">
          <KPI title="Total Users" value={users.length} />
        </div>
        <div className="flex-[2] bg-white  rounded-xl p-4">
          <UsersPerDayChart users={users} />
        </div>
        <div className="flex-[2] bg-white rounded-xl p-4">
          <AvatarDistributionChart users={users} />
        </div>
      </div>

      <div className="flex justify-center gap-16 ml-10 mr-10 mb-2">
        <div className="w-1/2">
          <SignupTimeChart users={users} />
        </div>
        <div className="w-1/3">
          <RecentlyJoined users={users} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
