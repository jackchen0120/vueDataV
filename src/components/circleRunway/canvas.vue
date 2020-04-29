<template>
  <div class="canvas" :class="classStyle">
    <canvas :id="id" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      canvas: '',
      context: '',
      cirX: '',
      cirY: '',
      rad: '',
      n: 1,
      speed: 150,
      r: 36,
      timer: null
    }
  },
  props:[
    'percent',
    'id',
    'color',
    'classStyle',
    'lineWidth'
  ],
  mounted () {
    this.canvas = document.getElementById(this.id);
    this.context = this.canvas.getContext('2d');
    this.context.scale(4, 4);
    this.cirX = 40, // this.canvas.width / 2
    this.cirY = 40, // this.canvas.height / 2
    this.rad = -Math.PI * 2 / 100;
    this.DreamLoading();

    this.timer = setInterval(() => {
     this.DreamLoading();
    }, 6000)

    document.addEventListener('visibilitychange', () => {
      this.isHidden = document.hidden;
      if (this.isHidden === false) {
        this.timer = setInterval(() => {
         this.DreamLoading();
        }, 6000)
      } else {
        clearInterval(this.timer);
        this.timer3 = null;
      }
    })

  },
  created () {
  },
  methods: {
    // 绘制最外层细圈
    writeCircle() {
      // save和restore可以保证样式属性只运用于该段canvas元素
      this.context.save();        
      // 开始路径
      this.context.beginPath();    
      // 设置边线的颜色
      this.context.strokeStyle = "rgba(0, 114, 188, .2)";       
      this.context.lineWidth = this.lineWidth;
      // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
      this.context.arc(this.cirX, this.cirY, this.r, 0, Math.PI * 2, false);
       // 绘制边线
      this.context.stroke();      
      // this.context.restore();
      this.context.closePath();
    },
    // 绘制文本
    writeText(n) {
      this.context.save();
      this.context.font = "20px Arial";
      this.context.fillStyle = "#49f"; // 字体颜色
      this.context.fillText(n.toFixed(0) + "%", this.cirX - 20, this.cirY + 10); // 绘制实心
      // context.strokeStyle = "#49f";
      // context.strokeText(n.toFixed(0)+"%",cirX - 30 ,cirY +10); // 绘制空心
      this.context.stroke();
      this.context.restore();
    },
    // 绘制外圈
    writeBlue(n) {
      this.context.save();
      this.context.strokeStyle = this.color;
      this.context.lineWidth = this.lineWidth;
      // this.context.lineCap = 'round';
      this.context.beginPath();
      this.context.arc(this.cirX, this.cirY, this.r, -Math.PI / 2, -Math.PI / 2 + this.rad * n, true);
      this.context.stroke();
      this.context.restore();
    },
    DreamLoading() {
      // 清除所有，重新绘制
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.writeCircle();
      // this.writeText(this.n);
      this.writeBlue(this.n)
      // if(this.n < 100 && this.n <= 60) {
      if (this.n <= this.percent) {
        this.n = this.n + 0.4;
      } else {
        return this.n = 0;
      }
      // setTimeout(this.DreamLoading, this.speed);
      requestAnimationFrame(this.DreamLoading);
    }
  }
}
</script>