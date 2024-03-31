import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <Header category="Chart" title="Inflation Rate in Percentage"></Header>
    <ChartComponent id='line-chart' height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { width: 0 }}} tooltip={{ enable: true }} background={currentMode === 'Dark'? '#33373E': '#fff'}>
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => <SeriesDirective key={item}  {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area