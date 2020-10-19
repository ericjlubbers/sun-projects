import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import numeral from 'numeral';
import tvData from './data/tvData.json'
import { Col, Row, Container } from "react-bootstrap";


//   DEFINE DATA
 
const data = tvData.tvAds



function tvTable() {

   // DEFINE COLUMNS
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
        width: "15%",  },
        {
          name: 'Market',
          selector: 'cities',
          sortable: true,
          width: "13%",
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


  // DEFINE EXPANDABLE COMPONENT
  const ExpandableComponent = ({ data }) =>


  <Container className="mt-1" fluid>

        
        <Row>
            <Col>
                <p className="cardlabel">NAME</p>
                <p className="groupname">{data.advertiserName}</p>
            </Col>
            <Col>
                <p className="cardlabel">ABOUT</p>
                <p className="cardinfo">{data.advertiserAbout}</p>
            </Col>
            <Col>
                <p className="cardlabel">FUNDING</p>
                <p className="cardinfo">{data.advertiserFunding} (<a href={data.advertiserFundingLink} target="_blank" rel="noreferrer">SOURCE</a>)</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="cardlabel">AFFILIATION</p>
                <p className="partybox" id={data.advertiserAffiliation}>{data.advertiserAffiliationLong}</p>
            </Col>
            <Col>
            <p className="cardlabel">LEVEL</p>
                <p className="partybox">{data.advertiserLevel}</p>
            </Col>
            <Col>
            <p className="cardlabel">TYPE</p>
                <p className="partybox">{data.advertiserType}</p>
            </Col>
            <Col>
            <p className="cardlabel">TV SPENDING</p>
                <p className="moneybox">
                {numeral(data.advertiserTotal).format('$0,0')}
                </p>
            </Col>  
</Row>
  
</Container>;

  // DEFINE STYLES FOR ROWS

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



  // COMBINE DATA WITH COLUMNS
  
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
    dense="true"
    striped="true"
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
  );
}
 
export default tvTable;