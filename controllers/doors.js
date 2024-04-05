const doors = require('../models/doors');
var Door = require('../models/doors');
exports.doors_list = function (req, res) {
    res.send('NOT IMPLEMENTED: doors list');
};

exports.doors_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: doors detail: ' + req.params.id);
};

exports.doors_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: doors create POST');
};

exports.doors_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: doors delete DELETE ' + req.params.id);
};

exports.doors_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: doors update PUT' + req.params.id);
};

//List of all Costumes
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
// VIEWS
// Handle a show all view
exports.doors_view_all_Page = async function(req, res) {
    try{
    theDoors = await doors.find();
    res.render('doors', { title: 'Door Search Results', results: theDoors });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// Handle Door create on POST.
exports.door_create_post = async function(req, res) {
console.log(req.body)
let document = new Door();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.door_type = req.body.door_type;
document.door_model = req.body.door_model;
document.door_price = req.body.door_price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// for a specific Door.
exports.doors_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Door.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
// Handle Costume update form on PUT.
exports.doors_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Door.findById( req.params.id)
// Do updates of properties
if(req.body.door_type)
toUpdate.door_type = req.body.door_type;
if(req.body.door_type) toUpdate.door_type = req.body.door_type;
if(req.body.door_model) toUpdate.door_model = req.body.door_model;
if(req.body.door_price) toUpdate.door_price = req.body.door_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};