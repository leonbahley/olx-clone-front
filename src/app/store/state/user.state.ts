export interface IUserState {
  token: string | null;
  email: string | null;
  error: { error: { message: string } } | null;
}

export const initialUserState: IUserState = {
  token: null,
  email: null,
  error: null,
};
