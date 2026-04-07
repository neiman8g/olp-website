import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY;
  const keyExists = !!apiKey;
  const keyLength = apiKey ? apiKey.length : 0;
  const keyPrefix = apiKey ? apiKey.substring(0, 12) + '...' : 'MISSING';

  // Try a simple API call
  let apiResult = 'not tested';
  if (apiKey) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-haiku-20240307',
          max_tokens: 10,
          messages: [{ role: 'user', content: 'Say hi' }],
        }),
      });
      const text = await res.text();
      apiResult = `Status: ${res.status} | Body: ${text.substring(0, 200)}`;
    } catch (e: any) {
      apiResult = `Error: ${e.message}`;
    }
  }

  return new Response(JSON.stringify({
    keyExists,
    keyLength,
    keyPrefix,
    apiResult,
  }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
