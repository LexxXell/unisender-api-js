export interface SubscribeParams {
  list_ids: number[];
  email: string;
  name: string;
  tags: number[];
  double_optin: number;
  overwrite: number;
  confirmed: boolean;
}

export const defaultSubscribeParams: SubscribeParams = {
  list_ids: [],
  email: '',
  name: '',
  tags: [],
  double_optin: 0,
  overwrite: 0,
  confirmed: false,
};
