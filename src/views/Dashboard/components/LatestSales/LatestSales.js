import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

    constructor()
        super();
        this.state = {
            chart: [],
            error: null
        }
    }

   buildChart =(data)=>{
        console.log(data);
        this.setState({chart: data})
    }

   componentDidMount()
        console.log('did mount')
        let url = 'https://graph.facebook.com/v8.0/act_349925938964477/insights?date_preset=last_year&fields=impressions%2Cconversions%2Cpurchase_roas%2Cspend&access_token=EAAEDx9SZCrMgBAOZCH4SGDD5YJWc6o2p5SCER6xj6fYLOZAZCbZBZB4XphZBpXsGekTf1eyufgJYUfZBVpeyiTl1ZAuWM8mIyNG2HrSSQNQ9vgxZAG3xiAqZC3weafKM9KZApgNWf3MxfTy6J7wyJZCVu4rnxVOrStx7gt2ftlbbxM0MnlRcuE1KGxvsKLQ159sRvq01V2ZCQxhf3jBAZDZD';
        fetch(url)
        .then(response => response.json())
        .then(this.buildChart)
        .catch(error => {
            this.setState({error});
        })
  
render()
   console.log('render')
return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Performance Over Time"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Chart
              className={classes.chart}
              data={data.thisYear.data}
              labels={data.thisYear.labels}
            />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
;


LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;