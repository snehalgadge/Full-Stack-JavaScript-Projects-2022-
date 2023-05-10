import { Col } from "react-bootstrap";
import { NavLink, BrowserRouter} from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, view, source}) => {
  return (
    <BrowserRouter>
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-btn'>
          <a href={view} target="_blank">
            <button className='btn'>View</button>
          </a>
          <a href={source} target="_blank">
            <button className='btn'>Source</button>
          </a>
        </div>

        </div>
      </div>
    </Col>
    </BrowserRouter>
  )
}