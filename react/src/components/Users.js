import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Travellers from "./Travellers";
import HotelOwners from "./HotelOwners";
import Guides from "./Guides";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Users() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section class="w-full text-gray-600 body-font pt-20 bg-gray-100">
      <div class="container px-16 mx-auto">
          <Box sx={{ width: '100%' }}>
            <Box sx={{ px: 3, pt: 2 }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Travellers" {...a11yProps(0)} />
                <Tab label="Hotel Owners" {...a11yProps(1)} />
                <Tab label="Tour Guides" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Travellers />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <HotelOwners />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Guides />
            </TabPanel>
          </Box>
        </div>
    </section>
  );
}
