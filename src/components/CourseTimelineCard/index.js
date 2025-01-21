import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {itemObj} = props
  const {courseTitle, description, duration, tagsList} = itemObj

  return (
    <div className="card-con">
      <div className="title-duration-con">
        <h1 className="title">{courseTitle}</h1>
        <div className="cal-dur-con">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-discription">{description}</p>
      <div className="tags-con">
        {tagsList.map(each => (
          <p className="tag" key={each.id}>
            {each.name}{' '}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
