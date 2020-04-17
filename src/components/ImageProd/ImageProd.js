import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Typography from "../Typography/Typography";
import ImageProdLayout from "./ImageProdLayout";

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    height: '100vh'
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ImageProd(props) {
  const { classes } = props;

  return (
    <ImageProdLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" width="147"
          height="80" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
    </ImageProdLayout>
  );
}

ImageProd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageProd);