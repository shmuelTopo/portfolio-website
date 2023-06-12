import utils from "../app/utils.module.css";

export default function View({
  children,
  id,
}: {
  id: string;
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    
    <section id={id} className={utils.view}>
      <div className={utils.container}>{children}</div>
    </section>
  );
}
