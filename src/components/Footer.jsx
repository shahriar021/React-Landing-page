// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../styles/FooterStyles";

const Footer = () => {
  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>BangladeshIT</Heading>
            <FooterLink href="/about">Aim</FooterLink>
            <FooterLink href="/about">Vision</FooterLink>
            <FooterLink href="/feedback">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/services">Web development</FooterLink>
            <FooterLink href="/services">App development</FooterLink>
            <FooterLink href="/services">Problem solving</FooterLink>
            <FooterLink href="/services">SQA</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/contact">000965874</FooterLink>
            <FooterLink href="/contact">Aftabnagar,Dhaka</FooterLink>
            <FooterLink href="/contact">anything@gmail.com</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="/contact">
              <i className="fa fa-facebook">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="/contact">
              <i className="fa fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="/contact">
              <i className="fa  fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="/contact">
              <i className="fa fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
