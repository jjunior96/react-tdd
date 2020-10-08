import { HttpPostClientSpy } from '../../test/mockHttpClient';
import { RemoteAuthentication } from './remote-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();

  // system under test
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy
  };
};

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    const url = 'other_url';
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
