import React from 'react';
import { Container, Col, Row, Navbar, Nav, Link, Item, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterComponent = () => {
  return (<>
    <footer className="footer">
      <Navbar sticky="bottom">
        < Container fluid className="bg-light">
          <Nav.Item>
            <a>&copy; Copyright &copy; 2019 All Rights Reserved </a>
          </Nav.Item>
            {/* <a className="insta" href="https://www.instagram.com/beautyy_by_shay/?hl=en" target="_blank" className="btn btn-social-icon btn-instagram">
               <FontAwesomeIcon icon="instagram" />
              <span className="fa fa-instagram"></span>
            </a> */}
            <Nav.Link>
            <a href="#" className="btn btn-social-icon btn-facebook">
              <span className="fa fa-facebook"></span>
            </a>
            </Nav.Link>
        </ Container>
      </Navbar>
    </footer>

  </>
  )
}
export default FooterComponent;