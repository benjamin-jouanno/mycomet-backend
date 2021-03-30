module.exports = checkParams = function(objs, params) {
    console.log(objs);
    console.log(params)
    if (!objs)
        return false
    params.map(e => {
        if (!objs[e])
            return false;
    })
    return true;
};
