export default process.env.NODE_ENV === "production"
  ? "https://wai-bkend.herokuapp.com/api/v1"
  : // : "http://localhost:4000/api/v1"
    "https://wai-bkend.herokuapp.com/api/v1";