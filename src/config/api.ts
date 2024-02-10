const API_URL =
  "http://ec2-3-72-126-59.eu-central-1.compute.amazonaws.com:8080";

export default {
  signup: `${API_URL}/api/users/signup`,
  signin: `${API_URL}/api/users/signin`,
  workouts: `${API_URL}/api/workouts`,
};
