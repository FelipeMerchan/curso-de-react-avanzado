import { memo } from "react";

interface Course {
  description: string;
  duration: string;
  id: number;
  title: string;
}

/* Debemos usar React.memo debido a que estamos usando Suspense de React */
const CourseList: React.FC<{ courses: Course[] }> = memo(({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>{course.duration}</p>
        </li>
      ))}
    </ul>
  );
});

export default CourseList;
