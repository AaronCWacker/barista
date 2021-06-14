(self.webpackChunkbarista_docs=self.webpackChunkbarista_docs||[]).push([[464],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5807:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"setup-scan-project",title:"How to Setup a Scan Project",sidebar_label:"setup-scan-project"},s={unversionedId:"setup-scan-project",id:"setup-scan-project",isDocsHomePage:!1,title:"How to Setup a Scan Project",description:'1. Project Name is user defined - note that certain special characters such as "()" are not supported and will cause errors during scan operations',source:"@site/docs/how-to-setup-a-scan-project.md",sourceDirName:".",slug:"/setup-scan-project",permalink:"/barista/docs/setup-scan-project",version:"current",sidebar_label:"setup-scan-project",frontMatter:{id:"setup-scan-project",title:"How to Setup a Scan Project",sidebar_label:"setup-scan-project"},sidebar:"someSidebar",previous:{title:"How to Setup Admin Tables",permalink:"/barista/docs/setup-admin-tables"},next:{title:"Contributing to Barista",permalink:"/barista/docs/contributions"}},p=[],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Project Name"),' is user defined - note that certain special characters such as "()" are not supported and will cause errors during scan operations'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"GitHub Repo")," is the full URL to your source code repository e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://github.com/atom/atom")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Package Manager")," should match your tech stack's dependency management process.  Choosing ",(0,o.kt)("inlineCode",{parentName:"li"},"None")," will default to a simple scan of your repo without pulling dependencies using the scancode-toolkit."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Custom Package Manager Path")," is optional but will allow you to designate the location of a package manifest file deeper in your repo.  e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"src/")," would indicate to drill down to the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," directory to find the package.json file for an NPM project."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Custom Package Manager Filename")," is optional but supports non-standard package manifest file names.  e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"pom.xml")," is normal for a Maven project but Maven supports any name you choose."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Requested Version")," is user defined but required.  It can be used to track multiple versions of your project if desired.  Simply re-create your project\nwith a new version number."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ASK ID")," is user defined to allow tracking an outside application ID for reporting purposes.  The column name can be renamed in the system configuration table."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Owner")," defaults the name associated with the authenticated user but is purely informational."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Deployment Type")," is critical to proper application of license business rules",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Distributed")," indicates your application will be shipped external to your organization for deployment elsewhere"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Externally Facing Internal Hosted")," indicates your application will be housed internally but access provided to outside entities - e.g. a web site or hosted API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Internally Consumed")," indicates your application will only be exposed or used on your internal network"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Path to upload file for scanning")," allows for the situation where your code is not available from a Git compatible repository.  This feature requires a valid URL ending with a compressed archive filename.  Most compression formats are supported; zip, tar etc.  GitHub Repo field must be blank for this feature to work."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Output")," is not currently used but envisioned for certain reporting or export needs"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Output Email")," requires a valid SMTP formatted email address - ",(0,o.kt)("a",{parentName:"li",href:"mailto:user@domain.com"},"user@domain.com")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Project Development Type")," is used to distinguish between your organizational development projects and external open source projects you simply intend to consume as is.  If this field is set to community and the GitHub repo field is blank, Barista will allow the user to manually indicate the applicable license and will do a simple name and version lookup on nvd.nist.gov to discover any documented vulnerabilities."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Project Description")," is user defined.")))}u.isMDXComponent=!0}}]);