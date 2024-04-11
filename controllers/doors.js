var doors = require('../models/doors');
// List of all doors
exports.doors_list = function(req, res) {
 res.send('NOT IMPLEMENTED: doors list');
};
// for a specific doors.
exports.doors_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: doors detail: ' + req.params.id);
};
// Handle doors create on POST.
exports.doors_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: doors create POST');
};
// Handle doors delete from on DELETE.
exports.doors_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: doors delete DELETE ' + req.params.id);
};
// Handle doors update form on PUT.
exports.doors_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: doors update PUT' + req.params.id);
};

exports.doors_list = async function(req, res) {
    try{
    thedoors = await doors.find();
    res.send(thedoors);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

exports.doors_view_all_Page = async function(req, res) {
    try{
    thedoors = await doors.find();
    res.render('doors', { title: 'doors Search Results', results: thedoors });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };


exports.doors_create_post = async function(req, res) {
    console.log(req.body)
    let document = new doors();
    document.doors_type = req.body.doors_type;
    document.doors_model = req.body.doors_model;
    document.doors_price = req.body.doors_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }

exports.doors_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await doors.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }
   
   exports.doors_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await doors.findById(req.params.id)
        // Do updates of properties
        if (req.body.doors_type)
            toUpdate.doors_type = req.body.doors_type;
        if (req.body.doors_model) toUpdate.doors_model = req.body.doors_model;
        if (req.body.doors_price) toUpdate.doors_price = req.body.doors_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};


exports.doors_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await doors.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

exports.doors_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await doors.findById( req.query.id)
    res.render('doorsdetail',
    { title: 'doors Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// s7

exports.doors_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('doorscreate', { title: 'doors Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

//s8
    
exports.doors_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await doors.findById(req.query.id)
    res.render('doorsupdate', { title: 'doors Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    //s9

    exports.doors_delete_Page = async function (req, res) {
        console.log("Delete view for id " + req.query.id)
        try {
            result = await doors.findById(req.query.id)
            res.render('doorsdelete', {
                title: 'doors Delete', toShow:
                    result
            });
        }
        catch (err) {
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };