/* eslint-disable react/prop-types */

export default function Profile({ firstName = "Thanos", lastName = "Infini" }) {
  return (
    <div className="flex justify-center bg-dark-bg grow">
      <header className="flex flex-col items-center">
        <h1 className="my-5 text-3xl font-bold text-center text-white ">
          Welcome back <br />
          {firstName} {lastName}!
        </h1>
        <button className="w-24 text-white bg-border-icon p-2.5">Edit name</button>
      </header>
    </div>
  );
}
