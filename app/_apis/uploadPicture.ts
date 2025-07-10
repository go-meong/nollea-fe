import { ApiResponse, http } from "../_lib/http";

type UploadPictureResponse = {
  id: string;
  originalName: string;
  contentType: string;
  size: number;
  base64: string;
};

export const uploadPicture = async (picture: File) => {
  const formData = new FormData();
  formData.append("file", picture);
  const response = await http.post<ApiResponse<UploadPictureResponse>>("/api/v1/night-tour/upload-pic", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
