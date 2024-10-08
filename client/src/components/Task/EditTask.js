import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const EditTask = () => {
  const [entries, setEntries] = useState(1);
  const [search, setSearch] = useState("");
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(0 77 255 / 65%)" }}
      >
        <div className="container mt-5">
          <NavLink
            className="navbar-brand"
            style={{
              fontSize: "25px",
              color: "white",
              letterSpacing: ".05125em",
            }}
            to="/"
          >
            Task.
          </NavLink>

          <div className="mt-2 pt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink
                    to="/"
                    className="text-dark fw-semibold text-decoration-none"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className="breadcrumb-item active fw-semibold text-decoration-underline"
                  aria-current="page"
                >
                  Manage
                </li>
                <li className="breadcrumb-item">
                  <NavLink
                    to="/"
                    className="text-dark fw-semibold text-decoration-none"
                  >
                    TaskSchedule.
                  </NavLink>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </nav>

      <div className="pt-4 extra-special3 text-dark">
        <h1 className="fs-2 mb-4">Manage Task</h1>

        <div
          className="bg-white text-dark p-4 rounded-top rounded-bottom-1 shadow"
          style={{ borderTop: "5px solid #004dffe8" }}
        >
          <h2 className="fs-4 fw-semibold mb-4 border-bottom pb-2">View Task</h2>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="entries" className="fs-6">Show</label>
              <select
                id="entries"
                className="form-select border-1 border-black form-select-sm"
                value={entries}
                onChange={(e) => setEntries(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <span className="fs-6">entries</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="form-control d-none d-md-flex"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-danger btn-sm">Search</button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-bordered tablestyle">
              <thead>
                <tr>
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Staff Name</th>
                  <th className="py-2 px-4">Task Assign</th>
                  <th className="py-2 px-4 text-center" colSpan="3">
                    Schedule Management
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th className="py-2 px-4">Time</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Day</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">Soumadip Santra</td>
                  <td className="py-2 px-4">Frontend</td>
                  <td className="py-2 px-4">12.00</td>
                  <td className="py-2 px-4">16/08/2024</td>
                  <td className="py-2 px-4">Today</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <span className="fs-6">Showing 1 to 1 of 1 entries</span>
            <div className="d-flex gap-1">
              <button className="btn btn-primary btn-sm">&lt;</button>
              <button className="btn btn-primary btn-sm">1</button>
              <button className="btn btn-primary btn-sm">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
