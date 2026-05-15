import { describe, it, expect } from 'vitest';
import  { handler } from '../../pages/api/hello';
import { createMocks } from 'node-mocks-http';

describe('API /hello', () => {
  it('returns Hello World', async () => {
    const { req, res } = createMocks();
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ message: 'Hello World' });
  });
});
