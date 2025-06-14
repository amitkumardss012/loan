import { zodResolver } from '@hookform/resolvers/zod';
import { Edit, Trash, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { axiosInstance } from '../../api/apiClient';
import { AdminType, AdminValidator } from '../../validator/admin'; // Adjust path as needed
import { z } from 'zod';

interface Admin {
  _id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'SUB_ADMIN';
}

const ManageAdmins = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<AdminType>({
    resolver: zodResolver(AdminValidator) as Resolver<AdminType>,
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'SUB_ADMIN',
    },
  });

  // Custom schema for update form to make password truly optional
  const UpdateAdminValidator = AdminValidator.partial().extend({
    password: z.string().optional().transform(val => (val === '' ? undefined : val)),
  });

  // Separate form for update (allows partial updates)
  const { register: registerUpdate, handleSubmit: handleSubmitUpdate, formState: { errors: updateErrors }, reset: resetUpdate, setValue: setUpdateValue } = useForm<Partial<AdminType>>({
    resolver: zodResolver(UpdateAdminValidator) as Resolver<Partial<AdminType>>,
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'SUB_ADMIN',
    },
  });

  // Fetch all admins on component mount
  useEffect(() => {
    const fetchAdmins = async () => {
      setIsTableLoading(true);
      try {
        const response = await axiosInstance.get('/admin/all');
        setAdmins(response.data.data);
      } catch (err: any) {
        toast.error(err.response?.data?.message || 'Failed to fetch admins');
      } finally {
        setIsTableLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  // Create admin handler
  const onSubmit = async (data: AdminType) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/admin/create', data);
      toast.success(response.data.message || 'Admin created successfully');
      setAdmins([...admins, response.data.data]);
      setIsModalOpen(false);
      reset();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to create admin');
    } finally {
      setIsLoading(false);
    }
  };

  // Update admin handler
  const onUpdateSubmit = async (data: Partial<AdminType>) => {
    if (!selectedAdmin) return;
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(`/admin/${selectedAdmin._id}`, data);
      toast.success(response.data.message || 'Admin updated successfully');
      setAdmins(admins.map(admin => (admin._id === selectedAdmin._id ? response.data.data : admin)));
      setIsUpdateModalOpen(false);
      setSelectedAdmin(null);
      resetUpdate();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update admin');
    } finally {
      setIsLoading(false);
    }
  };

  // Delete admin handler
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this admin?')) return;
    try {
      const response = await axiosInstance.delete(`/admin/${id}`);
      toast.success(response.data.message || 'Admin deleted successfully');
      setAdmins(admins.filter(admin => admin._id !== id));
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to delete admin');
    }
  };

  // Handle edit button click
  const handleEdit = (admin: Admin) => {
    setSelectedAdmin(admin);
    setUpdateValue('name', admin.name);
    setUpdateValue('email', admin.email);
    setUpdateValue('role', admin.role);
    setUpdateValue('password', ''); // Password is optional for updates
    setIsUpdateModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16">

      {/* Header Section */}
      <section className="container-custom mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">Manage Admins</h1>
        <div className="flex justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary text-sm sm:text-base px-6 sm:px-8"
          >
            Create Admin
          </button>
        </div>
      </section>

      {/* Admins Table */}
      <section className="container-custom mx-auto px-4 sm:px-6">
        {isTableLoading ? (
          <div className="text-center">
            <span className="animate-spin inline-block w-8 h-8 border-4 border-t-transparent border-primary-600 rounded-full"></span>
            <p className="mt-2 text-gray-700">Loading admins...</p>
          </div>
        ) : admins.length === 0 ? (
          <p className="text-center text-gray-700">No admins found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Role</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.map(admin => (
                  <tr key={admin._id} className="border-b">
                    <td className="px-4 py-3 text-sm sm:text-base text-gray-900">{admin.name}</td>
                    <td className="px-4 py-3 text-sm sm:text-base text-gray-900">{admin.email}</td>
                    <td className="px-4 py-3 text-sm sm:text-base text-gray-900">{admin.role}</td>
                    <td className="px-4 py-3 flex space-x-2">
                      <button
                        onClick={() => handleEdit(admin)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(admin._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Create Admin Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 sm:p-8 w-full max-w-md mx-4 sm:mx-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Create Admin</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  {...register('name')}
                  className={`input-field w-full text-sm sm:text-base ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`input-field w-full text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="johndoe@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className={`input-field w-full text-sm sm:text-base ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="********"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="role" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  id="role"
                  {...register('role')}
                  className={`input-field w-full text-sm sm:text-base ${errors.role ? 'border-red-500' : ''}`}
                >
                  <option value="SUB_ADMIN">Sub Admin</option>
                  <option value="ADMIN">Admin</option>
                </select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                )}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-secondary text-sm sm:text-base px-6 sm:px-8"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full mr-2"></span>
                      Creating...
                    </>
                  ) : (
                    'Create Admin'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Admin Modal */}
      {isUpdateModalOpen && selectedAdmin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 sm:p-8 w-full max-w-md mx-4 sm:mx-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Update Admin</h2>
              <button onClick={() => setIsUpdateModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmitUpdate(onUpdateSubmit)}>
              <div className="mb-4">
                <label htmlFor="update-name" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="update-name"
                  {...registerUpdate('name')}
                  className={`input-field w-full text-sm sm:text-base ${updateErrors.name ? 'border-red-500' : ''}`}
                  placeholder="John Doe"
                />
                {updateErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{updateErrors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="update-email" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="update-email"
                  type="email"
                  {...registerUpdate('email')}
                  className={`input-field w-full text-sm sm:text-base ${updateErrors.email ? 'border-red-500' : ''}`}
                  placeholder="johndoe@example.com"
                />
                {updateErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{updateErrors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="update-password" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Password (Optional)
                </label>
                <input
                  id="update-password"
                  type="password"
                  {...registerUpdate('password')}
                  className={`input-field w-full text-sm sm:text-base ${updateErrors.password ? 'border-red-500' : ''}`}
                  placeholder="Leave blank to keep unchanged"
                />
                {updateErrors.password && (
                  <p className="mt-1 text-sm text-red-600">{updateErrors.password.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="update-role" className="block text-base sm:text-lg font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  id="update-role"
                  {...registerUpdate('role')}
                  className={`input-field w-full text-sm sm:text-base ${updateErrors.role ? 'border-red-500' : ''}`}
                >
                  <option value="SUB_ADMIN">Sub Admin</option>
                  <option value="ADMIN">Admin</option>
                </select>
                {updateErrors.role && (
                  <p className="mt-1 text-sm text-red-600">{updateErrors.role.message}</p>
                )}
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="btn btn-secondary text-sm sm:text-base px-6 sm:px-8"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary text-sm sm:text-base px-6 sm:px-8 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full mr-2"></span>
                      Updating...
                    </>
                  ) : (
                    'Update Admin'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAdmins;