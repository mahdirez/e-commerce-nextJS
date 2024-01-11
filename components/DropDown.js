import Link from "next/link";

function DropDown({ href, children, ...rest }) {
  return (
    <Link href={href}>
      <div {...rest}>{children}</div>
    </Link>
  );
}

export default DropDown;
