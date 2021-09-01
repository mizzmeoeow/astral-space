export const isEmpty = (value) => {
  if (!value) return true;
  return false;
};

export const isEmail = (email) => {
  // eslint-disable-next-line
  const re =
    //eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isLength = (password) => {
  if (password.length < 6) return true;
  return false;
};

export const isMatch = (password, cf_password) => {
  if (password === cf_password) return true;
  return false;
};

export const isBirthday = (birthday) => {
  const age =
    ~~(
      (Date.now(new Date().toJSON().slice(0, 10) + " 01:00:00") -
        new Date(birthday.replace(/-/g, "/"))) /
      31557600000
    ) < 17;
  // return true;
  return age(birthday);
};

export const isQuestion = (value) => {
  if (!value) return true;
  return false;
};