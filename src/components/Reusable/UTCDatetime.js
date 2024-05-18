import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const [utcFullDate, setUtcFullDate] = useState(getUTCDatetime());
  useEffect(() => {
    setInterval(() => {
      setUtcFullDate(() => getUTCDatetime());
    }, 1000)
  }, [])
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '600',
        fontSize: { xs: '15px', sm: '16px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {utcFullDate}
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDatetime;
