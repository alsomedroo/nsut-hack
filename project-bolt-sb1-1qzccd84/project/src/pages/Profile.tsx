import React from 'react';
import { Building2, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

export function Profile() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Business Profile
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your business information and documents
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Business Information
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Business Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Rahul's Enterprise
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Business Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                Manufacturing
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                rahul@enterprise.com
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Phone
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                +91 98765 43210
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                123, Industrial Area Phase 1,<br />
                New Delhi, 110001
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Documents
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Business registration and verification documents
          </p>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {[
              {
                name: 'GST Registration',
                status: 'Verified',
                date: '2023-12-15',
              },
              {
                name: 'Business PAN Card',
                status: 'Verified',
                date: '2023-12-15',
              },
              {
                name: 'Bank Statements',
                status: 'Pending',
                date: '2024-02-15',
              },
            ].map((document, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {document.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Uploaded on{' '}
                        {new Date(document.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                        document.status === 'Verified'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {document.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}