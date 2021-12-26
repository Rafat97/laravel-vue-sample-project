"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[668],{2508:(e,t,a)=>{a.d(t,{Z:()=>n});const s={name:"developerFrom",props:{first_name:String,last_name:String,email:String,gender:String,skills:Array,submit_disabled:Boolean,errors:Array,formSubmit:Function,handleFileObject:Function},data:function(){return{form:{errors:this.errors,submit_disabled:this.submit_disabled},formData:{first_name:this.first_name,last_name:this.last_name,email:this.email,gender:this.gender,skills:this.skills},allSkills:[{name:"laravel",value:"Laravel",description:"Good at laravel"},{name:"codeigniter",value:"Codeigniter",description:"Good at Codeigniter"},{name:"ajax",value:"AJAX",description:"Good at AJAX"},{name:"vue_js",value:"Vue JS",description:"Good at VUE "},{name:"mysql",value:"MySQL",description:"Good at MySQL Database"},{name:"api",value:"API",description:"Good at API Design"}]}},computed:{formData:function(e){console.log("watch",e)}},updated:function(){},mounted:function(){}};const n=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{staticClass:"w-full max-w-xl mt-10 mx-auto",attrs:{action:"javascript:void(0)"},on:{submit:e.formSubmit}},[a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[a("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-first-name"}},[e._v("\n          First Name\n        ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.first_name,expression:"formData.first_name"}],staticClass:"\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-red-500\n            rounded\n            py-3\n            px-4\n            leading-tight\n            focus:outline-none focus:bg-white\n          ",attrs:{name:"first_name",id:"grid-first-name",type:"text",disabled:e.form.submit_disabled,placeholder:"Jon"},domProps:{value:e.formData.first_name},on:{input:function(t){t.target.composing||e.$set(e.formData,"first_name",t.target.value)}}}),e._v(" "),e.errors.first_name?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n          "+e._s(e.errors.first_name[0])+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"w-full md:w-1/2 px-3"},[a("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-last-name"}},[e._v("\n          Last Name\n        ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.last_name,expression:"formData.last_name"}],staticClass:"\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-gray-200\n            rounded\n            py-3\n            px-4\n            leading-tight\n            focus:outline-none focus:bg-white focus:border-gray-500\n          ",attrs:{name:"last_name",id:"grid-last-name",type:"text",disabled:e.form.submit_disabled,placeholder:"Doe"},domProps:{value:e.formData.last_name},on:{input:function(t){t.target.composing||e.$set(e.formData,"last_name",t.target.value)}}}),e._v(" "),e.errors.last_name?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n          "+e._s(e.errors.last_name[0])+"\n        ")]):e._e()])]),e._v(" "),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full px-3"},[a("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-password"}},[e._v("\n          Email\n        ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],staticClass:"\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-gray-200\n            rounded\n            py-3\n            px-4\n            mb-3\n            leading-tight\n            focus:outline-none focus:bg-white focus:border-gray-500\n          ",attrs:{name:"email",id:"grid-password",type:"email",disabled:e.form.submit_disabled,placeholder:"example@mail.com"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}}),e._v(" "),e.errors.email?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n          "+e._s(e.errors.email[0])+"\n        ")]):e._e()])]),e._v(" "),a("div",{},[a("label",{staticClass:"block text-sm font-medium text-gray-700"},[e._v(" Photo ")]),e._v(" "),a("div",{staticClass:"\n          mt-1\n          flex\n          justify-center\n          px-6\n          pt-5\n          pb-6\n          border-2 border-gray-300 border-dashed\n          rounded-md\n        "},[a("div",{staticClass:"space-y-1 text-center"},[a("svg",{staticClass:"mx-auto h-12 w-12 text-gray-400",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"}},[a("path",{attrs:{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),e._v(" "),a("div",{staticClass:"flex text-sm text-gray-600"},[a("label",{staticClass:"\n                relative\n                cursor-pointer\n                bg-white\n                rounded-md\n                font-medium\n                text-indigo-600\n                hover:text-indigo-500\n                focus-within:outline-none\n                focus-within:ring-2\n                focus-within:ring-offset-2\n                focus-within:ring-indigo-500\n              ",attrs:{for:"file-upload"}},[a("span",[e._v("Upload a file")]),e._v(" "),a("input",{ref:"file",staticClass:"sr-only",attrs:{id:"file-upload",name:"image",accept:".jpg,.png,.jpeg",type:"file",disabled:e.form.submit_disabled},on:{change:e.handleFileObject}})]),e._v(" "),a("p",{staticClass:"pl-1"},[e._v("or drag and drop")])]),e._v(" "),e.errors.image?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n            "+e._s(e.errors.image[0])+"\n          ")]):e._e()])])]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"mt-4 space-y-4"},[e.errors.gender?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n        "+e._s(e.errors.gender[0])+"\n      ")]):e._e(),e._v(" "),a("div",{staticClass:"flex items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.gender,expression:"formData.gender"}],staticClass:"\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",attrs:{id:"push-everything",name:"gender",value:"male",type:"radio"},domProps:{checked:e._q(e.formData.gender,"male")},on:{change:function(t){return e.$set(e.formData,"gender","male")}}}),e._v(" "),a("label",{staticClass:"ml-3 block text-sm font-medium text-gray-700",attrs:{for:"push-everything"}},[e._v("\n          Male\n        ")])]),e._v(" "),a("div",{staticClass:"flex items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.gender,expression:"formData.gender"}],staticClass:"\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",attrs:{id:"push-email",name:"gender",type:"radio",value:"female"},domProps:{checked:e._q(e.formData.gender,"female")},on:{change:function(t){return e.$set(e.formData,"gender","female")}}}),e._v(" "),a("label",{staticClass:"ml-3 block text-sm font-medium text-gray-700",attrs:{for:"push-email"}},[e._v("\n          Female\n        ")])]),e._v(" "),a("div",{staticClass:"flex items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.gender,expression:"formData.gender"}],staticClass:"\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",attrs:{id:"push-nothing",name:"gender",type:"radio",value:"other"},domProps:{checked:e._q(e.formData.gender,"other")},on:{change:function(t){return e.$set(e.formData,"gender","other")}}}),e._v(" "),a("label",{staticClass:"ml-3 block text-sm font-medium text-gray-700",attrs:{for:"push-nothing"}},[e._v("\n          Other\n        ")])])]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e.errors.skills?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n        "+e._s(e.errors.skills[0])+"\n      ")]):e._e(),e._v(" "),e._l(e.allSkills,(function(t,s){return a("div",{key:s,staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[a("div",{staticClass:"flex items-start my-2"},[a("div",{staticClass:"flex items-center h-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.skills,expression:"formData.skills"}],staticClass:"\n                focus:ring-indigo-500\n                h-4\n                w-4\n                text-indigo-600\n                border-gray-300\n                rounded\n              ",attrs:{id:[t.value],name:"skills",type:"checkbox"},domProps:{value:[t.name],checked:Array.isArray(e.formData.skills)?e._i(e.formData.skills,[t.name])>-1:e.formData.skills},on:{change:function(a){var s=e.formData.skills,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=[t.name],o=e._i(s,i);n.checked?o<0&&e.$set(e.formData,"skills",s.concat([i])):o>-1&&e.$set(e.formData,"skills",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.formData,"skills",r)}}})]),e._v(" "),a("div",{staticClass:"ml-3 text-sm"},[a("label",{staticClass:"font-medium text-gray-700",attrs:{for:[t.value]}},[e._v(e._s(t.value))]),e._v(" "),a("p",{staticClass:"text-gray-500"},[e._v(e._s(t.description))])])])])}))],2),e._v(" "),a("div",{staticClass:"shadow overflow-hidden sm:rounded-md"},[a("div",{staticClass:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[e.form.submit_disabled?e._e():a("button",{staticClass:"\n            inline-flex\n            justify-center\n            py-2\n            px-4\n            border border-transparent\n            shadow-sm\n            text-sm\n            font-medium\n            rounded-md\n            text-white\n            bg-indigo-600\n            hover:bg-indigo-700\n            focus:outline-none\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-indigo-500\n          ",attrs:{type:"submit",disabled:e.form.submit_disabled}},[e._v("\n          Save\n        ")])])])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-5"},[a("legend",{staticClass:"text-base font-medium text-gray-900"},[e._v("Gender")]),e._v(" "),a("p",{staticClass:"text-sm text-gray-500"},[e._v("Please select your gender")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-5"},[a("legend",{staticClass:"text-base font-medium text-gray-900"},[e._v("Skills")]),e._v(" "),a("p",{staticClass:"text-sm text-gray-500"},[e._v("Please select your skills")])])}],!1,null,null,null).exports},3668:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(9669),n=a.n(s),r=a(2508);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m={first_name:"",last_name:"",email:"",gender:"",avatar:"",skills:[]};const d={components:{DeveloperFormComponent:r.Z},data:function(){return{allSkills:[{name:"laravel",value:"Laravel",description:"Good at laravel"},{name:"codeigniter",value:"Codeigniter",description:"Good at Codeigniter"},{name:"ajax",value:"AJAX",description:"Good at AJAX"},{name:"vue_js",value:"Vue JS",description:"Good at VUE "},{name:"mysql",value:"MySQL",description:"Good at MySQL Database"},{name:"api",value:"API",description:"Good at API Design"}],formData:o({},m),form:{submit_disabled:!1,errors:[]}}},methods:{handleFileObject:function(e){this.formData.avatar=this.$refs.file.files[0]},developerFormSubmit:function(e){var t=this;this.form.submit_disabled=!0,console.log(this.formData);var a=new FormData;a.append("first_name",this.formData.first_name),a.append("last_name",this.formData.last_name),a.append("email",this.formData.email),a.append("gender",this.formData.gender),a.append("skills",this.formData.skills.join(",")),a.append("image",this.formData.avatar),n().post("http://localhost:8000/api/developer",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.form.submit_disabled=!1,t.form.errors=[],alert("New Developer added successfully"),t.formData=o({},m)})).catch((function(e){t.form.submit_disabled=!1,t.form.errors=e.response.data.errors,console.log(e.response),alert(e.response.data.message)}))}},mounted:function(){}};const c=(0,a(1900).Z)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-3xl font-bold my-10 text-center"},[e._v("\n    Add New Developer Information\n  ")]),e._v(" "),a("form",{staticClass:"w-full max-w-xl mt-10 mx-auto",attrs:{action:"javascript:void(0)"},on:{submit:e.developerFormSubmit}},[a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[a("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-first-name"}},[e._v("\n          First Name\n        ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.first_name,expression:"formData.first_name"}],staticClass:"\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-red-500\n            rounded\n            py-3\n            px-4\n            leading-tight\n            focus:outline-none focus:bg-white\n          ",attrs:{name:"first_name",id:"grid-first-name",type:"text",disabled:e.form.submit_disabled,placeholder:"Jon"},domProps:{value:e.formData.first_name},on:{input:function(t){t.target.composing||e.$set(e.formData,"first_name",t.target.value)}}}),e._v(" "),e.form.errors.first_name?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n          "+e._s(e.form.errors.first_name[0])+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"w-full md:w-1/2 px-3"},[a("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-last-name"}},[e._v("\n          Last Name\n        ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.last_name,expression:"formData.last_name"}],staticClass:"\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-gray-200\n            rounded\n            py-3\n            px-4\n            leading-tight\n            focus:outline-none focus:bg-white focus:border-gray-500\n          ",attrs:{name:"last_name",id:"grid-last-name",type:"text",disabled:e.form.submit_disabled,placeholder:"Doe"},domProps:{value:e.formData.last_name},on:{input:function(t){t.target.composing||e.$set(e.formData,"last_name",t.target.value)}}}),e._v(" "),e.form.errors.last_name?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n          "+e._s(e.form.errors.last_name[0])+"\n        ")]):e._e()])]),e._v(" "),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full px-3"},[a("label",{staticClass:"\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",attrs:{for:"grid-password"}},[e._v("\n          Email\n        ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],staticClass:"\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-gray-200\n            rounded\n            py-3\n            px-4\n            mb-3\n            leading-tight\n            focus:outline-none focus:bg-white focus:border-gray-500\n          ",attrs:{name:"email",id:"grid-password",type:"email",disabled:e.form.submit_disabled,placeholder:"example@mail.com"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}}),e._v(" "),e.form.errors.email?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n          "+e._s(e.form.errors.email[0])+"\n        ")]):e._e()])]),e._v(" "),a("div",{},[a("label",{staticClass:"block text-sm font-medium text-gray-700"},[e._v(" Photo ")]),e._v(" "),a("div",{staticClass:"\n          mt-1\n          flex\n          justify-center\n          px-6\n          pt-5\n          pb-6\n          border-2 border-gray-300 border-dashed\n          rounded-md\n        "},[a("div",{staticClass:"space-y-1 text-center"},[a("svg",{staticClass:"mx-auto h-12 w-12 text-gray-400",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"}},[a("path",{attrs:{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),e._v(" "),a("div",{staticClass:"flex text-sm text-gray-600"},[a("label",{staticClass:"\n                relative\n                cursor-pointer\n                bg-white\n                rounded-md\n                font-medium\n                text-indigo-600\n                hover:text-indigo-500\n                focus-within:outline-none\n                focus-within:ring-2\n                focus-within:ring-offset-2\n                focus-within:ring-indigo-500\n              ",attrs:{for:"file-upload"}},[a("span",[e._v("Upload a file")]),e._v(" "),a("input",{ref:"file",staticClass:"sr-only",attrs:{id:"file-upload",name:"image",accept:".jpg,.png,.jpeg",type:"file",disabled:e.form.submit_disabled},on:{change:function(t){return e.handleFileObject()}}})]),e._v(" "),a("p",{staticClass:"pl-1"},[e._v("or drag and drop")])]),e._v(" "),e.form.errors.image?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n            "+e._s(e.form.errors.image[0])+"\n          ")]):e._e()])])]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"mt-4 space-y-4"},[e.form.errors.gender?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n        "+e._s(e.form.errors.gender[0])+"\n      ")]):e._e(),e._v(" "),a("div",{staticClass:"flex items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.gender,expression:"formData.gender"}],staticClass:"\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",attrs:{id:"push-everything",name:"gender",value:"male",type:"radio"},domProps:{checked:e._q(e.formData.gender,"male")},on:{change:function(t){return e.$set(e.formData,"gender","male")}}}),e._v(" "),a("label",{staticClass:"ml-3 block text-sm font-medium text-gray-700",attrs:{for:"push-everything"}},[e._v("\n          Male\n        ")])]),e._v(" "),a("div",{staticClass:"flex items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.gender,expression:"formData.gender"}],staticClass:"\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",attrs:{id:"push-email",name:"gender",type:"radio",value:"female"},domProps:{checked:e._q(e.formData.gender,"female")},on:{change:function(t){return e.$set(e.formData,"gender","female")}}}),e._v(" "),a("label",{staticClass:"ml-3 block text-sm font-medium text-gray-700",attrs:{for:"push-email"}},[e._v("\n          Female\n        ")])]),e._v(" "),a("div",{staticClass:"flex items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.gender,expression:"formData.gender"}],staticClass:"\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",attrs:{id:"push-nothing",name:"gender",type:"radio",value:"other"},domProps:{checked:e._q(e.formData.gender,"other")},on:{change:function(t){return e.$set(e.formData,"gender","other")}}}),e._v(" "),a("label",{staticClass:"ml-3 block text-sm font-medium text-gray-700",attrs:{for:"push-nothing"}},[e._v("\n          Other\n        ")])])]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e.form.errors.skills?a("p",{staticClass:"text-red-500 text-xs italic"},[e._v("\n        "+e._s(e.form.errors.skills[0])+"\n      ")]):e._e(),e._v(" "),e._l(e.allSkills,(function(t,s){return a("div",{key:s,staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[a("div",{staticClass:"flex items-start my-2"},[a("div",{staticClass:"flex items-center h-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.skills,expression:"formData.skills"}],staticClass:"\n                focus:ring-indigo-500\n                h-4\n                w-4\n                text-indigo-600\n                border-gray-300\n                rounded\n              ",attrs:{id:[t.value],name:"skills",type:"checkbox"},domProps:{value:[t.name],checked:Array.isArray(e.formData.skills)?e._i(e.formData.skills,[t.name])>-1:e.formData.skills},on:{change:function(a){var s=e.formData.skills,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=[t.name],o=e._i(s,i);n.checked?o<0&&e.$set(e.formData,"skills",s.concat([i])):o>-1&&e.$set(e.formData,"skills",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.formData,"skills",r)}}})]),e._v(" "),a("div",{staticClass:"ml-3 text-sm"},[a("label",{staticClass:"font-medium text-gray-700",attrs:{for:[t.value]}},[e._v(e._s(t.value))]),e._v(" "),a("p",{staticClass:"text-gray-500"},[e._v(e._s(t.description))])])])])}))],2),e._v(" "),a("div",{staticClass:"shadow overflow-hidden sm:rounded-md"},[a("div",{staticClass:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[e.form.submit_disabled?e._e():a("button",{staticClass:"\n            inline-flex\n            justify-center\n            py-2\n            px-4\n            border border-transparent\n            shadow-sm\n            text-sm\n            font-medium\n            rounded-md\n            text-white\n            bg-indigo-600\n            hover:bg-indigo-700\n            focus:outline-none\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-indigo-500\n          ",attrs:{type:"submit",disabled:e.form.submit_disabled}},[e._v("\n          Save\n        ")])])])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-5"},[a("legend",{staticClass:"text-base font-medium text-gray-900"},[e._v("Gender")]),e._v(" "),a("p",{staticClass:"text-sm text-gray-500"},[e._v("Please select your gender")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-5"},[a("legend",{staticClass:"text-base font-medium text-gray-900"},[e._v("Skills")]),e._v(" "),a("p",{staticClass:"text-sm text-gray-500"},[e._v("Please select your skills")])])}],!1,null,null,null).exports}}]);