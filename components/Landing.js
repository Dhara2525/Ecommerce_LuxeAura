import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BG from "../images/bg.png"
import BG1 from "../images/bg1.png"
import BG2 from "../images/bg2.png"

const Landing = () => {
  return (
    <div className='mb-4'>
        <Row>
            <Col sm={12} md={6}>
            {/* <div>
                <img src={BG1} width={"100%"}/>
              </div> */}
              <div>
                <div className='p-3 mt-5' style={{marginBottom:"5rem"}}> 
                    <h1 className='display-1 font-weight-bolder text-uppercase'>Elevate Elegance <br/> Every Day</h1>
                </div>
                <img  src={BG2} width={"100%"}/>
              </div>
            </Col>
            <Col sm={12} md={6}>
            <div>
                <img src={BG} width={"100%"}/>
              </div>
            </Col>
        </Row>
    </div>
  )
}

export default Landing