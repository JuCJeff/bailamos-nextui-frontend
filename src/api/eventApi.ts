import axios from "axios";

export const getEventsById = async (id: number): Promise<unknown> => {
  try {
    const response = await axios.get(`http://localhost:3001/api/events/${id}`);
    console.log(response);
    return response.data;
  } catch (error: unknown) {
    throw new Error(`Failed to fetch event by id: ${String(error)}`);
  }
};
