import { lazy } from "react";
import "./App.css";
import { useCourses } from "./hooks/useCourses";

const CourseList = lazy(() => import("./components/CourseList"));

function App() {
  const { data: courses, isLoading, error } = useCourses();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!courses) return <div>No courses found</div>;

  return <CourseList courses={[]} />;
}

export default App;
