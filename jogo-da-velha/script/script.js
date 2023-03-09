let i = 0;
let ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let count_win_x = 0;
let count_win_o = 0;

function analize() {
  if (i > 0) {
    if (
      ocupation[0] == ocupation[1] &&
      ocupation[0] == ocupation[2] &&
      ocupation[0] == 1
    ) {
      document.getElementById("0").innerHTML =
        "<img class='maior' src='./img-tracos/esquerdax.png' />";
      document.getElementById("1").innerHTML =
        "<img class='maior' src='./img-tracos/meiox.png' />";
      document.getElementById("2").innerHTML =
        "<img class='maior' src='./img-tracos/direitax.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[0] == ocupation[1] &&
      ocupation[0] == ocupation[2] &&
      ocupation[0] == 2
    ) {
      document.getElementById("0").innerHTML =
        "<img class='maior' src='./img-tracos/esquerdao.png' />";
      document.getElementById("1").innerHTML =
        "<img class='maior' src='./img-tracos/meioesquerdapradireita.png' />";
      document.getElementById("2").innerHTML =
        "<img class='maior' src='./img-tracos/direitao.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[2] == ocupation[5] &&
      ocupation[2] == ocupation[8] &&
      ocupation[2] == 1
    ) {
      document.getElementById("2").innerHTML =
        "<img class='maior' src='./img-tracos/cimax.png' />";
      document.getElementById("5").innerHTML =
        "<img class='maior' src='./img-tracos/meiocimabaixox.png' />";
      document.getElementById("8").innerHTML =
        "<img class='maior' src='./img-tracos/baixox.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[2] == ocupation[5] &&
      ocupation[2] == ocupation[8] &&
      ocupation[2] == 2
    ) {
      document.getElementById("2").innerHTML =
        "<img class='maior' src='./img-tracos/cimao.png' />";
      document.getElementById("5").innerHTML =
        "<img class='maior' src='./img-tracos/meiocimabaixoo.png' />";
      document.getElementById("8").innerHTML =
        "<img class='maior' src='./img-tracos/baixao.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[8] == ocupation[7] &&
      ocupation[8] == ocupation[6] &&
      ocupation[8] == 1
    ) {
      document.getElementById("8").innerHTML =
        "<img class='maior' src='./img-tracos/direitax.png' />";
      document.getElementById("7").innerHTML =
        "<img class='maior' src='./img-tracos/meiox.png' />";
      document.getElementById("6").innerHTML =
        "<img class='maior' src='./img-tracos/esquerdax.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[8] == ocupation[7] &&
      ocupation[8] == ocupation[6] &&
      ocupation[8] == 2
    ) {
      document.getElementById("8").innerHTML =
        "<img class='maior' src='./img-tracos/direitao.png' />";
      document.getElementById("7").innerHTML =
        "<img class='maior' src='./img-tracos/meioesquerdapradireita.png' />";
      document.getElementById("6").innerHTML =
        "<img class='maior' src='./img-tracos/esquerdao.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[0] == ocupation[3] &&
      ocupation[0] == ocupation[6] &&
      ocupation[0] == 1
    ) {
      document.getElementById("0").innerHTML =
        "<img class='maior' src='./img-tracos/cimax.png' />";
      document.getElementById("3").innerHTML =
        "<img class='maior' src='./img-tracos/meiocimabaixox.png' />";
      document.getElementById("6").innerHTML =
        "<img class='maior' src='./img-tracos/baixox.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[0] == ocupation[3] &&
      ocupation[0] == ocupation[6] &&
      ocupation[0] == 2
    ) {
      document.getElementById("0").innerHTML =
        "<img class='maior' src='./img-tracos/cimao.png' />";
      document.getElementById("3").innerHTML =
        "<img class='maior' src='./img-tracos/meiocimabaixoo.png' />";
      document.getElementById("6").innerHTML =
        "<img class='maior' src='./img-tracos/baixao.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[0] == ocupation[4] &&
      ocupation[0] == ocupation[8] &&
      ocupation[0] == 1
    ) {
      document.getElementById("0").innerHTML =
        "<img class='maior' src='./img-tracos/xdiagonald00.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/xdiagonald04.png' />";
      document.getElementById("8").innerHTML =
        "<img class='maior' src='./img-tracos/xdiagonald08.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[0] == ocupation[4] &&
      ocupation[0] == ocupation[8] &&
      ocupation[0] == 2
    ) {
      document.getElementById("0").innerHTML =
        "<img class='maior' src='./img-tracos/odiagonal00.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/odiagonald04.png' />";
      document.getElementById("8").innerHTML =
        "<img class='maior' src='./img-tracos/odiagonald08.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      console.log("O o ganhou");
      return;
    } else if (
      ocupation[2] == ocupation[4] &&
      ocupation[2] == ocupation[6] &&
      ocupation[2] == 1
    ) {
      document.getElementById("2").innerHTML =
        "<img class='maior' src='./img-tracos/xdiagonale02.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/xdiagonale04.png' />";
      document.getElementById("6").innerHTML =
        "<img class='maior' src='./img-tracos/xdiagonale06.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[2] == ocupation[4] &&
      ocupation[2] == ocupation[6] &&
      ocupation[2] == 2
    ) {
      document.getElementById("2").innerHTML =
        "<img class='maior' src='./img-tracos/odiagonal02.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/odiagonale04.png' />";
      document.getElementById("6").innerHTML =
        "<img class='maior' src='./img-tracos/odiagonale06.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[1] == ocupation[4] &&
      ocupation[1] == ocupation[7] &&
      ocupation[1] == 1
    ) {
      document.getElementById("1").innerHTML =
        "<img class='maior' src='./img-tracos/cimax.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/meiocimabaixox.png' />";
      document.getElementById("7").innerHTML =
        "<img class='maior' src='./img-tracos/baixox.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[1] == ocupation[4] &&
      ocupation[1] == ocupation[7] &&
      ocupation[1] == 2
    ) {
      document.getElementById("1").innerHTML =
        "<img class='maior' src='./img-tracos/cimao.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/meiocimabaixoo.png' />";
      document.getElementById("7").innerHTML =
        "<img class='maior' src='./img-tracos/baixao.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[3] == ocupation[4] &&
      ocupation[3] == ocupation[5] &&
      ocupation[3] == 1
    ) {
      document.getElementById("3").innerHTML =
        "<img class='maior' src='./img-tracos/esquerdax.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/meiox.png' />";
      document.getElementById("5").innerHTML =
        "<img class='maior' src='./img-tracos/direitax.png' />";
      count_win_x++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    } else if (
      ocupation[3] == ocupation[4] &&
      ocupation[3] == ocupation[5] &&
      ocupation[3] == 2
    ) {
      document.getElementById("3").innerHTML =
        "<img class='maior' src='./img-tracos/esquerdao.png' />";
      document.getElementById("4").innerHTML =
        "<img class='maior' src='./img-tracos/meioesquerdapradireita.png' />";
      document.getElementById("5").innerHTML =
        "<img class='maior' src='./img-tracos/direitao.png' />";
      count_win_o++;
      ocupation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      i = 0;
      countWin();
      return;
    }
    return;
  } else if (i == 9) {
    console.log("Deu velha!");
  }
}
function countWin() {
  document.getElementById("winners_x").innerHTML = `${count_win_x}`;
  document.getElementById("winners_o").innerHTML = `${count_win_o}`;
}

function played0() {
  let space = document.getElementById("0");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[0] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[0] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
}
function played1() {
  let space = document.getElementById("1");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[1] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[1] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
}
function played2() {
  let space = document.getElementById("2");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[2] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[2] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
}
function played3() {
  let space = document.getElementById("3");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[3] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[3] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
  i++;
}
function played4() {
  let space = document.getElementById("4");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[4] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[4] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
  i++;
}
function played5() {
  let space = document.getElementById("5");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[5] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[5] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
}
function played6() {
  let space = document.getElementById("6");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[6] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[6] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
}

function played7() {
  let space = document.getElementById("7");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[7] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[7] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
}

function played8() {
  let space = document.getElementById("8");
  if (space.innerHTML == "") {
    if (i % 2 == 0) {
      space.innerHTML = "<img src='./img/x.png'></img>";
      ocupation[8] = 1;
      i++;
      analize();
      return;
    } else if (i % 2 != 0) {
      space.innerHTML = "<img src='./img/circle.png'></img>";
      ocupation[8] = 2;
      i++;
      analize();
      return;
    }
  } else {
    alert("Desculpe, mas o espaço já está preenchido ");
  }
}

function toRestore() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).innerHTML = "";
  }
}
