return async function(){

const prtHtml = document.getElementById('print').innerHTML
let stylesHtml = '';
for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
  stylesHtml += node.outerHTML;
}


const WinPrint = window.open()//window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');

WinPrint.document.write(`<!DOCTYPE html>
<html>
 <head>
 <style>
   table {
    border: solid #000 !important;
    border-width: 1px 0 0 1px !important;
}
th, td {
    border: solid #000 !important;
    border-width: 0 1px 1px 0 !important;
}
      .log-picture{
         background-image:url("https://firebasestorage.googleapis.com/v0/b/tangle-157402.appspot.com/o/-NLvDXaAsLMKE7dEZj5z%2Fmwhq_logo%20BLACK.png?alt=media&amp;token=3c704ff9-5bce-4b87-a4d0-9b12829ce983");
         background-size: contain;
         background-repeat: no-repeat;
         background-position:center;
         width:400px;
         height:100px;
         margin-left:20px;

       }
      @font-face {
            font-family: 'Futura';
            src: url(https://cdn.mywardrobehq.com/static/10856/mwhq/fonts/Futura-Book.woff2) format('woff2'),
            url(https://cdn.mywardrobehq.com/static/10856/mwhq/fonts/Futura-Book.woff) format('woff'),
            url(https://cdn.mywardrobehq.com/static/10856/mwhq/fonts/Futura-Book.ttf) format('truetype');
            font-style: normal;
            font-weight: 400;
        }

        @font-face {
            font-family: 'Futura';
            src: url(https://cdn.mywardrobehq.com/static/10856/mwhq/fonts/Futura-Medium.woff2) format('woff2'),
            url(https://cdn.mywardrobehq.com/static/10856/mwhq/fonts/Futura-Medium.woff) format('woff'),
            url(https://cdn.mywardrobehq.com/static/10856/mwhq/fonts/Futura-Medium.ttf) format('truetype');
            font-style: normal;
            font-weight: 500;
        }

.tCustomComponent * {
    font-family: 'Futura' !important;
}
 .top-raport>div {
         width: 100%;
         display: flex;
         justify-content: space-between;

       }
       .top-raport>div div {
         display: flex;
         flex-direction: column;
         width: 100%;
         text-align: right;
         padding: .5em;
       }
       .logo {
         display: flex;
         justify-content: center;
          margin:auto;
       }

       .logo>img {
         width: 300px;
         height: 100px;
         	object-position: 0% 0%;
	-o-object-fit: contain;
	object-fit: contain;
	object-position: center;
	-o-object-position: center;
       }
       td,tr,
       th {
         border: 1px solid black;
         margin:0!important
       }

       th {
         padding: .3em;
         text-align: center;
         background-color: #f8f9fe;
       }

       td {
         text-align: right;
         padding-right: .3em;

       }

       .th-name {
         text-align: center;

       }

       .bottom-row {
         border-top: 3px solid black;
       }

       h2 {
         padding: .8em;
         width: 100%;
         text-align: center;
         font-weight: bold;
       }

       .tab-class {
         margin: auto;

       }

       .top-raport {

         margin: auto;
         background-color: #f8f9fe;
       }

       .top-raport>div {
         width: 100%;
         display: flex;
         justify-content: space-between;

       }

       .top-raport>div div {
         display: flex;
         flex-direction: column;
         width: 100%;
         text-align: right;
         padding: .5em;
       }

       .sub-title {
         width: 100%;
         text-align: center;
         color: rgba(0, 0, 0, .2);
         letter-spacing: .1rem;
         padding: .1em;
       }

       h1 {
         width: 100%;
         text-align: center;
         letter-spacing: .3rem;
       }

       .small-tab {
         width: 50%;
         margin-top: .3em;

       }

       .vendor-total {
         background-color: #bec7f7;
       }

       .box-small-table {


         display: flex;
         flex-direction: column;
         margin: auto;
       }

       h3 {
         margin-top: 1em;
         padding: .5em;
         font-weight: bold;
       }

       .select-box {
         width: 50%;
         display: flex;
         justify-content: end;
       }

       .box-header {
         display: flex;
         width: 100%;
         justify-content: space-around;
       }

       h1,
       h5,
       .top-raport,
       h2,
       table,
       h3,
       .btn-mwhq {
         font-family: 'Futura' !important;
       }

       .btn-mwhq {
         text-transform: uppercase;
         letter-spacing: .1rem;
       }
       .sidenav{
    left:-2000px!important;
}
.showSideNav{
    left:0!important;
}

/* .dashboard__wrapper > .appNav {
    display: none !important;
} */
#panel{
    margin: 0!important;
}
.dashboard__wrapper._navInSideBar .dashboard__content{
    padding: 0!important;
}

       /* Size in mm */    
@page {
  size: 100mm 200mm landscape;
}

        
 </style>

  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

setTimeout(() => {
WinPrint.document.close();
WinPrint.focus();
WinPrint.print();
 
}, "3000")
//WinPrint.close();
}

