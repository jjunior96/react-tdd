/* eslint-disable @typescript-eslint/ban-types */
import {
  HttpPostClient,
  HttpPostParams
} from '@/data/protocols/http/httpPostClient';
import {
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/httpResponse';

// Test Mock
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  };

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;

    return Promise.resolve(this.response);
  }
}
