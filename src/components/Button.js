import Link from "next/link";

export const FillButton = ({ title }) => {
    return (
      <>
        <Link href="#">
          <a className="btn btn-primary">{title}</a>
        </Link>
      </>
    );
  };
  
  
  export const OutlineButton = ({ title }) => {
    return (
      <>
        <Link href="#">
          <a className="btn btn-outline">{title}</a>
        </Link>
      </>
    );
  };
  