import { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { button as buttonStyles } from "@heroui/theme";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type Position = {
  id: string;
  title: string;
  type: "Engineering" | "Design" | "Operations";
  commitment: string;
  description: string;
  requirements: string[];
  niceToHave?: string[];
  status: "Active" | "Filled";
  applicationQuestions: {
    id: string;
    label: string;
    type: 'text' | 'textarea' | 'url';
    required: boolean;
    placeholder?: string;
  }[];
};

export default function CareersPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    experience: '',
    portfolio: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const positions: Position[] = [
    {
      id: "frontend-dev",
      title: "Frontend Developer",
      type: "Engineering",
      commitment: "Flexible • Volunteer",
      description: "Join us in building the next generation of developer tools. We're looking for passionate frontend developers who want to create exceptional user experiences using React, TypeScript, and modern web technologies.",
      requirements: [
        "Experience with React and TypeScript",
        "Strong understanding of modern web technologies and best practices",
        "Passion for creating intuitive user interfaces",
        "Ability to write clean, maintainable code",
        "Good understanding of Git workflow"
      ],
      niceToHave: [
        "Experience with Next.js",
        "Knowledge of TailwindCSS",
        "Understanding of design systems",
        "Open source contributions"
      ],
      status: "Active",
      applicationQuestions: [
        {
          id: 'experience',
          label: 'Tell us about your relevant experience',
          type: 'textarea',
          required: true,
          placeholder: 'Share your experience with the required technologies...'
        },
        {
          id: 'portfolio',
          label: 'Portfolio or GitHub Profile',
          type: 'url',
          required: false,
          placeholder: 'https://'
        },
        {
          id: 'message',
          label: 'Why are you interested in joining our team?',
          type: 'textarea',
          required: true,
          placeholder: 'Tell us what motivates you...'
        }
      ]
    },
    {
      id: "backend-dev",
      title: "Kotlin Backend Developer",
      type: "Engineering",
      commitment: "Flexible • Volunteer",
      description: "Help us build robust and scalable backend services. We're seeking developers with a passion for Kotlin and server-side development to join our team.",
      requirements: [
        "Experience with Kotlin",
        "Understanding of RESTful APIs",
        "Knowledge of database design and SQL",
        "Familiarity with microservices architecture",
        "Experience with version control systems"
      ],
      niceToHave: [
        "Experience with Spring Boot",
        "Knowledge of Docker and Kubernetes",
        "Understanding of cloud platforms (AWS/GCP)",
        "Experience with message queues"
      ],
      status: "Active",
      applicationQuestions: [
        {
          id: 'experience',
          label: 'Tell us about your relevant experience',
          type: 'textarea',
          required: true,
          placeholder: 'Share your experience with the required technologies...'
        },
        {
          id: 'portfolio',
          label: 'Portfolio or GitHub Profile',
          type: 'url',
          required: false,
          placeholder: 'https://'
        },
        {
          id: 'message',
          label: 'Why are you interested in joining our team?',
          type: 'textarea',
          required: true,
          placeholder: 'Tell us what motivates you...'
        }
      ]
    },
    {
      id: "sysadmin",
      title: "Systems Administrator",
      type: "Operations",
      commitment: "Flexible • Volunteer",
      description: "Looking for system administrators to help maintain and improve our infrastructure. Join us in building reliable and scalable systems.",
      requirements: [
        "Strong Linux/Unix administration skills",
        "Experience with cloud platforms (AWS/GCP)",
        "Knowledge of networking and security",
        "Familiarity with Docker and Kubernetes",
        "Infrastructure as Code experience"
      ],
      niceToHave: [
        "Experience with monitoring tools",
        "Knowledge of CI/CD pipelines",
        "Security certifications",
        "Automation experience"
      ],
      status: "Active",
      applicationQuestions: [
        {
          id: 'experience',
          label: 'Tell us about your relevant experience',
          type: 'textarea',
          required: true,
          placeholder: 'Share your experience with the required technologies...'
        },
        {
          id: 'portfolio',
          label: 'Portfolio or GitHub Profile',
          type: 'url',
          required: false,
          placeholder: 'https://'
        },
        {
          id: 'message',
          label: 'Why are you interested in joining our team?',
          type: 'textarea',
          required: true,
          placeholder: 'Tell us what motivates you...'
        }
      ]
    },
    {
      id: "ui-designer",
      title: "UI/UX Designer",
      type: "Design",
      commitment: "Flexible • Volunteer",
      description: "Join us in creating beautiful and intuitive interfaces. We're looking for designers who can help shape the future of our product.",
      requirements: [
        "Strong portfolio demonstrating UI/UX work",
        "Experience with modern design tools",
        "Understanding of user-centered design principles",
        "Ability to create responsive designs",
        "Knowledge of design systems"
      ],
      niceToHave: [
        "Experience with motion design",
        "Knowledge of HTML/CSS",
        "Illustration skills",
        "Experience with design tokens"
      ],
      status: "Active",
      applicationQuestions: [
        {
          id: 'experience',
          label: 'Tell us about your relevant experience',
          type: 'textarea',
          required: true,
          placeholder: 'Share your experience with the required technologies...'
        },
        {
          id: 'portfolio',
          label: 'Portfolio or GitHub Profile',
          type: 'url',
          required: false,
          placeholder: 'https://'
        },
        {
          id: 'message',
          label: 'Why are you interested in joining our team?',
          type: 'textarea',
          required: true,
          placeholder: 'Tell us what motivates you...'
        }
      ]
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredPositions = selectedType 
    ? positions.filter(position => position.type === selectedType)
    : positions;

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPosition) return;

    setSubmitStatus('submitting');
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          position: selectedPosition,
          application: applicationData
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setApplicationData({
          name: '',
          email: '',
          experience: '',
          portfolio: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Application submission error:', error);
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Floating elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-primary-200/20 dark:bg-primary-800/10 blur-3xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} />
          <div className={`absolute bottom-1/4 left-[10%] w-96 h-96 rounded-full bg-secondary-200/30 dark:bg-secondary-800/10 blur-3xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} />
        </div>

        {/* Main content */}
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          {/* Header */}
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400">
              Join Our Journey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're building something special and looking for passionate individuals to join our volunteer team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedType
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                All Roles
              </button>
              {Array.from(new Set(positions.map(p => p.type))).map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Project mission */}
          <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-sm transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl font-bold mb-4">About Our Project</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This is a passion project driven by the desire to create exceptional developer tools. While these are volunteer positions, you'll have the opportunity to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Build Something Meaningful</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Work on innovative solutions that help developers be more productive.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Join a Great Team</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Collaborate with passionate developers from around the world.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Learn & Grow</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Gain experience with modern technologies and best practices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Positions list */}
          <div className="grid grid-cols-1 gap-6">
            {filteredPositions.map((position) => (
              <div 
                key={position.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400">
                        {position.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {position.commitment}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPosition(position);
                      setIsModalOpen(true);
                    }}
                    className={buttonStyles({
                      size: "lg",
                      radius: "full",
                      className: "bg-primary-500 hover:bg-primary-600 text-white transition-colors"
                    })}
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {position.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {position.niceToHave && (
                    <div>
                      <h4 className="font-semibold mb-3">Nice to Have</h4>
                      <ul className="space-y-2">
                        {position.niceToHave.map((skill, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog 
            as="div"
            className="relative z-50"
            onClose={() => setIsModalOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold mb-6"
                    >
                      Apply for {selectedPosition?.title}
                    </Dialog.Title>

                    <form onSubmit={handleApplicationSubmit} className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            required
                            value={applicationData.name}
                            onChange={(e) => setApplicationData(prev => ({
                              ...prev,
                              name: e.target.value
                            }))}
                            className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={applicationData.email}
                            onChange={(e) => setApplicationData(prev => ({
                              ...prev,
                              email: e.target.value
                            }))}
                            className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                      </div>

                      {/* Position-specific questions */}
                      {selectedPosition?.applicationQuestions.map(question => (
                        <div key={question.id}>
                          <label className="block text-sm font-medium mb-2">
                            {question.label}
                          </label>
                          {question.type === 'textarea' ? (
                            <textarea
                              required={question.required}
                              value={applicationData[question.id as keyof typeof applicationData]}
                              onChange={(e) => setApplicationData(prev => ({
                                ...prev,
                                [question.id]: e.target.value
                              }))}
                              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary-500"
                              rows={4}
                              placeholder={question.placeholder}
                            />
                          ) : (
                            <input
                              type={question.type}
                              required={question.required}
                              value={applicationData[question.id as keyof typeof applicationData]}
                              onChange={(e) => setApplicationData(prev => ({
                                ...prev,
                                [question.id]: e.target.value
                              }))}
                              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-primary-500"
                              placeholder={question.placeholder}
                            />
                          )}
                        </div>
                      ))}

                      <div className="flex justify-end gap-4">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 rounded-xl border hover:bg-gray-100"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={submitStatus === 'submitting'}
                          className={buttonStyles({
                            size: "lg",
                            radius: "xl",
                            className: "relative bg-primary-500 text-white hover:bg-primary-600"
                          })}
                        >
                          {submitStatus === 'submitting' ? 'Submitting...' : 
                           submitStatus === 'success' ? 'Submitted!' : 
                           'Submit Application'}
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </DefaultLayout>
  );
} 