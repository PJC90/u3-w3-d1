import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useLocation, useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
const location = useLocation()
  return (
    <Container>
      <Row>
        
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          </Col>
          <Col>
        <Link to="/" className={location.pathname === '/favourites' ? 'nav-link active' : 'nav-link'}>
          <h1 className="fs-4 mt-5 text-primary">Home</h1>
        </Link>
        </Col>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
