import { useQuery, QueryFunction } from "@tanstack/react-query";

/* TanStack Query es lo que se conocía antes como React Query. */

interface Course {
  description: string;
  duration: string;
  id: number;
  title: string;
}

const fetchCourses: QueryFunction<Course[]> = async () => {
  const response = await fetch("/api/courses.json");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export const useCourses = () => {
  return useQuery<Course[], Error>({
    /* La key nos va a servir como un identificador único que va
    a almacenar todos los datos en cache */
    queryKey: ["courses"],
    /* Esta función nos permitirá resolver la promesa para obtener
    los datos */
    queryFn: fetchCourses,
  });
};
