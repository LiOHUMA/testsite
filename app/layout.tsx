export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-800">
        <header className="p-4 bg-white shadow">
          <div className="max-w-4xl mx-auto flex justify-between">
            <h1 className="font-bold">フリースクール（仮）</h1>
            <nav className="space-x-4">
              <a href="/">ホーム</a>
              <a href="/about">概要</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">問い合わせ</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="p-4 text-center text-sm text-gray-500">
          © 2026 Free School
        </footer>
      </body>
    </html>
  );
}
