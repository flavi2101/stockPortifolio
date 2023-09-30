import AuthProviders from "../Providers";

import Menu from "../components/server/menu";
export default function Main({ children }) {
  return (
    <AuthProviders>
      <section>
        <Menu />
        <main>{children}</main>
      
      </section>
    </AuthProviders>
  );
}
