import React from 'react'
import { TextField, IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

export default class Subreddit extends React.Component {
  render() {
    return (
      <div className='Subreddit'>
        <TextField
          label='Enter Subreddit'
          variant='filled'
          id={this.props.id}
          error={this.props.validation < 0}
          helperText={this.props.helperText}
          value={this.props.value}
          onChange={this.props.handleChange}
          onBlur={this.props.searchSubreddit}
        />
        <IconButton
          id={this.props.id}
          onClick={this.props.removeSubreddit}
        >
          <DeleteOutlineOutlinedIcon
            id={this.props.id}
          />
        </IconButton>
      </div>
    )
  }
}
