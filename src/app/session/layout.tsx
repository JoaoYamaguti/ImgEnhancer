
import Back from "../ui/components/back";

import "./style.scss";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
        <main className="session">

          <div className="container">

            <Back />

            {children}

          </div>

        </main>
  );
}
