import { useNavigate } from 'react-router-dom';

function Admissions() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Admissions</h2>
      <p>Join our community of learners. We offer a streamlined admissions process.</p>
      <h3>Requirements</h3>
      <ul>
        <li>High school diploma or equivalent</li>
        <li>Minimum GPA of 2.5</li>
        <li>Application form and fee</li>
      </ul>
      <h3>Application Process</h3>
      <ol>
        <li>Submit online application</li>
        <li>Provide transcripts</li>
        <li>Schedule an interview</li>
        <li>Receive admission decision</li>
      </ol>
      <button onClick={() => navigate('/signup')}>Apply Now</button>
    </div>
  );
}

export default Admissions;