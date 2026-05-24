import type { ContactFormData } from '@/types/api';

export async function submitContactForm(data: ContactFormData): Promise<void> {
  let response: Response;

  try {
    response = await fetch('/api/send-inquiry.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch {
    // Network error - likely running locally without PHP
    if (import.meta.env.DEV) {
      throw new Error(
        'Email sending only works on the live server (requires PHP). Your form data is valid and will work once deployed.'
      );
    }
    throw new Error('Network error. Please check your connection and try again.');
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);

    if (response.status === 429) {
      throw new Error('Too many requests. Please wait a moment and try again.');
    }
    if (response.status >= 500) {
      throw new Error('Server error. Please try again later.');
    }

    throw new Error(errorBody?.error || 'Failed to submit form. Please try again.');
  }
}
