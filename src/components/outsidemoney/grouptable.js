import React, { useState, useEffect } from "react"
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import numeral from 'numeral';
import axios from 'axios';


const data = [
  {
    "contractNumber": 277809,
    "uploadedDate": "2/13/2020",
    "startDate": "2/19/2020",
    "endDate": "2/25/2020",
    "contest": "President",
    "advertiserName": "Bernie 2020",
    "buyerName": "Bluewest Media",
    "candName": "Bernie Sanders",
    "station": "KCNC",
    "medium": "tv",
    "citiesAbb": "DEN",
    "cities": "Denver",
    "totalSpent": 29465,
    "numberOfSpots": 68,
    "advertiserAffiliation": "D",
    "advertiserAffiliationLong": "Democrat",
    "id": 2
  },
  {
    "contractNumber": 644774,
    "uploadedDate": "1/6/2020",
    "startDate": "1/7/2020",
    "endDate": "1/13/2020",
    "contest": "U.S. Senate",
    "advertiserName": "Rocky Mountain Values",
    "buyerName": "Targeted Platform Media",
    "candName": "Cory Gardner",
    "station": "KMGH",
    "medium": "tv",
    "citiesAbb": "DEN",
    "cities": "Denver",
    "totalSpent": 13970,
    "numberOfSpots": 19,
    "advertiserAffiliation": "D",
    "advertiserAffiliationLong": "Democrat",
    "id": 3
  },
]

const columns = [
  {
    name: 'Party',
    selector: 'advertiserAffiliation',
    sortable: true,
    width: "5%",
  },
  {
    name: 'Total Spent',
    selector: 'totalSpent',
    sortable: true,
    width: "10%",
    format: row => numeral(row.totalSpent).format('$0,0'),
  },
    {
    name: 'Group',
    selector: 'advertiserName',
    sortable: true,
    width: "20%",
  },
  {
    name: 'Race/Issue',
    selector: 'contest',
    sortable: true,
    width: "10%",  },
  {
    name: 'Subject',
    selector: 'candName',
    sortable: true,
    width: "20%",  },
  {
    name: 'Station',
    selector: 'station',
    sortable: true,
    width: "10%",
  },
  {
    name: 'Start',
    selector: 'startDate',
    sortable: true,
    width: "10%",
  },
  {
    name: 'End',
    selector: 'endDate',
    sortable: true,
    width: "10%",
  },
  
];

const ExpandableComponent = ({ data }) => <p>This is where more data about <strong>{data.advertiserName}</strong> will go.</p>;


const conditionalRowStyles = [
    {
      when: row => row.advertiserAffiliation === 'R',
      style: {
        backgroundColor: '#F158541A',
        '&:hover': {
            backgroundColor: '#F1585433',
          },
        },
      },
    // You can also pass a callback to style for additional customization
    {
      when: row => row.advertiserAffiliation === 'D',
      style: row => ({
        backgroundColor: '#5DA5DA1A',
        '&:hover': {
            backgroundColor: '#5DA5DA33',
          },
      }),
    },
  ];

function TvTable() {


  

    const tableData = {
      columns,
      data,
    };
    

    return (
<div className="tablecontainer">
<DataTableExtensions filterPlaceholder="Search for an advertiser, candidate, race or issue"
        print={false}
        export={false} {...tableData}
>
    <DataTable
        // columns={columns}
        // data={data}
        // dense="true"
        dense="true"
        striped="true"
        // subHeader
        // subHeaderComponent={subHeaderComponentMemo}
        highlightOnHover="true"
        responsive="true"
        noHeader
        persistTableHead="true"
        pagination="true"
        paginationPerPage={15}
        defaultSortField="startDate"
        defaultSortAsc={false}
        paginationRowsPerPageOptions={[15]}
        expandableRows
        expandOnRowClicked="true"
        conditionalRowStyles={conditionalRowStyles}
        expandableRowsComponent={<ExpandableComponent />}
      />
    </DataTableExtensions>
</div>
    );}

export default TvTable;