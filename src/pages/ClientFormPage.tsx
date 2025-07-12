import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

interface FormErrors {
  projectType?: string;
  isPaidProject?: string;
  companyName?: string;
  emailAddress?: string;
  projectArea?: string;
  projectDescription?: string;
}

export const ClientFormPage = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    isPaidProject: '',
    companyName: '',
    companyWebsite: '', // Optional field
    emailAddress: '',
    projectArea: '',
    projectDescription: '', // Add new field
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const projectAreas = [
    'Healthcare and Hospital Construction',
    'Automotive and Manufacturing',
    'Information Technology',
    'Education and E-learning',
    'Real Estate Development',
    'Financial Services',
    'Retail and E-commerce',
    'Environmental and Sustainability',
    'Transportation and Logistics',
    'Entertainment and Media'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
    validateField(fieldName, formData[fieldName as keyof typeof formData]);
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectArea: value
    }));
    validateField('projectArea', value);
  };

  const validateField = (name: string, value: string) => {
    let newErrors = { ...errors };

    switch (name) {
      case 'projectType':
        if (!value) {
          newErrors.projectType = 'Please select a project type';
        } else {
          delete newErrors.projectType;
        }
        break;
      case 'isPaidProject':
        if (!value) {
          newErrors.isPaidProject = 'Please select if this is a paid project';
        } else {
          delete newErrors.isPaidProject;
        }
        break;
      case 'companyName':
        if (!value.trim()) {
          newErrors.companyName = 'Company name is required';
        } else {
          delete newErrors.companyName;
        }
        break;
      case 'emailAddress':
        if (!value.trim()) {
          newErrors.emailAddress = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.emailAddress = 'Please enter a valid email address';
        } else {
          delete newErrors.emailAddress;
        }
        break;
      case 'projectArea':
        if (!value) {
          newErrors.projectArea = 'Please select a project area';
        } else {
          delete newErrors.projectArea;
        }
        break;
      case 'projectDescription':
        if (!value.trim()) {
          newErrors.projectDescription = 'Project description is required';
        } else if (value.trim().length < 50) {
          newErrors.projectDescription = 'Please provide at least 50 characters of description';
        } else {
          delete newErrors.projectDescription;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.isPaidProject) newErrors.isPaidProject = 'Please select if this is a paid project';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.projectArea) newErrors.projectArea = 'Please select a project area';
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    } else if (formData.projectDescription.trim().length < 50) {
      newErrors.projectDescription = 'Please provide at least 50 characters of description';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as { [key: string]: boolean });
    setTouched(allTouched);

    if (validateForm()) {
      console.log(formData);
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full relative">
        <NavbarSection />
        {/* Dark overlay with fade-in animation */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 animate-[fadeIn_0.3s_ease-in-out]"
          style={{
            animation: 'fadeIn 0.3s ease-in-out'
          }}
        />
        
        {/* Success message popup with scale and fade animation */}
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div 
            className="text-center space-y-4 bg-white p-8 rounded-lg shadow-xl max-w-lg w-full mx-4 transform transition-all animate-[scaleIn_0.5s_ease-out]"
            style={{
              animation: 'scaleIn 0.5s ease-out'
            }}
          >
            <h2 className="text-[#0b3562] text-4xl font-bold mb-4">
              Thank You for Your Submission!
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Our team will contact you soon.
            </p>
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 bg-[#0b3562] text-white text-lg font-semibold rounded-lg hover:bg-[#0a2d54] transition-colors"
            >
              Go to Home
            </button>
          </div>
        </div>

        {/* Darkened form content */}
        <div className="opacity-20 pointer-events-none transition-opacity duration-300">
          <div className="w-full bg-[#0b3562] py-28">
            <div className="container mx-auto px-4 flex justify-center items-center">
              <h1 className="text-white text-3xl font-bold">Project Form</h1>
            </div>
          </div>
          <div className="flex-grow container mx-auto px-4 py-16">
            <div className="max-w-xl mx-auto">
              <p className="text-[26px] font-bold text-[#0b3562] mb-8 text-center leading-relaxed">
                Share your business challenge by completing<br />
                the questionnaire or contact us directly for discussion.
              </p>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Project Type Question */}
                <div className="space-y-4">
                  <label className="block font-semibold text-[#0b3562] text-lg">
                    1. Is this a Project for: <span className="text-red-500">*</span>
                  </label>
                  <div className="space-x-6 flex">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="projectType"
                        value="personal"
                        checked={formData.projectType === 'personal'}
                        onChange={handleChange}
                        onBlur={() => handleBlur('projectType')}
                        className="w-4 h-4 text-[#0b3562]"
                      />
                      <span className="text-gray-700">Personal Project</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="projectType"
                        value="company"
                        checked={formData.projectType === 'company'}
                        onChange={handleChange}
                        onBlur={() => handleBlur('projectType')}
                        className="w-4 h-4 text-[#0b3562]"
                      />
                      <span className="text-gray-700">Company Project</span>
                    </label>
                  </div>
                  {touched.projectType && errors.projectType && (
                    <p className="text-red-500 text-sm">{errors.projectType}</p>
                  )}
                </div>

                {/* Paid Project Question */}
                <div className="space-y-4">
                  <label className="block font-semibold text-[#0b3562] text-lg">
                    2. Is this a paid project? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-x-6 flex">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="isPaidProject"
                        value="yes"
                        checked={formData.isPaidProject === 'yes'}
                        onChange={handleChange}
                        onBlur={() => handleBlur('isPaidProject')}
                        className="w-4 h-4 text-[#0b3562]"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="isPaidProject"
                        value="no"
                        checked={formData.isPaidProject === 'no'}
                        onChange={handleChange}
                        onBlur={() => handleBlur('isPaidProject')}
                        className="w-4 h-4 text-[#0b3562]"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                  {touched.isPaidProject && errors.isPaidProject && (
                    <p className="text-red-500 text-sm">{errors.isPaidProject}</p>
                  )}
                </div>

                {/* Additional Form Fields */}
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <label className="w-32 font-normal text-[#0b3562]">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        onBlur={() => handleBlur('companyName')}
                        placeholder="Enter company name"
                        className={`flex-1 p-2 border rounded ${
                          touched.companyName && errors.companyName 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {touched.companyName && errors.companyName && (
                      <p className="text-red-500 text-sm ml-36">{errors.companyName}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="w-32 font-normal text-[#0b3562]">
                      Company Website
                    </label>
                    <input
                      type="url"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="https://www.example.com (Optional)"
                      className="flex-1 p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <label className="w-32 font-normal text-[#0b3562]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        onBlur={() => handleBlur('emailAddress')}
                        placeholder="Enter your email"
                        className={`flex-1 p-2 border rounded ${
                          touched.emailAddress && errors.emailAddress 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {touched.emailAddress && errors.emailAddress && (
                      <p className="text-red-500 text-sm ml-36">{errors.emailAddress}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <label className="w-32 font-normal text-[#0b3562]">
                        Project Area <span className="text-red-500">*</span>
                      </label>
                      <Select 
                        value={formData.projectArea} 
                        onValueChange={handleSelectChange}
                        onOpenChange={() => handleBlur('projectArea')}
                      >
                        <SelectTrigger className={`flex-1 bg-white ${
                          touched.projectArea && errors.projectArea 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}>
                          <SelectValue placeholder="Select project area" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {projectAreas.map((area) => (
                            <SelectItem 
                              key={area} 
                              value={area.toLowerCase()}
                              className="hover:bg-[#0b3562] hover:text-white transition-colors"
                            >
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {touched.projectArea && errors.projectArea && (
                      <p className="text-red-500 text-sm ml-36">{errors.projectArea}</p>
                    )}
                  </div>
                </div>

                {/* Project Description Field */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-4">
                    <label className="w-32 font-normal text-[#0b3562] pt-2">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <div className="flex-1">
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={(e) => {
                          setFormData(prev => ({
                            ...prev,
                            projectDescription: e.target.value
                          }));
                          validateField('projectDescription', e.target.value);
                        }}
                        onBlur={() => handleBlur('projectDescription')}
                        placeholder="Please describe your project briefly (minimum 50 characters)"
                        className={`w-full p-2 border rounded min-h-[120px] ${
                          touched.projectDescription && errors.projectDescription 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                      />
                      {touched.projectDescription && errors.projectDescription && (
                        <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
                      )}
                      <p className="text-gray-500 text-sm mt-1">
                        Characters: {formData.projectDescription.length}/500
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 py-3 bg-[#0b3562] text-white font-semibold rounded-lg hover:bg-[#0a2d54]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full">
      <NavbarSection />
      <div className="w-full bg-[#0b3562] py-28">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <h1 className="text-white text-3xl font-bold">Project Form</h1>
        </div>
      </div>
      <div className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <p className="text-[26px] font-bold text-[#0b3562] mb-8 text-center leading-relaxed">
            Share your business challenge by completing<br />
            the questionnaire or contact us directly for discussion.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Type Question */}
            <div className="space-y-4">
              <label className="block font-semibold text-[#0b3562] text-lg">
                1. Is this a Project for: <span className="text-red-500">*</span>
              </label>
              <div className="space-x-6 flex">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="projectType"
                    value="personal"
                    checked={formData.projectType === 'personal'}
                    onChange={handleChange}
                    onBlur={() => handleBlur('projectType')}
                    className="w-4 h-4 text-[#0b3562]"
                  />
                  <span className="text-gray-700">Personal Project</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="projectType"
                    value="company"
                    checked={formData.projectType === 'company'}
                    onChange={handleChange}
                    onBlur={() => handleBlur('projectType')}
                    className="w-4 h-4 text-[#0b3562]"
                  />
                  <span className="text-gray-700">Company Project</span>
                </label>
              </div>
              {touched.projectType && errors.projectType && (
                <p className="text-red-500 text-sm">{errors.projectType}</p>
              )}
            </div>

            {/* Paid Project Question */}
            <div className="space-y-4">
              <label className="block font-semibold text-[#0b3562] text-lg">
                2. Is this a paid project? <span className="text-red-500">*</span>
              </label>
              <div className="space-x-6 flex">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="isPaidProject"
                    value="yes"
                    checked={formData.isPaidProject === 'yes'}
                    onChange={handleChange}
                    onBlur={() => handleBlur('isPaidProject')}
                    className="w-4 h-4 text-[#0b3562]"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="isPaidProject"
                    value="no"
                    checked={formData.isPaidProject === 'no'}
                    onChange={handleChange}
                    onBlur={() => handleBlur('isPaidProject')}
                    className="w-4 h-4 text-[#0b3562]"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
              {touched.isPaidProject && errors.isPaidProject && (
                <p className="text-red-500 text-sm">{errors.isPaidProject}</p>
              )}
            </div>

            {/* Additional Form Fields */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <label className="w-32 font-normal text-[#0b3562]">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={() => handleBlur('companyName')}
                    placeholder="Enter company name"
                    className={`flex-1 p-2 border rounded ${
                      touched.companyName && errors.companyName 
                        ? 'border-red-500' 
                        : 'border-gray-300'
                    }`}
                  />
                </div>
                {touched.companyName && errors.companyName && (
                  <p className="text-red-500 text-sm ml-36">{errors.companyName}</p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 font-normal text-[#0b3562]">
                  Company Website
                </label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://www.example.com (Optional)"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <label className="w-32 font-normal text-[#0b3562]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    onBlur={() => handleBlur('emailAddress')}
                    placeholder="Enter your email"
                    className={`flex-1 p-2 border rounded ${
                      touched.emailAddress && errors.emailAddress 
                        ? 'border-red-500' 
                        : 'border-gray-300'
                    }`}
                  />
                </div>
                {touched.emailAddress && errors.emailAddress && (
                  <p className="text-red-500 text-sm ml-36">{errors.emailAddress}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <label className="w-32 font-normal text-[#0b3562]">
                    Project Area <span className="text-red-500">*</span>
                  </label>
                  <Select 
                    value={formData.projectArea} 
                    onValueChange={handleSelectChange}
                    onOpenChange={() => handleBlur('projectArea')}
                  >
                    <SelectTrigger className={`flex-1 bg-white ${
                      touched.projectArea && errors.projectArea 
                        ? 'border-red-500' 
                        : 'border-gray-300'
                    }`}>
                      <SelectValue placeholder="Select project area" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {projectAreas.map((area) => (
                        <SelectItem 
                          key={area} 
                          value={area.toLowerCase()}
                          className="hover:bg-[#0b3562] hover:text-white transition-colors"
                        >
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {touched.projectArea && errors.projectArea && (
                  <p className="text-red-500 text-sm ml-36">{errors.projectArea}</p>
                )}
              </div>
            </div>

            {/* Project Description Field */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-4">
                <label className="w-32 font-normal text-[#0b3562] pt-2">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <div className="flex-1">
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        projectDescription: e.target.value
                      }));
                      validateField('projectDescription', e.target.value);
                    }}
                    onBlur={() => handleBlur('projectDescription')}
                    placeholder="Please describe your project briefly (minimum 50 characters)"
                    className={`w-full p-2 border rounded min-h-[120px] ${
                      touched.projectDescription && errors.projectDescription 
                        ? 'border-red-500' 
                        : 'border-gray-300'
                    }`}
                  />
                  {touched.projectDescription && errors.projectDescription && (
                    <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-1">
                    Characters: {formData.projectDescription.length}/500
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-3 bg-[#0b3562] text-white font-semibold rounded-lg hover:bg-[#0a2d54]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};