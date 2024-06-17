export function emailIsValid(email: string) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

export function passwordIsValid(password: string) {
  return password.length < 6;
}

export function passwordsMatch(password: string, confirmPassword: string) {
  return password === confirmPassword;
}
