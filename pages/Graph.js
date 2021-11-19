import React from 'react';
import styles from '../styles/Home.module.css';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
],
datasets: [{
  data: [300, 50, 100],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};

// SOURCE: https://itnext.io/chartjs-tutorial-with-react-nextjs-with-examples-2f514fdc130

const Graph = () => {
      return (
        <div className={styles.demographics}>
		<div className={styles.demographics_title}>demographics</div>
            <Doughnut
                data={data}
                width={200}
                height={200}
            />
	    </div>
      );
  };

  export default Graph;