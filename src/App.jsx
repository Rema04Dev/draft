import { Container, Row, Col } from 'react-bootstrap';
import AddForm from './components/AddForm/AddForm';
import UserList from './components/UserList/UserList';
import FilterUsers from './components/FilterUsers/FilterUsers';
const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className='col-8'>
            <AddForm />
            <FilterUsers />
            <UserList />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App;
