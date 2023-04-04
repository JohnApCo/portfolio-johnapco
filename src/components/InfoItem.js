export function InfoItem({ icon, itemText, valueText, ...other }) {
  return (
    <div className="mb-2 pl-10 relative ">
      <div className="absolute text-primary text-3xl top-0 bottom-0 left-0 flex items-center">
        {icon}
      </div>
      <span className="opacity-80 capitalize inline-block w-32 font-semibold">
        {itemText}:
      </span>
      <span className="block break-words">{valueText}</span>
    </div>
  );
}
