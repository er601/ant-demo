import {useState} from "react";
import {Row, Col, Slider, Typography} from 'antd'
import Header from "../header/header";
import Table from '../tables/table'
import './App.css'


function App() {
    const [rows, setRows] = useState(10);


    return (
        <>
            <div className="container">
                <Header/>
                <Row>
                    <Col xs={24} md={{span: 12, offset: 6}}>
                        <Typography.Title level={4}>
                            Колличество покемонов на странице
                        </Typography.Title>
                        <Slider min={1} max={20} defaultValue={rows} onChange={setRows}/>
                        <Table rows={rows}/>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default App;
