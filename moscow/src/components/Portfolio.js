import { memo, useCallback, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { directionHover } from "../utils";
import SectionContainer from "./SectionContainer";

const Portfolio = () => {
  const { showProjectFunction, activeProjectFunction } = useContext(Context);
  useEffect(() => {
    directionHover();
  }, []);

  const activeShowProject = useCallback((value) => {
    showProjectFunction();
    activeProjectFunction(value);
  }, []);

  return (
    <SectionContainer
      sectionName="work"
      title={{ first: "my ", last: "portfolio" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="my">my </span>{" "}
            <span data-hover="portfolio"> portfolio</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-suitcase" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          <div className="row center-align da-thumbs" id="bl-work-items">
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-1">
              <a href="/projects/applenewsletterclone.html">
                <img
                  className="responsive-img"
                  src="images/projects/apple.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Newsletter Email Clone
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-2">
              <a href="https://muhammadarif2113.github.io/airline-promo-email/">
                <img
                  className="responsive-img"
                  src="images/projects/airline.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                   PROMOTIONAL EMAIL
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-3">
              <a href="https://muhammadarif2113.github.io/transactional-email/">
                <img
                  className="responsive-img"
                  src="images/projects/myprotein.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    TRANSACTION EMAIL
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-4">
              <a href="https://luxaryfreedom.myshopify.com/">
                <img
                  className="responsive-img"
                  src="images/projects/shopify.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">SHOPIFY THEME</span>
                  <span className="" style={{fontStyle: "italic"}}>Password: 123456</span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-5">
              <a href="https://muhammadarif2113.github.io/nbastore-promo-email">
                <img
                  className="responsive-img"
                  src="images/projects/nba.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                  PROMOTIONAL EMAIL
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-6">
              <a href="/projects/business-kit-v1.html">
                <img
                  className="responsive-img"
                  src="images/projects/pietrapromo.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    PROMOTIONAL EMAIL
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-7">
              <a href="/projects/business-kit-news.html">
                <img
                  className="responsive-img"
                  src="images/projects/pietranews.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    NEWSLETTER EMAIL
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-8">
              <a href="/projects/vegancuts-welcome.html">
                <img
                  className="responsive-img"
                  src="images/projects/vegancuts.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    KLAVIYO EMAIL
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-9">
              <a href="/projects/honey-welcome.html">
                <img
                  className="responsive-img"
                  src="images/projects/klaviyohoney.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    KLAVIYO EMAIL
                  </span>
                </div>
              </a>
            </div>
            {/* Project Ends */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-9">
              <a href="/projects/suckerz-welcome.html">
                <img
                  className="responsive-img"
                  src="images/projects/klaviyosuckerz.png"
                  alt="Project"
                />
                <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    KLAVIYO EMAIL
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(Portfolio);
