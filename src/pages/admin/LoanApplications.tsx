import { format } from 'date-fns';
import { Eye, Trash2, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { axiosInstance } from '../../api/apiClient';
import { ExtendedLoanApplicationType } from '../../validator/loan';
import { useQuery } from '@tanstack/react-query';

const LoanApplications = () => {
  const [loanApplications, setLoanApplications] = useState<ExtendedLoanApplicationType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, _] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSeen, setIsSeen] = useState<boolean | undefined>(undefined);
  const [date, setDate] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<ExtendedLoanApplicationType | null>(null);

  const fetchLoanApplications = async () => {
    const response = await axiosInstance.get('/loan/all', {
      params: { page: currentPage, limit, searchQuery, isSeen, date },
    });
    return response.data.data;
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['loanApplications', currentPage, limit, searchQuery, isSeen, date],
    queryFn: fetchLoanApplications,
    staleTime: 5 * 1000 * 60, // 5 minute
  });

  // Update state when data is fetched
  useEffect(() => {
    if (data) {
      setLoanApplications(data.loanApplications);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setTotalCount(data.totalCount);
    }
  }, [data]);

  // Handle errors
  useEffect(() => {
    if (error) {
      toast.error((error as any).response?.data?.message || 'Failed to fetch loan applications');
    }
  }, [error]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this loan application?')) return;
    try {
      await axiosInstance.delete(`/loan/${id}`);
      toast.success('Loan application deleted successfully');
      refetch();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to delete loan application');
    }
  };

  const handleView = (app: ExtendedLoanApplicationType) => {
    setSelectedApplication(app);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    refetch();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <Toaster richColors position="top-right" />
      <h2 className="text-2xl font-bold mb-6">Loan Applications</h2>

      {/* Filters */}
      <form onSubmit={handleFilterSubmit} className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <input
            type="text"
            placeholder="Search by name, email, phone, or Aadhar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field w-full"
          />
        </div>
        {/* <div>
          <select
            value={isSeen === undefined ? '' : isSeen.toString()}
            onChange={(e) => setIsSeen(e.target.value === '' ? undefined : e.target.value === 'true')}
            className="input-field w-full"
          >
            <option value="">All</option>
            <option value="true">Seen</option>
            <option value="false">Unseen</option>
          </select>
        </div> */}
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Apply Filters
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Loan Type</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Amount</th>
              {/* <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Seen</th> */}
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Created At</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} className="text-center py-4">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={7} className="text-center py-4">Error loading applications</td>
              </tr>
            ) : loanApplications.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4">No loan applications found</td>
              </tr>
            ) : (
              loanApplications.map((app) => (
                <tr key={app._id} className="border-t">
                  <td className="px-4 py-2 text-sm">{app.name}</td>
                  <td className="px-4 py-2 text-sm">{app.email}</td>
                  <td className="px-4 py-2 text-sm">{app.loanType}</td>
                  <td className="px-4 py-2 text-sm">₹{app.amount.toLocaleString()}</td>
                  {/* <td className="px-4 py-2 text-sm">{app.isSeen ? 'Yes' : 'No'}</td> */}
                  <td className="px-4 py-2 text-sm">{format(new Date(app.createdAt), 'PP')}</td>
                  <td className="px-4 py-2 text-sm flex space-x-2">
                    <button
                      onClick={() => handleView(app)}
                      className="text-primary-600 hover:text-primary-800"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(app._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {(currentPage - 1) * limit + 1} to {Math.min(currentPage * limit, totalCount)} of {totalCount} applications
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-outline px-4 py-2 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`btn ${currentPage === page ? 'btn-primary' : 'btn-outline'} px-4 py-2`}
              >
                {page}
              </button>
            ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn btn-outline px-4 py-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal for Viewing Details */}
      {selectedApplication && (
        <div className="fixed inset-0 to-20 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Loan Application Details</h3>
              <button
                onClick={() => setSelectedApplication(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Name</p>
                <p className="text-lg">{selectedApplication.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="text-lg">{selectedApplication.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Phone</p>
                <p className="text-lg">{selectedApplication.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Aadhar Number</p>
                <p className="text-lg">{selectedApplication.aadharNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Loan Type</p>
                <p className="text-lg">{selectedApplication.loanType}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Amount</p>
                <p className="text-lg">${selectedApplication.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Duration</p>
                <p className="text-lg">{selectedApplication.duration} months</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Address</p>
                <p className="text-lg">{selectedApplication.address}</p>
              </div>
              {/* <div>
                <p className="text-sm font-medium text-gray-600">Seen</p>
                <p className="text-lg">{selectedApplication.isSeen ? 'Yes' : 'No'}</p>
              </div> */}
              <div>
                <p className="text-sm font-medium text-gray-600">Created At</p>
                <p className="text-lg">{format(new Date(selectedApplication.createdAt), 'PP')}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedApplication(null)}
                className="btn btn-outline px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanApplications;