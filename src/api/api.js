import * as axios from "axios";

export const getPublicToken = () => {
  return axios({
    url: 'https://tw-2020.itest.atoms.ru/backend/api/oauth/token',
    method: 'post',
    headers: {
      Authorization: 'Basic 0cZaC2xmxqC4e92keDTHkTbcRCaGgPHVjYJQZkxH'
    },
    auth: {
      username: '1',
      password: '6VnbRlpgkYdbevd564PEv8kBW6IR97rvWv8ZDZbh'
    },
    data: {
      grant_type: "client_credentials"
    }
  }).then(response => response.data)
};

export const requestToRegisterUser = (publicToken) => {
  return axios({
    url: 'http://tw-2020.itest.atoms.ru/backend/api/user/register',
    method: 'post',
    headers: {
      Authorization: `Bearer ${publicToken}`
    },
    data: {
      // grant_type: "client_credentials",
      first_name: 'first_name_vls',
      last_name: 'last_name_vls',
      phone: '+7 (333) 879-98-98',
      email: 'vlsrnd@gmail.com',
      rules: 'true',
      gender: 'male',
      agreements: 'false'
    }
  }).then(response => response.data)
};

const test = async() => {
  const publicTokenResponseData = await getPublicToken();
  console.log(publicTokenResponseData)
  const publicToken = publicTokenResponseData.data.access_token;
  const register = await requestToRegisterUser(publicToken)
  console.log(register)
}

window.test = test;