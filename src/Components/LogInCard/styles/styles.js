export default (theme) => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,
        height: 300,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    margin: {
      margin: theme.spacing.unit,
      display: 'flex'
    },
    inputAdornment: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
});