import { useState, useRef } from 'react';

import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { CategorySelector } from '@/components/ui/CategorySelector';
import { submitContactForm } from '@/lib/api/contact';
import { contactSchema } from '@/types/api';

interface HeroEnquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  category: string;
}

interface HeroEnquiryFormProps {
  source?: string;
  showCategory?: boolean;
}

export function HeroEnquiryForm({ source = 'LANDING PAGE', showCategory = true }: HeroEnquiryFormProps) {
  const [formData, setFormData] = useState<HeroEnquiryFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    category: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const lastSubmitTime = useRef<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors({});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) {
      setError('Please wait a moment before submitting again.');
      return;
    }

    const formValues = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone || undefined,
      message: formData.message || undefined,
      source,
      category: formData.category || undefined,
    };

    const result = contactSchema.safeParse(formValues);
    if (!result.success) {
      const errors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0];
        if (typeof path === 'string') {
          errors[path] = issue.message;
        }
      }
      setFieldErrors(errors);
      return;
    }

    setStatus('submitting');
    setError(null);
    setFieldErrors({});
    lastSubmitTime.current = now;

    try {
      await submitContactForm(result.data);
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', category: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-white/70 p-8 shadow-xl backdrop-blur-md border border-white/20">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <svg className="h-6 w-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-navy-900">Thank You!</h3>
          <p className="mt-2 text-navy-600">We have received your enquiry and will get back to you shortly.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white/70 p-8 shadow-xl backdrop-blur-md border border-white/20 sm:p-10"
      noValidate
    >
      <h3 className="text-xl font-bold text-navy-900">Request a Quote</h3>
      <p className="mt-2 text-base text-navy-600">Fill in your details and we will contact you.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          autoComplete="given-name"
          error={fieldErrors.name}
        />
        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          autoComplete="family-name"
        />
      </div>

      <div className="mt-6">
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          error={fieldErrors.email}
        />
      </div>

      <div className="mt-6">
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          error={fieldErrors.phone}
        />
      </div>

      {showCategory && (
        <div className="mt-6">
          <CategorySelector
            value={formData.category}
            onChange={(val) => {
              setFormData((prev) => ({ ...prev, category: val }));
              if (fieldErrors.category) setFieldErrors({});
            }}
          />
        </div>
      )}

      <div className="mt-6">
        <Textarea
          label="Message (Optional)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us about your project or equipment needs..."
          error={fieldErrors.message}
        />
      </div>

      {status === 'error' && error && (
        <div className="mt-6 rounded-md bg-safety-50 p-4 text-sm text-safety-700" role="alert">
          {error}
        </div>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'submitting'}
          isLoading={status === 'submitting'}
          className="w-full"
        >
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}
