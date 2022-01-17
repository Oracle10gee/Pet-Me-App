import React from "react";
import dog from "../assets/dog.svg";
import cart from "../assets/cart 2.svg";
import person from "../assets/person.svg";
import CatCard from "../assets/cat-card.svg";
import VetDoc from "../assets/vet-doc.svg";
import BgCard from "../assets/bg-card.svg";
import Purina1 from "../assets/purina-1.svg";
import Purina2 from "../assets/purina-2.svg";
import Purina3 from "../assets/purina-3.svg";
import Purina4 from "../assets/purina-4.svg";
import { Link } from "react-router-dom";
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Spinner,
} from "reactstrap";

const LandingPage = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-header">
          <p className="text-center">
            Discover all of our new canine products <img src={dog} alt="dog" />.{" "}
            <Link to="/" className="span-link">
              Shop Now
            </Link>
          </p>
        </div>
      </div>
      <div className="p-3">
        <div className="banner-section">
          <div className="banner-nav">
            <div className="mt-4 m-5">
              <Nav>
                <NavItem>
                  <NavLink className="span-link--nav--home" href="#">
                    Pet Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="span-link--nav mt-3" href="#">
                    Shop
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="span-link--nav mt-3" href="#">
                    Pet Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="span-link--nav mt-3" href="#">
                    Community
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="mt-5 px-3">
              <Nav>
                <NavItem>
                  <NavLink href="#">
                    <img src={cart} alt="cart" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <img src={person} alt="person" />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <div className="banner-header">
            <p>
              {" "}
              Connecting pet owners <br /> with carers across Africa{" "}
            </p>
            <Button className="banner-btn">explore services</Button>
          </div>
        </div>
        <div className="text-section">
          <span className="text-center" style={{ color: "#E99D34" }}>
            <p>YOUR PET'S NEEDS ALL IN ONE PLACE</p>
          </span>
          <p className="text-center text-section-content">
            We are giving you everything required to care for your lovely pets{" "}
            <br /> from the best brands that exist.
          </p>
        </div>
        <div className="card-section">
          <Container>
            <Row>
              <Col md="4">
                <div>
                  <CardImg
                    top
                    width="100%"
                    src={CatCard}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="text-center">
                      <span style={{ color: "#E99D34" }}>PET SHOP</span>
                    </CardTitle>
                    <CardText className="cardtext">
                      We are giving you everything required to care for your
                      lovely pets.
                    </CardText>
                  </CardBody>
                </div>
              </Col>
              <Col md="4">
                <div>
                  <CardImg top width="100%" src={VetDoc} alt="Card image cap" />
                  <CardBody>
                    <CardTitle className="text-center">
                      <span style={{ color: "#E99D34" }}>PET SERVICES</span>
                    </CardTitle>
                    <CardText className="cardtext">
                      We are giving you everything required to care for your
                      lovely pets.
                    </CardText>
                  </CardBody>
                </div>
              </Col>
              <Col md="4">
                <div>
                  <CardImg top width="100%" src={BgCard} alt="Card image cap" />
                  <CardBody>
                    <CardTitle className="text-center">
                      <span style={{ color: "#E99D34" }}>
                        COMMUNITY OF PET OWNERS
                      </span>
                    </CardTitle>
                    <CardText className="cardtext">
                      We are giving you everything required to care for your
                      lovely pets.
                    </CardText>
                  </CardBody>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="fury-companion-section">
          <div className="fury-companion-section--content">
            <h4 className="mb-5">For your fury companion</h4>
            <h5 className="mb-5">
              Get access to the best pet care vendors <br /> Information and
              connect with pet owners
            </h5>
            <p>
              Your furry companion deserves the best care on the market! Join
              our <br /> community and get access to other pet owners and
              enthusiasts. <br />
              We are giving you everything required to care for your lovely pets{" "}
              <br />
              from the best brands of dog food to finding a mate. We believe{" "}
              <br />
              finding these things doesn’t have to be difficult, so we’ve put
              them all <br /> at your fingertips!
            </p>
          </div>
          
        </div>
        <div className="best-seller-section">
            <span className="text-center" style={{ color: "#465d5d" }}>
              <h1>Shop our Bestsellers</h1>
            </span>
            <p className="text-center text-section-content mt-4">
              We are giving you everything required to care for your lovely pets{" "}
              <br /> from the best brands that exist.
            </p>
          </div>
        <div className="product-section mt-5">
        <Container>
            <Row>
              <Col md="3">
                <div>
                  <CardImg
                    top
                    width="100%"
                    src={Purina1}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle className="text-center">
                      <span style={{ color: "#E99D34" }}>PET SHOP</span>
                    </CardTitle>
                    <CardText className="cardtext">
                      We are giving you everything required to care for your
                      lovely pets.
                    </CardText>
                  </CardBody>
                </div>
              </Col>
              <Col md="3">
                <div>
                  <CardImg classname="img-width" top src={Purina2} alt="Card image cap" />
                  <CardBody>
                    <CardTitle className="text-center">
                      <span style={{ color: "#E99D34" }}>PET SERVICES</span>
                    </CardTitle>
                    <CardText className="cardtext">
                      We are giving you everything required to care for your
                      lovely pets.
                    </CardText>
                  </CardBody>
                </div>
              </Col>
              <Col md="3">
                <div>
                  <CardImg top width="100%" src={Purina3} alt="Card image cap" />
                  <CardBody>
                    <CardTitle className="text-center">
                      <span style={{ color: "#E99D34" }}>
                        COMMUNITY OF PET OWNERS
                      </span>
                    </CardTitle>
                    <CardText className="cardtext">
                      We are giving you everything required to care for your
                      lovely pets.
                    </CardText>
                  </CardBody>
                </div>
              </Col>
              <Col md="3">
                <div>
                  <CardImg top width="100%" src={Purina4} alt="Card image cap" />
                  <CardBody>
                    <CardTitle className="text-center">
                      <span style={{ color: "#E99D34" }}>
                        COMMUNITY OF PET OWNERS
                      </span>
                    </CardTitle>
                    <CardText className="cardtext">
                      We are giving you everything required to care for your
                      lovely pets.
                    </CardText>
                  </CardBody>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="get-started-section"></div>
        <div className="footer-section"></div>
      </div>
    </div>
  );
};

export default LandingPage;
