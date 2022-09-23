import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="arc-advanced-analytics-page">
        <div className="arc-advanced-analytics-jumbo-container">
          <div className="arc-advanced-analytics-jumbo">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="arc-advanced-analytics-title">
                  <h1 style={{whiteSpace: "nowrap"}}>
                    <span className="arc-advanced-analytics-gradient">
                      <span className="icon-arc-logo"></span> Data
                    </span>{" "}
                    Explained
                  </h1>
                  <div className="arc-advanced-analytics-top-copy" style={{marginBottom: "45px"}}>
                    Discover how our ticketing data fits into the travel
                    ecosystem.
                  </div>
                  <a href="https://www2.arccorp.com/support-training/product-sales-request" className="ctaBtn">
                    Request a Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-right">
                <img
                  className="arc-third-party-img img-fluid"
                  src="https://www2.arccorp.com/globalassets/thirdparty/v6-jumbo.png?1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="arc-advanced-analytics-section-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-ticketing-container">
                  <h2>
                    <span className="icon-arc-logo"></span> data is settled
                    ticketing data
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="arc-thirdpary-step-container ">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="arc-advanced-analytics-top-copy">
                  Follow us through the
                </div>
                <h2
                  className="arc-advanced-analytics-h2 margin-160"
                  style={{ lineHeight: "1.1" }}
                >
                  Air Ticket Journey
                </h2>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="half-container left">
                  <div className="arc-advanced-analytics-card h-100">
                    <div className="arc-advanced-analytics-number">1</div>
                    <div className="arc-advanced-analytics-card-inner">
                      <h2 className="arc-advanced-analytics-h2 m-60">Search</h2>
                      <div className="arc-advanced-analytics-card-body">
                        The buyer is in the shopping process; there’s no
                        transaction yet. This demonstrates <span>interest</span>{" "}
                        in traveling to a specific destination.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gray-half">
                  <div className="half-container right">
                    <img
                      src="https://www2.arccorp.com/globalassets/thirdparty/search-side.png?1"
                      alt=""
                      className="img-fluid"
                      style={{ height: "360px" }}
                    />
                  </div>
                </div>
                <div className="arc-advanced-analytics-card card-half">
                  <div className="arc-advanced-analytics-card-inner">
                    <h3 className="arc-advanced-analytics-h3">
                      Available source of this data.
                    </h3>
                    <div className="arc-advanced-analytics-card-body smaller">
                      ForwardKeys offers search insights based on data processed
                      by Kiwi.com. Kiwi.com works with online travel agencies,
                      metasearch companies and airlines to create a
                      comprehensive dataset.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-step-under">
                  The journey begins...
                </div>
              </div>
            </div>
          </div>

          <div className="arc-thirdpary-step-container margin-top">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="tarmac-half">
                  <div className="half-container left">
                    <div className="arc-advanced-analytics-card h-100">
                      <div className="arc-advanced-analytics-number">2</div>
                      <div className="arc-advanced-analytics-card-inner">
                        <h2 className="arc-advanced-analytics-h2 m-60">Book</h2>
                        <div className="arc-advanced-analytics-card-body">
                          The buyer, working with their travel agent, makes a
                          reservation in the Global Distribution System (GDS)
                          and space is held in a Passenger Name Record (PNR).
                          The unticketed PNR may or may not contain fare
                          information and indicates the buyer’s{" "}
                          <span>intent to purchase</span> but does not confirm
                          it.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="half-container">
                  <div className="arc-advanced-analytics-card gray justify-content-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/thirdparty/purchase-side.png?1"
                      alt=""
                      className="img-fluid"
                      style={{ marginTop: "40px" }}
                    />
                  </div>
                </div>
                <div className="arc-advanced-analytics-card card-half">
                  <div className="arc-advanced-analytics-card-inner">
                    <h3 className="arc-advanced-analytics-h3">
                      Available source of this data.
                    </h3>
                    <div className="arc-advanced-analytics-card-body smaller">
                      The GDSs sell “booked” data through their “MIDT” products.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-step-under">
                  <img src="https://www2.arccorp.com/globalassets/thirdparty/gds-logo.png?1" />{" "}
                  Global Distribution Systems
                </div>
              </div>
            </div>
          </div>

          <div className="arc-thirdpary-step-container margin-top">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="half-container left">
                  <div className="arc-advanced-analytics-card h-100">
                    <div className="arc-advanced-analytics-number">3</div>
                    <div className="arc-advanced-analytics-card-inner">
                      <h2 className="arc-advanced-analytics-h2 m-60">Ticket</h2>
                      <div className="arc-advanced-analytics-card-body">
                        The travel agent generates a ticket for the traveler
                        using the PNR. It contains the traveler’s name,
                        itinerary, ticket price and form of payment. The travel
                        agent then has the next business day to void the ticket
                        or make certain changes. The traveler’s{" "}
                        <span>intent to travel is confirmed</span>, but the
                        ticket is not “locked down” yet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gray-half">
                  <div
                    className="half-container right text-center"
                    style={{ height: "344px" }}
                  >
                    <img
                      src="https://www2.arccorp.com/globalassets/thirdparty/ticket-side.png?1"
                      alt=""
                      className="img-fluid"
                      style={{ minHeight: "354px", marginTop: "-8px" }}
                    />
                  </div>
                </div>
                <div className="arc-advanced-analytics-card card-half">
                  <div className="arc-advanced-analytics-card-inner">
                    <h3 className="arc-advanced-analytics-h3">
                      Available source of this data.
                    </h3>
                    <div className="arc-advanced-analytics-card-body smaller">
                      Available from ARC.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-step-under">
                  <img src="https://www2.arccorp.com/globalassets/thirdparty/arc-logo.png?1" />{" "}
                  Airlines Reporting Corporation
                </div>
              </div>
            </div>
          </div>

          <div className="arc-thirdpary-step-container margin-top">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="tarmac-half">
                  <div className="half-container left">
                    <div className="arc-advanced-analytics-card h-100">
                      <div className="arc-advanced-analytics-number">4</div>
                      <div className="arc-advanced-analytics-card-inner">
                        <h2 className="arc-advanced-analytics-h2 m-60">Settle</h2>
                        <div className="arc-advanced-analytics-card-body">
                          One business day after a ticket is issued, the ticket
                          is “locked down” and cannot be changed or voided. A
                          settled ticket confirms{" "}
                          <span>final intent to travel</span>.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="half-container">
                  <div className="arc-advanced-analytics-card gray justify-content-center">
                    <img
                      src="https://www2.arccorp.com/globalassets/thirdparty/settle-side.png?1"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="arc-advanced-analytics-card card-half">
                  <div className="arc-advanced-analytics-card-inner">
                    <h3 className="arc-advanced-analytics-h3">
                      Available source of this data.
                    </h3>
                    <div className="arc-advanced-analytics-card-body smaller">
                      ARC or IATA.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-step-under d-flex justify-content-center">
                  <div className="mr-lg-5">
                    <img src="https://www2.arccorp.com/globalassets/thirdparty/arc-logo.png?1" />{" "}
                    Airlines Reporting Corporation
                  </div>
                  <div>
                    <img src="https://www2.arccorp.com/globalassets/thirdparty/iata-logo.png?1" />{" "}
                    IATA
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="arc-thirdpary-step-container margin-top">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="half-container left">
                  <div className="arc-advanced-analytics-card h-100">
                    <div className="arc-advanced-analytics-number">5</div>
                    <div className="arc-advanced-analytics-card-inner">
                      <h2 className="arc-advanced-analytics-h2 m-60">Fly</h2>
                      <div className="arc-advanced-analytics-card-body">
                        The traveler has{" "}
                        <span>presented and redeemed the ticket</span>.
                        Generally, only the airlines have full visibility into
                        this status.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gray-half">
                  <div
                    className="half-container right"
                    style={{ padding: "60px 0", marginLeft: "0" }}
                  >
                    <img
                      src="https://www2.arccorp.com/globalassets/thirdparty/fly-side.png?2"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="arc-advanced-analytics-card card-half">
                  <div className="arc-advanced-analytics-card-inner">
                    <h3 className="arc-advanced-analytics-h3">
                      Available source of this data.
                    </h3>
                    <div className="arc-advanced-analytics-card-body smaller">
                      Tickets that involve U.S. travel are reported as a 10%
                      sample to the U.S. Department of Transportation and are
                      available in T-100 or DB1B reports. Data is available 3-4
                      months after travel is complete.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-advanced-analytics-step-under d-flex justify-content-center">
                  <div className="mr-lg-5">
                    <img src="https://www2.arccorp.com/globalassets/thirdparty/dot-logo.png?1" />{" "}
                    Department of Transportation
                  </div>
                  <div>
                    <img src="https://www2.arccorp.com/globalassets/thirdparty/airline-logo.png?1" />{" "}
                    Airlines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container arc-advanced-analytics-border"
          style={{ marginTop: "145px", marginBottom: "60px" }}
        >
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="arc-advanced-analytics-h2 tarmac">ARC's Data Sources</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="arc-advanced-analytics-datasource">
                <div className="arc-advanced-analytics-datasource-title blue">
                  Area Settlement Plan <br />
                  <span>(ASP)</span>
                </div>
                <div className="arc-advanced-analytics-datasource-copy bold">
                  ARC is the clearinghouse for airline tickets sold via travel
                  agencies in the U.S., creating ARC’s primary ticket database,
                  ASP.
                </div>
                <div className="arc-advanced-analytics-datasource-copy">
                  ASP contains all tickets sold via approximately 10,000 U.S.
                  travel agency locations on 230+ airlines, including domestic
                  and international trips in all major GDSs. We currently
                  estimate that 35% of airline tickets sold in the U.S. are
                  captured in ASP.
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="arc-advanced-analytics-datasource">
                <div className="arc-advanced-analytics-datasource-title green">
                  Billing and Settlement Plan <br />
                  <span>(BSP)</span>
                </div>
                <div className="arc-advanced-analytics-datasource-copy bold">
                  Tickets sold via travel agencies outside the U.S. are
                  processed via the IATA settlement system, BSP.
                </div>
                <div className="arc-advanced-analytics-datasource-copy">
                  ARC and IATA have a strategic partnership that enables ARC to
                  include BSP tickets in data products to U.S.-based customers.
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="arc-advanced-analytics-datasource">
                <div className="arc-advanced-analytics-datasource-title orange">
                  Direct data
                  <br />
                </div>
                <div className="arc-advanced-analytics-datasource-copy bold">
                  ARC and IATA jointly operate a global partnership known as
                  Direct Data Solutions, which includes data from approximately
                  90 airlines that have opted to provide their direct ticket
                  sales data.
                </div>
                <div className="arc-advanced-analytics-datasource-copy">
                  Direct tickets are largely tickets sold via the airline’s
                  website but can also include tickets sold through their
                  reservations call centers and airport ticket offices. For the
                  airlines that contribute direct data, the combination of ASP,
                  BSP and direct data creates essentially 100% global ticket
                  coverage.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                class="callout-box teal"
                style={{
                  borderRadius: "20px",
                  marginBottom: "30px",
                  paddingTop: "90px",
                  paddingBottom: "90px",
                }}
              >
                <div class="row">
                  <div class="col-lg-12">
                    <div class="callout-box-title">
                      Interested in using ARC's Data?
                    </div>
                    <a
                      href="https://www2.arccorp.com/support-training/product-sales-request"
                      class="ctaBtn ctaBtn--white  product-cta"
                    >
                      Request a demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
