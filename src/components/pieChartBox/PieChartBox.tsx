import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
    { name: 'Mobile', value: 400, color: "#0088FE" },
    { name: 'Desktop', value: 300, color: "#00C49F" },
    { name: 'Laptop', value: 300, color: "#FFBB28" },
    { name: 'Tablet', value: 200, color: "#FF8042" },
];




function PieChartBox() {
  return (
    <div className="pieChartBox">
        <h1>Leads by Source</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}> 
                <PieChart>
                    <Tooltip 
                        contentStyle={{background: "#2a3447", borderRadius: "0.5rem"}}
                        labelStyle={{display: "none"}}
                        cursor={{fill: "none"}}
                    />
                    <Pie
                        data={data}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey="value"
                    >
                    {data.map((index) => (
                        <Cell 
                            key={index.name}
                            fill={index.color} 
                        />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="pieInfo">
            {data.map((info) => ( 
                <div className="entry">
                    <div className="title">
                        <div className="color" style={{backgroundColor: info.color}}></div>
                        <span>{info.name}</span>
                    </div>
                    <div className="amount">{info.value}</div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default PieChartBox