import { Col } from "react-bootstrap";
import { NavLink, Router} from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, view, source}) => {
  return (
    <Router>
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <NavLink to={view}><button className="vvd">View</button></NavLink>
          <NavLink to={source}><button className="vvd">Source</button></NavLink> 
        </div>
      </div>
    </Col>
    </Router>
  )
}