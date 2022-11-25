import Link from "next/link";

export default function NavButtons({ posts }) {
  return (
    <div className="mx-6 flex flex-row justify-around mt-6">
      <Link href={""}>
        <Button className={"bg-violet-light"}>včera</Button>
      </Link>
      <Link href={""}>
        <Button className={"bg-violet-dark"}>dnes</Button>
      </Link>
      <Link href={""}>
        <Button className={"bg-violet-light"}>zítra</Button>
      </Link>
    </div>
  );
}

function Button({ children, className }) {
  return (
    <button
      className={`uppercase rounded text-white px-4 py-2 font-semibold hover:scale-110 duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
