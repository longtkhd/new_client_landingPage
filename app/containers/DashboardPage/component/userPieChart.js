// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// // import { makeStyles, useTheme } from '@material-ui/styles';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
// import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
// import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
// // import { withStyles } from '@material-ui/core/styles'
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   IconButton,
//   Divider,
//   Typography
// } from '@material-ui/core';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import TabletMacIcon from '@material-ui/icons/TabletMac';

// const useStyles = makeStyles(theme => ({
//   root: {
    
//     height: '100%'
//   },
//   chartContainer: {
//     position: 'relative',
//     height: '300px'
//   },
//   stats: {
//     marginTop: theme.spacing(2),
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   device: {
//     textAlign: 'center',
//     padding: theme.spacing(1)
//   },
//   deviceIcon: {
//     color: theme.palette.icon
//   }
// }));

// const UserChart = props => {
//   const { className, ...rest } = props;

//   const classes = useStyles();
//   const theme = useTheme();

//   const data = {
//     datasets: [
//       {
//         data: [63, 15,22],
//         backgroundColor: [
//           theme.palette.success.main,
//           theme.palette.error.main,
//           theme.palette.warning.main
//         ],
//         borderWidth: 3,
//         borderColor: theme.palette.white,
//         hoverBorderColor: theme.palette.white
//       }
//     ],
//     labels: ['Active', 'InActive', 'Other' ]
//   };

//   const options = {
//     legend: {
//       display: true
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//     animation: false,
//     cutoutPercentage: 80,
//     layout: { padding: 0 },
//     tooltips: {
//       enabled: true,
//       mode: 'index',
//       intersect: false,
//       borderWidth: 1,
//       borderColor: theme.palette.divider,
//       backgroundColor: theme.palette.white,
//       titleFontColor: theme.palette.text.primary,
//       bodyFontColor: theme.palette.text.secondary,
//       footerFontColor: theme.palette.text.secondary
//     }
//   };

//   const devices = [
//     {
//       title: 'Active',
//       value: '63',
//       // icon: <SentimentVerySatisfiedIcon style ={{color:'green'}} />,
//       color: theme.palette.success.main
//     },
//     {
//       title: 'InActive',
//       value: '15',
//       // icon: <SentimentVeryDissatisfiedIcon style ={{color:'red'}} />,
//       color: theme.palette.error.main
//     },
//     {
//       title: 'other',
//       value: '22',
//       // icon: <SentimentVeryDissatisfiedIcon style={{ color: 'blue' }} />,
//       color: theme.palette.warning.main
//     },
    
//   ];

//   return (
//     <Card
//       {...rest}
//       className={clsx(classes.root, className)}
//     >
      
//       <Divider />
//       <CardContent>
//         <div className={classes.chartContainer}>
//           <Doughnut
//             data={data}
//             options={options}
//           />
//         </div>
//         <div className={classes.stats}>
//           {devices.map(device => (
//             <div
//               className={classes.device}
//               key={device.title}
//             >
//               <span className={classes.deviceIcon}>{device.icon}</span>
//               <Typography variant="body1">{device.title}</Typography>
//               <Typography
//                 style={{ color: device.color }}
//                 variant="h5"
//               >
//                 {device.value}%
//               </Typography>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// UserChart.propTypes = {
//   className: PropTypes.string
// };

// export default UserChart;