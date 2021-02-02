import * as axios from "axios";

const getPublicToken = () => {
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

const requestToRegistration = (publicToken, formData) => {
  const {first_name, last_name, phone, email, rules, agreements} = formData;
  const handledPhone = phone.slice(2).match(/[0-9]/g).join('');
  console.log(handledPhone)
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

//response to registration
//{"status":1,"message":{"alert":["Уважаемый участник!\r\n        На указанный 
//e-mail отправлен пароль. Для завершения регистрации в Акции войди в личный 
//кабинет, указав полученный в e-mail пароль. Если e-mail с паролем к тебе 
//так и не приходит, обратись в службу поддержки Акции."]},
//"data":{"user":{"id":4,"phone":"9454544544","email":"vlsrnd@gmail.com"}}}

//password 493621

export const requestToRegisterUser = async(formData) => {
  const publicTokenResponseData = await getPublicToken();
  const publicToken = publicTokenResponseData.data.access_token;
  const register = await requestToRegistration(publicToken, formData);
  return register.data.message
};

const getPrivateToken = (formData) => {
  const {username='vlsrnd@gmail.com', password='493621'} = formData;
  return axios({
    url: "https://tw-2020.itest.atoms.ru/backend/api/oauth/token",
    method: "post",
    headers: {
      "Authorization": "Basic MTo2Vm5iUmxwZ2tZZGJldmQ1NjRQRXY4a0JXNklSOTdydld2OFpEWmJo"
    },
    data: {
      username: username,
      password: password,
      grant_type: "password"
    }
  }).then(response => response.data)
}

export const getUserData = (privateToken) => {
  return axios.get('https://tw-2020.itest.atoms.ru/backend/api/lk/get',
    {
      headers: {
        "Authorization": `Bearer ${privateToken}`,
        "Accept": "application/json"
      }
    })
};

export const requestToAuthorize = async (formData) => {
  const response =  await getPrivateToken(formData);
  console.log(response);
  const message = response.message.alert;
  const {access_token, expires_in, refresh_token} = response.data;
  const dataResponse = await getUserData(access_token);
  console.log(dataResponse);
};



window.test = requestToAuthorize;
window.getUserData = getUserData;

// 1. Ошибка в url для регистрации вместо https стоит http
// 2. Поля на согласие рассылки обязательное
// 3. Поле фамилия не обязательное
// 4. Формат номера 9хх ххх хх хх
// 5.  "phone": ["Номер телефона должен быть вида 9xx xxx xx xx"], на самом деле 9xxxxxxxxx
// 6. поле gender 