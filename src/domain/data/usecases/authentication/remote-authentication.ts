import { HttpPostClient } from 'domain/data/protocols/http/httpPostClient';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post({
      url: this.url
    });
  }
}