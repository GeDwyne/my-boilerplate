export default (theme) => ({
    margin: {
        '&:before': {
            background: 'pink'
        },
        '&::-webkit-input-placeholder': {
            color: 'white'
        },
        width: '250px',
        margin: theme.spacing.unit,
        display: 'flex',
        background: '#5262bc',
        padding: '3px 5px',
        borderRadius: '3px',
        transition: 'all 0.5s',
    },
    marginOpen: {
        '&:before': {
            background: 'pink'
        },
        '&::-webkit-input-placeholder': {
            color: 'white'
        },
        width: '300px',
        margin: theme.spacing.unit,
        display: 'flex',
        background: '#5262bc',
        padding: '3px 5px',
        borderRadius: '3px',
        transition: 'all 0.5s',
    },
    searchIcon: {
        color: 'white'
    },
    underline: {
        display: 'none'
    }
})