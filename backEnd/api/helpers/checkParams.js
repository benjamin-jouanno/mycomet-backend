checkParams = function(objs, params) {
    if (objs == undefined)
        return false
    params.map(e => {
        if (!obj[e])
            return false;
    })
    return true;
};

module.exports = checkParams