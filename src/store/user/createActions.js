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
        // 也可以请求 http://localhost:3000/api/hitokoto 代理转发
        "https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json"
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: Types.GET_QUOTATIONS,
            payload: res.data,
          });
        }
      });
  };
};

export const getSchoolList = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/api/getSchoolList").then((res) => {
      if (res.status === 200) {
        let schoolList = res.data.schoolList;
        dispatch({
          type: Types.GET_SCHOOL_LIST,
          payload: schoolList,
        });
      }
    });
  };
};
