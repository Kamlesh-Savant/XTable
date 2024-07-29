import React, { useEffect, useState } from "react";

function Table() {
  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [tableData, setTableData] = useState([]);

  const sortByDate = ()=>{
    const newData = data.sort((a,b) => new Date(b.date) - new Date(a.date));
    // console.log(newData);
    setTableData(newData);
  }

  const sortByView = ()=>{
    const newData = data.sort((a,b) => b.views - a.views);
    // console.log(newData);
    setTableData(newData);
  }

  useEffect(()=>{
    setTableData(data);
  },[]);

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByView}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
