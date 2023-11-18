import Link from "next/link";
import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { falinkedin } from "@fortawesome/free-solid-svg-icons";


const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-briefcase" /> Expertise In
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Email Development</span>
          </h6>
          <p>
            <ul>
              <li>Converting email designs to HTML</li>
              <li>Testing email and ensuring deliverability</li>
              <li>Creating email campaigns and newsletters</li>
            </ul>
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Email Platform Support Setup</span>
          </h6>
          <p>
            <ul>
              <li>Setting up and managing Email Marketing account</li>
              <li>Setting up and running email campaigns</li>
              <li>Building landing pages</li>
              <li>Setting up automated workflows</li>
            </ul>
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>E-commerce Store Setup</span>
          </h6>
          <p>
            <ul>
              <li>Setting up and manage Shopify store</li>
              <li>Designing pages and store layout</li>
              <li>Setting up social media ads</li>
              <li>Managing product description and presentation</li>
            </ul>
          </p>
        </div>
        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-graduation-cap" /> Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Computer Information Systems, B.S.</span>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2018 - 2021
          </span>
          <p>
            <ul>
            <li>
                Multimedia Programming (HTML, CSS, JavaScript)
              </li>
              <li>
              Design & Implementation Web Apps (Photoshop/Figma)
              </li>
              <li>
              Computer Applications (Word, Excel, PowerPoint)
              </li>
              <li>
                E-Commerce
              </li>
              <li>
                Data Structures (Java)
              </li>
              <li>
                Object-Oriented Java
              </li>
              <li>
                Database Systems (SQL)
              </li>
              <li>
                Artificial Intelligence (Python)
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-star" /> Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">html</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">css</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">JavaScript</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Email Frameworks</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Shopify/Liquid</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Hubspot</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Klaviyo</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Mailchimp</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Photoshop</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Canva</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Litmus</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">git</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: "About", last: "ME" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container infos">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-vcard" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <img
                src="images/men.jpg"
                className="responsive-img my-picture"
                alt="My Photo"
              />
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <i className="fa fa-user" /> Personal Info
              </h6>
              <div className="col m12 l12 xl9 p-none">
                <p className="second-font">
                  Greetings! {`I'm`} am a skilled and dedicated Email Developer and CMS Manager. 
                  I have a passion for crafting engaging and visually appealing email campaigns and working with CMS's like Shopify and HubSpot. 
                  My expertise lies in translating designs into fully functional websites and emails while utilizing my 
                  development skills to enhance and customize their features.
                </p>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-1">
                  <li>
                    <span className="font-weight-700">Name: </span>
                    <span>M. Saim Arif</span>
                  </li>
                  <li>
                    <span className="font-weight-700">Freelance: </span>
                    Available
                  </li>
                </ul>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span className="font-weight-700">Address: </span>
                    New York, NY
                  </li>
                  <li>
                    <span className="font-weight-700">Email: </span>
                    saim@saimdev.com
                  </li>
                </ul>
              </div>
            </div>
            <div class="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-arif-2a9784163/" target="_blank"><i className="fa fa-linkedin" fontSize="20px;"/></a>
              <a href="https://github.com/muhammadarif2113?tab=repositories" target="_blank"><i className="fa fa-github" /></a>
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: "none" }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                <div
                  className={`resume-list-item ${
                    activeState.active === 0 ? "is-active" : ""
                  }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-briefcase" /> Expertise
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? "is-active" : ""
                  }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-graduation-cap" /> Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? "is-active" : ""
                  }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-star" /> Skills
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience Starts */}
                    <div
                      className={`resume-card resume-card-0 ${
                        activeState.active == 0
                          ? "front"
                          : activeState.active == 2
                          ? "back"
                          : "back-back"
                      }`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={`resume-card resume-card-1 ${
                        active == 1
                          ? "front"
                          : active == 0
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={`resume-card resume-card-2 ${
                        active == 2
                          ? "front"
                          : active == 1
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
        {/* Fun Facts Starts */}
        <div className="container badges">
          <span style={{fontSize: "25px"}}>"</span>
          Saim's attention to detail and creative approach stood out. 
          His ability to understand our brand and tailor the email content 
          to resonate with our target audience was impressive. The engaging 
          and well-crafted emails captured our message and also generated an increase in 
          open rates and click-through rates.
          <span style={{fontSize: "25px"}}>"</span>  <span style={{color: "#DAA520", fontSize: "16px", fontStyle: "normal"}}>UpWork Review</span>
        </div>
        {/* Fun Facts Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);
