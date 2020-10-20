import React, { PureComponent } from 'react';
import {
  BarChart, LineChart, Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer
} from 'recharts';
import TVData from "./data/tvAdsByDate.json"
import numeral from "numeral"

const data = TVData.tvAdsByDate

function currencyFormatter(tickItem) {
  return numeral(tickItem).format('$0,0')
}



const CustomTooltip = ({ active, payload, label }) => {

  
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="field">DATE</p>
        <p className="tooltipgroup">{payload[0].payload.startDate}</p>
        <p className="field">NEW AD STARTS</p>
        <p className="tooltipgroup">{payload[0].payload.countStartDate}</p>

      
      </div>
      );
    }
    
    return null;
  };

export default class AdsByDayChart extends PureComponent {

  render() {
    return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart width={600} height={300} data={data}  label
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="startDate" domain={['06/30/2020', 'dataMax']} />
  <YAxis />
  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#fcd232', strokeWidth: 3, strokeDasharray: "3 3" }}/>
  <Line type="monotone" dataKey="countStartDate" stroke="#60BD68" strokeWidth="2" dot={{ r: 1 }} />
</LineChart>

      </ResponsiveContainer>
    );
  }
}
