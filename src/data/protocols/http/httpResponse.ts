/* eslint-disable @typescript-eslint/no-explicit-any */
export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unathorized = 401,
  notFound = 4014,
  serverError = 500
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};
