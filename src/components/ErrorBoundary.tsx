import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

const isDev = import.meta.env.DEV;

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    if (isDev) console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReload = (): void => {
    window.location.reload();
  };

  handleGoHome = (): void => {
    window.history.pushState(null, '', '/');
    window.location.reload();
  };

  render(): ReactNode {
    if (!this.state.hasError) return this.props.children;
    if (this.props.fallback) return this.props.fallback;

    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 16 }} dir="rtl">
        <div style={{ maxWidth: 620, width: '100%', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <AlertTriangle size={22} color="#dc2626" />
            <h2 style={{ margin: 0, fontSize: 20 }}>אירעה שגיאה</h2>
          </div>
          <p style={{ marginTop: 0, color: '#4b5563' }}>
            מצטערים, משהו השתבש. נסו לרענן את הדף או לחזור לדף הבית.
          </p>

          {isDev && this.state.error && (
            <div style={{ background: '#f9fafb', borderRadius: 8, padding: 12, marginBottom: 12, overflow: 'auto' }}>
              <p style={{ margin: 0, color: '#b91c1c', fontFamily: 'monospace' }}>{this.state.error.message}</p>
              {this.state.errorInfo && (
                <pre style={{ marginTop: 8, fontSize: 12, whiteSpace: 'pre-wrap' }}>
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" onClick={this.handleReset} style={{ padding: '8px 12px', cursor: 'pointer' }}>
              <RefreshCw size={14} style={{ verticalAlign: 'middle', marginInlineEnd: 6 }} />
              נסה שוב
            </button>
            <button type="button" onClick={this.handleReload} style={{ padding: '8px 12px', cursor: 'pointer' }}>
              <RefreshCw size={14} style={{ verticalAlign: 'middle', marginInlineEnd: 6 }} />
              רענן דף
            </button>
            <button type="button" onClick={this.handleGoHome} style={{ padding: '8px 12px', cursor: 'pointer' }}>
              <Home size={14} style={{ verticalAlign: 'middle', marginInlineEnd: 6 }} />
              דף הבית
            </button>
          </div>
        </div>
      </div>
    );
  }
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps): JSX.Element {
  return (
    <div style={{ border: '1px solid #fecaca', borderRadius: 10, padding: 12 }} dir="rtl">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <AlertTriangle size={18} color="#dc2626" />
        <div>
          <h3 style={{ margin: 0, color: '#b91c1c' }}>שגיאה בטעינת הרכיב</h3>
          <p style={{ margin: '6px 0 0', color: '#4b5563' }}>{error.message}</p>
          <button type="button" onClick={resetErrorBoundary} style={{ marginTop: 10, padding: '6px 10px', cursor: 'pointer' }}>
            <RefreshCw size={14} style={{ verticalAlign: 'middle', marginInlineEnd: 6 }} />
            נסה שוב
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;
