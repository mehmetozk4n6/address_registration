import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./components/SideBar";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Container>
        <Row>
          <Col xs={3} className="border-end border-5 pt-5 side">
            <SideBar />
          </Col>
          <Col xs={9}>
            <Search />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
