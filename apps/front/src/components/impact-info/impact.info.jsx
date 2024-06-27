/* eslint-disable react/prop-types */
export default function ImpactInfo({title, content, img}) {
  return (
    <div className="flex flex-col items-center justify-center w-4/12 p-10">
      <img className="p-4 border-8 rounded-full w-36 border-border-icon" src={img} alt="icon" />
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="my-4 text-center" >{content}</p>
    </div>
  );
}
