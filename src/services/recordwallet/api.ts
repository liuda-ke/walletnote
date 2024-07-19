import { request } from "@umijs/max";
export async function RecordWalletSave(params: { [key: string]: any }) {
  console.log("Environment variables:", REACT_APP_API_URL);
  return request(`${REACT_APP_API_URL}/api/Record/save`, {
    method: "POST",
    data: params,
  });
}
