import axios from "axios";
import { ICourse } from "../pages/types";

export const fetchCourses = async (): Promise<ICourse[]> => {
  const response = await axios.get("https://logiclike.com/docs/courses.json");
  return response.data;
};
