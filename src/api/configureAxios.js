import axios from "axios";

export const instanceUM = axios.create({
  // TODO:
  baseURL: "",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  timeout: 30000,
});

export const instanceCore = axios.create({
  // TODO:
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 180000,
});

instanceCore.interceptors.response.use(
  (response) => response,
  (error) => {
    let status = (error.response && error.response.status) || 0;
    let message =
      error.response &&
      (error.response.message ||
        (error.response.data &&
          (error.response.data.message || error.response.data)));

    if (status === 401) {
      message = message || "Kimlik doğrulaması başarısız.";
    } else if (status === 403) {
      message = message || "Bu işlem için yetkiniz yoktur.";
    } else if (status === 500) {
      message = "Sunucuda hata oluştu.";
    } else if (status === 502) {
      message = "Yanlış istek türü.";
    } else if (status === 503) {
      message = "Servisler kapalı. Lütfen daha tekrar deneyiniz.";
    } else if (status === 504) {
      message = "İstek zaman aşımına uğradı.";
    }

    // axios timeout
    else if (error.code === "ECONNABORTED") {
      message = "İstek zaman aşımına uğradı.";
      status = 504;
    }

    message = message || `İşlem başarısız => ${status}`;

    if (process.env.NODE_ENV === "development") {
      console.error("We have an error", { ...error });
      console.error(message, status);
    }

    return Promise.reject({ status, message });
  }
);
