import * as axios from "axios";

export const getPublicToken = () => {
  return axios({
    url: "https://tw-2020.itest.atoms.ru/backend/api/oauth/token",
    method: "post",
    headers: {
      "Authorization": "Basic 0cZaC2xmxqC4e92keDTHkTbcRCaGgPHVjYJQZkxH"
    },
    auth: {
      username: "1",
      password: "6VnbRlpgkYdbevd564PEv8kBW6IR97rvWv8ZDZbh"
    },
    data: {
      grant_type: "client_credentials"
    }
  }).then(response => response.data)
};


export const requestToRegistration = (publicToken, formData) => {
  const {first_name, last_name, phone, email, rules, agreements} = formData;
  const handledPhone = phone.slice(2).match(/[0-9]/g).join('');
  return axios({
    url: "https://tw-2020.itest.atoms.ru/backend/api/user/register",
    method: "post",
    headers: {
      "Authorization": `Bearer ${publicToken}`,
      "Content-Type": "application/json"
    },
    data: {
      "first_name": first_name,
      "last_name": last_name,
      "phone": handledPhone,
      "email": email,
      "rules": rules,
      "agreements": agreements
    }
  })
};


export const requestToRegisterUser = async(formData) => {
  const publicTokenResponseData = await getPublicToken();
  const publicToken = publicTokenResponseData.data.access_token;
  const register = await requestToRegistration(publicToken, formData);
  return register.data.message
}