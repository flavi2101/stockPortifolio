import AuthProviders from "../Providers";
import Menu from "../components/menu";
export default function Main({ children }) {
  return (
    <AuthProviders>
      <section className="h-full">
        <Menu />
        <main>{children}</main>
      </section>
    </AuthProviders>
  );
}
