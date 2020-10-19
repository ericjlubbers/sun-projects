import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
// import numeral from 'numeral';
import messageData from './data/messageData.json'
import { Col, Row, Container } from "react-bootstrap";


//   DEFINE DATA
 
const data = messageData.messages



function MessageTable() {

   // DEFINE COLUMNS
   const columns = [
    {
        name: 'Race',
        selector: 'contest',
        sortable: true,
        width: "20%",
      },
      {
        name: 'Type',
        selector: 'messageType',
        sortable: true,
        width: "12%",
      },
      {
        name: 'Subject',
        selector: 'candName',
        sortable: true,
        width: "20%",
      },
      {
      name: 'Name',
      selector: 'messageName',
      sortable: true,
      width: "20%",
      },
      {
        name: 'Advertiser',
        selector: 'advertiserName',
        sortable: true,
        width: "20%",
      },
        
      ];


  // DEFINE EXPANDABLE COMPONENT
  const ExpandableComponent = ({ data }) =>


  <Container className="mt-1" fluid>

        
        <Row>
            <Col>
                <p className="cardlabel">MESSAGE</p>
                <a href={data.messageUrl} target="_blank" rel="noreferrer" aria-label="message"><img className="tableimg" alt="" src={data.messageUrl} aria-label="" /></a>
            </Col>
            <Col>
                <p className="cardlabel">ABOUT THE MESSAGE</p>
                <div className="cardinfo">
                   <div
                   dangerouslySetInnerHTML={{ __html: data.aboutTheMessage }} /></div>
            </Col>
            <Col>
                <p className="cardlabel">ABOUT THE ADVERTISER</p>
                <div className="cardinfo">
                   <div
                   dangerouslySetInnerHTML={{ __html: data.about }} /></div>
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
    defaultSortField="dateOccurred"
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
 
export default MessageTable; 