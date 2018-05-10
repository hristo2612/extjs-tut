var updateConsole = function() {
    console.log(Ext.Date.format(new Date(), 'g:i:s A'));
};

var runner = new Ext.util.TaskRunner();
var task = runner.start({
    run: updateConsole,
    interval: 1000
})
