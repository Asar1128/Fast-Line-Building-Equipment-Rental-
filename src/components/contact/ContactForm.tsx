import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CategorySelector } from '@/components/ui/CategorySelector';
import { submitContactForm } from '@/lib/api/contact';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().refine(
    (val) => !val || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(val),
    { message: 'Please enter a valid phone number' }
  ),
  company: z.string().max(200, 'Company name is too long').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
  category: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  source?: string;
}

export function ContactForm({ source = 'CONTACT PAGE' }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const isRateLimited = Date.now() - lastSubmitTime < 5000;

  const onSubmit = async (data: ContactFormData) => {
    if (isRateLimited) return;

    setStatus('submitting');
    setSubmitError(null);

    try {
      await submitContactForm({ ...data, source });
      setStatus('success');
      setLastSubmitTime(Date.now());
      reset();
    } catch (error) {
      setStatus('error');
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="rounded-md bg-success-50 p-6 text-success-800"
      >
        <h3 className="text-lg font-semibold">Thank you!</h3>
        <p className="mt-2">We have received your message and will get back to you shortly.</p>
        <Button
          variant="secondary"
          className="mt-4"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-navy-900">First Name</label>
          <input
            {...register('name')}
            className="w-full rounded-xl bg-white border border-border-light px-4 py-3 text-navy-900 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors outline-none"
            placeholder="John"
          />
          {errors.name && <p className="text-sm text-safety-500 mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-navy-900">Company Name</label>
          <input
            {...register('company')}
            className="w-full rounded-xl bg-white border border-border-light px-4 py-3 text-navy-900 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors outline-none"
            placeholder="Your Company"
          />
          {errors.company && <p className="text-sm text-safety-500 mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-navy-900">Email Address</label>
        <input
          type="email"
          {...register('email')}
          className="w-full rounded-xl bg-white border border-border-light px-4 py-3 text-navy-900 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors outline-none"
          placeholder="john@company.com"
        />
        {errors.email && <p className="text-sm text-safety-500 mt-1">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-navy-900">Phone Number (Optional)</label>
        <input
          type="tel"
          {...register('phone')}
          className="w-full rounded-xl bg-white border border-border-light px-4 py-3 text-navy-900 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors outline-none"
          placeholder="+971 50 123 4567"
        />
        {errors.phone && <p className="text-sm text-safety-500 mt-1">{errors.phone.message}</p>}
      </div>

      <CategorySelector
        value={watch('category') || ''}
        onChange={(val) => setValue('category', val)}
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-navy-900">Message</label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full rounded-xl bg-white border border-border-light px-4 py-3 text-navy-900 shadow-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors outline-none resize-none"
          placeholder="Tell us what we can help you with..."
        />
        {errors.message && <p className="text-sm text-safety-500 mt-1">{errors.message.message}</p>}
      </div>

      {status === 'error' && submitError && (
        <div role="alert" className="rounded-xl bg-safety-500/10 border border-safety-500/20 p-4 text-safety-400">
          <p>{submitError}</p>
          <button type="button" onClick={() => setStatus('idle')} className="mt-2 text-sm font-medium underline">Try again</button>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting' || isRateLimited}
        className="w-full rounded-xl bg-brand-500 hover:bg-brand-600 text-navy-900 font-bold py-4 px-6 transition-colors shadow-lg shadow-brand-500/20 disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : isRateLimited ? 'Please wait...' : 'Send Message'}
      </button>
    </form>
  );
}
