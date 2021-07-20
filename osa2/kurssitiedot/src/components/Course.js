import React from 'react'
import Header from './Header'
import Part from './Part'

const Course = (props) => (
  <div>
    {props.array.map((course, i) =>
      <React.Fragment key={i}>
        <Header key={course.id} header={course.name} />
        {course.parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))} <br />
        {course.parts.reduce((a, b) => a + b.exercises, 0)} exercises in total.
      </React.Fragment>
    )}
  </div>
)

export default Course