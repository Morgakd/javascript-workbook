'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';


  $('[data-cell]').click(function() {

    if ($(this).text() === "") {

      if (checkForWin() !== true)  {
        $('#announce-winner').empty();
        $(this).text(playerTurn);
        checkForWin();

        if (checkForWin() !== true) {
          playerTurn = (playerTurn === 'O') ? 'X' : 'O';
        }

      } else {
        $(this).text("");
      }

    } else if ($(this).text() !== "") {
      checkForWin();
      if (checkForWin() === true) {

        return;
      }
      if (checkForWin() !== true) {
        $('#announce-winner').text("Already taken, try again");
      }

    }



  });

  $(":button").click(function() {
    $('[data-cell]').empty();
    $('#announce-winner').empty();
    playerTurn = 'X';
  });



  function horizontalWin() {
    // Your code here
    var $row1 = $('.row1').text();
    var $row2 = $('.row2').text();
    var $row3 = $('.row3').text();

    if ($row1 === 'XXX' || $row1 === 'OOO' || $row2 === 'XXX' || $row2 === 'OOO' || $row3 === 'XXX' || $row3 === 'OOO')

    {
      return true;
    }
    return;

  };


  function verticalWin() {
    // Your code here
    //
    var $col1 = $('.col1').text();
    var $col2 = $('.col2').text();
    var $col3 = $('.col3').text();

    if ($col1 === 'XXX' || $col1 === 'OOO' || $col2 === 'XXX' || $col2 === 'OOO' || $col3 === 'XXX' || $col3 === 'OOO')

    {
      return true;
    }
    return;
  };


  function diagonalWin() {
    // Your code here
    var $diag1 = $('.diag1').text();
    var $diag2 = $('.diag2').text();

    if ($diag1 === 'XXX' || $diag1 === 'OOO' || $diag2 === 'XXX' || $diag2 === 'OOO')

    {
      return true;
    }
    return;

  };

  function tie() {
    var $row1 = $('.row1').text();
    var $row2 = $('.row2').text();
    var $row3 = $('.row3').text();
    var $length = ($row1.length + $row2.length + $row3.length);

    if ($length == 9) {
      return true;
    }
    return;
  };

  function checkForWin() {
    // Your code here
    if (verticalWin() === true) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;
    }
    if (horizontalWin() === true) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;
    }
    if (diagonalWin() === true) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return true;

    }
    if (tie() === true) {
      $('#announce-winner').text('It was a tie!  Try Again.');
      return true;
    } else {
      return false;
    }
    return;



  };


});
