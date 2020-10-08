import { HttpPostClientSpy } from '../../test/mockHttpClient';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();

    // system under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy);

    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
