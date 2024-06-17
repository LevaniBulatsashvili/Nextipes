export function emailIsValid(email: string) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

export function passwordIsValid(password: string) {
  return password.trim().length < 6;
}

export function passwordsMatch(password: string, confirmPassword: string) {
  return password === confirmPassword;
}

export function inputNotEmpty(text: string) {
  return text.trim().length;
}

// TODO
export function imageIsValid(image: string) {
  return image.trim().length;
}
