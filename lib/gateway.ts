import { openai } from '@ai-sdk/openai';

export function gateway(model: string) {
  // Bypass Vercel AI Gateway, use OpenAI directly
  return openai(model);
}