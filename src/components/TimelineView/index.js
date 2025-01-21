import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderCorrespondingCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard itemObj={item} />
    }
    return <ProjectTimelineCard itemObj={item} />
  }

  return (
    <div className="main-bg">
      <h1 className="topic">
        MY JOURNEY OF
        <span className="topic-main">CCBP 4.0</span>
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        slideShow
        slideItemDuration={4500}
        slideShowType="reveal"
        theme={{
          secondary: 'white',
          titleColor: '#0967d2',
          titleColorActive: 'black',
        }}
        items={timelineItemsList}
      >
        {timelineItemsList.map(item => renderCorrespondingCard(item))}
      </Chrono>
    </div>
  )
}

export default TimelineView
