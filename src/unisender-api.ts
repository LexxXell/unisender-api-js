import axios from 'axios';
import { ApiResponse, Langs, Methods } from './@types';
import { SubscribeParams, defaultSubscribeParams } from './@types/subscribe-params.interface';

export class UnisenderAPI {
  private api_key: string;
  private lang: Langs;
  private timeout: number;
  private api_url: string;

  constructor(api_key: string, lang: Langs = Langs.en, timeout: number = 60) {
    this.api_key = api_key;
    this.lang = lang;
    this.timeout = timeout;
    this.api_url = 'https://api.unisender.com/%lang/api/%method?format=json';
  }

  private async call(method: Methods, params: { [key: string]: any } = {}): Promise<ApiResponse> {
    if (!Object.values(Methods).includes(method)) {
      throw new Error('Unsupported Method');
    }

    params.api_key = this.api_key;

    const url = `${this.api_url.replace('%lang', this.lang).replace('%method', method)}${
      params ? `&${new URLSearchParams(params).toString()}` : ''
    }`;

    let result: ApiResponse = {};

    try {
      const response = await axios.post(url, {}, { timeout: this.timeout * 1000 });
      result = response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          result = { error: `Timeout waiting expired [${this.timeout} sec]` };
        } else {
          result = { error: `Max retries exceeded [${axios.defaults.maxRedirects}]` };
        }
      } else {
        result = { error: 'Error on decode api response' };
      }
    }

    return result;
  }

  async getLists(): Promise<ApiResponse> {
    return this.call(Methods.getLists);
  }

  async subscribe(subscribeParams: Partial<SubscribeParams>): Promise<ApiResponse> {
    let { list_ids, email, name, tags, double_optin, overwrite, confirmed } = {
      ...defaultSubscribeParams,
      ...subscribeParams,
    };
    const list_ids_str = list_ids.join(',');
    const tags_str = tags.slice(0, 10).join(',');
    double_optin = confirmed ? 3 : double_optin;
    double_optin = [0, 3, 4].includes(double_optin) ? double_optin : 0;
    overwrite = [0, 1, 2].includes(overwrite) ? overwrite : 0;

    const params = {
      list_ids: list_ids_str,
      'fields[email]': email,
      'fields[Name]': name,
      tags: tags_str,
      double_optin,
      overwrite,
    };

    return this.call(Methods.subscribe, params);
  }
}
