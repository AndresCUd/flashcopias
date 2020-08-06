import axios from "axios";

const getBaseURL = (buildType) =>
  buildType == "production"
    ? `https://us-central1-flashcopias-59cb4.cloudfunctions.net`
    : `https://us-central1-flashcopias-59cb4.cloudfunctions.net`;

let apiClient = axios.create({
  baseURL: getBaseURL(process.env.NODE_ENV),
  withCredentials: false,
  headers: {
    "Content-type": "application/json; charset=utf-8",
    accep: "application/json",
  },
  timeout: 10000,
});

const postRequest = async (route, data) => {
  return apiClient.post(route, data);
};

export default postRequest;
