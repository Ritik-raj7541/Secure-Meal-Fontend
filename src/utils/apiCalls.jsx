import axios from "axios";
import React from "react";

export async function fetchApiGet(e) {
  //   console.log(e);
  const response = await axios.get();
  return response;
}


export async function fetchApiPost(url, data) {
  console.log(url, data);
  const response = await axios.post(url, data);
  return response;
}
