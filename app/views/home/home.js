var view    = require("ui/core/view"),
    dialogs = require("ui/dialogs"),
    count   = 0;


exports.onPageLoaded = function() {
  dialogs.alert("Your message of the page loaded!").then(function() {
    console.log("Dialog closed!");
  });
}

exports.buttonTap = function(args){
  count++;
  var sender = args.object;
  var parent = sender.parent;
  if (parent) {
    var lbl = view.getViewById(parent, "Label1");
    if (lbl) {
      lbl.text = "You tapped " + count + " times!";
    }
  }
}
