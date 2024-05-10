import React from "react";
import {
  Box,
  Grid,
  Card,
  Chip,
  Avatar,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomIcon from "./CustomIcon";

// useStyles hook for component styles
const useStyles = makeStyles((theme) => ({
  card: {
    width: '18.75rem', 
    height: '37.5rem', 
    position: "relative",
    overflow: "hidden",
    borderRadius: "0.75rem",
    margin: '1.25rem', 
    padding: '0.625rem', 
    fontFamily: 'Lexend',
  },
  content: {
    maxHeight: "calc(100% - 5rem)", 
    overflow: "hidden",
    textAlign: 'left',
    fontFamily: 'Lexend',
  },
  textcontent: { 
    height: "35vh", 
    overflow: "hidden" 
  },
  buttonContainer: {
    position: "absolute",
    bottom: "0.5rem", 
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    justifyContent: "space-between",
    width: "100%",
    fontFamily: 'Lexend',
  },
  button: {
    zIndex: 2,
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
    position: "relative",
    height: '12.5rem', 
    fontFamily: 'Lexend',
  },
  secondaryButton: {
    display: "grid",
    fontFamily: 'Lexend',
  },
  minExp: {
    textAlign: "left",
    marginLeft: "0.3125rem", 
    fontFamily: 'Lexend',
  },
  actbutton: {
    marginTop: "0.3125rem", 
    marginBottom: "0.3125rem",
    marginLeft: "0.625rem", 
    marginRight: "0.625rem",
    borderRadius: "0.625rem",
    fontFamily: 'Lexend',
    textTransform: 'none',
  },
  chip: {
    left: '0.625rem', 
    position: 'absolute',
    top: '0.625rem',
    fontFamily: 'Lexend',
  },
  typography: {
    fontFamily: 'Lexend',
  },
}));

export default function JobCard(props) {
  const data = props.obj;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Chip
        label="Posted 6 days ago"
        variant="outlined"
        icon={<CustomIcon src='https://img.icons8.com/emoji/48/hourglass-done.png' alt="Custom Icon" />}
        className={classes.chip}
        size="small"
      />
      <CardHeader
        avatar={<Avatar src={data.logoUrl} variant="square" />}
        title={
          <>
            <Typography className={classes.typography}>{data.companyName}</Typography>
            <Typography className={classes.typography}>{data.jobRole}</Typography>
            <Typography className={classes.typography}>{data.location}</Typography>
          </>
        }
        style={{ textAlign: "left", marginTop: '1.25rem' }}
      />
      <CardContent className={classes.content}>
        <div style={{display: "flex", alignItems: "flex-start"}}>
          <Typography gutterBottom className={classes.typography}>
            Estimated Salary: ₹{data.minJdSalary}-{data.maxJdSalary} LPA
          </Typography>
          <CustomIcon src='https://img.icons8.com/ios-filled/50/40C057/checked-checkbox.png' alt="Custom Icon"/>
        </div>
        <div className={classes.textcontent}>
          <label>About Company:</label>
          <Typography className={classes.typography}>
            {data.jobDetailsFromCompany.substring(0, 300)}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <div className={classes.buttonContainer}>
          <div className={classes.button}>
            <Link style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}>
              View Job
            </Link>
          </div>
          <div style={{textAlign: 'left', marginLeft: '1.25rem', marginTop: '0.3125rem'}}>
            <label>Minimum Experience:</label>
            <Typography className={classes.typography}>{data.minExp} years</Typography>
          </div>
          <div className={classes.secondaryButton}>
            <Button variant="contained" style={{backgroundColor: '#55EFC4'}} className={classes.actbutton}>
              <CustomIcon src='https://img.icons8.com/color/48/flash-on.png' alt="Custom Icon" />
              Easy Apply
            </Button>
            <Button variant="contained" style={{backgroundColor: '#4943DA', color: 'white'}} className={classes.actbutton}>
              <Avatar alt="Remy Sharp" style={{height: '1.875rem', width: '1.875rem', margin: '0.3125rem'}} src="https://www.facepixelizer.com/facepixelizerHelpImages/LanBlurred.jpg" />
              <Avatar alt="Remy Sharp" style={{height: '1.875rem', width: '1.875rem', margin: '0.3125rem'}} src="https://i.pinimg.com/1200x/55/af/aa/55afaa927e1e6aff08cada73132b80d7.jpg" />
              Unlock Referral asks
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}