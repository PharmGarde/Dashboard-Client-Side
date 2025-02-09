import {
  UsersIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const StatCard = ({ title, value, icon: Icon, color }: any) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

const Statistics = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: UsersIcon,
      color: "bg-blue-500",
    },
    {
      title: "Active Pharmacies",
      value: "56",
      icon: BuildingStorefrontIcon,
      color: "bg-teal-500",
    },
    {
      title: "Prescriptions",
      value: "892",
      icon: ClipboardDocumentListIcon,
      color: "bg-purple-500",
    },
    {
      title: "Revenue",
      value: "$12,345",
      icon: CurrencyDollarIcon,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard Statistics
        </h1>
        <div className="flex space-x-3">
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Monthly Prescriptions
          </h2>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Revenue Overview
          </h2>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <UsersIcon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    New user registered
                  </p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <button className="text-sm text-teal-600 hover:text-teal-700">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
