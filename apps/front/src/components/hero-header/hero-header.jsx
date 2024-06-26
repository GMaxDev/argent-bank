import style from "./hero-header.module.css";

export default function HeroHeader() {
  console.log(style.bgTree)
  return (
    <div className={`${style.bgTree} relative flex justify-end items-center w-full h-96`}>
      <div className="absolute p-8 m-8 bg-white right-14">
        <p className="text-2xl font-bold text-dark-text">No fees.</p>
        <p className="text-2xl font-bold text-dark-text">No minimum deposit.</p>
        <p className="text-2xl font-bold text-dark-text">
          High interest rates.
        </p>
        <p className="mt-5 text-lg w-80">Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
}
