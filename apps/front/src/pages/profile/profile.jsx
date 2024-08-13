/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import Transaction from "../../components/transaction/transaction";

export default function Profile() {
  const user = useSelector((state) => state.user)

  if (!user) {
    return <div>Loading...</div>
  }
  
  return (
    <div className="flex flex-col items-center bg-dark-bg grow">
      <header className="flex flex-col items-center mb-8">
        <h1 className="my-5 font-bold text-center text-white text-3xlgit a ">
          Welcome back <br />
          {user.firstName} {user.lastName}!
        </h1>
        <button className="w-24 text-white bg-border-icon p-2.5">Edit name</button>
      </header>
      <Transaction title="Titre" amount="292929" description="C'est pour qui"/>
      <Transaction title="Titre" amount="292929" description="C'est pour qui"/>
      <Transaction title="Titre" amount="292929" description="C'est pour qui"/>
    </div>
  );
}
