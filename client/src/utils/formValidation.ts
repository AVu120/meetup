// Form properties
export const NAME = "name";
export const EMAIL = "email";
export const PASSWORD = "password";
export const CONFIRMED_PASSWORD = "confirmedPassword";

const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isEmailValid = (email: string): boolean => emailRegex.test(email);

type TComparePasswordProps = { password: string; confirmedPassword: string };
type TisConfirmedPasswordSameAsPassword = (
  passwords: TComparePasswordProps
) => boolean;
export const isConfirmedPasswordSameAsPassword: TisConfirmedPasswordSameAsPassword = (
  passwords
) => passwords.password !== passwords.confirmedPassword;
