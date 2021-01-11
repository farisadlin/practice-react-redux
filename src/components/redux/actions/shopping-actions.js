import { ADD_DATA } from "./action-types";
import API from '../../shopping/Data'

export const addData = (data) => {
  return { type: ADD_DATA, payload: API };
};

export default addData;
