$(document).ready(function() {
  $("#subscribeButton").click(function(event) {
    event.preventDefault();
    alert($('#emailInput').val() + ' has successfully been subscribed to our Email list.');
    $('#emailInput').val('');

  });
});