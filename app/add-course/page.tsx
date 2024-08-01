"use client"

import React from 'react'
import NewCourse from '../ui/course_part/NewCourse'

const add_course: React.FC = () => {
  return (
    <div>
      add_course
      <NewCourse onCourseData={(course) => console.log(course)} existingCourse={null}/>
      </div>
  )
}

export default add_course