import { Button, DatePicker, Row, Col, Divider } from "antd";
import './App.css';
import "antd/dist/antd.css";

function App() {
  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <div className="App">
      <Divider orientation="center">Horizontal</Divider>
      <Row gutter={16} justify="center">
        <Col className='gutter-row' span={3}>
          <DatePicker />
        </Col>
        <Col className='gutter-row' span={3}>
          <Button type="primary">
          Primary Button
          </Button>
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
