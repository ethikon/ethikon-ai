import { openai } from '@ai-sdk/openai';
import type { LanguageModelV1 } from 'ai';

export function gateway(model: string): LanguageModelV1 {
  // Use OpenAI directly, bypass Vercel AI Gateway
  return openai(model, {
    apiKey: process.env.OPENAI_API_KEY,
  });
}
