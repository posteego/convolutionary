import React from "react";

import algebrite from 'algebrite';
import { InlineMath } from 'react-katex';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const Pair = ({ g1, g1x1, g1x2, g2, g2x1, g2x2 }) => {

  let latex1 = algebrite.eval(g1);
  latex1 += '\\left[' + g1x1 + ',' + g1x2 + '\\right]';
  let latex2 = algebrite.eval(g2);
  latex2 += '\\left[' + g2x1 + ',' + g2x2 + '\\right]';

  return (
    <Grid container spacing={6} justify="center" alignItems="center" style={{
      width: '60%',
      margin: 30,
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '1px solid black',
    }}>
      <Grid item xs={2} style={{margin: 40}}>
        <InlineMath>
          {latex1}
        </InlineMath>
      </Grid>
      <Grid item xs={2} style={{ margin: 40 }}>
        <InlineMath>
          {latex2}
        </InlineMath>
      </Grid>
    </Grid>
  );
};


const styles = theme => ({
  pair: {
    margin: 10,
  }
});

export default withStyles(styles)(Pair);
