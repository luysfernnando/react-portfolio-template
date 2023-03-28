import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../assets/info/Info';

export default function Portfolio() {
  return (
    <Box
      style={{
        padding: '3rem 2rem',
        transition: 'all 0.3s ease',
      }}
    >
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index} marginBottom={'3rem'}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              desc={project.desc}
              langs={project.langs}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
