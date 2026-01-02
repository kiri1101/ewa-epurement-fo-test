import{s as r}from"./CJDWAyXx.js";import{Y as a,an as e,c as n,o as s,p,ag as i}from"./C8ladftT.js";var u=`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,d={root:"p-radiobutton-group p-component"},c=a.extend({name:"radiobuttongroup",style:u,classes:d}),m={name:"BaseRadioButtonGroup",extends:r,style:c,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},l={name:"RadioButtonGroup",extends:m,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function f(t,o,g,h,$,v){return s(),n("div",i({class:t.cx("root")},t.ptmi("root")),[p(t.$slots,"default")],16)}l.render=f;export{l as default};
