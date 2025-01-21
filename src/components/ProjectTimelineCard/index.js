import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {itemObj} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} = itemObj

  return (
    <div className="card-con">
      <img className="image-edit" src={imageUrl} alt="project" />
      <div className="title-duration-con">
        <h1 className="title">{projectTitle}</h1>

        <div className="cal-dur-con">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-discription">{description}</p>
      <a className="visit-link" href={projectUrl}>
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}

export default ProjectTimelineCard
