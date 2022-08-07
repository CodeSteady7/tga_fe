import React, { useEffect, useState } from 'react'
import Instrument from 'services/Instrument';

export default function List({topicList, showInstrument}) {

  return (
    <div className="card-datatable">
      <table className="dt-multilingual table">
        <thead>
          <tr>
            <th>No</th>
            <th>Topik </th>
            <th>Sub Topik</th>
            <th>Periode</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {typeof topicList.data != "undefined" && topicList.data.length > 0
            ? topicList.data.map((topic, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{topic.name}</td>
                  <td>
                    <ul>
                    {topic.sub_topics.length > 0 
                    ? topic.sub_topics.map((sub_topic, index) => {
                      return (
                      <li key={index}>
                        <a onClick={ e => showInstrument(sub_topic.id) } > {sub_topic.name}</a>
                      </li>
                      )
                    }) : '-- Belum dimasukkan --'}
                    </ul>
                  </td>
                  <td>{topic.period.name}</td>
                  <td>
                    <div className="dropdown">
                      <a
                        type="button"
                        className="btn btn-sm dropdown-toggle hide-arrow py-0"
                        data-bs-toggle="dropdown"
                        id="dropdownMenuLink"
                        aria-expanded="false"
                      >
                        <i data-feather="more-vertical">
                          Click
                        </i>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          <i
                            data-feather="edit-2"
                            className="me-50"
                          ></i>
                          <span>Edit</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <i
                            data-feather="trash"
                            className="me-50"
                          ></i>
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              )
              
            })
            : 
              <tr >
                <td align='center' colSpan={5}> -- Data belum tersedia --</td>
              </tr>
            }
        </tbody>
      </table>
      <nav
          aria-label="Page navigation example"
          className="pt-1"
      >
          <ul className="pagination justify-content-center">
              {typeof topicList.links != "undefined"
                  ? topicList.links.map((prop, index) => {
                          return (
                              <li
                                  key={index}
                                  className={`page-item ${prop.active ? 'active' : ''}`}
                                  tabIndex="-1"
                              >
                                  <a className="page-link">
                                      {prop.label}
                                  </a>
                              </li>
                          )
                      })
                  : ""}
          </ul>
      </nav>
    </div>
  )
}
