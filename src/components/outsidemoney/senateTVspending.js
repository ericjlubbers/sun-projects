import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer
} from 'recharts';
import SenateData from "./data/senateTVSpendingData.json"
import numeral from "numeral"

const data = SenateData.senateTvSpendingTop5

function currencyFormatter(tickItem) {
  return numeral(tickItem).format('$0,0')
}



const CustomTooltip = ({ active, payload, label }) => {

  
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="field">NAME</p>
        <p className="tooltipgroup">{payload[0].payload.group}</p>
        <p className="field">TOTAL SPENT</p>
          {payload.map((item, i) => (
        <p className="tooltipgroup" key={i}>
          {numeral(item.value).format('$0,0')}
        </p>
      ))}
      
      </div>
      );
    }
    
    return null;
  };

export default class SenateChart extends PureComponent {

  render() {
    return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 40, bottom: 20,
        }}
      >
        <Tooltip formatter={(value) => numeral(value).format('$0,0')} wrapperStyle={{
      visibility: 'visible',
    }} position={{ y: 175 }} content={<CustomTooltip />} cursor={{ stroke: '#fcd232', strokeWidth: 3, strokeDasharray: "3 3" }} />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="totalSpend" tickFormatter={currencyFormatter} type="number" allowDataOverflow="true">
        <Label value="Total Spent" offset={-3} position="bottom" />
          </XAxis>
        <YAxis dataKey="group"  type="category" />
        {/* <Tooltip formatter={(value) => numeral(value).format('$0,0')}>
        </Tooltip> */}
        <Bar dataKey="totalSpend" fill="#8884d8">
        <Label value="Total Spent"  />
        {data.map((entry, index) => (
            <Cell fill={data[index].party === "R" ? '#d43f1f' : data[index].party === "D" ? '#144258' : '#896f58' }/>
        ))}
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
