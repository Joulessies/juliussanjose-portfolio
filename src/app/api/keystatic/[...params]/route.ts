import { makeRouteHandler } from '@keystatic/next/route-handler';
import keystaticConfig from '@root/keystatic.config';

export const { GET, POST } = makeRouteHandler({
  config: keystaticConfig,
});
