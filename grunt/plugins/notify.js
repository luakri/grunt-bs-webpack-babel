var props = {
    sass: 'SASS',
    assemble: 'Assemble',
    title: ' Error',
    message: 'An error occured while compiling '
};

module.exports = {

    sass: {
        options: {
            title: props.sass + props.title,
            message: props.message + props.sass
        }
    },

    assemble: {
        options: {
            title: props.assemble + props.title,
            message: props.message + props.assemble
        }
    }
};
