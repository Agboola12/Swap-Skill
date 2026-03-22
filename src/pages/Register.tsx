import React, { useState } from 'react';

interface SignUpFormData {
  fullname: string;
  matric: string;
  department: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullname: '',
    matric: '',
    department: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof SignUpFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SignUpFormData> = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full name is required';
    }

    if (!formData.matric.trim()) {
      newErrors.matric = 'Matric number is required';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.fullname ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.fullname && (
              <p className="mt-1 text-sm text-red-500">{errors.fullname}</p>
            )}
          </div>

          {/* Matric Number */}
          <div>
            <label htmlFor="matric" className="block text-sm font-medium text-gray-700 mb-1">
              Matric Number
            </label>
            <input
              type="text"
              id="matric"
              name="matric"
              value={formData.matric}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.matric ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="A123456"
            />
            {errors.matric && (
              <p className="mt-1 text-sm text-red-500">{errors.matric}</p>
            )}
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors bg-white ${
                errors.department ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Department</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </select>
            {errors.department && (
              <p className="mt-1 text-sm text-red-500">{errors.department}</p>
            )}
          </div>

          {/* University Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              University Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john.doe@university.edu"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}