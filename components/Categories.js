import React from 'react'
import MAN from "../images/man.png";
import WOMAN from "../images/woman.png";
import CHILDREN from "../images/children.png";
import OLD from "../images/old.png";
import { Col, Row } from 'react-bootstrap';

const Categories = ({setCategory}) => {

  const hangleCategory=(category)=>{
    setCategory(category);
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }
  return (
    <div>
        <h2 className='text-center font-weight-bold'>CATEGORIES</h2>
        <Row>
            <Col md={"6"}>
              <div onClick={()=>hangleCategory("man")}>
                <img src={MAN} width={"100%"}/>
              </div>
              <div onClick={()=>hangleCategory("children")}>
                <img src={CHILDREN} width={"100%"}/>
              </div>
            </Col>
            <Col md={'6'}>
               <div onClick={()=>hangleCategory("woman")}>
                 <img src={WOMAN} width={"100%"}/>
               </div>
               <div onClick={()=>hangleCategory("old")}>
                 <img src={OLD} width={"100%"}/>
               </div>
            </Col>
        </Row>
    </div>
  )
}

export default Categories