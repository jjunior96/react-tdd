import { HttpPostClient } from 'domain/data/protocols/http/httpPostClient';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', async () => {
    // Test Mock
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;

        return Promise.resolve();
      }
    }

    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();

    // system under test
    const sut = new RemoteAuthentication(url, httpPostClientSpy);

    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
