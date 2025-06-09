import React, { useState, useEffect } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [trainerData, setTrainerData] = useState({
    name: "",
    email: "",
    role: "",
    createdAt: "",
    specialization: "",
    experience: "",
    bio: "",
    phone: "",
    certifications: [],
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg"
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://course-content-portal.onrender.com/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you use JWT
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setTrainerData({
          ...data.trainer,
          // Adding default values for fields that might not be in the API response
          specialization: data.trainer.specialization || "Fitness Training",
          experience: data.trainer.experience || "0 years",
          bio: data.trainer.bio || "Certified trainer with expertise in various fitness disciplines.",
          phone: data.trainer.phone || "+1 (555) 000-0000",
          certifications: data.trainer.certifications || ["NASM Certified"],
          profileImage: data.trainer.profileImage || "https://randomuser.me/api/portraits/men/32.jpg"
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCertificationChange = (index, value) => {
    const newCerts = [...trainerData.certifications];
    newCerts[index] = value;
    setTrainerData(prev => ({
      ...prev,
      certifications: newCerts
    }));
  };

  const addCertification = () => {
    setTrainerData(prev => ({
      ...prev,
      certifications: [...prev.certifications, ""]
    }));
  };

  const removeCertification = (index) => {
    const newCerts = [...trainerData.certifications];
    newCerts.splice(index, 1);
    setTrainerData(prev => ({
      ...prev,
      certifications: newCerts
    }));
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();

      formData.append('name', trainerData.name);
      formData.append('email', trainerData.email);
      formData.append('phone', trainerData.phone);
      formData.append('specialization', trainerData.specialization);
      formData.append('experience', trainerData.experience);
      formData.append('bio', trainerData.bio);

      // Append certifications as JSON string
      formData.append('certifications', JSON.stringify(trainerData.certifications));

      // 👇 Append image only if edited
      if (document.querySelector('input[type="file"]').files[0]) {
        formData.append('profileImage', document.querySelector('input[type="file"]').files[0]);
      }

      const response = await fetch('https://course-content-portal.onrender.com/api/users/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedData = await response.json();
      setTrainerData(prev => ({
        ...prev,
        ...updatedData.trainer
      }));

      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };


  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading profile data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          Error loading profile: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src={trainerData.profileImage}
                alt="Profile"
                className="rounded-circle img-fluid mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />

              {isEditing ? (
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="name"
                    value={trainerData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          setTrainerData(prev => ({
                            ...prev,
                            profileImage: event.target.result
                          }));
                        };
                        reader.readAsDataURL(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              ) : (
                <>
                  <h4 className="mb-2">{trainerData.name}</h4>
                  <p className="text-muted mb-1">{trainerData.specialization}</p>
                  <p className="text-muted mb-4">{trainerData.experience} experience</p>
                </>
              )}

              <div className="d-flex justify-content-center mb-2">
                <button
                  className={`btn btn-${isEditing ? 'secondary' : 'primary'} me-2`}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <i className={`bi bi-${isEditing ? 'x-lg' : 'pencil'} me-1`}></i>
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
                {isEditing && (
                  <button className="btn btn-success" onClick={handleSave}>
                    <i className="bi bi-save me-1"></i> Save
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <hr />
              {isEditing ? (
                <>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={trainerData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={trainerData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <p className="mb-0"><i className="bi bi-envelope me-2"></i> {trainerData.email}</p>
                  </div>
                  <div className="mb-3">
                    <p className="mb-0"><i className="bi bi-telephone me-2"></i> {trainerData.phone}</p>
                  </div>
                  <div className="mb-3">
                    <p className="mb-0"><i className="bi bi-calendar me-2"></i> Member since {new Date(trainerData.createdAt).toLocaleDateString()}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">About Me</h5>
              </div>
              <hr />
              {isEditing ? (
                <div className="mb-3">
                  <label className="form-label">Specialization</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="specialization"
                    value={trainerData.specialization}
                    onChange={handleInputChange}
                  />

                  <label className="form-label">Experience</label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="experience"
                    value={trainerData.experience}
                    onChange={handleInputChange}
                  />

                  <label className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="bio"
                    value={trainerData.bio}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              ) : (
                <>
                  <p className="mb-3"><strong>Specialization:</strong> {trainerData.specialization}</p>
                  <p className="mb-3"><strong>Experience:</strong> {trainerData.experience}</p>
                  <p className="mb-0">{trainerData.bio}</p>
                </>
              )}
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Certifications</h5>
              </div>
              <hr />
              {isEditing ? (
                <>
                  {trainerData.certifications.map((cert, index) => (
                    <div className="input-group mb-2" key={index}>
                      <input
                        type="text"
                        className="form-control"
                        value={cert}
                        onChange={(e) => handleCertificationChange(index, e.target.value)}
                      />
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={() => removeCertification(index)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  ))}
                  <button
                    className="btn btn-sm btn-outline-primary mt-2"
                    onClick={addCertification}
                  >
                    <i className="bi bi-plus-circle me-1"></i> Add Certification
                  </button>
                </>
              ) : (
                <ul className="list-group list-group-flush">
                  {trainerData.certifications.map((cert, index) => (
                    <li className="list-group-item" key={index}>
                      <i className="bi bi-award-fill text-primary me-2"></i> {cert}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Training Statistics</h5>
              <hr />
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <h3 className="text-primary">120+</h3>
                    <p className="mb-0">Clients Trained</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <h3 className="text-primary">4.9</h3>
                    <p className="mb-0">Average Rating</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-light rounded">
                    <h3 className="text-primary">95%</h3>
                    <p className="mb-0">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;