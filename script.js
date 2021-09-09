$(document).ready(function () {
  // var player = '';
  $("#map").append(player);
  var btn1 = $(".sekin");
  var btn2 = $(".ortacha");
  var btn3 = $(".tez");
  var car = $("#player");
  var car123 = $(".car");
  var car1 = $("#car1");
  var car2 = $("#car2");
  var car3 = $("#car3");
  var finish = $(".finish");
  var finish123 = $(".finish123");
  var nostop = $(".nostop");
  var bosh = ".bosh";
  var container = $("#map1");
  var line = $(".line");
  var score = $("#score");
  var scorediv = $("#score_div");
  var restart_div = $("#restart_div");
  var restart_btn = $("#restart");
  var gif = $(".gif");
  var gif1 = $(".giflar");
  var time = $("#time");
  var yon1 = $(".yondan1");
  var yon2 = $(".yondan2");
  var yon3 = $(".yondan3");
  var plus = $(".plus_on");
  var anim_id;

  var game_over = false;
  var move_right = false;
  var move_left = false;
  var move_up = false;
  var move_down = false;
  var speed = 2;
  var line_speed = 5;
  var score_counter = 1;
  var time_counter = 180;
  var time_counter2 = 120;
  var time_counter3 = 90;

  var container_left = parseInt(container.css("left"));
  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());
  var car_width = parseInt(car.width());
  var car_height = parseInt(car.height());

  finish.click(() => {
    btn1.css("display", "block");
    finish.css("display", "none");
    btn1.css("display", "block");
    btn2.css("display", "block");
    btn3.css("display", "block");
    nostop.css("display", "none");
    btn1.click(() => {
      container.css("display", "block");
      car.css("display", "block");
      btn1.css("display", "none");
      btn2.css("display", "none");
      btn3.css("display", "none");
      // function paydo() {
      //   container.css('display', 'block')
      //   car.css('display', 'block')
      // }
      // setTimeout(() => {
      //   yon1.css({
      //     left: '50%',
      //     transform: 'translateX(50%)'
      //   })
      //   setTimeout(() => {
      //     paydo()
      //   }, 1500);
      // }, 1000);
      setTimeout(() => {
        $("body").css("background", "grey ");
      }, 1000);
      setTimeout(() => {
        // $("body").css("background", "green");
        $("body").click(() => {
          window.location.href = "./index.html";
        });
        finish123.animate(
          {
            top: 0,
          },
          1000
        );
      }, 180000);

      $(document).keydown(function (e) {
        $(document).on("keydown", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 65 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 68 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 87 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 40 && move_down === false) {
              move_down = requestAnimationFrame(down);
            } else if (key === 83 && move_down === false) {
              move_down = requestAnimationFrame(down);
            }
          }
        });

        $(document).on("keyup", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 65) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 39) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 68) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 38) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 87) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 40) {
              cancelAnimationFrame(move_down);
              move_down = false;
            } else if (key === 83) {
              cancelAnimationFrame(move_down);
              move_down = false;
            }
          }
        });

        function left() {
          if (parseInt(car.css("left")) > 695) {
            car.css("left", parseInt(car.css("left")) - 5);
            move_left = requestAnimationFrame(left);
          }
        }
        function right() {
          if (parseInt(car.css("left")) < 1110) {
            car.css("left", parseInt(car.css("left")) + 5);
            move_right = requestAnimationFrame(right);
          }
        }
        function top() {
          if (parseInt(car.css("top")) > -630) {
            car.css("top", parseInt(car.css("top")) - 3);
            move_up = requestAnimationFrame(top);
          }
        }
        function down() {
          if (parseInt(car.css("top")) < 0) {
            car.css("top", parseInt(car.css("top")) + 3);
            move_down = requestAnimationFrame(down);
          }
        }
      });
      anim_id = requestAnimationFrame(takror);
      function takror() {
        if (
          collision(car, car1) ||
          collision(car, car2) ||
          collision(car, car3)
        ) {
          stopGame();
          return;
        }
        score_counter++;
        if (score_counter % 80 == 0) {
          score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 750 == 0) {
          speed++;
          line_speed++;
        }
        time_counter--;
        if (time_counter % 80 == 0) {
          time.text(parseInt(time.text()) - 1);
        }

        carDown(car1);
        carDown(car2);
        carDown(car3);
        anim_id = requestAnimationFrame(takror);
      }
      function carDown(car) {
        var carCurrent = parseInt(car.css("top"));
        if (carCurrent > container_height) {
          carCurrent = -200;
          var carLeft = parseInt(Math.random() * 420 - 30);
          car.css("left", carLeft);
        }
        car.css("top", carCurrent + speed);
      }
      restart_btn.click(() => {
        location.reload();
      });
      function stopGame() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        setTimeout(() => {
          car.css("opacity", 0);
        }, 100);
        $("body").click(() => {
          window.location.href = "./index.html";
        });

        setTimeout(() => {
          $("body").css("background", "#292929");
          restart_div.slideDown(500);
          restart_btn.focus();
          scorediv.css("top", "47%");
        }, 500);
        setTimeout(() => {
          car.css("position", "reletive");
          gif1.css("display", "block");
        }, 100);
      }
      function collision($div1, $div2) {
        var carLeft1 = $div1.offset().left;
        var carTop = $div1.offset().top;
        var carHeight = $div1.outerHeight(true);
        var carWidth = $div1.outerWidth(true);
        var carSum = carTop + carHeight;
        var leftWidthSum = carLeft1 + carWidth;
        var car2Left = $div2.offset().left;
        var car2Top = $div2.offset().top;
        var car2Height = $div2.outerHeight(true);
        var car2Width = $div2.outerWidth(true);
        var carSum2 = car2Top + car2Height + 50;
        var leftWidthSum2 = car2Left + car2Width;
        var carSum11 = carTop + carWidth;
        var carSum1 = car2Top + car2Width;
        if (
          carSum < car2Top ||
          carTop > carSum2 ||
          leftWidthSum < car2Left + 30 ||
          leftWidthSum2 + 20 < leftWidthSum ||
          carSum11 + 100 < carSum1
        ) {
          return false;
        } else {
          // gif1.css('display', 'block');
          // gif1.css('z-index',100000)
          gif1.css("top", carTop - 100);
          gif1.css("left", carLeft1 - 770);
          console.log(carTop, carLeft1);
          console.log(gif1.css("left"), gif1.css("top"), gif1.css("display"));
          return true;
        }
      }
    });
    btn2.click(() => {
      container.css("display", "block");
      car.css("display", "block");
      btn1.css("display", "none");
      btn2.css("display", "none");
      btn3.css("display", "none");
      setTimeout(() => {
        $("body").css("background", "grey");
      }, 1000);
      setTimeout(() => {
        // $("body").css("background", "green");
        $("body").click(() => {
          window.location.href = "./index.html";
        });
        finish123.animate(
          {
            top: 0,
          },
          1000
        );
      }, 120000);
      $(document).keydown(function (e) {
        $(document).on("keydown", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 65 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 68 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 87 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 40 && move_down === false) {
              move_down = requestAnimationFrame(down);
            } else if (key === 83 && move_down === false) {
              move_down = requestAnimationFrame(down);
            }
          }
        });

        $(document).on("keyup", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 65) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 39) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 68) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 38) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 87) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 40) {
              cancelAnimationFrame(move_down);
              move_down = false;
            } else if (key === 83) {
              cancelAnimationFrame(move_down);
              move_down = false;
            }
          }
        });

        function left() {
          if (parseInt(car.css("left")) > 695) {
            car.css("left", parseInt(car.css("left")) - 5);
            move_left = requestAnimationFrame(left);
          }
        }
        function right() {
          if (parseInt(car.css("left")) < 1110) {
            car.css("left", parseInt(car.css("left")) + 5);
            move_right = requestAnimationFrame(right);
          }
        }
        function top() {
          if (parseInt(car.css("top")) > -630) {
            car.css("top", parseInt(car.css("top")) - 3);
            move_up = requestAnimationFrame(top);
          }
        }
        function down() {
          if (parseInt(car.css("top")) < 0) {
            car.css("top", parseInt(car.css("top")) + 3);
            move_down = requestAnimationFrame(down);
          }
        }
      });

      anim_id = requestAnimationFrame(takror);
      function takror() {
        if (
          collision(car, car1) ||
          collision(car, car2) ||
          collision(car, car3)
        ) {
          stopGame();
          return;
        }
        score_counter++;
        if (score_counter % 80 == 0) {
          score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 500 == 0) {
          speed++;
          line_speed++;
        }

        carDown(car1);
        carDown(car2);
        carDown(car3);

        anim_id = requestAnimationFrame(takror);
      }

      function carDown(car) {
        var carCurrent = parseInt(car.css("top"));
        if (carCurrent > container_height) {
          carCurrent = -200;
          var carLeft = parseInt(Math.random() * 420 - 30);
          car.css("left", carLeft);
        }
        car.css("top", carCurrent + speed);
      }

      restart_btn.click(() => {
        location.reload();
      });

      function stopGame() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        setTimeout(() => {
          car.css("opacity", 0);
        }, 100);
        $("body").click(() => {
          window.location.href = "./index.html";
        });

        setTimeout(() => {
          $("body").css("background", "#292929");
          restart_div.slideDown(500);
          restart_btn.focus();
          scorediv.css("top", "47%");
        }, 500);
        setTimeout(() => {
          car.css("position", "reletive");
          gif1.css("display", "block");
        }, 100);
      }

      function collision($div1, $div2) {
        var carLeft1 = $div1.offset().left;
        var carTop = $div1.offset().top;
        var carHeight = $div1.outerHeight(true);
        var carWidth = $div1.outerWidth(true);
        var carSum = carTop + carHeight;
        var leftWidthSum = carLeft1 + carWidth;
        var car2Left = $div2.offset().left;
        var car2Top = $div2.offset().top;
        var car2Height = $div2.outerHeight(true);
        var car2Width = $div2.outerWidth(true);
        var carSum2 = car2Top + car2Height + 50;
        var leftWidthSum2 = car2Left + car2Width;
        var carSum11 = carTop + carWidth;
        var carSum1 = car2Top + car2Width;
        if (
          carSum < car2Top ||
          carTop > carSum2 ||
          leftWidthSum < car2Left + 30 ||
          leftWidthSum2 + 20 < leftWidthSum ||
          carSum11 + 100 < carSum1
        ) {
          return false;
        } else {
          // gif1.css('display', 'block');
          // gif1.css('z-index',100000)
          gif1.css("top", carTop - 100);
          gif1.css("left", carLeft1 - 770);
          console.log(carTop, carLeft1);
          console.log(gif1.css("left"), gif1.css("top"), gif1.css("display"));
          return true;
        }
      }
    });
    btn3.click(() => {
      container.css("display", "block");
      car.css("display", "block");
      btn1.css("display", "none");
      btn2.css("display", "none");
      btn3.css("display", "none");
      setTimeout(() => {
        $("body").css("background", "grey");
      }, 1000);
      setTimeout(() => {
        // $("body").css("background", "green");
        $("body").click(() => {
          window.location.href = "./index.html";
        });
        finish123.animate(
          {
            top: 0,
          },
          1000
        );
      }, 150000);

      $(document).keydown(function (e) {
        $(document).on("keydown", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 65 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 68 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 87 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 40 && move_down === false) {
              move_down = requestAnimationFrame(down);
            } else if (key === 83 && move_down === false) {
              move_down = requestAnimationFrame(down);
            }
          }
        });

        $(document).on("keyup", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 65) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 39) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 68) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 38) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 87) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 40) {
              cancelAnimationFrame(move_down);
              move_down = false;
            } else if (key === 83) {
              cancelAnimationFrame(move_down);
              move_down = false;
            }
          }
        });

        function left() {
          if (parseInt(car.css("left")) > 695) {
            car.css("left", parseInt(car.css("left")) - 5);
            move_left = requestAnimationFrame(left);
          }
        }
        function right() {
          if (parseInt(car.css("left")) < 1110) {
            car.css("left", parseInt(car.css("left")) + 5);
            move_right = requestAnimationFrame(right);
          }
        }
        function top() {
          if (parseInt(car.css("top")) > -630) {
            car.css("top", parseInt(car.css("top")) - 3);
            move_up = requestAnimationFrame(top);
          }
        }
        function down() {
          if (parseInt(car.css("top")) < 0) {
            car.css("top", parseInt(car.css("top")) + 3);
            move_down = requestAnimationFrame(down);
          }
        }
      });

      anim_id = requestAnimationFrame(takror);
      function takror() {
        if (
          collision(car, car1) ||
          collision(car, car2) ||
          collision(car, car3)
        ) {
          stopGame();
          return;
        }
        score_counter++;
        if (score_counter % 80 == 0) {
          score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 150 == 0) {
          speed++;
          line_speed++;
        }

        carDown(car1);
        carDown(car2);
        carDown(car3);

        anim_id = requestAnimationFrame(takror);
      }

      function carDown(car) {
        var carCurrent = parseInt(car.css("top"));
        if (carCurrent > container_height) {
          carCurrent = -200;
          var carLeft = parseInt(Math.random() * 420 - 30);
          car.css("left", carLeft);
        }
        car.css("top", carCurrent + speed);
      }

      restart_btn.click(() => {
        location.reload();
      });

      function stopGame() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        setTimeout(() => {
          car.css("opacity", 0);
        }, 100);
        $("body").click(() => {
          window.location.href = "./index.html";
        });
        setTimeout(() => {
          $("body").css("background", "#292929");
          restart_div.slideDown(500);
          restart_btn.focus();
          scorediv.css("top", "47%");
        }, 500);
        setTimeout(() => {
          car.css("position", "reletive");
          gif1.css("display", "block");
        }, 100);
      }

      function collision($div1, $div2) {
        var carLeft1 = $div1.offset().left;
        var carTop = $div1.offset().top;
        var carHeight = $div1.outerHeight(true);
        var carWidth = $div1.outerWidth(true);
        var carSum = carTop + carHeight;
        var leftWidthSum = carLeft1 + carWidth;
        var car2Left = $div2.offset().left;
        var car2Top = $div2.offset().top;
        var car2Height = $div2.outerHeight(true);
        var car2Width = $div2.outerWidth(true);
        var carSum2 = car2Top + car2Height + 50;
        var leftWidthSum2 = car2Left + car2Width;
        var carSum11 = carTop + carWidth;
        var carSum1 = car2Top + car2Width;
        if (
          carSum < car2Top ||
          carTop > carSum2 ||
          leftWidthSum < car2Left + 30 ||
          leftWidthSum2 + 20 < leftWidthSum ||
          carSum11 + 100 < carSum1
        ) {
          return false;
        } else {
          // gif1.css('display', 'block');
          // gif1.css('z-index',100000)
          gif1.css("top", carTop - 100);
          gif1.css("left", carLeft1 - 770);
          console.log(carTop, carLeft1);
          console.log(gif1.css("left"), gif1.css("top"), gif1.css("display"));
          return true;
        }
      }
    });
  });
  nostop.click(() => {
    btn1.css("display", "block");
    finish.css("display", "none");
    btn1.css("display", "block");
    btn2.css("display", "block");
    btn3.css("display", "block");
    nostop.css("display", "none");
    btn1.click(() => {
      container.css("display", "block");
      car.css("display", "block");
      btn1.css("display", "none");
      btn2.css("display", "none");
      btn3.css("display", "none");
      // function paydo() {
      //   container.css('display', 'block')
      //   car.css('display', 'block')
      // }
      // setTimeout(() => {
      //   yon1.css({
      //     left: '50%',
      //     transform: 'translateX(50%)'
      //   })
      //   setTimeout(() => {
      //     paydo()
      //   }, 1500);
      // }, 1000);
      setTimeout(() => {
        // $("body").css("background", "grey");
      }, 1000);

      $(document).keydown(function (e) {
        $(document).on("keydown", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 65 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 68 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 87 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 40 && move_down === false) {
              move_down = requestAnimationFrame(down);
            } else if (key === 83 && move_down === false) {
              move_down = requestAnimationFrame(down);
            }
          }
        });

        $(document).on("keyup", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 65) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 39) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 68) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 38) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 87) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 40) {
              cancelAnimationFrame(move_down);
              move_down = false;
            } else if (key === 83) {
              cancelAnimationFrame(move_down);
              move_down = false;
            }
          }
        });

        function left() {
          if (parseInt(car.css("left")) > 695) {
            car.css("left", parseInt(car.css("left")) - 5);
            move_left = requestAnimationFrame(left);
          }
        }
        function right() {
          if (parseInt(car.css("left")) < 1110) {
            car.css("left", parseInt(car.css("left")) + 5);
            move_right = requestAnimationFrame(right);
          }
        }
        function top() {
          if (parseInt(car.css("top")) > -630) {
            car.css("top", parseInt(car.css("top")) - 3);
            move_up = requestAnimationFrame(top);
          }
        }
        function down() {
          if (parseInt(car.css("top")) < 0) {
            car.css("top", parseInt(car.css("top")) + 3);
            move_down = requestAnimationFrame(down);
          }
        }
      });
      anim_id = requestAnimationFrame(takror);
      function takror() {
        if (
          collision(car, car1) ||
          collision(car, car2) ||
          collision(car, car3)
        ) {
          stopGame();
          return;
        }
        score_counter++;
        if (score_counter % 80 == 0) {
          score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 750 == 0) {
          speed++;
          line_speed++;
        }

        carDown(car1);
        carDown(car2);
        carDown(car3);
        anim_id = requestAnimationFrame(takror);
      }
      function carDown(car) {
        var carCurrent = parseInt(car.css("top"));
        if (carCurrent > container_height) {
          carCurrent = -200;
          var carLeft = parseInt(Math.random() * 420 - 30);
          car.css("left", carLeft);
        }
        car.css("top", carCurrent + speed);
      }
      restart_btn.click(() => {
        location.reload();
      });
      function stopGame() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        setTimeout(() => {
          car.css("opacity", 0);
        }, 100);
        $("body").click(() => {
          window.location.href = "./index.html";
        });

        setTimeout(() => {
          $("body").css("background", "#292929");
          restart_div.slideDown(500);
          restart_btn.focus();
          scorediv.css("top", "47%");
        }, 500);
        setTimeout(() => {
          car.css("position", "reletive");
          gif1.css("display", "block");
        }, 100);
      }
      function collision($div1, $div2) {
        var carLeft1 = $div1.offset().left;
        var carTop = $div1.offset().top;
        var carHeight = $div1.outerHeight(true);
        var carWidth = $div1.outerWidth(true);
        var carSum = carTop + carHeight;
        var leftWidthSum = carLeft1 + carWidth;
        var car2Left = $div2.offset().left;
        var car2Top = $div2.offset().top;
        var car2Height = $div2.outerHeight(true);
        var car2Width = $div2.outerWidth(true);
        var carSum2 = car2Top + car2Height + 50;
        var leftWidthSum2 = car2Left + car2Width;
        var carSum11 = carTop + carWidth;
        var carSum1 = car2Top + car2Width;
        if (
          carSum < car2Top ||
          carTop > carSum2 ||
          leftWidthSum < car2Left + 30 ||
          leftWidthSum2 + 20 < leftWidthSum ||
          carSum11 + 100 < carSum1
        ) {
          return false;
        } else {
          // gif1.css('display', 'block');
          // gif1.css('z-index',100000)
          gif1.css("top", carTop - 100);
          gif1.css("left", carLeft1 - 770);
          console.log(carTop, carLeft1);
          console.log(gif1.css("left"), gif1.css("top"), gif1.css("display"));
          return true;
        }
      }
    });
    btn2.click(() => {
      container.css("display", "block");
      car.css("display", "block");
      btn1.css("display", "none");
      btn2.css("display", "none");
      btn3.css("display", "none");
      setTimeout(() => {
        $("body").css("background", "grey");
      }, 1000);
      $(document).keydown(function (e) {
        $(document).on("keydown", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 65 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 68 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 87 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 40 && move_down === false) {
              move_down = requestAnimationFrame(down);
            } else if (key === 83 && move_down === false) {
              move_down = requestAnimationFrame(down);
            }
          }
        });

        $(document).on("keyup", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 65) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 39) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 68) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 38) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 87) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 40) {
              cancelAnimationFrame(move_down);
              move_down = false;
            } else if (key === 83) {
              cancelAnimationFrame(move_down);
              move_down = false;
            }
          }
        });

        function left() {
          if (parseInt(car.css("left")) > 695) {
            car.css("left", parseInt(car.css("left")) - 5);
            move_left = requestAnimationFrame(left);
          }
        }
        function right() {
          if (parseInt(car.css("left")) < 1110) {
            car.css("left", parseInt(car.css("left")) + 5);
            move_right = requestAnimationFrame(right);
          }
        }
        function top() {
          if (parseInt(car.css("top")) > -630) {
            car.css("top", parseInt(car.css("top")) - 3);
            move_up = requestAnimationFrame(top);
          }
        }
        function down() {
          if (parseInt(car.css("top")) < 0) {
            car.css("top", parseInt(car.css("top")) + 3);
            move_down = requestAnimationFrame(down);
          }
        }
      });

      anim_id = requestAnimationFrame(takror);
      function takror() {
        if (
          collision(car, car1) ||
          collision(car, car2) ||
          collision(car, car3)
        ) {
          stopGame();
          return;
        }
        score_counter++;
        if (score_counter % 80 == 0) {
          score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 500 == 0) {
          speed++;
          line_speed++;
        }

        carDown(car1);
        carDown(car2);
        carDown(car3);

        anim_id = requestAnimationFrame(takror);
      }

      function carDown(car) {
        var carCurrent = parseInt(car.css("top"));
        if (carCurrent > container_height) {
          carCurrent = -200;
          var carLeft = parseInt(Math.random() * 420 - 30);
          car.css("left", carLeft);
        }
        car.css("top", carCurrent + speed);
      }

      restart_btn.click(() => {
        location.reload();
      });

      function stopGame() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        setTimeout(() => {
          car.css("opacity", 0);
        }, 100);
        $("body").click(() => {
          window.location.href = "./index.html";
        });

        setTimeout(() => {
          $("body").css("background", "#292929");
          restart_div.slideDown(500);
          restart_btn.focus();
          scorediv.css("top", "47%");
        }, 500);
        setTimeout(() => {
          car.css("position", "reletive");
          gif1.css("display", "block");
        }, 100);
      }

      function collision($div1, $div2) {
        var carLeft1 = $div1.offset().left;
        var carTop = $div1.offset().top;
        var carHeight = $div1.outerHeight(true);
        var carWidth = $div1.outerWidth(true);
        var carSum = carTop + carHeight;
        var leftWidthSum = carLeft1 + carWidth;
        var car2Left = $div2.offset().left;
        var car2Top = $div2.offset().top;
        var car2Height = $div2.outerHeight(true);
        var car2Width = $div2.outerWidth(true);
        var carSum2 = car2Top + car2Height + 50;
        var leftWidthSum2 = car2Left + car2Width;
        var carSum11 = carTop + carWidth;
        var carSum1 = car2Top + car2Width;
        if (
          carSum < car2Top ||
          carTop > carSum2 ||
          leftWidthSum < car2Left + 30 ||
          leftWidthSum2 + 20 < leftWidthSum ||
          carSum11 + 100 < carSum1
        ) {
          return false;
        } else {
          // gif1.css('display', 'block');
          // gif1.css('z-index',100000)
          gif1.css("top", carTop - 100);
          gif1.css("left", carLeft1 - 770);
          console.log(carTop, carLeft1);
          console.log(gif1.css("left"), gif1.css("top"), gif1.css("display"));
          return true;
        }
      }
    });
    btn3.click(() => {
      container.css("display", "block");
      car.css("display", "block");
      btn1.css("display", "none");
      btn2.css("display", "none");
      btn3.css("display", "none");
      setTimeout(() => {
        $("body").css("background", "grey");
      }, 1000);
      $(document).keydown(function (e) {
        $(document).on("keydown", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 65 && move_left === false) {
              move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 68 && move_right === false) {
              move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 87 && move_up === false) {
              move_up = requestAnimationFrame(top);
            } else if (key === 40 && move_down === false) {
              move_down = requestAnimationFrame(down);
            } else if (key === 83 && move_down === false) {
              move_down = requestAnimationFrame(down);
            }
          }
        });

        $(document).on("keyup", function (e) {
          if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 65) {
              cancelAnimationFrame(move_left);
              move_left = false;
            } else if (key === 39) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 68) {
              cancelAnimationFrame(move_right);
              move_right = false;
            } else if (key === 38) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 87) {
              cancelAnimationFrame(move_up);
              move_up = false;
            } else if (key === 40) {
              cancelAnimationFrame(move_down);
              move_down = false;
            } else if (key === 83) {
              cancelAnimationFrame(move_down);
              move_down = false;
            }
          }
        });

        function left() {
          if (parseInt(car.css("left")) > 695) {
            car.css("left", parseInt(car.css("left")) - 5);
            move_left = requestAnimationFrame(left);
          }
        }
        function right() {
          if (parseInt(car.css("left")) < 1110) {
            car.css("left", parseInt(car.css("left")) + 5);
            move_right = requestAnimationFrame(right);
          }
        }
        function top() {
          if (parseInt(car.css("top")) > -630) {
            car.css("top", parseInt(car.css("top")) - 3);
            move_up = requestAnimationFrame(top);
          }
        }
        function down() {
          if (parseInt(car.css("top")) < 0) {
            car.css("top", parseInt(car.css("top")) + 3);
            move_down = requestAnimationFrame(down);
          }
        }
      });

      anim_id = requestAnimationFrame(takror);
      function takror() {
        if (
          collision(car, car1) ||
          collision(car, car2) ||
          collision(car, car3)
        ) {
          stopGame();
          return;
        }
        score_counter++;
        if (score_counter % 80 == 0) {
          score.text(parseInt(score.text()) + 1);
        }
        if (score_counter % 150 == 0) {
          speed++;
          line_speed++;
        }

        carDown(car1);
        carDown(car2);
        carDown(car3);

        anim_id = requestAnimationFrame(takror);
      }

      function carDown(car) {
        var carCurrent = parseInt(car.css("top"));
        if (carCurrent > container_height) {
          carCurrent = -200;
          var carLeft = parseInt(Math.random() * 420 - 30);
          car.css("left", carLeft);
        }
        car.css("top", carCurrent + speed);
      }

      restart_btn.click(() => {
        location.reload();
      });

      function stopGame() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        setTimeout(() => {
          car.css("opacity", 0);
        }, 100);
        $("body").click(() => {
          window.location.href = "./index.html";
        });
        setTimeout(() => {
          $("body").css("background", "#292929");
          restart_div.slideDown(500);
          restart_btn.focus();
          scorediv.css("top", "47%");
        }, 500);
        setTimeout(() => {
          car.css("position", "reletive");
          gif1.css("display", "block");
        }, 100);
      }

      function collision($div1, $div2) {
        var carLeft1 = $div1.offset().left;
        var carTop = $div1.offset().top;
        var carHeight = $div1.outerHeight(true);
        var carWidth = $div1.outerWidth(true);
        var carSum = carTop + carHeight;
        var leftWidthSum = carLeft1 + carWidth;
        var car2Left = $div2.offset().left;
        var car2Top = $div2.offset().top;
        var car2Height = $div2.outerHeight(true);
        var car2Width = $div2.outerWidth(true);
        var carSum2 = car2Top + car2Height + 50;
        var leftWidthSum2 = car2Left + car2Width;
        var carSum11 = carTop + carWidth;
        var carSum1 = car2Top + car2Width;
        if (
          carSum < car2Top ||
          carTop > carSum2 ||
          leftWidthSum < car2Left + 30 ||
          leftWidthSum2 + 20 < leftWidthSum ||
          carSum11 + 100 < carSum1
        ) {
          return false;
        } else {
          // gif1.css('display', 'block');
          // gif1.css('z-index',100000)
          gif1.css("top", carTop - 100);
          gif1.css("left", carLeft1 - 770);
          console.log(carTop, carLeft1);
          console.log(gif1.css("left"), gif1.css("top"), gif1.css("display"));
          return true;
        }
      }
    });
  });
});
