import axios from "axios";
import { API_URL } from "@env";

const request = axios.create({ baseURL: API_URL });

export default request;