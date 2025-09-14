// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Sudopdf from '@sudopdf/sdk';

const client = new Sudopdf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pdf', () => {
  // Prism tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.pdf.generate({ data: { foo: 'bar' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('generate: required and optional params', async () => {
    const response = await client.pdf.generate({
      data: { foo: 'bar' },
      sync: true,
      html: 'html',
      metadata: { foo: 'bar' },
      renderOptions: {
        displayHeaderFooter: true,
        footerTemplate: 'footerTemplate',
        format: 'Letter',
        headerTemplate: 'headerTemplate',
        height: 'height',
        landscape: true,
        margin: { bottom: 'bottom', left: 'left', right: 'right', top: 'top' },
        omitBackground: true,
        pageRanges: 'pageRanges',
        path: 'path',
        preferCSSPageSize: true,
        printBackground: true,
        scale: 0.1,
        timeout: 0,
        width: 'width',
      },
      templateId: 'templateId',
      templateType: 'react',
      url: 'https://example.com',
    });
  });
});
