import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Job = ({ data }) => {

const dispatch = useDispatch()

return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={2}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={8} >
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col>
    <Button onClick={()=>{
      dispatch({
        type: 'ADD_TO_CART',
        payload:data,
      })
      }}>Add Favorite</Button>
    </Col>
  </Row>


)}


export default Job;
