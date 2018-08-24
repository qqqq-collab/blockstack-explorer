import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Router from 'next/router';
import Link from 'next/link';

import StyledNav from '@styled/nav';

const onEnter = (event) => {
  if (event.key === 'Enter') {
    const address = event.target.value;
    Router.push(`/app/address/${address}`);
  }
};

function Nav() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Link href="/app">
                <StyledNav.Title.Link href="/app">
                  <Typography variant="title" color="inherit">
                    Stacks Explorer
                  </Typography>
                </StyledNav.Title.Link>
              </Link>
              <StyledNav.Search.Input placeholder="search" onKeyUp={onEnter} />
              <Link href="/app/global">
                <Button color="inherit" href="/global">
                  Global Stats
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nav;
