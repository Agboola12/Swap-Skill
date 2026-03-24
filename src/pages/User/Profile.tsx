import React, { useState } from 'react';
import UserNavBar from '../../component/UserNavBar';

const Profile = () =>  {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Profile state
  const [profile, setProfile] = useState({
    name: 'Adewale Bolu',
    department: 'Computer Science Department',
    email: 'adewale.bolu@adeleke.edu.ng',
    matric: 'ADL/CS/2023/1234',
    skills: ['Web Development', 'JavaScript', 'React', 'Python']
  });

  // Edit form state
  const [editForm, setEditForm] = useState({ ...profile });
  const [newSkill, setNewSkill] = useState('');

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !editForm.skills.includes(newSkill.trim())) {
      setEditForm(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setEditForm(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSave = () => {
    setProfile(editForm);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setNewSkill('');
    setIsModalOpen(false);
  };

  return (
    <>
    <UserNavBar/>
      {/* Profile Card */}
      <div className="w-[40%] background py-10 px-6 mt-10 mx-auto rounded-[12px] shadow-xl relative">
        {/* Edit Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>

        <div className="flex gap-5 items-center mb-5">
          <img 
            src={`https://ui-avatars.com/api/?background=7C33FF&color=fff&bold=true&size=80&name=${profile.name.split(' ').map(n => n[0]).join('')}`}
            alt="Profile" 
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div>
            <p className="text-white font-bold text-xl mb-1">{profile.name}</p>
            <p className="text-purple-200 text-sm">{profile.department}</p>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-2 pt-4 border-t border-white/20">
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-white/80 text-sm">{profile.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-white/80 text-sm">{profile.matric}</p>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/60 text-xs mb-2">SKILLS</p>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
              <button 
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={editForm.department}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>

              {/* Matric Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Matric Number
                </label>
                <input
                  type="text"
                  name="matric"
                  value={editForm.matric}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none"
                />
              </div>

              {/* Skills Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {editForm.skills.map((skill, index) => (
                    <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-purple-900"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  />
                  <button
                    onClick={handleAddSkill}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile