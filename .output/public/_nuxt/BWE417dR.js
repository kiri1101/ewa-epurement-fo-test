import{s as a}from"./CNhoFLiV.js";import{a1 as r,as as e,c as n,o as s,p,al as i}from"./CnwOumKi.js";var u=`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,d={root:"p-radiobutton-group p-component"},c=r.extend({name:"radiobuttongroup",style:u,classes:d}),l={name:"BaseRadioButtonGroup",extends:a,style:c,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},m={name:"RadioButtonGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function f(t,o,g,h,$,v){return s(),n("div",i({class:t.cx("root")},t.ptmi("root")),[p(t.$slots,"default")],16)}m.render=f;export{m as default};
