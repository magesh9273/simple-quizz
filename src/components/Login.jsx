import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      navigate('/quiz');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
       <div className="bg-white p-4 rounded text-center" style={{ maxWidth: '600px', width: '100%' }}>
    
      <h2 className="text-center ">Login</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary w-100">Login</button>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </form>
    </div>
    </div>
    
  );
}

export default Login;
