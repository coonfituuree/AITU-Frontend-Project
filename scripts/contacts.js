"use strict";

$(function () {
  console.log("✅ jQuery is ready!");

  // Clockф
  function updateTime() {
    $("#datetime").text(new Date().toLocaleString("en-US", {
      year: "numeric", month: "long", day: "numeric",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    }));
  }
  setInterval(updateTime, 1000); updateTime();

  // Background + Mode + Time
  $("#showTimeBtn").on("click", () => alert("🕒 " + new Date().toLocaleTimeString()));
  $("#colorBtn").on("click", () => {
    const c = ["#F97316","#3B82F6","#10B981","#F43F5E","#8B5CF6"];
    $("body").css("background-color", c[Math.floor(Math.random()*c.length)]);
  });
  $("#modeBtn").on("click", function(){
    $("body").toggleClass("dark-mode");
    $(this).text($("body").hasClass("dark-mode")?"☀️ Day Mode":"🌙 Night Mode");
  });

  // Gallery fade
  $(".gallery-thumbs img").on("click", function(){
    $("#mainImage").fadeOut(200,()=>{
      $("#mainImage").attr("src",$(this).attr("src")).fadeIn(200);
    });
  });

  // ====== LIVE SEARCH + AUTOCOMPLETE + HIGHLIGHT ======
  const faqList=["Booking","Tours","Discounts","Payment","Travel","Hotels"];
  const $input=$("#serviceInput");

  // Live filter FAQ
  $input.on("keyup",function(){
    const val=$(this).val().toLowerCase();
    $(".accordion-question").each(function(i){
      const match=$(this).text().toLowerCase().includes(val);
      $(this).toggle(match);
      $(".accordion-answer").eq(i).toggle(match);
    });
  });

  // Autocomplete
  $input.on("input",function(){
    const val=$(this).val();
    $("#suggestions").remove();
    if(!val) return;
    const $drop=$("<div id='suggestions' class='list-group position-absolute bg-white w-100 shadow-sm'></div>");
    faqList.forEach(item=>{
      if(item.toLowerCase().includes(val.toLowerCase()))
        $drop.append(`<button type='button' class='list-group-item list-group-item-action'>${item}</button>`);
    });
    $(this).after($drop);
    $("#suggestions button").on("click",function(){
      $input.val($(this).text()); $("#suggestions").remove();
    });
  });
  $(document).on("click", e => {
    if(!$(e.target).closest("#serviceInput,#suggestions").length) $("#suggestions").remove();
  });

  // Highlight
  $("#serviceForm").on("submit",function(e){
    e.preventDefault();
    const word=$input.val().trim();
    if(!word) return;
    $(".accordion-answer").each(function(){
      let text=$(this).text();
      const regex=new RegExp(`(${word})`,"gi");
      text=text.replace(regex,"<mark>$1</mark>");
      $(this).html(text);
    });
  });

  // ====== SCROLL BAR + COUNTER ======
  $("body").append("<div id='scrollBar' style='position:fixed;top:0;left:0;height:6px;background:#3B82F6;width:0;z-index:9999;'></div>");
  $(window).on("scroll",()=>{
    const p=$(window).scrollTop()/($(document).height()-$(window).height())*100;
    $("#scrollBar").css("width",p+"%");
  });

  $(".counter").each(function(){
    const $t=$(this),to=$t.data("target");
    $({num:0}).animate({num:to},{
      duration:2000,step:function(now){$t.text(Math.floor(now));}
    });
  });

  // ====== SPINNER + TOAST ======
  $("body").append(`<div id="toast" style="position:fixed;right:20px;bottom:25px;background:#16a34a;color:white;padding:10px 18px;border-radius:8px;display:none;z-index:9999;"></div>`);

  $("#contactForm").on("submit",function(e){
    e.preventDefault();
    const btn=$("#contactForm button");
    btn.html(`<span class='spinner-border spinner-border-sm'></span> Please wait...`).prop("disabled",true);
    setTimeout(()=>{
      btn.html("Send Message").prop("disabled",false);
      showToast("✅ Form submitted!");
      this.reset();
    },2000);
  });

  function showToast(msg){
    $("#toast").stop(true,true).text(msg).fadeIn(300).delay(1500).fadeOut(400);
  }

  // Copy Button
  $("<button class='btn btn-outline-secondary mt-2 copyBtn'>Copy Office Info</button>").insertAfter(".info-box:first");
  $(".copyBtn").on("click",function(){
    navigator.clipboard.writeText($(".info-box:first").text());
    showToast("📋 Copied to clipboard!");
  });

  // ====== LAZY LOAD ======
  $("img").each(function(){
    const src=$(this).attr("src");
    $(this).attr("data-src",src).attr("src","https://via.placeholder.com/10x10?text=...");
  });

  function lazyLoad(){
    $("img[data-src]").each(function(){
      
      if($(this).offset().top < window.innerHeight + $(window).scrollTop()){
        $(this).attr("src",$(this).attr("data-src")).removeAttr("data-src");
      }
    });
  }
  $(window).on("scroll load",lazyLoad);
  lazyLoad();
});