import React from "react";
import Main from "./Main";
const filters = [
  // { id: "name", title: "Name", type: "string" },
  {
    id: "price",
    title: "Price",
    type: "choice",
    choices: ["200", "300", "400"],
  },
  {
    id: "subject",
    title: "Subject",
    type: "choice",
    choices: ["CPP", "REACT", "NODE", "JavaScript"],
  },
  {
    id: "publications",
    title: "Publication",
    type: "choice",
    choices: ["ABC", "IJK", "MNO", "XYZ"],
  },
];

const filterComponents = {
  // string: ({ filter, onChange, value }) => (
  //   <input
  //     value={value || ""}
  //     onInput={(e) => onChange(filter.id, e.target.value)}
  //   />
  // ),
  choice: ({ filter, onChange, value }) => (
    <select
      style={{ height: "125px", width:'auto', overflowY: "hidden", border: "0px" }}
      type="radio"
      value={value || ""}
      onInput={(e) => onChange(filter.id, e.target.value)}
      size={1 + filter.choices.length}
    >
      <option style={{color:'black'}} type="radio" value="">
        (none)
      </option>
      {filter.choices.map((c) => (
        <option style={{color:'black',marginTop:'5px'}}  value={c} key={c}>
          {c}
        </option>
      ))}
    </select>
  ),
};

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filters: {} };
    this.onChangeFilter = this.onChangeFilter.bind(this);
  }
  onChangeFilter(filterId, value) {
    const newFilterState = Object.assign({}, this.state.filters, {
      [filterId]: value || undefined,
    });
    this.setState({ filters: newFilterState });
  }
  renderFilter(f) {
    const Component = filterComponents[f.type];
    return (
      <div key={f.id}>
        <h3>{f.title}</h3>
        <Component
          filter={f}
          value={this.state.filters[f.id]}
          onChange={this.onChangeFilter}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div style={{ width: "20%",height:'auto',display:'inline-flex' }}>
          {filters.map((f) => this.renderFilter(f))}
        </div>
        <div style={{ width: "70%" ,display:'inline' }}>
          <Main filters={this.state.filters} />
        </div>
      </div>
    );
  }
}

export default Submit;
