<template>
  <!-- 金字塔数据 -->
  <div class="wrap-container trigle"> 
    <div class="back_img3"></div> 
    <div class="back_img"></div> 
    <div class="back_img1"></div> 
    <div class="back_img2"></div>
    <ul class="first"> 
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li> 
    </ul> 
    <ul class="seconed"> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
    </ul> 
    <ul class="third"> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
    </ul> 
    <ul class="four"> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
    </ul>

    <div class="detail detail_1"> 
      <div class="detail_txt detail_txt1"> 
        <span class="precent_txt precent_txt1"> 
          <div class="chartsdom" style="-webkit-tap-highlight-color: transparent; user-select: none; background: transparent;">
            <div style="position: relative; overflow: hidden; width: 50px; height: 50px; padding: 0px; margin: 0px; border-width: 0px;">
              <canvas width="50" height="50" style="position: absolute; left: 0px; top: 0px; width: 50px; height: 50px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
            </div>
          </div> 
        </span>

        <div class="txt_right txt_right1"> 
          <span> 
            <div class="f_div aharrow_up">注册护士</div> 
            <div class="s_div s_div1">872人</div> 
          </span> 
        </div>
      </div>

      <div class="arrow_contain arrow_contain1"> 
        <span class="arrow arrow_1"></span> 
      </div>
    </div>
    
    <div class="detail detail_2"> 
      <div class="detail_txt detail_txt2"> 
        <span class="precent_txt precent_txt2"> 
          <div class="chartsdom" style="-webkit-tap-highlight-color: transparent; user-select: none; background: transparent;">
            <div style="position: relative; overflow: hidden; width: 50px; height: 50px; padding: 0px; margin: 0px; border-width: 0px;">
              <canvas width="50" height="50" style="position: absolute; left: 0px; top: 0px; width: 50px; height: 50px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
            </div>
          </div> 
        </span>
        <div class="txt_right txt_right2"> 
          <span> 
            <div class="f_div aharrow_up">职业（助理）医师</div> 
            <div class="s_div s_div2">872人</div> 
          </span> 
        </div> 
      </div>
      <div class="arrow_contain arrow_contain2"> 
        <span class="arrow arrow_2"></span> 
      </div> 
    </div>

    <div class="detail detail_3"> 
      <div class="detail_txt detail_txt3"> 
       <span class="precent_txt precent_txt3"> 
          <div class="chartsdom" style="-webkit-tap-highlight-color: transparent; user-select: none; background: transparent;">
            <div style="position: relative; overflow: hidden; width: 50px; height: 50px; padding: 0px; margin: 0px; border-width: 0px;">
              <canvas width="50" height="50" style="position: absolute; left: 0px; top: 0px; width: 50px; height: 50px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
            </div>
          </div> 
        </span>

        <div class="txt_right txt_right3"> 
          <span> 
            <div class="f_div aharrow_down">技师</div> 
            <div class="s_div s_div3">126人</div> 
          </span> 
        </div> 
      </div>

      <div class="arrow_contain arrow_contain3"> 
        <span class="arrow arrow_3"></span> 
      </div> 
    </div>

    <div class="detail detail_4"> 
      <div class="detail_txt detail_txt4"> 
        <span class="precent_txt precent_txt4"> 
          <div class="chartsdom" style="-webkit-tap-highlight-color: transparent; user-select: none; background: transparent;">
            <div style="position: relative; overflow: hidden; width: 50px; height: 50px; padding: 0px; margin: 0px; border-width: 0px;">
              <canvas data-zr-dom-id="zr_0" width="50" height="50" style="position: absolute; left: 0px; top: 0px; width: 50px; height: 50px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
            </div>
          </div> 
        </span>
        <div class="txt_right txt_right4"> 
          <span> 
            <div class="f_div aharrow_down">药师</div> 
            <div class="s_div s_div4">46人</div> 
          </span> 
        </div> 
      </div>
      <div class="arrow_contain arrow_contain4"> 
        <span class="arrow arrow_4"></span> 
      </div> 
    </div> 

  </div>

    
</template>

<script>
export default {
  name: "pyramid",
  data() {
    return {
      timer: null,
      number: null,
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.trigle {
  left: 600px; 
  top: 150px; 
  width: 720px; 
  height: 500px;
}

</style>
