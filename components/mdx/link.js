import Link from "next/link";

export default function PostLink({ href, ...props }) {
  return (
    <Link href={href} {...props}>
      {props.children}
    </Link>
  );
}
