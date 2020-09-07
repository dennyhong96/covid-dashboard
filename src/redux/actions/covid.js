import axios from "axios";

export const fetch_countries = () => async (dispatch) => {
  try {
    const res = await axios.get("disease.sh/v3/covid-19/countries");
    console.log(res.data);
  } catch (error) {
    console.error(error.response);
  }
};
