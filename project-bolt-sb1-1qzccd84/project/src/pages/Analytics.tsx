import React from 'react';
import { 
  Calendar,
  TrendingUp,
  Users,
  Activity,
  Brain,
  Clock,
  Filter
} from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
          <p className="mt-2 text-sm text-gray-700">
            Monitor healthcare metrics and AI performance
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:flex sm:space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 Days
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            name: 'Total Diagnoses',
            value: '2,345',
            change: '+12.3%',
            trend: 'up',
            icon: Brain,
          },
          {
            name: 'Active Patients',
            value: '1,234',
            change: '+5.4%',
            trend: 'up',
            icon: Users,
          },
          {
            name: 'Avg. Response Time',
            value: '2.3 min',
            change: '-15.2%',
            trend: 'down',
            icon: Clock,
          },
          {
            name: 'AI Accuracy',
            value: '96.5%',
            change: '+2.1%',
            trend: 'up',
            icon: Activity,
          },
        ].map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow px-5 py-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.trend === 'up'
                        ? 'text- green-600'
                        : 'text-red-600'
                    }`}
                  >
                    <TrendingUp
                      className={`h-4 w-4 flex-shrink-0 self-center ${
                        stat.trend === 'up'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    />
                    <span className="sr-only">
                      {stat.trend === 'up' ? 'Increased by' : 'Decreased by'}
                    </span>
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              Diagnosis Distribution
            </h3>
            <div className="mt-6">
              {[
                { condition: 'Respiratory Issues', count: 456, percentage: 28 },
                { condition: 'Cardiovascular', count: 342, percentage: 21 },
                { condition: 'Musculoskeletal', count: 289, percentage: 18 },
                { condition: 'Neurological', count: 234, percentage: 14 },
                { condition: 'Others', count: 312, percentage: 19 },
              ].map((item) => (
                <div key={item.condition} className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {item.condition}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        ({item.count})
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="relative h-2 rounded-full bg-gray-200">
                      <div
                        className="absolute h-2 rounded-full bg-indigo-600"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              AI Performance Metrics
            </h3>
            <div className="mt-6 space-y-6">
              {[
                {
                  metric: 'Diagnostic Accuracy',
                  value: 96.5,
                  target: 95,
                  status: 'above',
                },
                {
                  metric: 'False Positive Rate',
                  value: 2.3,
                  target: 3,
                  status: 'below',
                },
                {
                  metric: 'Processing Time',
                  value: 2.1,
                  target: 2.5,
                  status: 'below',
                },
                {
                  metric: 'Patient Satisfaction',
                  value: 92,
                  target: 90,
                  status: 'above',
                },
              ].map((metric) => (
                <div key={metric.metric}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {metric.metric}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        metric.status === 'above'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {metric.value}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="relative h-2 rounded-full bg-gray-200">
                      <div
                        className={`absolute h-2 rounded-full ${
                          metric.status === 'above'
                            ? 'bg-green-600'
                            : 'bg-red-600'
                        }`}
                        style={{ width: `${(metric.value / metric.target) * 100}%` }}
                      />
                      <div
                        className="absolute h-4 w-0.5 bg-gray-400"
                        style={{ left: `${metric.target}%`, top: '-4px' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}