// app/layout.tsx
import './globals.css';

export const metadata = { title: 'Ziidi', description: 'Digital Loans Kenya' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
