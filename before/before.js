$(document).ready(function() {

  // toggle supplemental text
  $('#text-control').on('click', function() {
    $('#supplemental-text').slideToggle('fast');
    if ($(this).html() === 'Show less') {
      $(this).html('Show more');
    } else {
      $(this).html('Show less');
    }
  });

  // handle form submission
  $('#submit').on('click',function(event) {

    event.preventDefault();

    // check for empty required fields
    if ( !$('#name').val() ) {
      $('#error').text('Please enter your name').show();
    }
    else if ( !$('#question').val() ) {
      $('#error').text('Please answer the question!').show();
    }
    else {
      // populate certificate with user's name, then show it
      var participant = $('#name').val();
      $('#participant').text(participant);
      $('#has-have').text('has');
      showModal();
    }

    // handle click on ok button within modal
    $('#ok').on('click',function() {
      hideModal();
    });
  });

});

function showModal() {
  $('#modal').show();
  $('#modal-overlay').show();
}

function hideModal() {
  $('#modal').hide();
  $('#modal-overlay').hide();
}
