export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="error__message error__opacity">{children}</div>;
}
