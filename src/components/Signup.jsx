import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/');
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
       <div className="bg-white p-4 rounded text-center" style={{ maxWidth: '600px', width: '100%' }}>
   
      <h2 className="text-center">Signup</h2>
      <form onSubmit={handleSignup} className="w-50 mx-auto">
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary w-100">Signup</button>
        <p className="text-center mt-3">
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Signup;
