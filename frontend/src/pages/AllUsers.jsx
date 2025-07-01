import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllUsers() {
  const [trainersData, setTrainersData] = useState({
    trainers: [],
    count: 0,
    message: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('https://course-content-portal.onrender.com/api/users/trainers');
        setTrainersData(response.data); // Store the entire response data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://course-content-portal.onrender.com/api/users/trainers/${id}`);
      setTrainersData(prev => ({
        ...prev,
        trainers: prev.trainers.filter(trainer => trainer._id !== id),
        count: prev.count - 1
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-3" role="alert">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Trainers List</h2>
      <p className="text-muted">Total trainers: {trainersData.count}</p>
      
      {trainersData.trainers.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No trainers found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Bio</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trainersData.trainers.map((trainer, index) => (
                <tr key={trainer._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img 
                      src={trainer.profileImage} 
                      className='img-fluid rounded-circle' 
                      style={{height: '50px', width: '50px', objectFit: 'cover'}} 
                      alt={trainer.name} 
                    />
                  </td>
                  <td>{trainer.name}</td>
                  <td>{trainer.email}</td>
                  <td>{trainer.phone || 'N/A'}</td>
                  <td>{trainer.role}</td>
                  <td>{trainer.specialization || 'N/A'}</td>
                  <td>{trainer.experience || 'N/A'}</td>
                  <td>{trainer.bio || 'N/A'}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(trainer._id)}
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AllUsers;