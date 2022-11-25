import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-200 py-4 dark:text-stone-900">
      <p className="text-center">
        Chceš o projektu vědět víc, mrkni do{" "}
        <Link
          href="https://github.com/petrkucerak/adventnicesta"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          repa
        </Link>
        .
      </p>
    </footer>
  );
}
