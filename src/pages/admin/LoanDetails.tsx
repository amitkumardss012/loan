import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { axiosInstance } from '../../api/apiClient';
import { ExtendedLoanApplicationType } from '../../validator/loan';

const LoanDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [loanApplication, setLoanApplication] = useState<ExtendedLoanApplicationType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoanApplication = async () => {
      try {
        const response = await axiosInstance.get(`/loan/${id}`);
        setLoanApplication(response.data.data);
      } catch (err: any) {
        toast.error(err.response?.data?.message || 'Failed to fetch loan application');
        navigate('/admin/loans');
      } finally {
        setIsLoading(false);
      }
    };
    fetchLoanApplication();
  }, [id, navigate]);

  if (isLoading) {
    return <div className="bg-white rounded-lg shadow p-6">Loading...</div>;
  }

  if (!loanApplication) {
    return <div className="bg-white rounded-lg shadow p-6">Loan application not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <Toaster richColors position="top-right" />
      <h2 className="text-2xl font-bold mb-6">Loan Application Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm font-medium text-gray-600">Name</p>
          <p className="text-lg">{loanApplication.name}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Email</p>
          <p className="text-lg">{loanApplication.email}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Phone</p>
          <p className="text-lg">{loanApplication.phone}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Aadhar Number</p>
          <p className="text-lg">{loanApplication.aadharNumber}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Loan Type</p>
          <p className="text-lg">{loanApplication.loanType}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Amount</p>
          <p className="text-lg">${loanApplication.amount.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Duration</p>
          <p className="text-lg">{loanApplication.duration} months</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Address</p>
          <p className="text-lg">{loanApplication.address}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Seen</p>
          <p className="text-lg">{loanApplication.isSeen ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Created At</p>
          <p className="text-lg">{format(new Date(loanApplication.createdAt), 'PP')}</p>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => navigate('/admin/loans')}
          className="btn btn-outline px-4 py-2"
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default LoanDetails;