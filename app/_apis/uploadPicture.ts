import { http } from "../_lib/http";

export const uploadPicture = async (picture: File) => {
  const formData = new FormData();
  formData.append("file", picture);
  const response = await http.post("/api/v1/night-tour/upload-pic", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
