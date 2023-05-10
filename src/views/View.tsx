import { forwardRef } from "react";

const View = forwardRef<HTMLElement, any>((props, ref) => {
  return (
    <section ref={ref} className="view" id={props.id}>
      <div className="container">
        {props.children}
      </div>
    </section>
  );
});

export default View;
