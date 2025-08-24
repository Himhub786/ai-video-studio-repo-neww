import './globals.css';
export const metadata = { title: 'AI Video Studio Pro', description: 'AI powered video creation' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
