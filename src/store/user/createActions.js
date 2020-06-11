import * as Types from "./actionTypes";
import axios from "axios";

export const incrementAge = () => {
  return {
    type: Types.SET_INCREMENT_AGE,
  };
};

export const getQuotations = () => {
  return (dispatch) => {
    return axios
      .get(
        "https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json"
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch({
            type: Types.GET_QUOTATIONS,
            payload: res.data,
          });
        }
      });
  };
};
