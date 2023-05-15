import React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { AppBar,Toolbar, Typography, InputBase,Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                Travel With Me
            </Typography>
            <Box display="flex">
            <Typography variant='h5' className={classes.title}>
                Travel With Me
            </Typography>
            <Autocomplete>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                       <SearchIcon/>
                    </div>
                </div>
            </Autocomplete>
            <InputBase placeholder='Search...' className={{root: classes.inputRoot, input:classes.inputInput}}/>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
