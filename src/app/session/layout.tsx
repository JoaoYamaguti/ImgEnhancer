
import Header from "../ui/components/header";

import "./style.scss";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <main className="session">

        {/* <div className="container"> */}

          {children}

        {/* </div> */}

      </main>
    </>
  );
}
