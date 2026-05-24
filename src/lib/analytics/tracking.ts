const GA_MEASUREMENT_ID = 'G-W3RRP8N3H4';

function getGtag(): (...args: unknown[]) => void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).gtag ?? (() => {});
}

export function trackPageView(path: string, title: string) {
  getGtag()('event', 'page_view', {
    page_path: path,
    page_title: title,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  getGtag()('event', action, {
    event_category: category,
    event_label: label,
    value,
    send_to: GA_MEASUREMENT_ID,
  });
}