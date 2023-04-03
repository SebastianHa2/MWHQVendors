try{

    //let base64 = context.payload.base64data.substr(context.payload.base64data.indexOf(',')+1)

  let msg = {
        to: context.payload.email,
        from: 'accounts@mywardrobehq.com',
        subject: 'Your monthly MY WARDROBE HQ Statement',
        html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title>
</title>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css" data-inliner="ignore">
.mj-outlook-group-fix { width:100% !important; }
</style>
<![endif]-->
<!--[if !mso]><!--><!--<![endif]-->
<style>a:link {color:#212529;font-weight:normal;text-decoration:underline;font-style:normal}
a:visited {color:#212529;font-weight:normal;text-decoration:underline;font-style:normal}
a:active {color:#212529;font-weight:normal;text-decoration:underline;font-style:normal}
a:hover {color:#212529;font-weight:normal;text-decoration:underline;font-style:normal}</style><style>@import url(https://static-forms.klaviyo.com/fonts/api/v1/RBGQ7x/custom_fonts.css);
#outlook a {
padding: 0
}
body {
margin: 0;
padding: 0;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%
}
table, td {
border-collapse: collapse;
mso-table-lspace: 0;
mso-table-rspace: 0
}
img {
border: 0;
height: auto;
line-height: 100%;
outline: none;
text-decoration: none;
-ms-interpolation-mode: bicubic
}
p {
display: block;
margin: 13px 0
}
@media only screen and (min-width: 480px) {
.mj-column-per-100 {
width: 100% !important;
max-width: 100%
}
}
.moz-text-html .mj-column-per-100 {
width: 100% !important;
max-width: 100%
}
.hlb-subblk td {
word-break: normal
}
@media only screen and (max-width: 480px) {
.hlb-wrapper .hlb-block-settings-content {
padding: 9px !important
}
.hlb-logo {
padding-bottom: 9px !important
}
.r2-tbl {
width: 100%
}
.r2-tbl .lnk {
width: 100%
}
.r2-tbl .hlb-subblk:last-child {
padding-right: 0 !important
}
.r2-tbl .hlb-subblk {
padding-right: 10px !important
}
.kl-hlb-stack {
display: block !important;
width: 100% !important;
padding-right: 0 !important
}
.kl-hlb-stack.vspc {
margin-bottom: 9px
}
.kl-hlb-wrap {
display: inline-block !important;
width: auto !important
}
.kl-hlb-no-wrap {
display: table-cell !important
}
.kl-hlb-wrap.nospc.nospc {
padding-right: 0 !important
}
}
@media only screen and (max-width: 480px) {
.component-wrapper .mob-no-spc {
padding-left: 0 !important;
padding-right: 0 !important
}
}
@media only screen and (max-width: 480px) {
td.kl-img-base-auto-width {
width: 100% !important
}
}
@media only screen and (max-width: 480px) {
.kl-text {
padding-right: 18px !important;
padding-left: 18px !important
}
}
.kl-text-table-layout > table {
table-layout: fixed
}
.kl-text-table-layout > table > tbody > tr > td > table {
table-layout: fixed
}
img {
border: 0;
height: auto;
line-height: 100%;
outline: none;
text-decoration: none;
max-width: 100%
}
.root-container {
background-repeat: repeat !important;
background-size: auto !important;
background-position: left top !important
}
.root-container-spacing {
padding-top: 50px !important;
padding-bottom: 20px !important;
font-size: 0 !important
}
.content-padding {
padding-left: 0 !important;
padding-right: 0 !important
}
.content-padding.first {
padding-top: 0 !important
}
.content-padding.last {
padding-bottom: 0 !important
}
@media only screen and (max-width: 480px) {
td.mobile-only {
display: table-cell !important
}
div.mobile-only {
display: block !important
}
table.mobile-only {
display: table !important
}
.desktop-only {
display: none !important
}
}
@media only screen and (max-width: 480px) {
.table-mobile-only {
display: table-cell !important;
max-height: none !important
}
.table-mobile-only.block {
display: block !important
}
.table-mobile-only.inline-block {
display: inline-block !important
}
.table-desktop-only {
max-height: 0 !important;
display: none !important;
mso-hide: all !important;
overflow: hidden !important
}
}
.kl-text div {
margin: 0
}
p {
margin-left: 0;
margin-right: 0;
margin-top: 0;
margin-bottom: 0;
padding-bottom: 1em
}
@media only screen and (max-width: 480px) {
.kl-text div, .kl-table-subblock div, .kl-split-subblock div {
font-size: 14px !important;
line-height: 1.3 !important
}
}
h1 {
color: #212529;
font-family: "Helvetica Neue", Arial;
font-size: 40px;
font-style: normal;
font-weight: normal;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 20px;
text-align: left
}
@media only screen and (max-width: 480px) {
h1 {
font-size: 40px !important;
line-height: 1.1 !important
}
}
h2 {
color: #212529;
font-family: "Helvetica Neue", Arial;
font-size: 32px;
font-style: normal;
font-weight: bold;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 16px;
text-align: left
}
@media only screen and (max-width: 480px) {
h2 {
font-size: 32px !important;
line-height: 1.1 !important
}
}
h3 {
color: #212529;
font-family: "Helvetica Neue", Arial;
font-size: 24px;
font-style: normal;
font-weight: bold;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 12px;
text-align: left
}
@media only screen and (max-width: 480px) {
h3 {
font-size: 24px !important;
line-height: 1.1 !important
}
}
h4 {
color: #212529;
font-family: "Helvetica Neue", Arial;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.1;
letter-spacing: 0;
margin: 0;
margin-bottom: 9px;
text-align: left
}
@media only screen and (max-width: 480px) {
h4 {
font-size: 18px !important;
line-height: 1.1 !important
}
}
@media only screen and (max-width: 480px) {
.root-container {
width: 100% !important
}
.root-container-spacing {
padding: 10px !important
}
.content-padding {
padding-left: 0 !important;
padding-right: 0 !important
}
.content-padding.first {
padding-top: 0 !important
}
.content-padding.last {
padding-bottom: 0 !important
}
.component-wrapper {
padding-left: 0 !important;
padding-right: 0 !important
}
}</style></head>
<body style="word-spacing:normal;background-color:#f7f7f7;">
<div class="root-container" id="bodyTable" style="background-color:#f7f7f7;">
<div class="root-container-spacing">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section" role="presentation" style="width:100%;">
<tbody>
<tr>
<td>
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-section-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0px 0px 0px 0px;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0px 0px 0px 0px;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><![endif]-->
<div class="content-padding first last">
<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-row-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div class="kl-row" style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="kl-column-outlook" style="vertical-align:top;width:600px;" ><![endif]-->
<div class="mj-column-per-100 mj-outlook-group-fix kl-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;" vertical-align="middle">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper hlb-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="hlb-block-settings-content" style="vertical-align:top;padding-top:9px;padding-right:21px;padding-bottom:9px;padding-left:21px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="top" class="kl-header-link-bar" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:0;" width="100%">
<tbody>
<tr>
<td align="center" class="hlb-logo" style="display:table-cell;width:100%;padding-bottom:14px;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<!--[if true]><td style="width:286px;" bgcolor="transparent"><![endif]-->
<!--[if !true]><!--><td style="width:286px;"><!--<![endif]-->
<img src="https://d3k81ch9hvuctc.cloudfront.net/company/RBGQ7x/images/41262b8f-c520-4ff9-a508-b4d386e9151e.jpeg" style="display:block;outline:none;text-decoration:none;height:auto;width:100%;background-color:transparent;" width="286"/>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
<table align="center" cellpadding="0" cellspacing="0" class="r2-tbl" style="table-layout:fixed;" width="100%">
<tr style="text-align:center;">
<td align="center" class="kl-hlb-stack block vspc hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:5px;cursor:auto;font-style:Normal;mso-padding-alt:9px 10px 9px 10px;background:transparent;" valign="middle">
<a href="http://www.mywardrobehq.com/new-in" style='color:#040000; font-style:Normal; font-weight:700; text-decoration:none; display:inline-block; background:transparent; font-family:"futura-pt", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:13px; line-height:100%; letter-spacing:2px; margin:0; text-transform:none; padding:9px 10px 9px 10px; mso-padding-alt:0; border-radius:5px' target="_blank">
NEW IN
</a>
</td>
</tr>
</table>
</td>
<td align="center" class="kl-hlb-stack block vspc hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:5px;cursor:auto;font-style:Normal;mso-padding-alt:9px 10px 9px 10px;background:transparent;" valign="middle">
<a href="https://www.mywardrobehq.com/dresses" style='color:#040000; font-style:Normal; font-weight:700; text-decoration:none; display:inline-block; background:transparent; font-family:"futura-pt", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:13px; line-height:100%; letter-spacing:2px; margin:0; text-transform:none; padding:9px 10px 9px 10px; mso-padding-alt:0; border-radius:5px' target="_blank">
DRESSES
</a>
</td>
</tr>
</table>
</td>
<td align="center" class="kl-hlb-stack block vspc hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:5px;cursor:auto;font-style:Normal;mso-padding-alt:9px 10px 9px 10px;background:transparent;" valign="middle">
<a href="https://www.mywardrobehq.com/bags" style='color:#040000; font-style:Normal; font-weight:700; text-decoration:none; display:inline-block; background:transparent; font-family:"futura-pt", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:13px; line-height:100%; letter-spacing:2px; margin:0; text-transform:none; padding:9px 10px 9px 10px; mso-padding-alt:0; border-radius:5px' target="_blank">
BAGS
</a>
</td>
</tr>
</table>
</td>
<td align="center" class="kl-hlb-stack block vspc hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:5px;cursor:auto;font-style:Normal;mso-padding-alt:9px 10px 9px 10px;background:transparent;" valign="middle">
<a href="https://www.mywardrobehq.com/clothing" style='color:#040000; font-style:Normal; font-weight:700; text-decoration:none; display:inline-block; background:transparent; font-family:"futura-pt", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:13px; line-height:100%; letter-spacing:2px; margin:0; text-transform:none; padding:9px 10px 9px 10px; mso-padding-alt:0; border-radius:5px' target="_blank">
CLOTHING
</a>
</td>
</tr>
</table>
</td>
<td align="center" class="kl-hlb-stack block vspc hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:5px;cursor:auto;font-style:Normal;mso-padding-alt:9px 10px 9px 10px;background:transparent;" valign="middle">
<a href="https://www.mywardrobehq.com/shoes" style='color:#040000; font-style:Normal; font-weight:700; text-decoration:none; display:inline-block; background:transparent; font-family:"futura-pt", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:13px; line-height:100%; letter-spacing:2px; margin:0; text-transform:none; padding:9px 10px 9px 10px; mso-padding-alt:0; border-radius:5px' target="_blank">
SHOES
</a>
</td>
</tr>
</table>
</td>
<td align="center" class="kl-hlb-stack block hlb-subblk" style="" valign="middle">
<table border="0" cellpadding="0" cellspacing="0" class="lnk" style="border-collapse:separate;line-height:100%;">
<tr>
<td align="center" bgcolor="transparent" role="presentation" style="border:none;border-radius:5px;cursor:auto;font-style:Normal;mso-padding-alt:9px 10px 9px 10px;background:transparent;" valign="middle">
<a href="https://www.mywardrobehq.com/sale" style='color:#040000; font-style:Normal; font-weight:700; text-decoration:none; display:inline-block; background:transparent; font-family:"futura-pt", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size:13px; line-height:100%; letter-spacing:2px; margin:0; text-transform:none; padding:9px 10px 9px 10px; mso-padding-alt:0; border-radius:5px' target="_blank">
SALE
</a>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr>
<td align="left" style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:9px;padding-right:9px;padding-bottom:9px;padding-left:9px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-image kl-image-645642" style="font-size:0px;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;">
<tbody>
<tr>
<td class="kl-img-base-auto-width" style="width:564px;border:0;padding:0px 9px 0px 9px;" valign="top">
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr>
<td valign="top">
<img src="https://d3k81ch9hvuctc.cloudfront.net/company/RBGQ7x/images/fbf8b6a3-3aee-48f9-b4f6-d46cf403f18c.jpeg" style="display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="564"/>
</td></tr></tbody></table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-row-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div class="kl-row" style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="kl-column-outlook" style="vertical-align:top;width:600px;" ><![endif]-->
<div class="mj-column-per-100 mj-outlook-group-fix kl-column" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
<tr>
<td style="font-size:0px;word-break:break-word;">
<div class="mj-column-per-100 mj-outlook-group-fix component-wrapper kl-text-table-layout" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout:fixed;" width="100%">
<tbody>
<tr>
<td class="" style="vertical-align:top;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
<tbody>
<tr>
<td align="left" class="kl-text" style="font-size:0px;padding:0px;padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;">
<div style="font-family:'Helvetica Neue',Arial;font-size:14px;font-style:normal;font-weight:400;letter-spacing:0px;line-height:1.3;text-align:left;color:#212529;"><h3 style="text-align: center;"><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;"> </span></h3>
<h3 style="text-align: center;"><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 18px;">Thanks for sharing your items with the <span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold;"><strong>MY WARDROBE HQ</strong></span> community.</span></h3>
<p style="text-align: center;"><br/><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px;">Your <strong>${context.payload.month} </strong>commission payment has been processed and will appear in your account within 48 hours.</span><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px;"> processed and was paid . We’ve attached your </span><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px;">statement for reference.</span><br/><br/><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px;"><strong>This Month You Earned:<br/><br/>£ ${context.payload.total}</strong></span><br/><br/><span style="font-size: 16px;"><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">Please note, any changes to your payment method must be made prior to the first of the </span><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">month to take effect for that month’s commission payment.</span></span><br/><br/><span style="font-size: 16px;"><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">We’re always looking for new luxury items, to consign more items with us, please contact us </span><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">via <a href="mailto:info@mywardrobehq.com" style="color:#212529; font-style:normal; font-weight:normal; text-decoration:underline">email</a> or call +44 (0)20 7341 9000.</span></span><br/><br/><br/><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px;">Thank you,</span><br/><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 16px;">MY WARDROBE HQ Vendor Relations</span><br/><br/><br/><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 14px;"><strong>Payment dates</strong></span><br/><br/><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 14px;">Commissions are paid on the 20th of each month for items shipped in the prior month.</span><br/><br/><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 14px;"><strong>Adjustments</strong></span><br/><br/><span style="font-size: 14px;"><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">Adjustments can occur if an item is requested to be returned to the consignor before the </span><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">end of the 180-day consignment period; there is a £15 per item fee to cover our costs. All </span><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">adjustments will appear on a separate line of your commission statement. </span></span></p>
<p style="padding-bottom:0; text-align:center"><span style="font-family: futura-pt, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; font-size: 14px;">Please see our <a href="https://www.mywardrobehq.com/faq" style='color:#212529; font-style:normal; font-weight:400; text-decoration:underline; font-family:futura-pt, "Helvetica Neue", Helvetica, Arial, sans-serif'>FAQs</a> for more information.</span></p></div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="kl-row-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div class="kl-row" style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="kl-column-outlook empty-column-placeholder-outlook" style="vertical-align:top;width:600px;" ><![endif]-->
<div class="mj-column-per-100 mj-outlook-group-fix kl-column empty-column-placeholder" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;table-layout:fixed;" width="100%">
<tbody>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</div>
<!--[if mso | IE]></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
</div>
</body>
</html>`,

        attachments: [
            {
            content:context.pdf,
            filename: `MWHQ-Monthly-Report.pdf`,
            type: "application/pdf",
            disposition: "attachment"
            }
        ]
        }
context.data.response = msg
    sgMail
        .send(msg)
        .then((response) => {
            $log(response[0].statusCode)
            $log(response[0].headers)
            context.data.response = response[0].headers
        })
        .catch((error) => {
            context.data.error=error
            $log(error)
            $log('Something went wrong sending the confirmation email')
        })



} catch(err) {
    $log(err.message)
    $log('Something went wrong sending the confirmation email')
    context.data.error=err
}