import axios from "axios";
// export const baseUrl = "http://127.0.0.1:8000/api";
export const baseUrl =
  "https://pleasant-creativity-5d5c356038.strapiapp.com/api";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
};
const api = axios.create({
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: baseUrl,
  headers: headers,
});
let access_token = null;
if (typeof window !== "undefined") {
  access_token = localStorage.getItem("access_token");
}
if (access_token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
}

export default api;
