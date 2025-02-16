import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

export function LoanApplications() {
  const applications = [
    {
      id: 1,
      bank: 'State Bank of India',
      amount: '₹10,00,000',
      status: 'pending',
      date: '2024-02-15',
      progress: 60,
    },
    {
      id: 2,
      bank: 'HDFC Bank',
      amount: '₹5,00,000',
      status: 'approved',
      date: '2024-02-10',
      progress: 100,
    },
    {
      id: 3,
      bank: 'ICICI Bank',
      amount: '₹7,50,000',
      status: 'rejected',
      date: '2024-02-05',
      progress: 100,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            Loan Applications
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Track all your loan applications and their current status
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto">
            New Application
          </button>
        </div>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {applications.map((application) => (
            <li key={application.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="truncate text-sm font-medium text-gray-900">
                      {application.bank}
                    </p>
                    <div
                      className={`ml-4 inline-flex rounded-full px-2 text-xs font-semibold ${getStatusColor(
                        application.status
                      )}`}
                    >
                      <div className="flex items-center">
                        {getStatusIcon(application.status)}
                        <span className="ml-1 capitalize">
                          {application.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex flex-shrink-0">
                    <p className="text-sm text-gray-500">
                      Applied on{' '}
                      <time dateTime={application.date}>
                        {new Date(application.date).toLocaleDateString()}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="sm:flex sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-500">
                        Loan Amount:{' '}
                        <span className="font-medium text-gray-900">
                          {application.amount}
                        </span>
                      </p>
                    </div>
                  </div>
                  {application.status === 'pending' && (
                    <div className="mt-4">
                      <div className="relative w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${application.progress}%`,
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Application Progress: {application.progress}%
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}