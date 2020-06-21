import React from "react";
import "./App.css";
import Papa from "papaparse";
import Table from "react-bootstrap/Table";

function App() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.dropbox.com/sh/glwkdemgdf8ksxa/AACKF3jlm6t6Cf2YFkjnuwoUa?dl=0&preview=Wolfe.csvM"
      );

      // const response = await fetch("/Wolfe 01-08-2019.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: false }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setRows(rows);
      rows.forEach((r) => {
        Object.keys(r).forEach((k, i) => {});
      });
    }
    getData();
  }, []); // [] means just do this once, after initial render
  return (
    <div className="app">
      <Table responsive="sm" striped bordered hover>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <React.Fragment>
                {Object.keys(r).map((k, ii) => (
                  <td>{r[k]}</td>
                ))}
              </React.Fragment>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
