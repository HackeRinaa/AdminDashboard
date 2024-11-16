import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";
import { Link } from "react-router-dom";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
}

function ChatBox(props:Props) {
  return (
    <div className="chatBox">
        <div className="boxInfo">
            <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to='/'className="link" style={{color: props.color}}>View All</Link>
        </div>
        <div className="chatInfo">
            <div className="charts">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={props.chartData}>
                        <Tooltip 
                          contentStyle={{background: "transparent", border: "none"}}
                          labelStyle={{display: "none"}}
                          position={{x: 10, y: 50}}
                        />
                        <Line 
                          type="monotone" 
                          dataKey={props.dataKey}
                          stroke={props.color} 
                          strokeWidth={2} 
                          dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="texts">
                <span className="percentage" style={{color: props.percentage > 0 ? 'limegreen' : 'tomato'}}>{props.percentage}%</span>
                <span className="duration">this month</span>
            </div>
        </div>
    </div>
  )
}

export default ChatBox