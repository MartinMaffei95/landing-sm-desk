'use client';

import Link from 'next/link';

export default function GlobalError() {
  return (
    <div className=" bg-sky-950 overflow-hidden flex flex-col justify-center items-center gap-16">
      <p className="bg-gray-300 font-bold tracking-wide text-sky-950 px-4 flex ">
        Error 404
      </p>
      <div className="text-gray-300 font-semibold tracking-wide flex flex-col gap-4">
        <p>No pudimos encontrar la pagina que buscas</p>
        <Link
          href={'/'}
          className="bg-gray-300 font-bold tracking-wide text-sky-950 p-2 flex items-center justify-center hover:bg-sky-950 hover:text-gray-300 hover:outline-gray-300 hover:outline"
        >
          Volver
        </Link>
      </div>
    </div>
  );
}
