import { getStored } from "../localStorage";

import { PieChart, Pie,  ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  const storedData=getStored();
  console.log(storedData.length);
 
    return (
      
      <div>helelo</div>
    );
};

export default Statistics;