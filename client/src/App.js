import { Button, DatePicker, Layout, Row, Col, Divider } from "antd";
import './App.css';
import "antd/dist/antd.css";

function App() {
  const style = { background: '#0092ff', padding: '8px 0' };
  const { Header, Footer, Content } = Layout;
  return (
    <div className="App">
      <Layout style={{height: '100%'}}>
        <Header>Header</Header>
        <Content>
          <Layout>
            <Row gutter={16} justify="center">
              <Col span={3}>
                <DatePicker />
              </Col>
              <Col span={3}>
                <Button type="primary">
                  Primary Button
                </Button>
              </Col>
            </Row>
          </Layout>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
