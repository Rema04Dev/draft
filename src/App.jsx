import { Container, Row, Col } from 'react-bootstrap';
import AddForm from './components/AddForm/AddForm';
import UserList from './components/UserList/UserList';

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className='col-8'>
            <AddForm />
            <UserList />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App;
