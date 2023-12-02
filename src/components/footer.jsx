import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='footer'>
      <Row className="justify-content-between">
        <Col sm={4} className="text-sm-left text-center"> {}
          <div className='credits'>
            Made by <a href="https://github.com/meritonaliu" target="_blank" rel="noopener noreferrer">Meriton Aliu</a>
          </div>
        </Col>
        <Col sm={4} className="text-center d-flex justify-content-center align-items-center"> {}
          <div className='links'>
            <a href="https://github.com/meritonaliu" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </Col>
        <Col sm={4} className="text-sm-right text-center"> {}
          <div className='year'>
            2023 Ⓒ
          </div>
        </Col>
      </Row>
    </footer>
  );
}
