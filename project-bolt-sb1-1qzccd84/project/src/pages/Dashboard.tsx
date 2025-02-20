import React from 'react';
import { 
  Users, 
  Activity, 
  Calendar, 
  Clock,
  Brain,
  FileText,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      name: 'Total Patients',
      value: '1,234',
      change: '+12% from last month',
      trend: 'up',
      icon: Users,
    },
    {
      name: 'AI Diagnoses',
      value: '856',
      change: '+23% accuracy rate',
      trend: 'up',
      icon: Brain,
    },
    {
      name: 'Average Response Time',
      value: '2.4 min',
      change: '-30% from baseline',
      trend: 'down',
      icon: Clock,
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: 'Sarah Johnson',
      time: '09:00 AM',
      type: 'Follow-up',
      status: 'confirmed',
    },
    {
      id: 2,
      patient: 'Michael Chen',
      time: '10:30 AM',
      type: 'Initial Consultation',
      status: 'pending',
    },
    {
      id: 3,
      patient: 'Emma Wilson',
      time: '02:00 PM',
      type: 'Test Results',
      status: 'confirmed',
    },
  ];

  const recentDiagnoses = [
    {
      id: 1,
      patient: 'John Smith',
      condition: 'Pneumonia',
      confidence: '98%',
      timestamp: '1 hour ago',
    },
    {
      id: 2,
      patient: 'Lisa Brown',
      condition: 'Carpal Tunnel',
      confidence: '92%',
      timestamp: '3 hours ago',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Welcome back, Dr. Anderson
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon
                  className="h-8 w-8 text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {item.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {item.value}
                    </div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                      {item.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Today's Appointments
              </h3>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {upcomingAppointments.map((appointment) => (
                  <li key={appointment.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
                          <span className="text-sm font-medium leading-none text-indigo-600">
                            {appointment.patient.charAt(0)}
                          </span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">
                          {appointment.patient}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {appointment.time} - {appointment.type}
                        </p>
                      </div>
                      <div>
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            appointment.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Recent AI Diagnoses
              </h3>
              <Brain className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {recentDiagnoses.map((diagnosis) => (
                  <li key={diagnosis.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          <Activity className="h-5 w-5 text-indigo-600" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">
                          {diagnosis.patient}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {diagnosis.condition} - {diagnosis.confidence} confidence
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {diagnosis.timestamp}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export const Dashboard: React.FC = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = async () => {
//     const res = await fetch("http://localhost:5000/api/signin", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await res.json();
//     if (data.token) {
//       alert("Login successful");
//       router.push("/dashboard");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-300 text-white">
//       <header className="w-full py-6 bg-blue-800 shadow-lg text-center text-3xl font-bold">MedicoCare</header>
//       <div className="text-center p-8">
//         <h1 className="text-5xl font-extrabold">Your Health, Our Priority</h1>
//         <p className="mt-4 text-lg">Join MedicoCare and take control of your medical needs today.</p>
//       </div>
//       <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           onClick={handleSignIn}
//         >
//           Sign In
//         </button>
//         <p className="text-center mt-4 text-gray-600">New here? <a href="/signup" className="text-blue-600">Create an account</a></p>
//       </div>
//     </div>
//   );
// }