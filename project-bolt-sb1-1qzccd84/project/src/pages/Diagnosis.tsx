import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon, FileText, AlertCircle } from 'lucide-react';

export function Diagnosis() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
    },
  });

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Diagnosis</h2>
          <p className="mt-1 text-sm text-gray-500">
            Upload medical images or documents for AI-powered analysis
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
              }`}
            >
              <input {...getInputProps()} />
              <div className="space-y-3">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="text-gray-600">
                  <p className="text-base">
                    Drag and drop your files here, or{' '}
                    <span className="text-indigo-600 hover:text-indigo-500">
                      browse
                    </span>
                  </p>
                  <p className="text-sm">
                    Supports images (PNG, JPG) and PDF documents
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Analysis Options
            </h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <span className="text-sm text-gray-700">
                  Enable detailed analysis
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <span className="text-sm text-gray-700">
                  Include treatment recommendations
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">
                  Compare with historical data
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Analyses
          </h3>
          <div className="space-y-4">
            {[
              {
                type: 'image',
                name: 'chest-xray-001.jpg',
                date: '2 hours ago',
                status: 'completed',
                result: 'No abnormalities detected',
              },
              {
                type: 'document',
                name: 'lab-results.pdf',
                date: '5 hours ago',
                status: 'completed',
                result: 'Elevated white blood cell count',
              },
              {
                type: 'image',
                name: 'mri-scan-003.jpg',
                date: 'Yesterday',
                status: 'processing',
                result: null,
              },
            ].map((analysis, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  {analysis.type === 'image' ? (
                    <ImageIcon className="h-6 w-6 text-gray-400" />
                  ) : (
                    <FileText className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {analysis.name}
                  </p>
                  <p className="text-sm text-gray-500">{analysis.date}</p>
                  {analysis.result && (
                    <p className="mt-1 text-sm text-gray-700">
                      {analysis.result}
                    </p>
                  )}
                </div>
                <div>
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                      analysis.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {analysis.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <AlertCircle className="h-5 w-5 text-gray-400" />
          <p>
            AI analysis is intended to assist medical professionals and should not
            be used as the sole basis for diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}