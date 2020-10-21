/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpPostParams } from '@/data/protocols/http/httpPostClient';
import axios from 'axios';

export class AxiosHttpClient {
  async post(params: HttpPostParams): Promise<void> {
    await axios.post(params.url);
  }
}
