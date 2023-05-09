import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "IMBD Clone",
      description: "Design & Development",
      imgUrl: projImg1,
      // view: 'https://jsticactoe.netlify.app/',
      // source: 'https://github.com/snehalgadge/Full-Stack-JavaScript-Projects-2022-/tree/main/04_REACT/movie-api'
    },
    {
      title: "Tic Tac Toe",
      description: "Design & Development",
      imgUrl: projImg2,
      // view: 'https://jsticactoe.netlify.app/',
      // source: 'https://github.com/snehalgadge/Full-Stack-JavaScript-Projects-2022-/tree/main/04_REACT/tic-tac-toe'
    },
    {
      title: "Basic Calculator",
      description: "Design & Development",
      imgUrl: projImg3,
      // view: 'https://scalculate.netlify.app/',
      // source: 'https://github.com/snehalgadge/FSJS-2.0/tree/main/03_JS_assignment/04_Calculator'
    },
    {
      title: "Random Quote Generator ",
      description: "Design & Development",
      imgUrl: projImg4,
      // view: 'https://rquoteg.netlify.app/',
      // source: 'https://github.com/snehalgadge/FSJS-2.0/tree/main/03_JS_assignment/04_Quote_Generator',
    },
    {
      title: "Vs Code Clone",
      description: "Design & Development",
      imgUrl: projImg5,
      // view: 'https://tailwindvscode.netlify.app/',
      // source: 'https://github.com/snehalgadge/FSJS-2.0/tree/main/02_Tailwind%20CSS%20Project/01_Talwind_vscode'
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am happy to describe the project I made with ReactJs, JavaScript, Tailwind. These projects are a great showcase of my skills in web development and my ability to work with a variety of different technologies. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ReactJS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">JavaScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">HTML & Tailwind CSS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                           projects.slice(0, 2).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.slice(2, 4).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.slice(4, 5).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}