(function() {
  'use strict';

  var Timer = function() {
    this.elements = {};
    this.intervalID = null;
    this.intervalIDCont = null;
    this.isActive = false;
    this.setTime = 0;
    this.deltaTime = 0;
    this.deltaTimeMs = 0;
    this.pauseTime = 0;

    this.createLayout = function() {
      var container = document.createElement('div');
      container.className = 'text-center';

      var timerBox = document.createElement('div');
      timerBox.className = 'text-center timer';

      this.elements.timerSplit = document.createElement('div');
      this.elements.timerSplit.className = 'text-center splitter';

      this.elements.startBtn = document.createElement('button');
      this.elements.startBtn.innerHTML = 'СТАРТ';
      this.elements.startBtn.className = 'btn btn-success';

      var splitBtn = document.createElement('button');
      splitBtn.innerHTML = 'КРУГ';
      splitBtn.className = 'btn btn-warning';

      var stopBtn = document.createElement('button');
      stopBtn.innerHTML = 'СТОП';
      stopBtn.className = 'btn btn-danger';

      this.elements.timeField = document.createElement('p');
      this.elements.timeField.innerHTML = '0 : 0 : 0 : 000';

      this.elements.startBtn.addEventListener('click', this.start.bind(this));
      stopBtn.addEventListener('click', this.stop.bind(this));
      splitBtn.addEventListener('click', this.split.bind(this));

      timerBox.append(this.elements.timeField, this.elements.startBtn, splitBtn, stopBtn);
      container.append(timerBox, this.elements.timerSplit);

      return container;
    };

    this.start = function() {
      if(!this.isActive) {
        this.setTime();
        this.intervalID = setInterval(this.updateTime.bind(this), 1);
        this.elements.startBtn.innerHTML = 'ПАУЗА';
        this.elements.startBtn.className = 'btn btn-primary';
        this.isActive = true;
      } else {
        clearInterval(this.intervalID);
        this.pauseTime = +this.deltaTime;
        console.log(this.pauseTime);
        this.isActive = false;
        this.elements.startBtn.innerHTML = 'ПРОДОЛЖИТЬ';
        this.elements.startBtn.className = 'btn btn-info';
      }
    };

    this.stop = function() {
      clearInterval(this.intervalID);
      this.elements.startBtn.innerHTML = 'СТАРТ';
      this.elements.startBtn.className = 'btn btn-success';
      this.elements.timeField.innerHTML = '0 : 0 : 0 : 000';
      this.isActive = false;
      this.pauseTime = 0;
      console.log(document.querySelectorAll('.splitted-time'));
      var collection = document.querySelectorAll('.splitted-time');
      for (var i = 0; i < collection.length; i++) {
        collection[i].remove();
      }
    };

    this.updateTime = function() {
      this.deltaTime = new Date(Date.now() - this.startTime);
      this.updateHTML();
    };

    this.updateHTML = function() {
      this.elements.timeField.innerHTML = this.deltaTime.getUTCHours() + ' : ' + this.deltaTime.getMinutes() + ' : ' + this.deltaTime.getSeconds() + ' : ' + this.deltaTime.getMilliseconds();
    };

    this.setTime = function() {
      this.startTime = Date.now() - this.pauseTime;
      console.log(this.startTime);
    };

    this.split = function() {
      this.elements.splittedTime = document.createElement('p');
      this.elements.splittedTime.className = 'text-center splitted-time';
      this.elements.splittedTime.innerHTML = this.deltaTime.getUTCHours() + ' : ' + this.deltaTime.getMinutes() + ' : ' + this.deltaTime.getSeconds() + ' : ' + this.deltaTime.getMilliseconds();
      document.querySelector('.splitter').append(this.elements.splittedTime);
      console.log(this.elements.splittedTime);
    };

    this.init = function() {
      document.querySelector('#root').append(this.createLayout());
    };
  };

  var intence = new Timer();
  intence.init();
})();
