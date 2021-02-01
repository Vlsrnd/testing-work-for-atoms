import * as axios from "axios";

export const getPublicToken = () => {
  return axios({
    url: 'http://tw-2020.itest.atoms.ru/backend/api/oauth/token',
    method: 'post',
    auth: {
      Username: 1,
      Password: '6VnbRlpgkYdbevd564PEv8kBW6IR97rvWv8ZDZbh'
    },
    data: {
      "grant_type": "client_credentials"
    }
  })
};

