import React from "react";
import "./App.css";
import Papa from "papaparse";
import Table from "react-bootstrap/Table";

function Trendline() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://dl.dropboxusercontent.com/s/mbqm963k9vzeqgi/trendline.csv"
      );

      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: false }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setRows(rows);
      console.log("rows", rows);
      rows.forEach((r) => {
        Object.keys(r).forEach((k, i) => {});
      });
      // const time = new Date();
      // console.log(time);
      // setTime(time);
    }
    getData();
    const interval = setInterval(() => getData(), 300000);
    return () => {
      clearInterval(interval);
    };
  }, []); // [] means just do this once, after initial render
  return (
    <div className="app">
      {/* <Navbar bg="light">
        <Navbar.Brand href="#home">Last updated {time}</Navbar.Brand>
      </Navbar> */}
      <br />
      {/* <div> Last updated {time}</div> */}
      <Table striped bordered hover>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <React.Fragment>
                {Object.keys(r).map((k, ii) => (
                  <td key={k}>{r[k]}</td>
                ))}
              </React.Fragment>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Trendline;
