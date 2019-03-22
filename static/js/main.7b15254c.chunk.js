(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/mbct-logo.05342f4c.png"},148:function(e,t,a){e.exports=a.p+"static/media/wt_400x400.496c3ff7.jpg"},154:function(e,t,a){e.exports=a(354)},159:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){},350:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(50),i=a.n(l),o=(a(159),a(10)),s=a(11),c=a(14),m=a(12),u=a(15),d=(a(161),a(146)),p=a(57),h=a(4),f=a(45),g=a(7),E=(a(163),a(147)),b=a.n(E),v=a(148),y=a.n(v),k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Container,null,r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{xs:"12",lg:"6"},r.a.createElement("div",null,r.a.createElement("h1",null,"CNJC"),r.a.createElement("h6",null,"Stanford Computational Neuroscience Journal Club"),r.a.createElement("br",null),r.a.createElement("p",null,"CNJC organizes regular meetings open to the Stanford community. We foster interactions between students, post-docs, and faculty to encourage a deeper understanding of core techniques in computational neuroscience and their applications in the wild. CNJC is proudly supported by the"," ",r.a.createElement("a",{href:"http://neuroscience.stanford.edu",target:"_blank",rel:"noopener noreferrer"},"Wu Tsai Neurosciences Institute")," ","and the"," ",r.a.createElement("a",{href:"https://neuroscience.stanford.edu/mbct/training-programs/mbct-training-program",target:"_blank",rel:"noopener noreferrer"},"Center for Mind, Brain, Computation, and Technology.")),r.a.createElement("h5",null,r.a.createElement(f.a,{to:"/About"},r.a.createElement(h.Button,{color:"secondary"},"Learn more"))," ",r.a.createElement(f.a,{to:"/PresentationSignup"},r.a.createElement(h.Button,{color:"primary"},"Sign up to present"))," ",r.a.createElement("a",{href:"https://github.com/stanford-cnjc/cnjc-code",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.Button,{color:"primary"},r.a.createElement(g.f,null)," Code on GitHub"))),r.a.createElement("br",null))),r.a.createElement(h.Col,{xs:"6",lg:"3"},r.a.createElement("img",{className:"logo",src:b.a,alt:"MBCT Logo"})),r.a.createElement(h.Col,{xs:"6",lg:"3"},r.a.createElement("img",{className:"logo",src:y.a,alt:"Wu Tsai Neuro Logo"}))))}}]),t}(n.Component),C=a(72),S=a(6),w=a.n(S),_=a(150),j=a.n(_),M=(a(167),a(59)),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleSearch=function(e){a.setState({sessions:a.trim_sessions(e)})},a.renderEmail=function(e){if(e.handle&&e.domain){var t=e.handle+"@"+e.domain,a=e.handle+e.date;return r.a.createElement("span",null,r.a.createElement(g.b,{color:"#8c1313",id:a}),r.a.createElement(h.UncontrolledTooltip,{autohide:!1,placement:"top-end",target:a},t," ",r.a.createElement(h.Button,{color:"link",size:"sm"},r.a.createElement(C.a,{className:"copy-src","data-clipboard-text":t,size:"1em"}))," "))}},a.renderURL=function(e){var t=e.url.includes("linkedin")?r.a.createElement(g.k,{color:"#4d4f53"}):r.a.createElement(g.g,{color:"#4d4f53"});if(e.url)return r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"}," ",t)},a.render_speaker=function(e){return r.a.createElement("span",null,r.a.createElement("strong",null,e.name)," ",a.renderEmail(e),a.renderURL(e))},a.render_speakers=function(e){return e.map(function(t,n){t.date=e.date;var l,i=a.render_speaker(t);return l=n===e.length-1?1===e.length?r.a.createElement("span",null,i,r.a.createElement("br",null)):r.a.createElement("span",null,"and ",i,r.a.createElement("br",null)):n===e.length-2?r.a.createElement("span",null,i," "):r.a.createElement("span",null,i,","," "),r.a.createElement("span",{key:t.name+t.date},l)})},a.render_file=function(e){var t=e.url,a="1.2em",l=r.a.createElement(g.c,{size:a});return t.endsWith(".ppt")||t.endsWith(".pptx")||t.endsWith(".key")?l=r.a.createElement(g.e,{size:a}):t.endsWith(".pdf")?l=r.a.createElement(g.d,{size:a}):t.endsWith(".png")||t.endsWith(".jpg")||t.endsWith(".jpeg")?l=r.a.createElement(g.i,{size:a}):t.startsWith("https://github")?l=r.a.createElement(g.f,{size:a}):t.startsWith("http")&&(l=r.a.createElement(g.j,{size:a})),r.a.createElement(n.Fragment,null,r.a.createElement("span",{className:"file_download_link"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",download:""},l," ",e.name)),r.a.createElement("br",null))},a.render_files=function(e){return e.map(function(e){return r.a.createElement("span",{key:e.url},a.render_file(e))})},a.render_sessions=function(e){return 0===e.length?r.a.createElement("div",null,"No sessions to display."):e.map(function(e){var t;e.speakers.date=e.date,t="TBD"===e.title?"gray":"black";var n=w()(e.date).format("dddd"),l=w()(e.date).format("MMMM Do YYYY"),i=null,o=w()(e.date+" "+e.time,"YYYY-MM-DD h:mm a"),s=o.fromNow();if(w()(e.date).format("YYYY-MM-DD")===w()().format("YYYY-MM-DD")&&s.startsWith("in")){var c="danger";s.endsWith("hours")&&(c="warning"),i=r.a.createElement(N,{session_time:o,color:c})}var m=null;e.files.length>0&&(m=r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement("h6",null," Session Resources ")));var u=null;e.description&&(u=r.a.createElement("span",null,r.a.createElement("p",null,e.description),r.a.createElement("hr",null)));var d=null;return e.rsvp_link&&s.startsWith("in")&&(d=r.a.createElement("span",null,r.a.createElement("hr",null),r.a.createElement("a",{href:e.rsvp_link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.Button,{color:"primary",outline:!0},"Food sign-up link for this session")),r.a.createElement("p",null,r.a.createElement("em",null,"Due to the nature of our funding, food is limited to Stanford affiliates. Sorry! However, everyone is welcome to attend and participate!")))),r.a.createElement("span",{key:e.date},r.a.createElement(h.ListGroupItem,null,r.a.createElement("div",{className:t},r.a.createElement("h4",null,e.title," ",i),n,", ",l,r.a.createElement("hr",null),u,a.render_speakers(e.speakers),e.location,", ",e.time,r.a.createElement("br",null),m,r.a.createElement(h.ListGroup,null,a.render_files(e.files)),d)),r.a.createElement("br",null))})},a.state={sessions:M.sessions},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"trim_sessions",value:function(e){if(""===e)return M.sessions;return new j.a(M.sessions,{shouldSort:!0,threshold:.2,location:0,distance:5e3,maxPatternLength:32,minMatchCharLength:2,keys:["title","location","date","speakers.name","files.name"]}).search(e)}},{key:"render_SessionGroups",value:function(){var e=this,t=this.state.sessions.map(function(e){var t=w()(e.date+" "+e.time,"YYYY-MM-DD h:mm a");return!!w()().isBefore(t)}),a=this.state.sessions.filter(function(e,a){return t[a]}),n=this.state.sessions.filter(function(e,a){return!t[a]});return a.sort(function(e,t){return w()(e.date).diff(w()(t.date))}),n.sort(function(e,t){return-w()(e.date).diff(w()(t.date))}),r.a.createElement(h.Container,null,r.a.createElement(h.Row,null,r.a.createElement(h.Col,{lg:"6",xs:"12"},r.a.createElement(h.Form,null,r.a.createElement(h.FormGroup,null,r.a.createElement(h.Label,{for:"search_input"},"Search meetings by keyword:"),r.a.createElement(h.Input,{type:"text",id:"search_input",onChange:function(t){return e.handleSearch("".concat(t.target.value))},placeholder:"e.g., t-SNE"}))))),r.a.createElement(h.Row,null,r.a.createElement(h.Col,{lg:"6",xs:"12"},r.a.createElement(h.Container,null,r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{xs:"12",lg:"12"},r.a.createElement("div",null,r.a.createElement("h2",null,"Upcoming Meetings"),r.a.createElement(h.ListGroup,null,this.render_sessions(a))))))),r.a.createElement(h.Col,{lg:"6",xs:"12"},r.a.createElement(h.Container,null,r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{xs:"12",lg:"12"},r.a.createElement("div",null,r.a.createElement("h2",null,"Past Meetings"),r.a.createElement(h.ListGroup,null,this.render_sessions(n)))))))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.render_SessionGroups())}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={time:w()(a.props.session_time,"YYYY-MM-DD h:mm a").fromNow()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.updateTime.bind(this),3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateTime",value:function(){this.setState({time:w()(this.props.session_time,"YYYY-MM-DD h:mm a").fromNow()})}},{key:"render",value:function(){return r.a.createElement(h.Badge,{pill:!0,color:this.props.color},"Happening ",this.state.time,"!")}}]),t}(n.Component),L=O,x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("br",null),r.a.createElement(k,{className:"left-align"}),r.a.createElement("br",null),r.a.createElement(L,null))}}]),t}(n.Component),D=a(18),Y=(a(169),a(46)),T=a(151),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleValidEmail=a.handleValidEmail.bind(Object(D.a)(Object(D.a)(a))),a.handleInvalidEmail=a.handleInvalidEmail.bind(Object(D.a)(Object(D.a)(a))),a.state={email:!1,valuesSubmitted:!1,button_content:"Submit",button_color:"primary",button_disable:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleValidEmail",value:function(e,t){var a=this;this.setState({email:t.address,error:!1});var n="https://docs.google.com/forms/d/e/1FAIpQLScwO2KzgGzU8ZN2Fqzoc36aL3ZdJguYjJbVLaYw7DEABSBblA/formResponse?usp=pp_url&entry.899316489="+t.newListservEmail;this.setState({button_content:r.a.createElement(T.RingLoader,{size:25,color:"purple"}),button_color:"secondary",button_disable:!0}),fetch(n,{method:"POST",body:"",mode:"no-cors"}).then(function(e){console.log(e),a.setState({valuesSubmitted:!0,button_color:"success",button_disable:!0,button_content:r.a.createElement(g.a,null)})})}},{key:"handleInvalidEmail",value:function(e,t,a){this.setState({email:a.email,error:!0})}},{key:"render_ListserveField",value:function(){return r.a.createElement("div",null,r.a.createElement(Y.AvForm,{onValidSubmit:this.handleValidEmail,onInvalidSubmit:this.handleInvaidSubmit},r.a.createElement(h.Row,{form:!0},r.a.createElement(h.Col,{lg:"6"},r.a.createElement(Y.AvField,{name:"newListservEmail",type:"text",placeholder:"junior@stanford.edu",validate:{required:{value:!0,errorMessage:"A valid email is required"},email:{value:!0,errorMessage:"A valid email is required"},pattern:{value:"^[A-Za-z0-9,_]+@stanford.edu$",errorMessage:"Only stanford.edu email addresses are allowed"}}})),r.a.createElement(h.Col,null,r.a.createElement(h.Button,{type:"submit",color:this.state.button_color,disabled:this.state.button_disable},this.state.button_content)))))}},{key:"render",value:function(){return r.a.createElement(h.Container,null,r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{id:"listserv_signup_nopad",xs:"12",lg:"6"},r.a.createElement("br",null),this.render_ListserveField())))}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Container,null,r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{xs:"12",lg:"12"},r.a.createElement("br",null),r.a.createElement("h3",null,"What is CNJC?"),r.a.createElement("p",null,"CNJC is a ",r.a.createElement("strong",null,"community")," of students and postdocs with a shared interest in computational neuroscience and techniques. We advocate for an inclusive, multidisciplinary approach to building an understanding of core concepts in computational neuroscience and aim to help each other master techniques in our research."),r.a.createElement("p",null,"CNJC is a ",r.a.createElement("strong",null,"workshop series")," held on a biweekly schedule. We work in small teams to lead sessions affording an in-depth discussion of a given topic."),r.a.createElement("p",null,"CNJC is a ",r.a.createElement("strong",null,"proud affiliate")," of the"," ",r.a.createElement("a",{href:"http://neuroscience.stanford.edu",target:"_blank",rel:"noopener noreferrer"},"Wu Tsai Neurosciences Institute")," ","and the"," ",r.a.createElement("a",{href:"https://neuroscience.stanford.edu/mbct/training-programs/mbct-training-program",target:"_blank",rel:"noopener noreferrer"},"Center for Mind, Brain, Computation, and Technology"),". We encourage CNJC attendees to also get involved in these great organizations to enrich their experience and learning!"),r.a.createElement("hr",null),r.a.createElement("h3",null,"How do I join?"),r.a.createElement("p",null,"Just start coming to meetings! We'd love to see you there. Please check the ",r.a.createElement(f.a,{to:"/"},"Homepage")," for a listing of meeting dates and locations."),r.a.createElement("h6",null,"Google Group"),r.a.createElement("p",null,"We have a Google Group dedicated to discussions about meetings and CNJC at large. Check it out"," ",r.a.createElement("a",{href:"https://groups.google.com/forum/#!forum/stanfordcompneuro",target:"_blank",rel:"noopener noreferrer"},"here!"," ",r.a.createElement(g.h,null))),r.a.createElement("h6",null,"CNJC listserv"),r.a.createElement("p",null,"Submit your email to recieve reminders from us about upcoming events:",r.a.createElement(B,null)),r.a.createElement("hr",null),r.a.createElement("h3",null,"What kind of topics does CNJC cover?"),r.a.createElement("p",null,"The best way to get a sense for the typical meeting is to check the ",r.a.createElement(f.a,{to:"/"},"Homepage"),". While that page is relatively empty for the time being, please see this incomplete list of topics as a good starting point. Meetings topics are meant to reflect the interests of the CNJC community. The best way to see a topic represented is to"," ",r.a.createElement(f.a,{to:"/PresentationSignup"},"sign up to present"),"!"),r.a.createElement("ul",null,r.a.createElement("li",null,"Linear dynamical systems"),r.a.createElement("li",null,"Dimensionality reduction"),r.a.createElement("li",null,"Bootstrapping"),r.a.createElement("li",null,"Probabilistic programming"),r.a.createElement("li",null,"Supervised classification"),r.a.createElement("li",null,"RNNs"),r.a.createElement("li",null,"Graph theory"),r.a.createElement("li",null,"Hierarchical Bayesian Models"),r.a.createElement("li",null,"Kalman filters"),r.a.createElement("li",null,"Hypothesis Testing"),r.a.createElement("li",null,"Markov models"),r.a.createElement("li",null,"Compressed sensing"),r.a.createElement("li",null,"Machine learning"),r.a.createElement("li",null,"and much more!")),r.a.createElement("hr",null))))}}]),t}(n.Component),W=a(75),A=(a(350),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(D.a)(Object(D.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.Navbar,{dark:!0,expand:"md",className:"cardinal"},r.a.createElement(W.LinkContainer,{to:"/"},r.a.createElement(h.NavbarBrand,null,"Stanford CNJC")),r.a.createElement(h.NavbarToggler,{onClick:this.toggle}),r.a.createElement(h.Collapse,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(h.Nav,{className:"ml-auto",navbar:!0},r.a.createElement(W.LinkContainer,{to:"/About"},r.a.createElement(h.NavLink,null,"About")),r.a.createElement(W.LinkContainer,{to:"/PresentationSignup"},r.a.createElement(h.NavLink,null,"Presentation Signup")),r.a.createElement(h.NavLink,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/stanford-cnjc/cnjc-code"},r.a.createElement(g.f,null)," Code")))))}}]),t}(n.Component)),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleValidSubmit=a.handleValidSubmit.bind(Object(D.a)(Object(D.a)(a))),a.handleInvalidSubmit=a.handleInvalidSubmit.bind(Object(D.a)(Object(D.a)(a))),a.closeModal=a.closeModal.bind(Object(D.a)(Object(D.a)(a))),a.state={email:!1,valuesSubmitted:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"closeModal",value:function(){this.setState({valuesSubmitted:!1,error:!1})}},{key:"handleValidSubmit",value:function(e,t){var a=this;this.setState({email:t.email,error:!1});var n="&entry.1312122491="+t.presenterNames.split(" ").join("+"),r="&entry.683825261="+t.presenterEmail,l="&entry.571595974="+t.topic.split(" ").join("+"),i="&entry.1239080828="+t.dateSelect.join(",+").split(" ").join("+"),o="&entry.581861638="+t.extra.split(" ").join("+");fetch("https://docs.google.com/forms/d/e/1FAIpQLScc_LMMmYn85kK6KZahvMnRmspgwrbOcmfge2BrGXbsa9vgdg/formResponse?usp=pp_url"+n+r+l+i+o,{method:"POST",body:"",mode:"no-cors"}).then(function(e){console.log(e),a.setState({valuesSubmitted:!0})})}},{key:"handleInvalidSubmit",value:function(e,t,a){this.setState({email:a.email,error:!0})}},{key:"render_valid_dates",value:function(){return M.sessions.filter(function(e){return"TBD"===e.title}).map(function(e){var t=w()(e.date).format("dddd"),a=w()(e.date).format("MMMM Do YYYY");return r.a.createElement("option",{key:e.date},t,", ",a)})}},{key:"render_form",value:function(){var e;return e=this.state.error?null:r.a.createElement(h.Modal,{isOpen:!1!==this.state.valuesSubmitted,toggle:this.closeModal},r.a.createElement(h.ModalHeader,{toggle:this.closeModal},"Form validated successfully."),r.a.createElement(h.ModalBody,null,"Your response has been submitted, thanks!"),r.a.createElement(h.ModalFooter,null,r.a.createElement(h.Button,{color:"primary",onClick:this.closeModal},"Ok, got it"))),r.a.createElement("div",null,r.a.createElement(Y.AvForm,{onValidSubmit:this.handleValidSubmit,onInvalidSubmit:this.handleInvalidSubmit},r.a.createElement(h.Row,{form:!0},r.a.createElement(h.Col,{lg:"6"},r.a.createElement(Y.AvField,{name:"presenterNames",label:"Your names",type:"textarea",placeholder:"Sally Stanford, Carl Cardinal, Terry Tree",errorMessage:"Names are required",required:!0})),r.a.createElement(h.Col,{lg:"6"},r.a.createElement(Y.AvField,{name:"presenterEmail",label:"An email to reach you at",type:"text",placeholder:"sally@stanford.edu",validate:{required:{value:!0,errorMessage:"A valid email is required"},email:{value:!0,errorMessage:"A valid email is required"},pattern:{value:"^[A-Za-z0-9._]+@stanford.edu$",errorMessage:"Only stanford.edu email addressess are allowed"}}}))),r.a.createElement(h.Row,{form:!0},r.a.createElement(h.Col,{lg:"6"},r.a.createElement(Y.AvField,{name:"topic",label:"Topic you'd like to present on",type:"textarea",placeholder:"e.g., Linear dynamical systems",errorMessage:"Topic is required",required:!0})),r.a.createElement(h.Col,{lg:"6"},r.a.createElement(Y.AvField,{name:"dateSelect",label:"Which date do you want to present on? (Select all that work)",type:"select",errorMessage:"Please choose at least one",required:!0,multiple:!0},this.render_valid_dates()))),r.a.createElement(h.Row,{form:!0},r.a.createElement(h.Col,{lg:"12"},r.a.createElement(Y.AvField,{name:"extra",label:"Anything else? If you selected multiple dates, please rank your preferences here!",type:"textarea"}))),r.a.createElement(h.Button,null,"Submit Sign-up Request")),e)}},{key:"render",value:function(){return r.a.createElement(h.Container,null,r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{xs:"12",lg:"12"},r.a.createElement("br",null),r.a.createElement("h2",null,"Signing up to present"),r.a.createElement(h.Card,null,r.a.createElement(h.CardBody,null,this.render_form())))),r.a.createElement("br",null),r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{xs:"12",lg:"12"},r.a.createElement("h2",null,"How to prepare a presentation"),r.a.createElement("hr",null),r.a.createElement("h5",null,"Step 0: Pick an available date"),r.a.createElement("p",null,'Upcoming session dates, times, and locations are listed as "TBD" in the "Upcoming Sessions" panel of the'," ",r.a.createElement(f.a,{to:"/"},"homepage"),"."),r.a.createElement("h5",null,"Step 1: Pick a topic"),r.a.createElement("p",null,"Choose a topic that you're interested in leading a discussion about. You ",r.a.createElement("strong",null,"do not")," need to be an expert in this topic already! All you need is a desire to learn more and guide a group discussion."),r.a.createElement("h5",null,"Step 2: Find co-presenters"),r.a.createElement("p",null,"Each session should be led by between 2-4 people. If you'd like to lead a session with more than 4 leaders, please email us separately so we can discuss logistics."),r.a.createElement("h5",null,"Step 3: Do your homework"),r.a.createElement("p",null,"Read about the topic, get a sense of how the method or technique applies to computational neuroscience, and think about the best way to discuss in a group context. This can mean walking through simple equations, a live programming demo, detailing how the method is used in a recent paper, or whatever else you think might be effective!"),r.a.createElement("h5",null,"Step 3.5: Chat with an expert"),r.a.createElement("p",null,"Information about faculty mentorship coming soon. Stay tuned!"),r.a.createElement("h5",null,"Step 4: Prepare the presentation"),r.a.createElement("p",null,"If you're making a slide deck, try to keep the amount of lecturing to a minimum. When possible, try to explain concepts and prompt discussion with live examples and derivations."),r.a.createElement("h5",null,"Step 5: Give a great presentation!"))))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Container,null,r.a.createElement(h.Row,{className:"vertical-align"},r.a.createElement(h.Col,{xs:"12",lg:"12"},r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Questions? Comments? Ideas?")),r.a.createElement("p",null,"Check out the"," ",r.a.createElement("a",{href:"https://groups.google.com/forum/#!forum/stanfordcompneuro",target:"_blank",rel:"noopener noreferrer"},"Google Group")," ","or"," ",r.a.createElement("span",null,"drop us an email!"," ",r.a.createElement(g.b,{color:"#8c1313",size:"1.5em",id:"EmailLelandStanford"}),r.a.createElement(h.UncontrolledTooltip,{autohide:!1,placement:"top-end",target:"EmailLelandStanford"},"stanford.cnjc@gmail.com"," ",r.a.createElement(h.Button,{color:"link",size:"sm"},r.a.createElement(C.a,{className:"copy-src","data-clipboard-text":"stanford.cnjc@gmail.com",size:"1em"}))," "))))))}}]),t}(n.Component),F=a(153),G=a.n(F),J=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e)),new G.a(".copy-src"),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{path:"/",component:A}),r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{exact:!0,path:"/About",component:P}),r.a.createElement(p.a,{exact:!0,path:"/PresentationSignup",component:z}),r.a.createElement(p.a,{path:"/",component:I})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(352);i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e){e.exports={sessions:[{date:"2018-12-06",speakers:[{name:"Tucker Fisher",handle:"tgfisher",domain:"stanford.edu",url:""},{name:"Eshed Margalit",handle:"eshedm",domain:"stanford.edu",url:"http://www.eshedmargalit.com"}],title:"CNJC Welcome and Introduction",location:"LKSC 308",time:"5:00PM",files:[{url:"https://docs.google.com/presentation/d/1vknVYQqJathSat6PnTUZcEWOQQOxnDSFTPMcEvObSq0/edit?usp=sharing",name:"Slide Deck"}]},{date:"2019-01-23",speakers:[{name:"Eshed Margalit",handle:"eshedm",domain:"stanford.edu",url:"http://www.eshedmargalit.com"},{name:"Tucker Fisher",handle:"tgfisher",domain:"stanford.edu",url:""}],title:"Visualizing High-Dimensional Data with t-SNE",description:"This meeting will explore and shed light on the t-SNE algorithm, an increasingly popular technique for visualization of high-dimensional data. We will discuss example cases from systems neuroscience, genetics and deep learning, while unpacking the algorithm and sharing practical tips to deploy t-SNE in your own work. Graduate students and postdocs are both encouraged to attend!",location:"LKSC 209",time:"6:00PM",files:[{url:"https://s3-us-west-1.amazonaws.com/stanford-cnjc-files/2018/jan/session_01/JMLR_2008.pdf",name:"Visualizing High-Dimensional Data Using t-SNE (van der Maaten et al., 2008)"},{url:"https://distill.pub/2016/misread-tsne/",name:"How to Use t-SNE Effectively (distill.pub)"},{url:"https://elifesciences.org/articles/34275",name:"Optogenetic dissection of descending behavioral control in Drosophila (Cande et al. 2018)"},{url:"https://s3-us-west-1.amazonaws.com/stanford-cnjc-files/2019/jan/session_01/Quadrato_et_al_2017.pdf",name:"Cell diversity and network dynamics in photosensitive human brain organoids (Quadrato et al., 2017)"},{url:"https://docs.google.com/presentation/d/1Cs82iV2hya07nIFiSSOJbL7yZ6UTfMsFdK9fpfu3Lwg/edit?usp=sharing",name:"Slide Deck"},{url:"https://github.com/stanford-cnjc/cnjc-code/tree/master/meetings/2019_01_tSNE",name:"Code used to generate figures"}]},{date:"2019-02-06",speakers:[{name:"Blue Sheffer",url:"http://www.bluesheffer.com/",handle:"bluesheffer",domain:"gmail.com"},{name:"Guy Wilson",url:"http://guyhwilson.com/",handle:"ghwilson",domain:"stanford.edu"}],title:"Linear Dynamical Systems for Time-Series Data Analysis",description:"This meeting will focus on using linear dynamical systems (LDS) for analyzing high-dimensional time-series data in neuroscience. We will go over the math behind LDS, discuss examples of their use in neuroscience, and get hands-on experience fitting and visualizing LDS using Jupyter Notebooks. Graduate students and postdocs are both encouraged to attend!",location:"LKSC 209",time:"6:00PM",rsvp_link:"https://docs.google.com/forms/d/e/1FAIpQLScWN8xcLJeQQMosPLT601Crg3bxAU9vySZGgfPR8yIhYOGz1Q/viewform?usp=sf_link",files:[{url:"https://www.tinyurl.com/linear4lyfe",name:"Jupyter Notebook tutorial on linear dynamical systems"},{url:"http://mlg.eng.cam.ac.uk/zoubin/papers/lds.pdf",name:"A Unifying Review of Linear Gaussian Models"},{url:"https://www.nature.com/articles/ncomms8759",name:"Single-trial dynamics of motor cortex and their applications to brain-machine interfaces (Kao et al. 2015)"},{url:"https://www.frontiersin.org/articles/10.3389/fncir.2014.00020/full",name:"Dynamical criticality during induction of anesthesia in human ECoG recordings (Alonso et al. 2014)"},{url:"https://github.com/slinderman/ssm",name:"SSM: Bayesian learning and inference for state space models (Scott Linderman)"},{url:"https://docs.google.com/presentation/d/1V6uyyHf6FUIuQQsv641_rPI9qkmGrNSgaUW10sQCjZM/edit?usp=sharing",name:"Slide Deck"},{url:"https://s3-us-west-1.amazonaws.com/stanford-cnjc-files/2019/feb/session_01/N2+on+food+L_2010_04_08__11_25_23___8___1_featuresN.hdf5",name:"Raw worm movement data (30.6 MB)"}]},{date:"2019-02-20",speakers:[{name:"Arielle Keller",url:"https://arielleskeller.wixsite.com/attention",handle:"askeller",domain:"stanford.edu"},{name:"Anna Khazenzon",url:"",handle:"annakhaz",domain:"stanford.edu"}],title:"Critical Evaluation of Dynamic Functional Connectivity and other Methods for Time-Series Analysis",description:"We will be discussing the promises and pitfalls of techniques such as sliding-window dynamic functional connectivity to assess brain dynamics. We will also touch on other methods for analysis of time series data in the context of human neuroimaging and electroencephalography. Graduate students and postdocs are both encouraged to attend!",location:"LKSC 209",time:"6:00PM",rsvp_link:"https://docs.google.com/forms/d/e/1FAIpQLSdNGGLM9lTIHuZZWkzvU0E8JifUrM3mz_ZxCk-9Oetm75fA1w/viewform?usp=sf_link",files:[]},{date:"2019-03-20",speakers:[{name:"",url:""}],title:"Speed Friending",description:"Get to know your fellow CNJCitizens at this casual speed-friending event. Discuss science, argue over the best coffee shop on campus, and meet your future presentation partner in this fun format!",location:"LKSC 203/204",time:"6:00PM",files:[]},{date:"2019-04-03",speakers:[{name:"Max Kanwal",url:"",handle:"kanwal",domain:"stanford.edu"},{name:"Saarthak Sarup",url:"",handle:"ssarup",domain:"stanford.edu"}],title:"Predictive Coding",location:"LKSC 208",time:"6:00PM",files:[]},{date:"2019-04-17",speakers:[{name:"Aran Nayebi",url:"https://sites.google.com/site/anayebihomepage/",handle:"anayebi",domain:"stanford.edu"},{name:"Josh Melander",url:"https://github.com/jbmelander",handle:"melander",domain:"stanford.edu"}],title:"Deep networks and the brain: simile or metaphor?",location:"LKSC 208",time:"6:00PM",files:[]},{date:"2019-05-01",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 208",time:"6:00PM",files:[]},{date:"2019-05-15",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2019-05-29",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2019-06-12",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2019-06-26",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2019-07-10",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2019-07-24",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2019-08-07",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2019-08-21",speakers:[{name:"Your name here!",url:""}],title:"TBD",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2018-06-26",speakers:[{name:"Jay Bhasin",url:""}],title:"Systems Consolidation and Attractor Dynamics in Cerebellar Learning",location:"LKSC 209",time:"6:00PM",files:[]},{date:"2018-05-23",speakers:[{name:"Kevin Feigelis",url:""}],title:"Modular Continual Learning in a Unified Visual Environment",location:"LKSC 209",time:"6:00PM",files:[{url:"https://arxiv.org/abs/1711.07425",name:"arXiv Link"}]}]}}},[[154,2,1]]]);
//# sourceMappingURL=main.7b15254c.chunk.js.map