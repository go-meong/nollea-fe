export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-1 flex-col items-center justify-center px-4 relative">{children}</div>;
}
