import React from "react";
import { render as _render } from "react-dom";

class MyComponent extends React.Component {
  render(this) {
    return <div className="name">Hello World</div>;
  }
}

_render(<MyComponent />, document.getElementById("root"));

export function pop() {

}
