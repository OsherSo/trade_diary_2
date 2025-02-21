import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const convertDatesToISOFormat = (data) => {
  if (data.entryDate) {
    data.entryDate = new Date(data.entryDate).toISOString();
  }

  if (data.exitDate) {
    if (data.exitDate.trim() === "") {
      delete data.exitDate;
    } else {
      data.exitDate = new Date(data.exitDate).toISOString();
    }
  }
};

const convertNumericStringsToNumbers = (data) => {
  const numericFields = [
    "entryPrice",
    "exitPrice",
    "quantity",
    "stopLoss",
    "profitTarget",
    "fees",
  ];
  numericFields.forEach((field) => {
    if (data[field]) {
      if (data[field].trim() === "") {
        delete data[field];
      } else {
        data[field] = parseFloat(data[field]);
      }
    }
  });
};

const removeEmptyOptionalFields = (data) => {
  Object.keys(data).forEach((key) => {
    if (data[key] === "" || data[key] === null || data[key] === undefined) {
      delete data[key];
    }
  });
};

const processTradeData = (formData) => {
  const data = Object.fromEntries(formData);
  convertDatesToISOFormat(data);
  convertNumericStringsToNumbers(data);
  removeEmptyOptionalFields(data);
  return data;
};

const addTradeAction = async ({ request, params }) => {
  const formData = await request.formData();
  try {
    const processedData = processTradeData(formData);
    await customFetch.post(`/diaries/${params.id}/trades`, processedData);
    return redirect(`/dashboard/diaries/${params.id}/trades`);
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default addTradeAction;
