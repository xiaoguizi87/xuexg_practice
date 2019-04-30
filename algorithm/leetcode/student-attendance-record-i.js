var checkRecord = function(s) {
    return (s.match(/A/g) || []).length <= 1 &&
        (s.match(/L{3}/g) || []).length === 0
};
