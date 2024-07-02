/* eslint-disable react/prop-types */

export default function Transaction({ title, amount, description }) {
  return (
    <div className="flex items-center justify-between w-4/5 p-6 mb-8 bg-white">
      <div className="text-dark-text">
        <h3>{title}</h3>
        <p className="text-4xl font-bold">${amount}</p>
        <p>{description}</p>
      </div>
      <div>
        <button className="text-white text-lg bg-border-icon p-2.5">View transactions</button>
      </div>
    </div>
  );
}
