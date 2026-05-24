import { useState, useRef, useEffect } from 'react';
import { categoryOptions } from '@/lib/machinery';

const CATEGORY_OPTIONS = categoryOptions;

interface CategorySelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
}

export function CategorySelector({
  value,
  onChange,
  error,
  label = 'Equipment Category (Optional)',
}: CategorySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = CATEGORY_OPTIONS.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const displayValue = value || '';

  return (
    <div className="space-y-1" ref={containerRef}>
      <label className="block text-sm font-medium text-navy-900">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`
            block w-full bg-white rounded-md border px-4 py-3 text-sm shadow-sm transition-colors text-left flex items-center justify-between
            ${error
              ? 'border-safety-500 focus:border-safety-500 focus:ring-safety-500'
              : 'border-border-light focus:border-brand-500 focus:ring-brand-500'
            }
            ${displayValue ? 'text-navy-900' : 'text-navy-400'}
          `}
        >
          <span className="truncate">
            {displayValue || 'Select a category...'}
          </span>
          <svg
            className={`w-4 h-4 ml-2 shrink-0 text-navy-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1 w-full rounded-md border border-border-light bg-white shadow-lg max-h-60 overflow-hidden flex flex-col">
            <div className="p-2 border-b border-border-light">
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="w-full rounded-md border border-border-light px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
              />
            </div>
            <ul className="overflow-y-auto flex-1 nav-dropdown-scroll">
              {filtered.length === 0 ? (
                <li className="px-4 py-3 text-sm text-navy-400">No categories found</li>
              ) : (
                filtered.map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(category === value ? '' : category);
                        setIsOpen(false);
                        setSearch('');
                      }}
                      className={`
                        w-full text-left px-4 py-2.5 text-sm transition-colors
                        ${category === value
                          ? 'bg-brand-500/10 text-brand-700 font-medium'
                          : 'text-navy-700 hover:bg-navy-50'
                        }
                      `}
                    >
                      {category}
                      {category === value && (
                        <svg className="inline-block w-4 h-4 ml-2 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
            {value && (
              <div className="border-t border-border-light p-2">
                <button
                  type="button"
                  onClick={() => {
                    onChange('');
                    setSearch('');
                  }}
                  className="w-full text-center text-sm text-navy-500 hover:text-safety-600 transition-colors py-1"
                >
                  Clear selection
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-safety-600" role="alert">{error}</p>
      )}
    </div>
  );
}