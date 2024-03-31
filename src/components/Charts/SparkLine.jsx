import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';



const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent id={id} height={height} width={width} LineWidth={100} valueType="Numeric" fill={color} border={{ color: currentColor, width: 2 }} dataSource={data} xName="x" yName="y" type={type} tooltipSettings={{ visible: true, format: '${x}: data ${y}', trackLineSettings: { visible: true} }}>
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

// const SparkLine = ({ id, height, width, color, data, type, currentColor}) => {
//   return (
//     <SparklineComponent id={id} height={height} width={width} LineWidth={1} valueType="Numeric" fill={color} border={{ color: currentColor, width: 2 }} dataSource={data} xName="x" yName="y" type={type}>
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   )
// }

export default SparkLine;

// export default class SparkLineChart extends React.PureComponent
// {
//   render() 
//   {
//     const { id, type, height, width, data, currentColor, color } = this.props;
    
//     return <SparklineComponent
//       id={id}
//       height={height}
//       width={width}
//       lineWidth='1'
//       valueType='Numeric'
//       type={type}
//       fill={color}
//       border={{ color: currentColor, width: 2 }}
//       dataSource={data}
//       xName='x-axis'
//       yName='y-axis'
//       tooltipSettings={{
//         visible: true,
//         format: 'X : ${x-axis}  ,  Y : ${y-axis}',
//         trackLineSettings: { visible: true }
//       }}
//     >
//       <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//   }

// }