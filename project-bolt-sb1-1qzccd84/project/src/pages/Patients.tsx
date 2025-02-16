import React from 'react';
import { 
  Search, 
  Plus, 
  Filter,
  Activity,
  Calendar,
  FileText,
  MoreVertical 
} from 'lucide-react';

export function Patients() {
  const patients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 45,
      gender: 'Female',
      condition: 'Hypertension',
      lastVisit: '2024-02-15',
      status: 'Stable',
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: 32,
      gender: 'Male',
      condition: 'Type 2 Diabetes',
      lastVisit: '2024-02-10',
      status: 'Follow-up Required',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      age: 28,
      gender: 'Female',
      condition: 'Asthma',
      lastVisit: '2024-02-05',
      status: 'Improving',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage patient records and track their progress
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:flex sm:space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search patients"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Patient
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b">
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <select className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>All Patients</option>
              <option>Recent Visits</option>
              <option>Critical Cases</option>
            </select>
          </div>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {patients.map((patient) => (
            <li key={patient.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                        <span className="text-sm font-medium leading-none text-indigo-700">
                          {patient.name.charAt(0)}
                        </span>
                      </span>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-sm font-medium text-gray-900">
                        {patient.name}
                      </h2>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{patient.age} years</span>
                        <span>•</span>
                        <span>{patient.gender}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                        patient.status === 'Stable'
                          ? 'bg-green-100 text-green-800'
                          : patient.status === 'Improving'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {patient.status}
                    </span>
                    <div className="flex -space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-500">
                        <Activity className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-500">
                        <Calendar className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-500">
                        <FileText className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">Condition: </span>
                    {patient.condition}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    <span className="font-medium text-gray-900">Last Visit: </span>
                    {new Date(patient.lastVisit).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}