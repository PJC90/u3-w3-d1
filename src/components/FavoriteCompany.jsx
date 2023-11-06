import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// import { FaTrash } from 'react-icons/fa'

const FavoriteCompany = () => {
  const companyAdd = useSelector((state) => state.cart.content)
  const dispatch = useDispatch()
const location = useLocation()

  return (
    <Container>
      <Row>
        <Col xs={8} className="mx-auto my-3">
          <h1 className="display-1">FavoriteCompany</h1>
        </Col>
        <Col xs={2} className="mx-auto mt-5">
        <Link to="/" className={location.pathname === '/favourites' ? 'nav-link active' : 'nav-link'}>
          <h1 className="fs-4 mt-3 text-primary">Home</h1>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col>
        <ul style={{ listStyle: 'none' }}>
          {companyAdd.map((company, i)=>(
            <li key={i} style={{ border: '1px solid #00000033', borderRadius: 4 }}>
              {<a href={company.company_name} target="_blank" rel="noreferrer">{company.company_name}</a>}
            <Button
            variant="danger"
            onClick={() => {
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: i,
              })
            }}
          >
           - {/* <FaTrash/> */}
          </Button>
            </li>
          ))}
        </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteCompany;
