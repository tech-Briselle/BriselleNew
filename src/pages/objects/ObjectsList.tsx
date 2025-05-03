import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Settings, ExternalLink, AlertTriangle } from 'lucide-react';

interface ObjectType {
  id: string;
  name: string;
  apiName: string;
  description: string;
  recordCount: number;
  lastModified: string;
  isCustom: boolean;
}

function ObjectsList() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - this would come from an API in a real app
  const objects: ObjectType[] = [
    {
      id: '1',
      name: 'Account',
      apiName: 'Account__c',
      description: 'Business accounts and organizations',
      recordCount: 356,
      lastModified: '2023-10-15',
      isCustom: false,
    },
    {
      id: '2',
      name: 'Contact',
      apiName: 'Contact__c',
      description: 'Individual contacts and leads',
      recordCount: 842,
      lastModified: '2023-10-14',
      isCustom: false,
    },
    {
      id: '3',
      name: 'Opportunity',
      apiName: 'Opportunity__c',
      description: 'Sales opportunities and deals',
      recordCount: 89,
      lastModified: '2023-10-12',
      isCustom: false,
    },
    {
      id: '4',
      name: 'Lead',
      apiName: 'Lead__c',
      description: 'Potential customers and prospects',
      recordCount: 157,
      lastModified: '2023-10-10',
      isCustom: false,
    },
    {
      id: '5',
      name: 'Custom Object',
      apiName: 'Custom_Object__c',
      description: 'User-defined custom object',
      recordCount: 42,
      lastModified: '2023-10-08',
      isCustom: true,
    },
  ];

  const filteredObjects = objects.filter(
    (obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      obj.apiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      obj.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="page-title mb-0">Objects</h1>
        <button className="btn btn-primary">
          <Plus size={16} className="mr-2" />
          New Object
        </button>
      </div>

      <div className="card mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search objects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 input"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>API Name</th>
                <th>Description</th>
                <th>Records</th>
                <th>Last Modified</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredObjects.map((obj) => (
                <tr key={obj.id}>
                  <td className="font-medium">
                    <div className="flex items-center">
                      {obj.name}
                      {obj.isCustom && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-accent text-white rounded-full">
                          Custom
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-gray-500 font-mono text-xs">{obj.apiName}</td>
                  <td>{obj.description}</td>
                  <td>{obj.recordCount.toLocaleString()}</td>
                  <td>{obj.lastModified}</td>
                  <td>
                    <div className="flex space-x-2">
                      <Link
                        to={`/objects/${obj.id}`}
                        className="p-1 text-gray-500 hover:text-primary transition-colors"
                        title="View details"
                      >
                        <ExternalLink size={16} />
                      </Link>
                      <Link
                        to={`/objects/${obj.id}/config`}
                        className="p-1 text-gray-500 hover:text-primary transition-colors"
                        title="Configure"
                      >
                        <Settings size={16} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredObjects.length === 0 && (
            <div className="py-8 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
                <AlertTriangle size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No objects found</h3>
              <p className="text-gray-500">
                Try adjusting your search or create a new object.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ObjectsList;