export default function FontSizeControler({ titleClass, textClass }) {
  return (
    <div className="z-100  bg-white dark:bg-black sticky bottom-0 h-12 flex justify-center items-center">
      <button className="mr-4 text-lg font-bold" title="Zmenšit text">
        A-
      </button>
      <button className="ml-4 text-2xl font-bold" title="Zvětšit text">
        A+
      </button>
    </div>
  );
}
