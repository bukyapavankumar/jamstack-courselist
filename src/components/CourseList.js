import React from 'react';
import Course from './Course';

export default function CourseList({ courses, refreshCourses }) {
    return (
        <div>
            <h2 className="mt-5 mb-3">Purchased Courses</h2>
            <div className="list-group">
                {courses
                    .filter((course) => !course.purchased)
                    .map((course) => (
                        <Course
                            course={course}
                            key={course.id}
                            refreshCourses={refreshCourses}
                        />
                    ))}
            </div>
            <h2 className="mt-5 mb-3">Recent courses</h2>
            {courses
                .filter((course) => course.purchased)
                .map((course) => (
                    <Course
                        course={course}
                        key={course.id}
                        refreshCourses={refreshCourses}
                    />
                ))}
        </div>
    );
}
