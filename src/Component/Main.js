import React from "react";
import "./Main.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Main = () => {
  return (
    <>
      <section>
        <div className="main-container">
          <h1 className="main-title">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            labore eveniet est, tempora quam culpa porro reiciendis quo veniam,
            deleniti eos earum aperiam aliquam maiores! Laudantium, accusamus,
            nesciunt reiciendis ab nobis eius alias nulla, est placeat
            asperiores voluptates ipsum? Illo.
          </p>
          <button className="button">Read more</button>
        </div>
        <h2>clases</h2>
        <h6>FaCRmrfCwybSvyrQ 1E8fRP3eu1W3B1S6X5x0SKBpNrE7nEZQxMbLSt BPQ52TdoedjCepNU30TCex 2olTRr1mJO3EKX 56 3hetHrTmSYWfRtAg2pBNH FaCRmrfCwybSvyrQ 1E8fRP3eu1W3B1S6X5x0SKBpNrE7nEZQxMbLSt BPQ52TdoedjCepNU30TCex 2olTRr1mJO3EKX 56 3hetHrTmSYWfRtAg2pBNHJP9ldZUB9b0KJP9ldZUB9b0K7uOiKZWdHkod</h6>
        <div className="clases"> 
          
          <div className="card-line1">
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="card-line1">
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="card-line1">
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="data:image/png;base64,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"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://media.glassdoor.com/sqll/3230829/metapercept-technology-services-squarelogo-1629966016777.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
