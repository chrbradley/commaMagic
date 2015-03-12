$(function() {

  var punctuationToAdd = ",";

  $("input:radio[name=punctation]").click(function() {
    var value = $(this).val();
    punctuationToAdd = value;
});

  $("#txt").on('click', function() {
      var caretPos = document.getElementById("txt").selectionStart;
      var textAreaTxt = jQuery("#txt").val();
      // delete comma to the left
      if (textAreaTxt.substring(caretPos - 1, caretPos) === punctuationToAdd) {
        jQuery("#txt").val(textAreaTxt.substring(0, caretPos - 1) + textAreaTxt.substring(caretPos) );
      } else

      // delete comma to the right
      if (textAreaTxt.substring(caretPos, caretPos + 1) === punctuationToAdd) {
        jQuery("#txt").val(textAreaTxt.substring(0, caretPos) + textAreaTxt.substring(caretPos + 1) );
      } else

      // insert comma
      {
        jQuery("#txt").val(textAreaTxt.substring(0, caretPos) + punctuationToAdd + textAreaTxt.substring(caretPos) );
      }
  });

});