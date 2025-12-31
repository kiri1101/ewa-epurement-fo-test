import{s as t}from"./B_eUIpq6.js";import{Q as a,ah as r,c as s,o as n,k as p,a9 as c}from"./wCqVNk7m.js";var i=`
    .p-checkbox-group {
        display: inline-flex;
    }
`,u={root:"p-checkbox-group p-component"},m=a.extend({name:"checkboxgroup",style:i,classes:u}),h={name:"BaseCheckboxGroup",extends:t,style:m,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},l={name:"CheckboxGroup",extends:h,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function d(e,o,x,k,f,g){return n(),s("div",c({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default")],16)}l.render=d;export{l as default};
