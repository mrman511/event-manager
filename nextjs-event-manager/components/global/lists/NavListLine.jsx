import Link from "next/link";

export default function NavListLine({ styles, data, path }){

  return (
    <Link href={ `${path}/${data.id}` }>
      <li>{ data.title }</li>
    </Link>
  );
}